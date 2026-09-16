# Brief di redesign — Impronta landing page

> **Copia redatta.** Il repository è pubblico: da questa versione sono state rimosse le
> clausole economiche del term sheet e i nomi delle persone. La versione integrale è la
> fonte di lavoro e resta fuori da git.

## 1. Obiettivo

Portare la landing da "pagina generata" a "pagina di una call pubblica gestita da professionisti". Chi la legge (ricercatori, spin-off, team tecnici early stage nel Lazio) deve capire in dieci secondi:

- che cos'è il programma;
- se può candidarsi;
- che cosa riceve;
- a che cosa si impegna;
- entro quando candidarsi.

Chi la legge per conto delle istituzioni (Lazio Innova, partner, corporate) deve trovare dati corretti e coerenti con la proposta approvata.

Tre criteri guidano ogni scelta, in quest'ordine: **correttezza** rispetto alla proposta VTL, **chiarezza** dell'informazione, **sobrietà** visiva.

## 2. Contenuti vincolanti (fonte: proposta VTL)

Dati che la pagina deve riportare correttamente:

| Tema | Dato |
|---|---|
| Promotori | Next4 (proponente e Investitore Attivo), ELIS Innovation Hub e WDA (partner operativi) |
| Finanziamento | Venture Tech Lazio, sezione FARE Venture 2 del Fondo FARE Lazio, PR FESR 2021/2027, gestore Lazio Innova |
| Capitale | €2.400.000 totali: €1.680.000 VTL (70%), €720.000 Next4 (30%) |
| Coorti | 1 all'anno, 6 startup a coorte, 12 in totale (2026 e 2027; eventuale terza coorte nel 2028 se non si raggiungono le 12) |
| Target | Startup costituite o costituende, spin-off universitari, gruppi di ricerca; TRL 3–6; pre-seed e seed iniziale |
| Aree | Ambiente, sociale (salute, inclusione, accesso ai servizi), tecnologico-industriale; aperture su idrogeno verde, biotecnologie ambientali, tecnologie idriche, sensoristica avanzata, robotica di nuova generazione |
| Investimento iniziale | €150.000 in equity per startup, all'avvio del programma |
| Follow-on | €200.000 per un massimo di 3 startup, nel biennio 2028–2029, valutato su avanzamento rispetto alla scheda di monitoraggio (almeno 70% delle milestone), trazione, team, impatto |
| Condizioni sospensive | Sede operativa nel Lazio (o apertura prima dell'erogazione); partecipazione integrale al programma |
| Selezione | 6 passaggi in 9 settimane: candidatura online, colloquio, incontro 1:1 con l'Advisory Board, proposta (delibera Comitato Investimenti interno + Comitato di Investimento VTL), accettazione, avvio ed erogazione |
| Programma | 2 mesi scouting e selezione, 4 mesi di moduli e mentorship, 1 giorno di Demo Day |
| Moduli | Impact plan personale (WDA), Design thinking (WDA), Business model (WDA), Marketing strategico (WDA), Tecniche di vendita (WDA), Impact assessment SROI (ELIS), Market discovery (ELIS), Corporate solution identification / toolkit Why Collaborate (ELIS), Mentorship 1:1 (ELIS + WDA) |
| Post programma | Sperimentazione (PoC o Joint Development Agreement) fino a 24 settimane con le imprese partner **che selezionano la startup** (ELIS); coaching 3–6 mesi in parallelo (WDA) |
| Sede | Villa Fassini, Via Giuseppe Donati 174, 00159 Roma; oltre 2.000 mq, 8 ettari di parco, meno di 3 km da Roma Tiburtina; agorà per eventi, coworking dedicato, 86 posti auto |
| Governance | Comitato di Indirizzo, Advisory Board, Comitato Investimenti interno, Team di gestione |

### 2.1 Clausole del term sheet da comunicare

> **Sezione omessa in questa copia.** Contiene le clausole economiche e di governance del
> term sheet, incluso il corrispettivo per i servizi di incubazione. Il repository è
> pubblico: il testo integrale resta nel brief non redatto, fuori dal controllo di versione,
> insieme a `brand/VTL_Documento Complessivo.pdf`.

### 2.2 Punti da non affermare finché non sono verificati

Ognuno va in `DA-VERIFICARE.md`. Nel frattempo si usa la formulazione prudente indicata:

| Tema | Formulazione prudente |
|---|---|
| Erogazione in unica soluzione o a tranche (la proposta dice entrambe le cose) | "L'investimento viene erogato secondo i termini dell'accordo di investimento" |
| Sperimentazione con le corporate | "Le startup selezionate dalle imprese partner avviano una sperimentazione fino a 24 settimane" |
| Nomi di corporate (Eni, Acea, FS…) | Solo come partner dei programmi ELIS (OPEN ITALY, ZERO, CrossConnect), mai come partner di Impronta, e solo testo, senza loghi |
| Partner dell'ecosistema | Solo Enactus Italia risulta partnership attiva. Gli altri (Sapienza, Università di Cassino, CNR, CDP Venture Capital, InnovUp, ROAD, Fondazione Rome Technopole) si citano come "collaborazioni in via di definizione", oppure non si citano |
| "L'acceleratore di impatto della Regione Lazio" | Da eliminare. Usare "cofinanziato da Venture Tech Lazio" |
| Advisory Board (nomi nel brief non redatto) | Pubblicare nomi e ruoli solo dopo conferma e consenso |
| Obblighi di comunicazione FESR (emblema UE "Cofinanziato dall'Unione europea", loghi istituzionali) | Predisporre lo spazio nel footer con segnaposto |
| Tempo pieno dei fondatori accademici e PI degli spin-off | Una FAQ ciascuno. Testo da validare |
| Scadenza candidature e form | Restano in `src/config.ts` |

Metriche dei partner utilizzabili, perché presenti nella proposta:

- **OPEN ITALY:** dal 2015, oltre 200 PoC con più di 100 corporate partner.
- **ZERO:** 34 startup accelerate, 12 PoC, oltre 800 ore di mentorship, SROI 1:4,16.
- **WDA:** oltre 60 startup accompagnate dal 2021, oltre €3M di capitali mobilitati. Non "costruite".
- **Next4:** 11 partecipazioni dirette e oltre 50 indirette; accreditata sulla piattaforma del Fondo Rilancio di CDP Venture Capital.

## 3. Architettura dell'informazione

Una landing con struttura da call pubblica, più una pagina di approfondimento sulle condizioni.

### 3.1 Home (`/` e `/en/`)

| # | Sezione | id | Contenuto |
|---|---|---|---|
| 0 | Header | — | Logo, menu funzionale, selettore lingua, pulsante "Candidati" |
| 1 | Hero | — | Titolo informativo, una frase che dice cosa, per chi e con cosa. Stato della call (aperta fino al…/in apertura). Pulsante primario "Candidati" e link secondario "Leggi le condizioni" |
| 2 | Dati chiave | `sintesi` | Fascia a 5 celle: Candidature (scadenza), Posti (6 per coorte), Investimento (€150.000 in equity), Durata (4 mesi + sperimentazione), Sede (Villa Fassini, Roma) |
| 3 | Programma | `programma` | Le tre aree di impatto con verticali; misurazione d'impatto con metodologia SROI; aree emergenti in una riga, senza accordion |
| 4 | Requisiti | `requisiti` | Chi può candidarsi e chi no (due colonne), criteri di valutazione (5, visibili) |
| 5 | Investimento | `investimento` | Due colonne: "Cosa ricevete" (capitale, programma, sede, accesso alle imprese, follow-on) e "A cosa vi impegnate" (sede nel Lazio, partecipazione integrale, impegno dei fondatori, corrispettivo per i servizi di incubazione, governance). Link a `/condizioni/` |
| 6 | Calendario | `calendario` | Selezione in 6 passaggi con settimane; programma di 4 mesi con tabella dei 9 moduli (modulo, contenuto, erogatore); post programma |
| 7 | Chi siamo | `chi-siamo` | 3 promotori con logo e ruolo; team di programma (foto, nome, ruolo); Advisory Board; metriche dei partner (§2.2) |
| 8 | Sede | `sede` | Foto reale di Villa Fassini, indirizzo, dati, come arrivare |
| 9 | FAQ | `faq` | Domande esistenti riviste più: costi per la startup, impegno a tempo pieno, PI e spin-off universitari, presenza e frequenza, cosa succede se non si viene selezionati |
| 10 | Chiusura | — | Una riga di invito, scadenza, pulsante, email |
| 11 | Footer | — | Promotori, contatti, navigazione, blocco istituzionale (emblema UE + Regione Lazio + Lazio Innova, segnaposto), dicitura legale sul cofinanziamento, nome del programma da proposta, privacy e cookie |

Menu: `Programma · Requisiti · Investimento · Calendario · Chi siamo · FAQ`.

### 3.2 Pagina `/condizioni/` (e `/en/conditions/`)

Sintesi leggibile del term sheet (§2.1), condizioni sospensive, criteri per il follow-on, processo decisionale. In fondo, link al regolamento PDF (segnaposto finché non esiste). Layout documento: indice laterale su desktop, testo a misura di lettura.

## 4. Design system

### 4.1 Principi

- L'informazione fa la gerarchia, non la decorazione.
- Un colore strutturale (verde), un colore d'azione (magenta), neutri caldi. Il gradiente del logo resta solo nel logo.
- Tabelle e liste dati quando il contenuto è tabellare; card solo quando raggruppano davvero.
- Movimento quasi assente: transizioni di hover e focus, nient'altro.

### 4.2 Colori

Da definire come token in `@theme` in `src/styles/global.css`, sostituendo quelli attuali. I contrasti sono stati verificati secondo WCAG.

| Token | Hex | Uso | Contrasto |
|---|---|---|---|
| `paper` | `#FAF8F3` | Fondo principale | — |
| `paper-alt` | `#EFEBE2` | Fondo sezioni alternate | — |
| `ink` | `#1F2622` | Testo principale, titoli | 14,6:1 su paper |
| `ink-muted` | `#55615B` | Testo secondario, didascalie | 6,1:1 su paper, 5,4:1 su paper-alt |
| `line` | `#DDD7CB` | Bordi, separatori (mai testo) | — |
| `forest` | `#176A52` | Colore strutturale: link, numeri chiave, dettagli grafici, fondo di una sola sezione | 6,1:1 su paper |
| `forest-deep` | `#0F4A39` | Fondo per sezioni scure (footer, sede) | Bianco 10,2:1 |
| `forest-soft` | `#A8CDBD` | Testo secondario su forest-deep | 5,9:1 |
| `forest-tint` | `#E7F1EC` | Fondo di evidenza tenue (fascia dati chiave, righe alternate) | — |
| `magenta` | `#DA0455` | Solo azioni primarie: fondo pulsante con testo bianco | Bianco 5,1:1 |
| `magenta-hover` | `#B8043F` | Hover e active del pulsante | Bianco 6,7:1 |
| `orange` | `#F98426` | Solo elementi grafici non testuali (es. marcatore del passo corrente in una timeline). Mai testo su fondo chiaro | — |

Regole d'uso:

- Il magenta non si usa mai come colore decorativo, per titoli o per icone.
- Al massimo una sezione a fondo `forest` o `forest-deep` nel corpo pagina, più il footer.
- Niente fondo nero o quasi nero.
- I colori del logo (verde, ambra, corallo, magenta del gradiente) non entrano nella UI.
- Eliminare i token non usati.

### 4.3 Tipografia

Dipendenze:

- `@fontsource-variable/source-serif-4` per titoli e grandi numeri editoriali;
- `@fontsource-variable/ibm-plex-sans` per testo, UI, dati.

Rimuovere `@fontsource-variable/figtree` e `@fontsource-variable/inter`.

Scala tipografica:

| Ruolo | Font | Peso | Desktop | Mobile | Interlinea | Tracking |
|---|---|---|---|---|---|---|
| H1 | Source Serif 4 | 600 | 60px | 38px | 1,08 | -0,01em |
| H2 | Source Serif 4 | 600 | 40px | 30px | 1,15 | -0,005em |
| H3 | IBM Plex Sans | 600 | 20px | 19px | 1,35 | 0 |
| Lead | IBM Plex Sans | 400 | 21px | 18px | 1,55 | 0 |
| Body | IBM Plex Sans | 400 | 18px | 17px | 1,6 | 0 |
| Small | IBM Plex Sans | 400 | 15px | 15px | 1,5 | 0 |
| Label dati | IBM Plex Sans | 500 | 14px | 14px | 1,4 | 0,01em, sentence case |
| Numero chiave | IBM Plex Sans | 500 | 32px | 26px | 1,1 | tabular-nums |

Regole:

- Pesi 800 e 900 vietati.
- Nessun testo in maiuscolo con spaziatura larga, tranne eventualmente le sigle.
- Misura di lettura massima 68ch per il body, 60ch per il lead.
- Titoli senza punto finale.
- Apostrofo tipografico (’) e virgolette basse (« ») in italiano.
- Importi con punto delle migliaia e simbolo prima: €150.000.

### 4.4 Layout e componenti

- Container massimo 1200px, padding laterale 24px mobile e 40px desktop. Griglia a 12 colonne su desktop.
- Spaziatura verticale delle sezioni 112px desktop, 72px mobile. Scala di spaziatura su multipli di 4.
- Raggio 6px per pulsanti, input e card. Nessun raggio sopra 8px.
- Nessuna ombra, salvo un'ombra neutra leggera sul menu mobile aperto.

Componenti da creare in `src/components/ui/`, riusati da tutte le sezioni:

| Componente | Specifica |
|---|---|
| `Button.astro` | Varianti `primary` (magenta, testo bianco), `secondary` (bordo ink, testo ink), `link` (forest sottolineato). Altezza 48px, padding orizzontale 20px, IBM Plex Sans 500 16px. Focus visibile a 2px forest con offset 2px |
| `Section.astro` | Wrapper con id, fondo (`paper`, `paper-alt`, `forest-deep`), spaziatura standard |
| `SectionHeader.astro` | H2 più lead opzionale di una riga. Allineato a sinistra. Nessuna eyebrow |
| `KeyFacts.astro` | Fascia dati chiave: label sopra, valore sotto. 5 colonne su desktop, 2 su tablet, 1 su mobile con separatori orizzontali |
| `DataTable.astro` | Tabella semantica (`<table>`) con intestazioni, righe separate da `line`. Su mobile ogni riga diventa blocco impilato (label + valore) |
| `Steps.astro` | Sequenza numerata con durata. Numeri in Plex Sans tabular in `forest`. Linea di connessione in `line` |
| `PersonCard.astro` | Foto 4:5, nome, ruolo nel programma, organizzazione. Senza foto: riquadro `paper-alt` con iniziali, nessun avatar generico |
| `LogoStrip.astro` | Loghi da file in `public/logos/`, monocromatici o originali, altezza uniforme. Senza file: nome in testo semplice, peso 400, nessun finto logo |
| `Figure.astro` | Immagine con didascalia. Segnaposto: riquadro `paper-alt` con testo `FOTO DA INSERIRE — <descrizione>` in `ink-muted` |
| `Callout.astro` | Riquadro con bordo sinistro `forest` 3px per note importanti (es. condizioni sospensive) |

### 4.5 Movimento

- Rimuovere il sistema `data-reveal` (attributi, CSS, script in `Base.astro`).
- Consentite solo transizioni di colore e sfondo su hover e focus, 150ms.
- `scroll-behavior: smooth` resta, disattivato con `prefers-reduced-motion`.

### 4.6 Immagini

- Nessuna illustrazione generata, nessuna foto stock generica.
- Previste solo foto reali: Villa Fassini, team, eventi ELIS/WDA pertinenti.
- Finché non arrivano, si usano i segnaposto di `Figure.astro`.
- Formati: AVIF/WebP via `astro:assets`, con `alt` descrittivo.

## 5. Anti-pattern da eliminare (vietati)

Ognuno è un segnale riconoscibile di pagina generata.

**UI:**

1. Gradiente applicato al testo (oggi `.text-gradient-word`).
2. Logo o brandmark in filigrana decorativa sullo sfondo (oggi `Brandmark` nell'hero, nella sede, nella chiusura).
3. Eyebrow in maiuscolo con trattino sopra i titoli di sezione (oggi `.eyebrow`).
4. Titoli a peso 800 con tracking molto stretto (oggi `.display-xl`, `.display-lg`).
5. Pulsanti a pillola con ombra colorata.
6. Animazioni di comparsa allo scroll.
7. Accordion che nascondono informazioni essenziali (condizioni, requisiti, moduli). Le `<details>` restano solo nelle FAQ.
8. Elenchi di etichette separati da puntini mediani ("Cleantech · Rinnovabili · …").
9. Nomi di aziende in grassetto impaginati come se fossero loghi.
10. Griglie di "numeri grandi" isolate dal contesto. I numeri stanno vicino al testo che spiegano.
11. Sezioni a fondo quasi nero.
12. Più di due fondi di sezione diversi consecutivi.
13. Icone decorative, emoji, frecce in ogni link.
14. Texture, grana, gradient mesh, glassmorphism.

**Lessico:**

15. Costruzioni antitetiche: "non X, ma Y", "X, non Y", "non solo… ma anche", "non è… è…".
16. Chiuse a effetto e aforismi: "È la differenza fra…", "E poi lo misuriamo.", "Il Demo Day non è il traguardo".
17. Finta franchezza: "dette subito", "sul serio", "lo sappiamo", "arriviamo tardi", "davvero".
18. Terne retoriche nei titoli ("Capitale, metodo e una porta aperta…").
19. Domande retoriche nei titoli.
20. Parole vuote o abusate: "benefici reali", "trasformare", "insieme", "concreto", "sfide", "valore", "promessa", "viaggio"; "ecosistema" e "percorso" usati al massimo dove sono termini tecnici.
21. Voci di menu evocative ("Cosa cambia", "Come ti sosteniamo").
22. Alternanza tu/voi.

## 6. Tono e lessico

**Registro.** Istituzionale e diretto, come la pagina di un bando scritta bene. Frasi dichiarative, soggetto e verbo vicini, massimo 25 parole per frase nel corpo.

**Persona.**

- Il programma parla in terza persona ("Impronta seleziona", "Il programma prevede") oppure alla prima plurale solo per azioni dei promotori ("vi affianchiamo").
- Ai candidati si dà sempre del voi.

**Titoli.** Dicono il contenuto della sezione in 3–8 parole. Esempi di direzione:

| Oggi | Direzione |
|---|---|
| Costruiamo impatto insieme. | Accelerazione e investimento per startup a impatto nel Lazio |
| Tre modi in cui una tecnologia smette di essere una promessa. | Tre aree di impatto |
| Startup a impatto all'inizio del percorso. Anche prima della società. | Chi può candidarsi |
| Capitale, metodo e una porta aperta nelle imprese. | Investimento e impegni |
| Il Demo Day non è il traguardo. È dove la tecnologia viene messa alla prova. | Calendario |
| Tre organizzazioni che questo lavoro lo hanno già fatto. | Chi promuove il programma |
| Quello che vorresti chiedere prima di candidarti. | Domande frequenti |

**Hero, direzione del sottotitolo.** "Impronta seleziona ogni anno sei startup e spin-off con tecnologie fra TRL 3 e 6 in ambiente, salute e industria. A ciascuna: €150.000 in equity, quattro mesi di programma a Villa Fassini e l'accesso alle imprese partner." Il testo finale va scritto in fase 2.

**Numeri prima degli aggettivi.** "Sei posti per coorte" invece di "posti limitati". "Fino a 24 settimane" invece di "un periodo di sperimentazione".

**Glossario vincolante:**

| Termine | Uso |
|---|---|
| Impronta | Nome pubblico del programma |
| IMPACT BUILDER | Solo nel footer legale, se confermato |
| coorte | Mai "batch" |
| startup, spin-off universitario, gruppo di ricerca | Categorie di candidati |
| investimento iniziale | €150.000 in equity |
| follow-on | Alla prima occorrenza: "follow-on (investimento successivo)" |
| Investitore Attivo | Next4, con maiuscole |
| Advisory Board, Comitato Investimenti | Maiuscole |
| sperimentazione | Alla prima occorrenza: "sperimentazione (proof of concept)" |
| imprese partner | Mai "corporate" nel testo in italiano, salvo nomi propri di programmi |
| TRL | Alla prima occorrenza: "livello di maturità tecnologica (TRL)" |
| misurazione d'impatto | Metodologia SROI |
| sede operativa nel Lazio | — |
| Demo Day | — |

## 7. Protocollo di QA visivo

**Script `npm run screens -- <nome>`** (creato in fase 0, `scripts/screens.mjs`, con Playwright come devDependency):

1. esegue la build se `dist/` manca o è più vecchia dei sorgenti;
2. copia `dist/` in una cartella temporanea sotto `ImprontaAccelerator/` e la serve in locale, per simulare GitHub Pages;
3. per ogni pagina (`/`, `/en/`, `/condizioni/` quando esiste) e per ogni viewport (1440×900, 768×1024, 390×844) salva:
   - uno screenshot a pagina intera;
   - uno per ciascuna sezione con `id`;
   - tutti in `docs/redesign/screens/<nome>/`;
4. apre tutte le `<details>` prima dello screenshot a pagina intera e rende non sticky l'header, per evitare sovrapposizioni;
5. stampa un report con larghezza di scroll e larghezza del viewport (overflow orizzontale = errore), immagini senza `alt`, link con `href` vuoto o che ignorano il base path, gerarchia dei titoli (un solo H1, nessun salto di livello).

**Controlli manuali a ogni fase UI:**

- guardare gli screenshot di tutte le viewport;
- confronto prima/dopo con la cartella `baseline`;
- verifica che nessun anti-pattern della sezione 5 sia presente nei file toccati;
- contrasto dei colori usati conforme alla tabella 4.2.

La cartella `docs/redesign/screens/` va aggiunta a `.gitignore`, tranne `baseline/` e `finale/`.
