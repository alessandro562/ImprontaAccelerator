# Impronta Accelerator — landing page

Sito pubblico del programma **Impronta — acceleratore di impatto**, promosso da
**Next4**, **ELIS Innovation Hub** e **WDA**, finanziato da **Venture Tech Lazio**
(FARE Venture 2 · Lazio Innova · Regione Lazio · PR FESR 2021/2027).

One-pager bilingue (italiano di default, inglese sotto `/en/`), costruita con
Astro, pubblicata su GitHub Pages. Il riferimento visivo e di copy è il concept
in `docs/concept/`: vedi *Il concept è il riferimento*.

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
npm run diff     # confronto a pixel con il concept
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
  config.ts              costanti del sito (form, deadline, contatti)
  i18n/
    it.ts                tutto il copy italiano
    en.ts                inglese, tipizzato su it.ts -> la parità delle chiavi è forzata
    utils.ts             asset(), localeUrl(), pageKeyFromUrl()
  layouts/               Base (meta, OG, hreflang, JSON-LD), Legal
  components/
    sections/            le sette sezioni della home
    Nav, Footer, Logo, LogoSprite, Pittogramma, Cta
  pages/                 index, privacy, cookie, 404, robots.txt + gli stessi sotto en/
  styles/
    concept.css          il <style> del concept, copiato 1:1
    legal.css            solo per privacy, cookie e 404
  assets/
    fonts/               i woff2 di marca, generati da scripts/fonts.py
    partner/             i loghi dei promotori (vedi il suo README)
    logo-impronta*.svg   i tre SVG del logo
public/                  favicon, icone, immagini Open Graph
docs/concept/            il concept approvato: il riferimento visivo
scripts/                 fonts.py, diff-concept.mjs, screens.mjs
```

`brand/` contiene il materiale sorgente, compresi i kit completi dei loghi dei
promotori in `brand/loghi/`. I documenti riservati (la proposta VTL
in PDF e la presentazione) **non sono versionati**: `.gitignore` esclude
`brand/*.pdf` e `brand/*.pptx`. Il repository è pubblico; quei file non devono
tornarci dentro.

---

## Il concept è il riferimento

`docs/concept/impronta-landing-v2.html` è la pagina approvata. Il sito deve
riprodurla a 1440px e 390px, e lo verifica `npm run diff`:

```bash
npm run diff
```

Lo script fotografa concept e build alle due viewport, con tutto rivelato e le
animazioni ferme.

**Il verdetto è sulla griglia**, non sui pixel: per una settantina di blocchi
confronta posizione orizzontale, larghezza e ordine. Se cambiano, la struttura
si è rotta. La percentuale di pixel diversi viene stampata come informazione,
non come giudizio: il copy del sito è più asciutto di quello del concept, per
richiesta successiva, quindi i testi più corti spostano tutto in verticale.

Due cose da sapere prima di leggerne l'esito:

- **Il concept carica i font da Google, e usa caratteri diversi dal sito.** In
  un ambiente senza quella rete ripiegherebbe sui font di sistema, e comunque
  confronterebbe Bricolage con Poppins. Per questo lo script inietta nel
  concept le `@font-face` della build e le stesse famiglie. Va in fondo al
  `<head>`: prima del `<style>` del concept perderebbe contro le sue stesse
  dichiarazioni in `:root`. Il resto del CSS del concept non viene toccato.
- **Due testi dipendono da `src/config.ts`** e restano fuori dal conteggio: lo
  stato della call nell'hero e la frase di chiusura con la data. Lo script
  dichiara quanti pixel ha escluso.

### I font

```bash
python3 scripts/fonts.py
```

I caratteri sono quelli di marca, presi dal deck ufficiale
`brand/impronta_18_editabile.pptx`, che è composto in **Poppins** (337
occorrenze) con **Inter** come secondario:

| | |
|---|---|
| Poppins 500, 600, 700 | titoli e numeri |
| Poppins 400 corsivo | le parole d'accento |
| Inter variabile | tutto il testo corrente |

Lo script li scarica da `google/fonts` e ne genera i subset `latin` +
`latin-ext`. I woff2 finiscono in `src/assets/fonts/`, non in `public/`: così
passano da Vite, che applica hash e base path. Un url assoluto scritto a mano
nel CSS si romperebbe il giorno in cui il sito passa a un dominio custom.

**Nessuna richiesta a Google Fonts dal sito pubblicato**: è anche una promessa
della cookie policy.

Il lettering del marchio non è Poppins — ha la «a» a due piani, Poppins a un
piano — ma nei file del logo è vettorializzato, quindi come webfont non serve.

Poppins è un font statico, e questo ha due conseguenze sul CSS: i
`font-variation-settings` del concept sono stati rimossi invece che lasciati
inerti, e i pesi `650` sono diventati `600`. Inoltre Poppins è più larga di
Bricolage impostata a `wdth 86`: due titoli che nel concept stanno su una riga
andavano a capo, e il loro corpo è ridotto quel tanto che basta. Le tre cose
sono raccolte in fondo a `concept.css`, sotto *Adattamenti a Poppins*.

---

## Regole di scrittura

Il registro è quello di `CLAUDE.md`: una pagina di attrazione, non una pagina
informativa. Candidatura e regolamento vivono su una piattaforma esterna.

- Si dice **batch**, non «coorte».
- Budget testo: circa 300 parole nel `<main>` della home italiana. Non si
  aggiungono sezioni, tabelle, accordion, FAQ o pagine di approfondimento senza
  richiesta esplicita.
- Tono sicuro e asciutto, mai commerciale. Niente superlativi, urgenza
  artificiale o promesse di risultato. Si dà del tu.
- Nessun dato che non sia nella proposta VTL. In particolare: la
  sperimentazione con le imprese riguarda **solo** le soluzioni scelte dai
  partner, e il programma è **cofinanziato da** Venture Tech Lazio, non «della
  Regione Lazio».

Il copy sta **solo** nei dizionari: i componenti non contengono testo. Dove il
concept mette un accento in corsivo o una parola in evidenza, la stringa è
spezzata in campi (`accent`, `strong`) invece che in HTML, così la traduzione
resta allineata. Se una chiave manca in inglese `npm run check` fallisce, e con
esso la build in CI.

---

## QA

```bash
npm run check                    # type-check e parità dei dizionari
npm run diff                     # fedeltà al concept
npm run screens -- <nome>        # screenshot a 1440, 768 e 390 + report
npm run screens -- <nome> --axe  # aggiunge l'analisi di accessibilità
```

`screens.mjs` serve la build **sotto il base path di GitHub Pages** e fotografa
ogni pagina e ogni sezione con `id`. Segnala overflow orizzontale, `alt`
mancanti, link vuoti o che ignorano il base path, gerarchia dei titoli e — con
`--axe` — le violazioni WCAG serious e critical.

Prima di scattare applica `is-in` agli elementi `[data-in]` e poi congela le
animazioni: invertire i due passaggi fotograferebbe la pagina a opacità zero.

Gli screenshot finiscono in `docs/redesign-v2/`, che non è versionata.

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

- **Zero JavaScript di framework.** Gli unici script sono la comparsa allo
  scroll, la nav che diventa solida e il selettore di lingua: poche righe.
- **Il movimento non nasconde il contenuto.** Senza JavaScript tutte le sezioni
  sono visibili, e `prefers-reduced-motion` disattiva ogni animazione.
- **Font self-hosted** (Bricolage Grotesque, Geist, Instrument Serif): nessuna
  richiesta a Google Fonts, quindi nessun trasferimento di IP a terzi e nessun
  banner cookie dovuto ai font.
- **Accessibilità**: le pagine passano axe-core su WCAG 2.1 AA senza violazioni.
- **Gli SVG del logo hanno gli id prefissati per variante** (`pos-`, `neg-`,
  `mono-`). Astro inlinea gli SVG importati: senza prefisso, due loghi nella
  stessa pagina condividerebbero gli id dei gradienti e il secondo erediterebbe
  i colori del primo.

## Fonte dei contenuti

Il copy si basa sulla proposta Venture Tech Lazio (documento non versionato, vedi
*Struttura*) e sul concept approvato. Non contiene dati inventati: dove il
documento non dice nulla — percentuale di equity, valutazione, date della call —
la pagina rimanda alle condizioni e al colloquio invece di riempire il vuoto.

I punti ancora da far validare sono elencati in `docs/redesign-v1/DA-VERIFICARE.md`,
che resta fuori dal repository.
