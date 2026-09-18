/**
 * Genera le immagini di anteprima social (Open Graph) della landing.
 *
 *   node scripts/og.mjs
 *
 * Le precedenti erano rimaste alla v1: dicevano un'altra cosa, con un'altra
 * tipografia. Questa e' l'hero, ridotta a 1200x630: stesso fondo, stesso
 * marchio che esce dal bordo, stesso titolo con «segno» in corsivo ambra.
 *
 * Si rigenerano a mano quando cambia il titolo dell'hero, perche' il testo
 * arriva da qui e non dai dizionari: un'immagine non si traduce a build time.
 * Se cambi `it.hero.h1` o `en.hero.h1`, cambia anche `CARTE` qui sotto.
 */
import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';

const INK = '#0F1412';
const PAPER = '#F5F2EB';
const AMBRA = '#F9B233';
const VERDE = '#76B830';
const CORALLO = '#E16251';
const MAGENTA = '#D22F64';

const CARTE = [
  {
    file: 'public/og-image.png',
    righe: ['Innovazione', 'che lascia', ['il ', 'segno.']],
    piede: 'Acceleratore d’impatto · Roma',
    coda: 'Un programma di Next4, ELIS Innovation Hub e WDA',
  },
  {
    file: 'public/og-image-en.png',
    righe: ['Innovation', 'that leaves', ['a ', 'mark.']],
    piede: 'Impact accelerator · Rome',
    coda: 'A programme by Next4, ELIS Innovation Hub and WDA',
  },
];

const [negSvg, poppins600, poppinsItalic, inter] = await Promise.all([
  readFile('src/assets/logo-impronta-negativo.svg', 'utf8'),
  readFile('src/assets/fonts/poppins-600.woff2').then((b) => b.toString('base64')),
  readFile('src/assets/fonts/poppins-400-italic.woff2').then((b) => b.toString('base64')),
  readFile('src/assets/fonts/inter-variable.woff2').then((b) => b.toString('base64')),
]);

/**
 * I due archi del marchio. Stessi tracciati del pittogramma del sito: e' il
 * file ufficiale, non una ricostruzione.
 */
const marchio = `<svg viewBox="0 0 260 248" aria-hidden="true">
  <defs>
    <linearGradient id="og-e" gradientUnits="userSpaceOnUse" x1="17" y1="120" x2="242" y2="120">
      <stop offset="0" stop-color="${VERDE}"/><stop offset="1" stop-color="${AMBRA}"/>
    </linearGradient>
    <linearGradient id="og-i" gradientUnits="userSpaceOnUse" x1="60" y1="150" x2="198" y2="150">
      <stop offset="0" stop-color="${AMBRA}"/><stop offset=".5" stop-color="${CORALLO}"/><stop offset=".82" stop-color="${MAGENTA}"/>
    </linearGradient>
  </defs>
  <path d="M 17 229 C 17 91 55 16 129.5 16 C 204 16 242 91 242 229" fill="none" stroke="url(#og-e)" stroke-width="20" stroke-linecap="round"/>
  <path d="M 60 221 C 60 129 87 83 129 83 C 171 83 198 129 198 221" fill="none" stroke="url(#og-i)" stroke-width="20" stroke-linecap="round"/>
  <ellipse cx="129" cy="188" rx="28.5" ry="35" fill="${MAGENTA}"/>
</svg>`;

const riga = (r) =>
  Array.isArray(r)
    ? `<span class="riga">${r[0]}<em>${r[1]}</em></span>`
    : `<span class="riga">${r}</span>`;

const pagina = (c) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Poppins;src:url(data:font/woff2;base64,${poppins600}) format("woff2");font-weight:600}
@font-face{font-family:Poppins;src:url(data:font/woff2;base64,${poppinsItalic}) format("woff2");font-weight:400;font-style:italic}
@font-face{font-family:Inter;src:url(data:font/woff2;base64,${inter}) format("woff2")}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;background:${INK};color:${PAPER};overflow:hidden;position:relative;
  font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}
/* Il marchio esce dal bordo destro come nell'hero: e' il taglio che lo rende
   riconoscibile in miniatura, non il marchio intero centrato. */
.art{position:absolute;right:-190px;bottom:-250px;width:820px;opacity:.46}
.art svg{width:100%;display:block}
.wrap{position:relative;padding:56px 64px;height:100%;display:flex;flex-direction:column}
.logo{width:300px;display:block}
h1{margin-top:auto;font-family:Poppins,sans-serif;font-weight:600;font-size:96px;line-height:.94;
  letter-spacing:-.035em;max-width:11ch}
.riga{display:block}
em{font-family:Poppins,serif;font-style:italic;font-weight:400;color:${AMBRA};font-size:1.08em;letter-spacing:-.02em}
.piede{margin-top:30px;display:flex;flex-direction:column;align-items:flex-start;gap:7px;
  font-size:21px;letter-spacing:.01em;color:rgba(245,242,235,.74)}
.coda{font-size:19px;color:rgba(245,242,235,.56)}
</style></head><body>
<div class="art">${marchio}</div>
<div class="wrap">
  <svg class="logo" viewBox="0 0 1083.22 240" xmlns="http://www.w3.org/2000/svg">${negSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)[1]}</svg>
  <h1>${c.righe.map(riga).join('')}</h1>
  <p class="piede"><span>${c.piede}</span><span class="coda">${c.coda}</span></p>
</div></body></html>`;

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const c of CARTE) {
  await page.setContent(pagina(c), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: c.file });
  console.log(c.file);
}
await browser.close();
