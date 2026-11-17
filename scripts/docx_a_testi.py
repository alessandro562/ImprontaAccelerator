#!/usr/bin/env python3
"""
Converte un .docx di testo (FAQ o regolamento) nel modulo TypeScript che il sito
legge, senza passare dalla ritrascrizione a mano.

    python3 scripts/docx_a_testi.py faq          FILE.docx > src/i18n/faq.it.ts
    python3 scripts/docx_a_testi.py regolamento  FILE.docx > src/i18n/regolamento.it.ts

Perche' uno script: il regolamento e' un testo che impegna, e un refuso nella
ricopiatura non lo vede nessuno. Cosi' il testo del sito e' quello del documento
per costruzione, e quando il documento viene rivisto basta rilanciare.
Solo libreria standard: il .docx e' uno zip di XML.

Convenzioni del documento che lo script si aspetta:
  - «Titolo 1» e il paragrafo subito sotto sono intestazione del file, non
    contenuto: si saltano.
  - FAQ: «Titolo 2» = gruppo; un paragrafo che comincia con un grassetto che
    finisce in «?» = una domanda, e tutto fino alla domanda dopo e' la risposta.
  - Regolamento: «Titolo 2» = «Art. N – Titolo».
  - Gli elenchi si leggono da numbering.xml: puntato, numerato, a lettere. I
    numeri non si memorizzano: sono quelli che il browser ricostruisce, che e'
    anche quello che fa Word.

Il testo non viene toccato in niente: nemmeno gli apostrofi. Si aggiungono solo i
collegamenti — indirizzi email, la pagina privacy, la piattaforma di candidatura
e i rinvii fra articoli — e il testo che li porta resta identico.
"""
import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

# ---------------------------------------------------------------- lettura .docx


def _vero(el):
    """Una proprieta' booleana di Word: presente e non spenta esplicitamente."""
    return el is not None and el.get(W + 'val') not in ('0', 'false')


def _testo_run(r):
    out = []
    for e in r:
        if e.tag == W + 't':
            out.append(e.text or '')
        elif e.tag == W + 'tab':
            out.append(' ')
        elif e.tag == W + 'br':
            out.append(' ')
    return ''.join(out)


def _paragrafo(p, stili):
    """(stile, (livello, tipo, numId) | None, [(testo, grassetto), ...])"""
    ppr = p.find(W + 'pPr')
    stile = ''
    num = None
    if ppr is not None:
        ps = ppr.find(W + 'pStyle')
        if ps is not None:
            stile = stili.get(ps.get(W + 'val'), ps.get(W + 'val'))
        np_ = ppr.find(W + 'numPr')
        if np_ is not None:
            il = np_.find(W + 'ilvl')
            ni = np_.find(W + 'numId')
            num = (int(il.get(W + 'val')) if il is not None else 0,
                   ni.get(W + 'val') if ni is not None else '?')
    runs = []
    for r in p.iter(W + 'r'):
        t = _testo_run(r)
        if not t:
            continue
        rpr = r.find(W + 'rPr')
        grassetto = rpr is not None and _vero(rpr.find(W + 'b'))
        if runs and runs[-1][1] == grassetto:
            runs[-1][0] += t
        else:
            runs.append([t, grassetto])
    return stile, num, [(t, b) for t, b in runs]


def leggi(percorso):
    z = zipfile.ZipFile(percorso)
    stili = {}
    for st in ET.fromstring(z.read('word/styles.xml')).iter(W + 'style'):
        n = st.find(W + 'name')
        if n is not None:
            stili[st.get(W + 'styleId')] = n.get(W + 'val')

    # numbering: numId -> {livello: formato}
    formati = {}
    if 'word/numbering.xml' in z.namelist():
        radice = ET.fromstring(z.read('word/numbering.xml'))
        astratti = {}
        for a in radice.findall(W + 'abstractNum'):
            astratti[a.get(W + 'abstractNumId')] = {
                int(l.get(W + 'ilvl')): l.find(W + 'numFmt').get(W + 'val')
                for l in a.findall(W + 'lvl')
            }
        for n in radice.findall(W + 'num'):
            formati[n.get(W + 'numId')] = astratti[n.find(W + 'abstractNumId').get(W + 'val')]

    corpo = ET.fromstring(z.read('word/document.xml')).find(W + 'body')
    righe = []
    for el in corpo:
        if el.tag != W + 'p':
            continue
        stile, num, runs = _paragrafo(el, stili)
        if not ''.join(t for t, _ in runs).strip():
            continue
        tipo = None
        livello = 0
        num_id = None
        if num:
            livello, num_id = num
            fmt = formati.get(num_id, {}).get(livello, 'bullet')
            tipo = {'decimal': 'num', 'lowerLetter': 'let'}.get(fmt, 'pun')
        righe.append({'stile': stile, 'runs': runs, 'lista': tipo, 'livello': livello, 'numId': num_id})
    return righe


# ------------------------------------------------------------------- struttura


def _parti(runs):
    """[(testo, grassetto)] -> lista di parti, con gli spazi ai bordi tolti."""
    parti = [{'t': t, 'b': True} if b and t.strip() else t for t, b in runs]
    # toglie gli spazi a inizio e fine del paragrafo, non quelli in mezzo
    if parti:
        primo = parti[0]
        if isinstance(primo, str):
            parti[0] = primo.lstrip()
        else:
            primo['t'] = primo['t'].lstrip()
        ultimo = parti[-1]
        if isinstance(ultimo, str):
            parti[-1] = ultimo.rstrip()
        else:
            ultimo['t'] = ultimo['t'].rstrip()
    return [p for p in parti if (p if isinstance(p, str) else p['t'])]


def _blocchi(righe):
    """Una sequenza di paragrafi -> blocchi {p} / {elenco}, con i sotto-elenchi annidati."""
    blocchi = []
    i = 0
    while i < len(righe):
        r = righe[i]
        if not r['lista']:
            blocchi.append({'p': _parti(r['runs'])})
            i += 1
            continue
        # un elenco: voci di livello 0 con lo stesso numId e lo stesso tipo
        elenco = {'tipo': r['lista'], 'voci': []}
        num_id = r['numId']
        while i < len(righe) and righe[i]['lista'] and righe[i]['livello'] == 0 and righe[i]['numId'] == num_id:
            voce = {'testo': _parti(righe[i]['runs'])}
            i += 1
            # i sotto-elenchi stanno subito dopo la voce: livello 1, stesso numId fra loro
            if i < len(righe) and righe[i]['lista'] and righe[i]['livello'] >= 1:
                sotto = {'tipo': righe[i]['lista'], 'voci': []}
                sotto_id = righe[i]['numId']
                while i < len(righe) and righe[i]['lista'] and righe[i]['livello'] >= 1 and righe[i]['numId'] == sotto_id:
                    sotto['voci'].append({'testo': _parti(righe[i]['runs'])})
                    i += 1
                voce['sotto'] = sotto
            elenco['voci'].append(voce)
        blocchi.append({'elenco': elenco})
    return blocchi


def _senza_intestazione(righe):
    """Toglie Titolo 1 e il paragrafo di servizio che lo segue."""
    out = []
    saltato = False
    visto_h1 = False
    for r in righe:
        if r['stile'] == 'heading 1':
            visto_h1 = True
            continue
        if visto_h1 and not saltato and r['stile'] != 'heading 2' and not r['lista']:
            saltato = True
            continue
        out.append(r)
    return out


def faq(righe):
    gruppi = []
    for r in _senza_intestazione(righe):
        if r['stile'] == 'heading 2':
            gruppi.append({'titolo': ''.join(t for t, _ in r['runs']).strip(), 'domande': []})
            continue
        corrente = gruppi[-1]['domande'][-1] if gruppi and gruppi[-1]['domande'] else None
        primo_t, primo_b = r['runs'][0]
        if not r['lista'] and primo_b and primo_t.strip().endswith('?'):
            domanda = {'q': primo_t.strip(), 'righe': []}
            resto = r['runs'][1:]
            if ''.join(t for t, _ in resto).strip():
                domanda['righe'].append({'stile': '', 'runs': resto, 'lista': None, 'livello': 0, 'numId': None})
            gruppi[-1]['domande'].append(domanda)
        else:
            corrente['righe'].append(r)
    for g in gruppi:
        for d in g['domande']:
            d['r'] = _blocchi(d.pop('righe'))
    return {'gruppi': gruppi}


def regolamento(righe):
    articoli = []
    for r in _senza_intestazione(righe):
        if r['stile'] == 'heading 2':
            testo = ''.join(t for t, _ in r['runs']).strip()
            m = re.match(r'^Art\.\s*(\d+)\s*[–-]\s*(.+)$', testo)
            if not m:
                sys.exit(f'Titolo di articolo non riconosciuto: {testo!r}')
            articoli.append({'n': int(m.group(1)), 'titolo': m.group(2).strip(), 'righe': []})
        else:
            articoli[-1]['righe'].append(r)
    for a in articoli:
        a['blocchi'] = _blocchi(a.pop('righe'))
    return {'articoli': articoli}


# ----------------------------------------------------------------- collegamenti

# Dopo «art. N», questi segnano un rinvio a una norma esterna e non a un articolo
# del regolamento: «art. 22 del Regolamento (UE)», «art. 2, punto 18», eccetera.
ESTERNO = re.compile(r'\s*(,\s*(punto|commi)|del Regolamento|del GDPR|della legge|del D\.)')

COLLEGAMENTI = [
    (re.compile(r'info@improntaaccelerator\.it'), lambda m: 'mailto:' + m.group(0)),
    (re.compile(r'improntaaccelerator\.it/privacy'), lambda m: 'page:privacy'),
    (re.compile(r'onesquare\.elis\.org/challenge/24'), lambda m: 'https://' + m.group(0)),
]


def _collega_testo(testo, con_articoli):
    """Spezza una stringa in parti, mettendo l'href dove serve. Il testo resta intatto."""
    candidati = []
    for rx, href in COLLEGAMENTI:
        for m in rx.finditer(testo):
            candidati.append((m.start(), m.end(), href(m)))
    if con_articoli:
        for m in re.finditer(r'\bart\. (\d{1,2})\b', testo):
            if not ESTERNO.match(testo[m.end():]):
                candidati.append((m.start(), m.end(), f'#art-{m.group(1)}'))
    candidati.sort()
    parti, cursore = [], 0
    for a, b, href in candidati:
        if a < cursore:
            continue
        if a > cursore:
            parti.append(testo[cursore:a])
        parti.append({'t': testo[a:b], 'href': href})
        cursore = b
    if cursore < len(testo):
        parti.append(testo[cursore:])
    return parti


def _collega(parti, con_articoli):
    out = []
    for p in parti:
        if isinstance(p, str):
            out.extend(_collega_testo(p, con_articoli))
        elif 'b' in p:
            spezzato = _collega_testo(p['t'], con_articoli)
            for s in spezzato:
                out.append({**s, 'b': True} if isinstance(s, dict) else {'t': s, 'b': True})
        else:
            out.append(p)
    return out


def _applica(nodo, con_articoli):
    if isinstance(nodo, dict):
        for chiave in ('p', 'testo'):
            if chiave in nodo:
                nodo[chiave] = _collega(nodo[chiave], con_articoli)
        for v in nodo.values():
            if isinstance(v, (dict, list)):
                _applica(v, con_articoli)
    elif isinstance(nodo, list):
        for v in nodo:
            if isinstance(v, (dict, list)):
                _applica(v, con_articoli)


def _link_faq_regolamento(doc):
    """Nella FAQ, «Il dettaglio è nel regolamento.» rimanda al regolamento."""
    for g in doc['gruppi']:
        for d in g['domande']:
            for b in d['r']:
                if 'p' not in b:
                    continue
                nuovo = []
                for p in b['p']:
                    if isinstance(p, str) and 'nel regolamento' in p:
                        prima, dopo = p.split('nel regolamento', 1)
                        nuovo += [prima + 'nel ', {'t': 'regolamento', 'href': 'page:regolamento'}, dopo]
                    else:
                        nuovo.append(p)
                b['p'] = nuovo


# ------------------------------------------------------------- emissione TypeScript


def _chiave(k):
    return k if re.match(r'^[A-Za-z_]\w*$', k) else json.dumps(k)


def _ts(v, ind=0):
    pad = '  ' * ind
    if isinstance(v, str):
        return json.dumps(v, ensure_ascii=False)
    if isinstance(v, bool):
        return 'true' if v else 'false'
    if isinstance(v, int):
        return str(v)
    if isinstance(v, dict):
        # una parte di testo sta su una riga sola
        if set(v) <= {'t', 'b', 'href'}:
            return '{ ' + ', '.join(f'{_chiave(k)}: {_ts(x)}' for k, x in v.items()) + ' }'
        dentro = ''.join(f'{pad}  {_chiave(k)}: {_ts(x, ind + 1)},\n' for k, x in v.items())
        return '{\n' + dentro + pad + '}'
    if isinstance(v, list):
        # una lista di parti (stringhe e piccole parti) sta su una riga sola
        if v and all(isinstance(x, str) or (isinstance(x, dict) and set(x) <= {'t', 'b', 'href'}) for x in v):
            if len(v) == 1 and isinstance(v[0], str):
                return _ts(v[0])
            return '[' + ', '.join(_ts(x) for x in v) + ']'
        if not v:
            return '[]'
        return '[\n' + ''.join(f'{pad}  {_ts(x, ind + 1)},\n' for x in v) + pad + ']'
    raise TypeError(type(v))


def emetti(nome, doc, origine):
    if nome == 'faq':
        tipo, simbolo, valore, import_tipi = 'GruppoFaq[]', 'faqIt', doc['gruppi'], 'GruppoFaq'
        descr = 'Le FAQ del sito, dal documento «FAQ Impronta Accelerator».'
    else:
        tipo, simbolo, valore, import_tipi = 'Articolo[]', 'articoliIt', doc['articoli'], 'Articolo'
        descr = 'Il regolamento della call, dal documento «Regolamento Impronta Accelerator».'
    return (
        '/**\n'
        f' * {descr}\n'
        ' *\n'
        f' * Generato da `scripts/docx_a_testi.py` a partire da {origine}.\n'
        ' * Non si modifica a mano: il testo e\' quello del documento, e una\n'
        ' * correzione va fatta nel documento e rilanciata, altrimenti alla\n'
        ' * prossima rigenerazione si perde.\n'
        ' */\n'
        f"import type {{ {import_tipi} }} from './tipi';\n\n"
        f'export const {simbolo}: {tipo} = {_ts(valore)};\n'
    )


def main():
    if len(sys.argv) != 3 or sys.argv[1] not in ('faq', 'regolamento'):
        sys.exit(__doc__)
    nome, percorso = sys.argv[1], sys.argv[2]
    righe = leggi(percorso)
    doc = faq(righe) if nome == 'faq' else regolamento(righe)
    _applica(doc, con_articoli=(nome == 'regolamento'))
    if nome == 'faq':
        _link_faq_regolamento(doc)
    nome_file = percorso.replace('\\', '/').split('/')[-1]
    # il prefisso casuale che l'upload aggiunge al nome non e' informazione
    nome_file = re.sub(r'^[0-9a-f]{8}-', '', nome_file)
    sys.stdout.write(emetti(nome, doc, nome_file))


if __name__ == '__main__':
    main()
