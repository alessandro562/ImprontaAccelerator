# Impronta — regole di lavoro (v2)

Questo file sostituisce la versione precedente. `docs/redesign/BRIEF.md` non è più valido per design, struttura e tono: resta come archivio in `docs/redesign-v1/`.

## Riferimento

Il riferimento visivo, di struttura e di copy approvato è il concept `docs/concept/impronta-landing-v2.html`.

- Aprilo nel browser prima di lavorare.
- Il sito Astro deve riprodurlo fedelmente a 1440px e 390px.
- Ogni scostamento va motivato nel riepilogo.

## Cos'è la landing

Una pagina di attrazione, non una pagina informativa. La candidatura e il regolamento vivono su una piattaforma esterna. La landing ha un solo compito: far capire in pochi secondi che cos'è Impronta e portare le persone giuste al pulsante "Candidati".

## Regole di contenuto

1. Budget testo: massimo circa 300 parole nel `<main>` della home in italiano. Non si aggiungono sezioni, tabelle, accordion, FAQ o pagine di approfondimento senza richiesta esplicita.
2. Tono: sicuro, asciutto, mai commerciale. Niente superlativi, punti esclamativi, urgenza artificiale ("ultimi posti", "non perdere"), promesse di risultato.
3. Si dà del tu al lettore.
4. Accuratezza (la fonte è `brand/VTL_Documento Complessivo.pdf`):
   - €150.000 in equity per startup;
   - 6 startup per coorte;
   - 4 mesi di programma a Villa Fassini;
   - la sperimentazione con le imprese riguarda solo le soluzioni scelte dai partner;
   - il programma è cofinanziato da Venture Tech Lazio e non è "della Regione Lazio";
   - nessun nome di corporate;
   - nessun dato non presente nella proposta.

## Regole di design

- Font:
  - Bricolage Grotesque (assi opsz, wdth, wght) per titoli e numeri;
  - Geist per il testo;
  - Instrument Serif corsivo solo per una o due parole d'accento per titolo.
- Colori: `ink #0F1412`, `paper #F5F2EB`, `paper-2 #EAE4D8`, colori del logo (`#76B830`, `#F9B233`, `#E16251`, `#D22F64`). Nessun altro colore.
- Il pittogramma del logo (due archi con gradiente e punto) è l'unico elemento grafico. Nessuna illustrazione, icona decorativa, foto stock o texture.
- Contrasto di scala forte: titoli molto grandi accanto a testo piccolo e misurato.
- Movimento: solo quello del concept (archi disegnati, righe del titolo che salgono, comparsa allo scroll, riempimento della barra dei passaggi, hover sulle righe dei fronti). Sempre disattivato con `prefers-reduced-motion`.

## Regole operative

- Si lavora sul branch `redesign-v2`. Mai push o merge su `main`, perché pubblica il sito.
- Prima di chiudere una fase: `npm run check`, `npm run build`, `npm run screens -- <nome>`.
- A fine fase fermati, riassumi e indica i percorsi degli screenshot.
- `it.ts` ed `en.ts` restano allineati. Nessuna stringa visibile scritta direttamente nei componenti.
- Font self-hosted: nessuna richiesta a Google Fonts dal sito pubblicato.
