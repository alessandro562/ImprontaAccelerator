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
  config.ts              costanti del sito (form, deadline, contatti)
  i18n/
    it.ts                tutto il copy italiano
    en.ts                inglese, tipizzato su it.ts → la parità delle chiavi è forzata
    utils.ts             asset(), localeUrl(), pageKeyFromUrl()
  layouts/               Base (meta, OG, hreflang, JSON-LD), Legal
  components/            Nav, Footer, Logo, Brandmark, Cta, LanguageSwitcher
    sections/            le sezioni della one-pager
  pages/                 index, privacy, cookie, 404, robots.txt + gli stessi sotto en/
  assets/                i tre SVG del logo, ripuliti dal blocco metadata C2PA
public/                  favicon, icone, immagini Open Graph
brand/                   materiale sorgente (logo originale, PPTX, proposta VTL)
```

### Regole di scrittura

La pagina ha una linea comunicativa precisa, e vale la pena non perderla modificando
un testo. **Impronta è un acceleratore di impatto, non un fondo**: il racconto parte da
cosa cambia nel mondo, non da quanto si prende.

- **Effetti, non transazioni.** Si parla di emissioni evitate, cure che diventano
  raggiungibili, lavoro qualificato. Il capitale è uno dei mezzi, non il messaggio.
- **Nessun titolo contiene una cifra o un riferimento a denaro.** Gli importi vivono in
  un posto solo, la sezione «Come ti sosteniamo», detti una volta e nel corpo del testo.
- **Seconda persona singolare**, frasi corte, verbi concreti.
- **Niente retorica.** «Cambiare il mondo» e «fare la differenza» sono vietati: ogni
  affermazione va ancorata a un effetto nominabile o a un dato della proposta VTL.
- **Niente gergo da bando nel corpo.** RIS3 e FESR stanno solo nella striscia
  istituzionale e nel footer, dove servono davvero.
- **Il tono è diretto, i fatti no.** Le corporate citate sono partner dei programmi ELIS,
  non di Impronta, e la nota sotto l'elenco lo dichiara. Dove il documento tace —
  percentuale di equity, valutazione, date — la pagina rimanda al termsheet invece di
  inventare.

Per controllare di non aver spostato il baricentro, si può rieseguire la misura usata in
sviluppo: contare le occorrenze del lessico del denaro contro quelle dell'impatto nel
testo di `dist/index.html`. Il rapporto deve restare a favore del secondo.

Il dettaglio che serve solo a una minoranza (i nove moduli, i criteri, i passaggi della
candidatura, l'ecosistema) sta dentro elementi `<details>`: resta in pagina e
indicizzabile, ma non pesa sulla lettura. Le parole visibili sono circa 900.

### Come modificare i contenuti

Il copy sta **solo** nei dizionari: i componenti non contengono testo.
Per cambiare una frase si tocca `src/i18n/it.ts` e la voce corrispondente in
`src/i18n/en.ts`. Se una chiave manca in inglese, `npm run check` fallisce — e
con esso la build in CI: non è possibile pubblicare una pagina inglese con
dentro testo italiano.

### Colori

I token in `src/styles/global.css` sono presi dal logo ufficiale:
verde `#76B830`, ambra `#F9B233`, corallo `#E16251`, magenta `#D22F64`,
inchiostro `#3C3C3B`.

Tre varianti esistono solo per il contrasto e non vanno usate altrove:
`--color-magenta-deep` e `--color-coral-deep` per il testo piccolo su tinte
chiare, `--color-brand-pink` per gli accenti su fondo scuro. `slate` è per i
fondi chiari, `slate-soft` per quelli scuri: invertirli fa fallire il contrasto AA.

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
- **Font self-hosted** (Figtree + Inter via Fontsource): nessuna richiesta a
  Google Fonts, quindi nessun trasferimento di IP a terzi e nessun banner cookie
  dovuto ai font.
- **Accessibilità**: le pagine passano axe-core su WCAG 2.1 AA senza violazioni.
- **Gli SVG del logo hanno gli id prefissati per variante** (`pos-`, `neg-`,
  `mono-`). Astro inlinea gli SVG importati: senza prefisso, due loghi nella
  stessa pagina condividerebbero gli id dei gradienti e il secondo erediterebbe
  i colori del primo.

## Fonte dei contenuti

Il copy si basa sulla proposta Venture Tech Lazio in `brand/`. Non contiene dati
inventati: dove il documento non dice nulla — percentuale di equity, valutazione,
date della call — la pagina rimanda al termsheet e al colloquio invece di
riempire il vuoto.
