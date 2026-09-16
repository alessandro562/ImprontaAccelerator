# Loghi dei promotori

I file qui dentro sostituiscono il nome scritto nella sezione «Un programma di».
Il nome del file fa da chiave: è lo `slug` di ciascuna organizzazione in
`src/i18n/it.ts`. Se un file manca, quel promotore torna a essere scritto a
parole — i tre casi sono indipendenti.

| File | Organizzazione | Origine |
|---|---|---|
| `elis.svg` | ELIS Innovation Hub | `brand/loghi/Logo2_Elis.svg`, invariato |
| `next4.png` | Next4 | `brand/loghi/Next4/…RGB-06.png`, orizzontale a colori |
| `wda.png` | WDA | `brand/loghi/WDA/…/Logo_esteso.png`, orizzontale a colori |

## Come sono stati preparati

I kit originali stanno in `brand/loghi/`. I PNG sono stati **ritagliati sul
contenuto** e portati a 240px di altezza: i margini trasparenti erano diversi da
un kit all'altro, e senza il ritaglio i tre loghi sarebbero risultati di
dimensioni ottiche diverse pur avendo la stessa altezza di riquadro.

240px è il doppio dell'altezza massima a schermo (88px), per gli schermi densi.

## Per sostituirne uno

Serve la **versione positiva orizzontale**: in pagina il fondo è chiaro
(`paper #F5F2EB`). SVG quando c'è, altrimenti PNG a sfondo trasparente. Poi si
ritaglia e si ridimensiona come sopra.
