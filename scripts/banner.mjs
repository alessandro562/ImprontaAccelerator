/**
 * Genera il banner di Impronta per la piattaforma esterna.
 *
 *   node scripts/banner.mjs
 *
 * Non c'entra con il sito: e' un PNG da usare come sfondo di una sezione della
 * piattaforma, sul modello del banner di IMPULSO.
 *
 * Impianto: il gradiente del marchio nella sua direzione naturale (verde,
 * ambra, corallo, magenta), due archi del pittogramma tagliati dai bordi come
 * trama, e la colonna di marca tutta a destra — pittogramma, logotipo con il
 * payoff, loghi dei promotori. La meta' sinistra resta libera: la piattaforma
 * ci sovrappone la card con titolo, descrizione e date.
 *
 * I loghi dei promotori vanno in bianco pieno, perche' le versioni a colori su
 * questo fondo non reggono. Per Next4 si parte dal negativo e si appiattisce
 * l'accento grigio, che sul gradiente sembrerebbe sporco; per ELIS si ricolora
 * l'SVG, che e' a tinta unica.
 */
import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const OUT = 'brand/piattaforma';
const MISURE = [
  { scala: 1, nome: 'impronta-banner-1920x1080.png' },
  { scala: 2, nome: 'impronta-banner-3840x2160.png' },
];

const LOGHI = {
  next4: 'brand/loghi/Next4/Next4_logo files_raster_RGB-07.png',
  wda: 'brand/loghi/WDA/Logo per digitale/Logo_nbianco_esteso.png',
};

/** Ritaglia il trasparente e porta tutto a bianco pieno. */
async function bianco(percorso) {
  const img = sharp(percorso).trim();
  const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i + 1] = data[i + 2] = 255;
  }
  const png = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ height: 200 })
    .png()
    .toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

const dentro = (svg) => svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)[1];

/**
 * Il riquadro reale di un gruppo del logo, misurato dal browser.
 *
 * Stimarlo a occhio non funziona: il punto della «i» del logotipo arriva a
 * y=6, molto piu' in alto di dove sembra, e un viewBox tirato a mano lo taglia.
 * Qui lo si chiede a getBBox, cosi' resta giusto anche se il file del logo
 * cambia.
 */
async function riquadri(browser, svg, ids, margine = 4) {
  const page = await browser.newPage();
  await page.setContent(`<body style="margin:0">${svg}</body>`);
  const misure = await page.evaluate(({ ids, margine }) => {
    const out = {};
    for (const id of ids) {
      const b = document.getElementById(id).getBBox();
      out[id] = `${b.x - margine} ${b.y - margine} ${b.width + margine * 2} ${b.height + margine * 2}`;
    }
    return out;
  }, { ids, margine });
  await page.close();
  return misure;
}

const [monoSvg, elisSvg, poppins500, poppins600] = await Promise.all([
  readFile('src/assets/logo-impronta-mono.svg', 'utf8'),
  readFile('brand/loghi/Logo2_Elis.svg', 'utf8'),
  readFile('src/assets/fonts/poppins-500.woff2').then((b) => b.toString('base64')),
  readFile('src/assets/fonts/poppins-600.woff2').then((b) => b.toString('base64')),
]);
const [next4, wda] = await Promise.all([bianco(LOGHI.next4), bianco(LOGHI.wda)]);

// Il marchio sta in un file solo: qui serve separato, la firma grande in alto e
// il logotipo con il payoff piu' sotto.
const pittogramma = dentro(monoSvg).match(/<g id="mono-pittogramma">[\s\S]*?<\/g>/)[0];
const testo = dentro(monoSvg).match(/<g id="mono-testo">[\s\S]*?<\/g>/)[0];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const vb = await riquadri(browser, monoSvg, ['mono-pittogramma', 'mono-testo']);

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:P;src:url("data:font/woff2;base64,${poppins500}") format("woff2");font-weight:500}
@font-face{font-family:P;src:url("data:font/woff2;base64,${poppins600}") format("woff2");font-weight:600}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1920px;height:1080px;overflow:hidden;font-family:P,sans-serif}
.tela{position:relative;width:1920px;height:1080px;overflow:hidden;background:#0F1412}
/* Un alone freddo dietro gli archi: stacca la figura dal fondo senza
   introdurre un colore che non sia del marchio. */
.tela::before{content:"";position:absolute;inset:0;
  background:radial-gradient(44% 58% at 30% 78%, rgba(249,178,51,.15) 0%, rgba(226,98,81,.07) 42%, rgba(15,20,18,0) 74%)}

/* Il marchio ingrandito e tagliato dal bordo inferiore: e' l'arco a portare il
   colore, come nell'hero del sito. Niente gradiente steso sul fondo. */
.marchio{position:absolute;left:88px;bottom:-78px;width:980px}
.marchio path{fill:none;stroke-width:20;stroke-linecap:round}
.colonna{position:absolute;right:104px;top:76px;bottom:80px;width:680px;
  display:flex;flex-direction:column;align-items:flex-start}
/* Il logotipo si centra nello spazio che gli resta sopra i promotori: in alto
   da solo lasciava il lato destro sbilanciato. */
.centro{flex:1;display:flex;align-items:center}
.firma{width:310px}
.logotipo{width:660px}
.promotori{width:100%}
.promotori__linea{width:100%;height:1px;background:rgba(255,255,255,.34);margin-bottom:30px}
.promotori__eti{font-size:19px;font-weight:500;letter-spacing:.17em;text-transform:uppercase;
  color:rgba(255,255,255,.82);margin-bottom:26px}
.promotori__riga{display:flex;align-items:center;gap:46px}
/* Altezze diverse per pareggiare il peso ottico: i tre marchi hanno
   proporzioni molto diverse fra loro. */
.promotori__riga img,.promotori__riga svg{width:auto;display:block}
.promotori__riga .n4{height:40px}
.promotori__riga svg{height:44px}
.promotori__riga .wd{height:46px}
</style></head><body>
<div class="tela">
  <svg class="marchio" viewBox="0 0 260 248" aria-hidden="true">
    <defs>
      <linearGradient id="g-est" gradientUnits="userSpaceOnUse" x1="17" y1="120" x2="242" y2="120">
        <stop offset="0" stop-color="#76B830"/><stop offset="1" stop-color="#F9B233"/>
      </linearGradient>
      <linearGradient id="g-int" gradientUnits="userSpaceOnUse" x1="60" y1="150" x2="198" y2="150">
        <stop offset="0" stop-color="#F9B233"/><stop offset=".5" stop-color="#E16251"/><stop offset=".82" stop-color="#D22F64"/>
      </linearGradient>
    </defs>
    <path d="M 17 229 C 17 91 55 16 129.5 16 C 204 16 242 91 242 229" stroke="url(#g-est)"/>
    <path d="M 60 221 C 60 129 87 83 129 83 C 171 83 198 129 198 221" stroke="url(#g-int)"/>
    <ellipse cx="129" cy="188" rx="28.5" ry="35" fill="#D22F64"/>
  </svg>
  <div class="colonna">
    <div class="centro"><svg class="logotipo" viewBox="${vb['mono-testo']}">${testo}</svg></div>
    <div class="promotori">
      <div class="promotori__linea"></div>
      <div class="promotori__eti">Un programma di</div>
      <div class="promotori__riga">
        <img class="n4" src="${next4}" alt="Next4">
        ${elisSvg.replace(/#035172/g, '#FFFFFF')}
        <img class="wd" src="${wda}" alt="WDA">
      </div>
    </div>
  </div>
</div>
</body></html>`;

await mkdir(OUT, { recursive: true });
for (const { scala, nome } of MISURE) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: scala });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/${nome}` });
  await page.close();
  console.log(`${OUT}/${nome}`);
}
await browser.close();
