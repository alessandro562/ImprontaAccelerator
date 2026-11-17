#!/usr/bin/env python3
"""
Verifica che il testo che il sito pubblica sia, parola per parola, quello del
documento da cui e' stato generato.

    python3 scripts/verifica_testi.py faq          FILE.docx dist/index.html
    python3 scripts/verifica_testi.py regolamento  FILE.docx dist/regolamento/index.html

Si lancia dopo `npm run build`. Confronta tutto il testo del documento con tutto
il testo della sezione o della pagina, dopo aver ridotto gli spazi: un refuso,
una parola persa o un paragrafo spostato non passano. Non confronta i numeri e le
lettere degli elenchi, che non sono nel testo ma li mette il browser, ne' la
cornice scritta da noi (titolo della sezione, indice, intestazione di pagina).
Esce con 1 se trova differenze, e le mostra.
"""
import difflib
import re
import sys
from html.parser import HTMLParser

sys.path.insert(0, __file__.rsplit('/', 1)[0])
import docx_a_testi as d  # noqa: E402

BLOCCHI = {'p', 'li', 'h1', 'h2', 'h3', 'h4', 'div', 'summary', 'section', 'ol', 'ul',
           'details', 'nav', 'article', 'main', 'br'}
VUOTI = {'br', 'img', 'input', 'link', 'meta', 'hr', 'source', 'wbr'}


class Estrattore(HTMLParser):
    """Il testo, in ordine, di un contenitore; con dei sottoalberi da saltare."""

    def __init__(self, contenitore, salta):
        super().__init__(convert_charrefs=True)
        self.contenitore, self.salta = contenitore, salta
        self.pila = []            # (tag, dentro_il_contenitore, saltato)
        self.parti = []
        self.dentro = 0
        self.saltati = 0

    @staticmethod
    def _classi(attrs):
        return (dict(attrs).get('class') or '').split()

    def handle_starttag(self, tag, attrs):
        if tag in VUOTI:
            if self.dentro and not self.saltati and tag in BLOCCHI:
                self.parti.append(' ')
            return
        apre = self.contenitore(tag, attrs) and not self.dentro
        salta = bool(self.dentro) and self.salta(tag, attrs)
        self.pila.append((tag, apre, salta))
        if apre:
            self.dentro += 1
        if salta:
            self.saltati += 1
        if self.dentro and not self.saltati and tag in BLOCCHI:
            self.parti.append(' ')

    def handle_endtag(self, tag):
        if tag in VUOTI or not self.pila:
            return
        # chiude fino al tag corrispondente (HTML non sempre bilancia)
        while self.pila:
            t, apre, salta = self.pila.pop()
            if salta:
                self.saltati -= 1
            if apre:
                self.dentro -= 1
            if t == tag:
                break
        if self.dentro and not self.saltati and tag in BLOCCHI:
            self.parti.append(' ')

    def handle_data(self, data):
        if self.dentro and not self.saltati and (not self.pila or self.pila[-1][0] not in ('script', 'style')):
            self.parti.append(data)


def normalizza(s):
    return re.sub(r'\s+', ' ', s).strip()


def testo_documento(nome, percorso):
    righe = d._senza_intestazione(d.leggi(percorso))
    return normalizza(' '.join(''.join(t for t, _ in r['runs']) for r in righe))


def testo_pagina(nome, html):
    if nome == 'faq':
        e = Estrattore(
            lambda tag, a: tag == 'section' and 'faq' in Estrattore._classi(a),
            lambda tag, a: 'head' in Estrattore._classi(a),       # etichetta, titolo e introduzione: nostri
        )
    else:
        e = Estrattore(
            lambda tag, a: tag == 'div' and dict(a).get('lang') == 'it',
            lambda tag, a: 'indice' in Estrattore._classi(a),     # l'indice ripete i titoli degli articoli
        )
    e.feed(html)
    return normalizza(''.join(e.parti))


def main():
    if len(sys.argv) != 4 or sys.argv[1] not in ('faq', 'regolamento'):
        sys.exit(__doc__)
    nome, docx, html = sys.argv[1:]
    a = testo_documento(nome, docx)
    b = testo_pagina(nome, open(html, encoding='utf-8').read())
    pa, pb = a.split(' '), b.split(' ')
    print(f'{nome}: documento {len(pa)} parole, pagina {len(pb)} parole')
    if a == b:
        print('IDENTICI: il testo pubblicato e\' quello del documento, parola per parola.')
        return
    print('DIFFERENZE:')
    for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, pa, pb, autojunk=False).get_opcodes():
        if op == 'equal':
            continue
        ctx = ' '.join(pa[max(0, i1 - 6):i1])
        print(f'  [{op}] dopo «…{ctx}»')
        print(f'      documento: {" ".join(pa[i1:i2]) or "—"}')
        print(f'      pagina:    {" ".join(pb[j1:j2]) or "—"}')
    sys.exit(1)


if __name__ == '__main__':
    main()
