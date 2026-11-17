/**
 * Forma dei testi lunghi — FAQ e regolamento — che non stanno in it.ts ed en.ts
 * perche' sono documenti, non etichette: si generano da un .docx con
 * `scripts/docx_a_testi.py` e si leggono da qui.
 *
 * Una parte di testo e' una stringa, o un pezzo con un'etichetta: grassetto
 * (`b`) o collegamento (`href`). Un `href` che comincia con `page:` e' una
 * pagina del sito, e si risolve nella lingua corrente; `#art-N` e' un articolo
 * del regolamento nella stessa pagina.
 */
export type Parte = string | { t: string; b?: boolean; href?: string };
export type Testo = string | Parte[];

/** `num` = 1. 2. 3.   `let` = a. b. c.   `pun` = puntato */
export type Elenco = { tipo: 'num' | 'let' | 'pun'; voci: Voce[] };
export type Voce = { testo: Testo; sotto?: Elenco };
export type Blocco = { p: Testo } | { elenco: Elenco };

export type Domanda = { q: string; r: Blocco[] };
export type GruppoFaq = { titolo: string; domande: Domanda[] };
export type Articolo = { n: number; titolo: string; blocchi: Blocco[] };

/** Cio' che deve restare uguale fra le lingue: non il testo, ma la forma. */
const STRUTTURALI = new Set(['tipo', 'href', 'b', 'n']);

const comeLista = (x: unknown) => (typeof x === 'string' ? [x] : x);

/**
 * Fallisce se due versioni dello stesso testo non hanno la stessa forma: lo
 * stesso numero di gruppi, domande, voci e parti, con gli stessi grassetti e
 * gli stessi collegamenti. Il testo cambia, la struttura no.
 *
 * Il tipo `Dict` obbliga en.ts ad avere le stesse chiavi di it.ts, ma una
 * lista di lunghezza diversa per il tipo e' la stessa lista: una domanda
 * dimenticata nella traduzione passerebbe `astro check` e sparirebbe dalla
 * pagina inglese senza che niente lo dica. Questo controllo gira alla build.
 */
export function verificaParita(a: unknown, b: unknown, percorso = ''): void {
  const guasto = (perche: string): never => {
    throw new Error(`Le due lingue non hanno la stessa forma in «${percorso || 'radice'}»: ${perche}.`);
  };
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return guasto('una e\' una lista e l\'altra no');
    if (a.length !== b.length) return guasto(`${a.length} elementi contro ${b.length}`);
    a.forEach((x, i) => verificaParita(x, b[i], `${percorso}[${i}]`));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return guasto('un oggetto e un valore semplice');
    const ka = Object.keys(a).sort();
    const kb = Object.keys(b).sort();
    if (ka.join() !== kb.join()) return guasto(`chiavi diverse (${ka.join(', ')} contro ${kb.join(', ')})`);
    for (const k of ka) {
      const x = (a as Record<string, unknown>)[k];
      const y = (b as Record<string, unknown>)[k];
      if (STRUTTURALI.has(k)) {
        if (x !== y) guasto(`«${k}» vale ${String(x)} contro ${String(y)}`);
      } else if (k === 'p' || k === 'testo') {
        verificaParita(comeLista(x), comeLista(y), `${percorso}.${k}`);
      } else {
        verificaParita(x, y, `${percorso}.${k}`);
      }
    }
    return;
  }
  if (typeof a !== typeof b) guasto('tipi diversi');
}
