# Impronta Accelerator — landing page

Sito pubblico del programma **Impronta — acceleratore di impatto**, promosso da
**Next4**, **ELIS Innovation Hub** e **WDA**, finanziato da **Venture Tech Lazio**
(FARE Venture 2 · Lazio Innova · Regione Lazio · PR FESR 2021/2027).

One-pager bilingue (italiano di default, inglese sotto `/en/`), costruita con
Astro e Tailwind CSS, pubblicata su GitHub Pages.

---

## Da configurare prima di andare online

Tutto quello che cambia senza toccare i componenti sta in **`src/config.ts`**:

| Costante | Cosa fa se non è impostata |
|---|---|
| `APPLICATION_FORM_URL` | **Da impostare.** Finché è vuota, tutte le CTA ricadono su un `mailto:` verso `CONTACT_EMAIL`. Quando la valorizzi, i pulsanti puntano al form con `?lang=` e i parametri UTM (`utm_content` dice quale CTA ha convertito). |
| `APPLICATION_DEADLINE` | I riferimenti alla scadenza spariscono da hero e CTA finale. Formato ISO, es. `2026-03-31`. |
| `CONTACT_EMAIL` | Attualmente `info@improntaaccelerator.it`: verificare che esista. |
| `SOCIAL` | Le voci vuote non vengono renderizzate nel footer. |
| `INDEXABLE` | **Oggi `false`.** Il sito è raggiungibile da chiunque abbia il link, ma chiede ai motori di ricerca di non indicizzarlo e `robots.txt` risponde `Disallow: /`. Mettila a `true` quando il form è collegato e i testi legali sono definitivi. |

Da rivedere prima della pubblicazione:

- **Privacy e cookie policy** (`src/i18n/it.ts` → `privacy`, `cookie`): sono una
  base di partenza, non un testo validato legalmente. Ogni pagina lo dichiara in
  un riquadro che va rimosso quando il testo è definitivo.
- **Loghi istituzionali** di Lazio Innova / Regione Lazio e dei partner
  dell'ecosistema: al momento nel footer compaiono solo come testo, perché i file
  non sono in repo.

---

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321/ImprontaAccelerator/
npm run build
npm run check    # type-check: fallisce se i dizionari IT ed EN divergono
```

> Il dev server serve sotto il base path `/ImprontaAccelerator/`, non sulla root:
> aprire `localhost:4321/` restituisce 404, è normale.

### Verificare come si comporterà su GitHub Pages

Servire `dist/` sulla root simula un dominio custom e nasconde gli errori di
base path. Per riprodurre davvero GitHub Pages:

```bash
npm run build
mkdir -p /tmp/gh/ImprontaAccelerator && cp -r dist/* /tmp/gh/ImprontaAccelerator/
npx serve /tmp/gh     # → http://localhost:3000/ImprontaAccelerator/
```

Un controllo rapido su link e asset che ignorano il base path (lo stesso che gira
in CI, deve stampare niente):

```bash
grep -roE '(href|src)="/[^"]*' dist --include='*.html' | grep -v '"/ImprontaAccelerator/'
```

---

## Struttura

```
src/
  config.ts              costanti del sito (form, deadline, contatti, SHOW_PEOPLE_NAMES)
  i18n/
    it.ts                tutto il copy italiano
    en.ts                inglese, tipizzato su it.ts -> la parità delle chiavi è forzata
    utils.ts             asset(), localeUrl(), pageKeyFromUrl(), SECTIONS
  layouts/               Base (meta, OG, hreflang, JSON-LD), Legal
  components/
    ui/                  i dodici primitivi del design system
    sections/            le sezioni della home
    Nav, Footer, Logo, Cta, LanguageSwitcher
  pages/                 index, condizioni, privacy, cookie, 404, stile, robots.txt
                         + gli stessi sotto en/
  assets/                i tre SVG del logo, ripuliti dal blocco metadata C2PA
public/                  favicon, icone, immagini Open Graph
docs/redesign/BRIEF.md   il brief di riferimento, in versione redatta
scripts/                 screens.mjs (QA visivo), lint-copy.mjs (anti-pattern lessicali)
```

`brand/` contiene il materiale sorgente. I documenti riservati (la proposta VTL
in PDF e la presentazione) **non sono versionati**: `.gitignore` esclude
`brand/*.pdf` e `brand/*.pptx`. Il repository è pubblico; quei file non devono
tornarci dentro.

---

## Design system

Il riferimento normativo è `docs/redesign/BRIEF.md`. La pagina **`/stile/`**
mostra tutti i token e tutti i componenti in un posto solo: è il modo più rapido
per vedere l'effetto di una modifica a `src/styles/global.css`.

### Colori

I token stanno in `@theme` dentro `src/styles/global.css`.

| Token | Valore | Uso |
|---|---|---|
| `paper` | `#faf8f3` | fondo principale |
| `paper-alt` | `#efebe2` | fondo delle sezioni alternate |
| `ink` | `#1f2622` | testo |
| `ink-muted` | `#55615b` | testo secondario (6,09:1 su `paper`) |
| `line` | `#ddd7cb` | filetti e bordi decorativi |
| `forest` | `#176a52` | link, numeri, accenti (6,14:1 su `paper`) |
| `forest-deep` | `#0f4a39` | fondo delle sezioni scure |
| `forest-soft` | `#a8cdbd` | testo secondario su fondo scuro (5,89:1) |
| `forest-tint` | `#e7f1ec` | fondo dei Callout e della fascia dati |
| `magenta` | `#da0455` | pulsante primario (bianco sopra: 5,09:1) |
| `magenta-hover` | `#b8043f` | stato hover del pulsante primario |

Il gradiente del logo resta dentro il logo: non entra nella UI. Tutte le coppie
testo/fondo in uso superano il 4,5:1 di WCAG AA.

### Tipografia

Source Serif 4 per i titoli, IBM Plex Sans per il testo, entrambi self-hosted
come font variabili. Le classi `.t-h1`, `.t-h2`, `.t-h3`, `.t-lead`, `.t-body`,
`.t-small`, `.t-label`, `.t-figure` sono l'unico modo previsto per impostare
dimensione e peso: nei componenti non si scrivono `text-*` di Tailwind sui testi.

### Componenti

`Container`, `Section`, `SectionHeader`, `Button`, `KeyFacts`, `DataTable`,
`Steps`, `PersonCard`, `LogoStrip`, `Figure`, `Callout`, `FaqItem`.

`FaqItem` è **l'unico accordion ammesso**: il resto del contenuto sta in pagina.
`Figure` senza `src` disegna un segnaposto dichiarato («FOTO DA INSERIRE — …»)
invece di un'immagine finta.

---

## Regole di scrittura

Il registro è quello di una **call pubblica**, non di una campagna: la pagina
deve risultare corretta a Lazio Innova e alle imprese partner tanto quanto
comprensibile a un gruppo di ricerca.

Nell'ordine: **correttezza** rispetto alla proposta VTL, **chiarezza**,
**sobrietà**.

- **Nessun dato inventato.** Numeri, nomi, partner, date e loghi vengono dalla
  proposta. Dove il documento tace, la pagina lo dice o rimanda alle condizioni.
- **Precisione sulle cose che vincolano.** La sperimentazione riguarda le startup
  *selezionate dalle imprese partner*, non tutte. Il follow-on riguarda *al
  massimo tre* startup. Il corrispettivo per i servizi di incubazione è
  dichiarato, non nascosto.
- **Mai «l'acceleratore della Regione Lazio»**: la formula corretta è
  «cofinanziato da Venture Tech Lazio».
- **Seconda persona plurale** (vi rivolgete a un team), frasi brevi, verbi
  concreti.
- **Niente retorica**: la costruzione «non … ma», l'inciso «, non », «davvero»,
  le terne nei titoli, le domande come titolo di sezione, e le parole della lista
  dell'anti-pattern 20 del brief.

`npm run lint:copy` controlla questi ultimi punti sui dizionari e sull'HTML
costruito. Le poche eccezioni ammesse — precisazioni di merito, non figure
retoriche — sono elencate e motivate dentro `scripts/lint-copy.mjs`.

### Come modificare i contenuti

Il copy sta **solo** nei dizionari: i componenti non contengono testo.
Per cambiare una frase si tocca `src/i18n/it.ts` e la voce corrispondente in
`src/i18n/en.ts`. Se una chiave manca in inglese, `npm run check` fallisce — e
con esso la build in CI: non è possibile pubblicare una pagina inglese con
dentro testo italiano.

---

## QA

```bash
npm run check                  # type-check e parità dei dizionari
npm run lint:copy              # anti-pattern lessicali
npm run screens -- <nome>      # screenshot a 1440, 768 e 390 + report strutturale
npm run screens -- <nome> --axe  # aggiunge l'analisi di accessibilità
```

`screens.mjs` costruisce il sito, lo serve **sotto il base path di GitHub Pages**
e fotografa ogni pagina e ogni sezione con `id` alle tre viewport. Segnala
overflow orizzontale, `alt` mancanti, link vuoti o che ignorano il base path,
gerarchia dei titoli e — con `--axe` — le violazioni WCAG serious e critical.
Gli screenshot finiscono in `docs/redesign/screens/<nome>/`, che non è versionata.

---

## Deploy

Il workflow `.github/workflows/deploy.yml` builda e pubblica a ogni push su
`main`, e può essere lanciato a mano da *Actions → Deploy su GitHub Pages*.

**Passaggio da fare una volta a mano:** *Settings → Pages → Build and deployment
→ Source: **GitHub Actions*** (non "Deploy from a branch").

Finché non è fatto, il workflow costruisce comunque il sito usando i valori di
default e fallisce solo l'ultimo step (`deploy-pages`), con un errore che dice
di attivare Pages. Dopo l'attivazione basta rilanciare il run da *Actions*.

### Dominio custom

`site` e `base` arrivano da `actions/configure-pages`, che li legge dalle
impostazioni Pages del repo. Impostando un dominio custom in *Settings → Pages*,
`base_path` diventa vuoto e la build si adatta da sola: **non serve modificare
il codice**. Aggiungere `public/CNAME` con il dominio, così finisce nell'artifact
a ogni build.

Finché il sito vive su `alessandro562.github.io/ImprontaAccelerator/`, il
`robots.txt` generato non viene letto dai crawler (leggono solo quello alla root
del dominio): la sitemap va sottomessa a mano in Search Console come
`https://alessandro562.github.io/ImprontaAccelerator/sitemap-index.xml`.

---

## Scelte tecniche

- **Zero JavaScript di framework.** Gli unici script sono il menu mobile e il
  selettore di lingua, poche righe inline. Le FAQ usano `<details>` nativi.
- **Nessuna animazione allo scroll.** Il contenuto è in pagina al primo paint.
- **Font self-hosted** (Source Serif 4 + IBM Plex Sans via Fontsource): nessuna
  richiesta a Google Fonts, quindi nessun trasferimento di IP a terzi e nessun
  banner cookie dovuto ai font.
- **Accessibilità**: le pagine passano axe-core su WCAG 2.1 AA senza violazioni.
- **Gli SVG del logo hanno gli id prefissati per variante** (`pos-`, `neg-`,
  `mono-`). Astro inlinea gli SVG importati: senza prefisso, due loghi nella
  stessa pagina condividerebbero gli id dei gradienti e il secondo erediterebbe
  i colori del primo.

## Fonte dei contenuti

Il copy si basa sulla proposta Venture Tech Lazio (documento non versionato, vedi
*Struttura*) e su `docs/redesign/BRIEF.md`. Non contiene dati inventati: dove il
documento non dice nulla — percentuale di equity, valutazione, date della call —
la pagina rimanda alle condizioni e al colloquio invece di riempire il vuoto.

I punti ancora da far validare sono elencati in `docs/redesign/DA-VERIFICARE.md`,
che resta fuori dal repository.
