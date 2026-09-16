# Impronta — regole di lavoro (v2)

Questo file sostituisce la versione precedente. `docs/redesign/BRIEF.md` non è più valido per design, struttura e tono: resta come archivio in `docs/redesign-v1/`.

## Riferimento

Il riferimento visivo, di struttura e di copy approvato è il concept `docs/concept/impronta-landing-v2.html`.

- Aprilo nel browser prima di lavorare.
- Il sito Astro deve riprodurne **struttura e layout** a 1440px e 390px: lo
  verifica `npm run diff`, che confronta la griglia blocco per blocco.
- Due cose sono state riviste dopo l'approvazione del concept e sul sito
  valgono nella versione nuova: i **font**, che sono quelli di marca, e il
  **copy**, piu' asciutto. Il concept resta il riferimento per tutto il resto.
- Ogni altro scostamento va motivato nel riepilogo.

## Cos'è la landing

Una pagina di attrazione, non una pagina informativa. La candidatura e il regolamento vivono su una piattaforma esterna. La landing ha un solo compito: far capire in pochi secondi che cos'è Impronta e portare le persone giuste al pulsante "Candidati".

## Regole di contenuto

1. Budget testo: massimo circa 300 parole nel `<main>` della home in italiano. Non si aggiungono sezioni, tabelle, accordion, FAQ o pagine di approfondimento senza richiesta esplicita.
2. Tono: sicuro, asciutto, mai commerciale. Niente superlativi, punti esclamativi, urgenza artificiale ("ultimi posti", "non perdere"), promesse di risultato.
3. Si dà del tu al lettore.
4. Si dice **batch**, non «coorte».
5. **Nessun riferimento a Venture Tech Lazio**, per ora: richiesta esplicita del
   14 settembre. Vale anche per il footer. Da ripristinare prima di togliere il
   `noindex` se l'obbligo di visibilità FESR è attivo.
6. Non legare la durata alla sede: «4 mesi a Villa Fassini» si legge come
   quattro mesi di trasferta e spaventa. La durata sta con il programma, la
   sede ha la sua sezione.
7. Accuratezza (la fonte è `brand/VTL_Documento Complessivo.pdf`):
   - €150.000 in equity per startup;
   - 6 startup per batch;
   - 4 mesi di programma;
   - TRL 3–9 (deciso dal team: la proposta diceva 3–6);
   - quattro ambiti: ambiente, salute, industria, sociale (il quarto è stato
     aggiunto dopo la proposta, i suoi verticali sono da validare);
   - la sperimentazione con le imprese riguarda solo le soluzioni scelte dai partner;
   - nessun nome di corporate;
   - nessun altro dato non presente nella proposta.

## Regole di design

- Font, quelli di marca, presi dal deck ufficiale `brand/impronta_18_editabile.pptx`
  e self-hosted da `scripts/fonts.py`:
  - **Poppins** (500, 600, 700) per titoli e numeri;
  - **Inter** per il testo;
  - **Poppins corsivo** solo nell'hero e nella chiusura, sulla parola «segno»:
    è la firma. Nei titoli intermedi il corsivo è stato tolto dopo il feedback
    del 14 settembre.
  Niente font «di tendenza» scelti fuori dalla marca.
  Nota: il lettering del marchio non è Poppins — ha la «a» a due piani — ma è
  vettorializzato nei file del logo e non serve come webfont. Se salta fuori il
  manuale con il nome di quel carattere, sostituirlo è una riga in `fonts.py`.
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
