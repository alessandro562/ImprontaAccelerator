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

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:P;src:url("data:font/woff2;base64,${poppins500}") format("woff2");font-weight:500}
@font-face{font-family:P;src:url("data:font/woff2;base64,${poppins600}") format("woff2");font-weight:600}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1920px;height:1080px;overflow:hidden;font-family:P,sans-serif}
.tela{position:relative;width:1920px;height:1080px;overflow:hidden;
  background:
    radial-gradient(64% 86% at 30% 26%, rgba(249,178,51,.95) 0%, rgba(249,178,51,0) 64%),
    linear-gradient(103deg,#7FBB36 0%,#C9C13C 14%,#F9B233 32%,#F0894A 52%,#E16251 70%,#D8456A 86%,#D22F64 100%);}
/* Gli archi vanno tagliati dai bordi: e' il taglio che li fa leggere come
   trama del marchio invece che come disegno appoggiato sopra. */
.arco{position:absolute;fill:none;stroke:#fff;stroke-linecap:round}
.arco--sx{left:-1180px;top:-380px;width:2000px;opacity:.15}
.arco--giu{left:96px;bottom:-690px;width:1320px;opacity:.14}
.colonna{position:absolute;right:104px;top:76px;bottom:80px;width:660px;
  display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}
.firma{width:310px}
.logotipo{width:620px}
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
  <svg class="arco arco--sx" viewBox="0 0 260 248"><path class="arco" d="M 17 229 C 17 91 55 16 129.5 16 C 204 16 242 91 242 229" stroke-width="20"/></svg>
  <svg class="arco arco--giu" viewBox="0 0 260 248"><path class="arco" d="M 60 221 C 60 129 87 83 129 83 C 171 83 198 129 198 221" stroke-width="20"/></svg>
  <div class="colonna">
    <svg class="firma" viewBox="0 0 260 248">${pittogramma}</svg>
    <svg class="logotipo" viewBox="287 40 796 200">${testo}</svg>
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
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const { scala, nome } of MISURE) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: scala });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/${nome}` });
  await page.close();
  console.log(`${OUT}/${nome}`);
}
await browser.close();
