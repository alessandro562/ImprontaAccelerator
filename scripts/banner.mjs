/**
 * Genera i banner di Impronta per la piattaforma esterna.
 *
 *   node scripts/banner.mjs            tutte le varianti
 *   node scripts/banner.mjs carta      una sola
 *
 * Non c'entra con il sito: sono PNG da usare come sfondo di una sezione della
 * piattaforma. Ogni variante e' una direzione diversa, non un cambio di colore
 * della stessa: si scelgono guardandole, non descrivendole.
 *
 * Regole comuni a tutte:
 * - la meta' sinistra resta libera, perche' la piattaforma ci sovrappone la
 *   card con titolo, descrizione e date;
 * - il colore lo porta il marchio, non un gradiente steso sul fondo;
 * - i tre loghi dei promotori stanno in basso a destra, nella tinta che regge
 *   sul fondo di quella variante.
 */
import { chromium } from 'playwright';
import { readFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const OUT = 'brand/piattaforma';
const INK = '#0F1412';
const PAPER = '#F5F2EB';
const VERDE = '#76B830';
const AMBRA = '#F9B233';
const CORALLO = '#E16251';
const MAGENTA = '#D22F64';

/** Sorgenti dei loghi dei promotori, per tinta. */
const SORGENTI = {
  bianco: {
    next4: 'brand/loghi/Next4/Next4_logo files_raster_RGB-07.png',
    wda: 'brand/loghi/WDA/Logo per digitale/Logo_nbianco_esteso.png',
  },
  inchiostro: {
    next4: 'brand/loghi/Next4/Next4_logo files_raster_RGB-08.png',
    wda: 'brand/loghi/WDA/Logo per digitale/Logo_nero_esteso.png',
  },
};

/**
 * Ritaglia il trasparente e ridipinge la sagoma di un colore solo.
 *
 * I negativi dei kit non sono monocromatici — quello di Next4 ha l'accento
 * grigio — e su un fondo colorato la differenza si vede e sembra sporco.
 */
async function tinta(percorso, [r, g, b]) {
  const { data, info } = await sharp(percorso).trim().ensureAlpha().raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    data[i] = r; data[i + 1] = g; data[i + 2] = b;
  }
  const png = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ height: 220 }).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const dentro = (svg) => svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)[1];

const [monoSvg, elisSvg, posSvg, poppins500] = await Promise.all([
  readFile('src/assets/logo-impronta-mono.svg', 'utf8'),
  readFile('brand/loghi/Logo2_Elis.svg', 'utf8'),
  readFile('src/assets/logo-impronta.svg', 'utf8'),
  readFile('src/assets/fonts/poppins-500.woff2').then((b) => b.toString('base64')),
]);

const testoMono = dentro(monoSvg).match(/<g id="mono-testo">[\s\S]*?<\/g>/)[0];
const testoPos = dentro(posSvg).match(/<g id="pos-testo">[\s\S]*?<\/g>/)[0];
/** Il logotipo in una tinta sola: si parte dal mono e si sostituisce il bianco. */
const logotipo = (colore) => (colore === 'originale' ? testoPos : testoMono.replace(/#FFFFFF/g, colore));
const elis = (colore) => elisSvg.replace(/#035172/g, colore);

/** I due archi del marchio, con le tinte passate. */
function marchio({ esterno, interno, punto, larghezza = 20, opacita = 1 }) {
  const grad = (id, stops, x1, x2, y) => `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}">${stops}</linearGradient>`;
  return `<svg class="marchio" viewBox="0 0 260 248" style="opacity:${opacita}" aria-hidden="true"><defs>
    ${grad('ge', `<stop offset="0" stop-color="${VERDE}"/><stop offset="1" stop-color="${AMBRA}"/>`, 17, 242, 120)}
    ${grad('gi', `<stop offset="0" stop-color="${AMBRA}"/><stop offset=".5" stop-color="${CORALLO}"/><stop offset=".82" stop-color="${MAGENTA}"/>`, 60, 198, 150)}
  </defs>
    <path d="M 17 229 C 17 91 55 16 129.5 16 C 204 16 242 91 242 229" fill="none" stroke="${esterno}" stroke-width="${larghezza}" stroke-linecap="round"/>
    <path d="M 60 221 C 60 129 87 83 129 83 C 171 83 198 129 198 221" fill="none" stroke="${interno}" stroke-width="${larghezza}" stroke-linecap="round"/>
    <ellipse cx="129" cy="188" rx="28.5" ry="35" fill="${punto}"/>
  </svg>`;
}

/**
 * Piu' archi annidati: l'impronta digitale, che e' il nome del programma.
 *
 * Gli archi si ottengono scalando lo stesso tracciato attorno al suo centro di
 * base. Spostare i punti di controllo uno per uno, che era il primo tentativo,
 * deforma le curve interne e la figura smette di somigliare al marchio.
 */
function impronta(colori, larghezza = 11) {
  const ARCO = 'M 17 229 C 17 91 55 16 129.5 16 C 204 16 242 91 242 229';
  const archi = colori.map((c, i) => {
    const k = 1 - i * (0.72 / (colori.length - 1));
    return `<path d="${ARCO}" transform="translate(129.5 229) scale(${k.toFixed(4)}) translate(-129.5 -229)" fill="none" stroke="${c}" stroke-width="${(larghezza / k).toFixed(2)}" stroke-linecap="round"/>`;
  }).join('');
  return `<svg class="marchio" viewBox="0 0 260 248" aria-hidden="true">${archi}</svg>`;
}

const VARIANTI = [
  {
    nome: 'carta',
    titolo: 'Carta — il fondo del sito, il colore nel marchio',
    fondo: `background:${PAPER}`,
    marchio: marchio({ esterno: 'url(#ge)', interno: 'url(#gi)', punto: MAGENTA }),
    posMarchio: 'left:88px;bottom:-78px;width:980px',
    logo: logotipo('originale'),
    tintaTesto: INK,
    promotori: 'colore',
    linea: 'rgba(15,20,18,.22)',
  },
  {
    nome: 'magenta',
    titolo: 'Magenta — campo pieno, marchio in filigrana',
    fondo: `background:${MAGENTA}`,
    marchio: marchio({ esterno: '#fff', interno: '#fff', punto: '#fff', opacita: 0.18 }),
    posMarchio: 'left:40px;bottom:-140px;width:1080px',
    logo: logotipo('#FFFFFF'),
    tintaTesto: '#FFFFFF',
    promotori: 'bianco',
    linea: 'rgba(255,255,255,.34)',
  },
  {
    nome: 'ambra',
    titolo: 'Ambra — campo caldo, testo inchiostro',
    fondo: `background:${AMBRA}`,
    marchio: marchio({ esterno: INK, interno: INK, punto: INK, opacita: 0.13 }),
    posMarchio: 'left:40px;bottom:-140px;width:1080px',
    logo: logotipo(INK),
    tintaTesto: INK,
    promotori: 'inchiostro',
    linea: 'rgba(15,20,18,.26)',
  },
  {
    nome: 'gradiente',
    titolo: 'Gradiente di marca con gli archi a filo bianco',
    fondo: `background:linear-gradient(118deg, ${VERDE} 0%, ${AMBRA} 38%, ${CORALLO} 70%, ${MAGENTA} 100%)`,
    marchio: marchio({ esterno: '#fff', interno: '#fff', punto: 'none', larghezza: 5, opacita: 0.9 }),
    posMarchio: 'left:-120px;bottom:-200px;width:1340px',
    logo: logotipo('#FFFFFF'),
    tintaTesto: '#FFFFFF',
    promotori: 'bianco',
    linea: 'rgba(255,255,255,.4)',
  },
  {
    nome: 'impronta',
    titolo: 'Impronta — archi annidati come un polpastrello',
    fondo: `background:${PAPER}`,
    marchio: impronta([VERDE, '#A9BE33', AMBRA, '#EE9A3F', CORALLO, '#DA4A5B', MAGENTA]),
    posMarchio: 'left:60px;bottom:-120px;width:1080px',
    logo: logotipo('originale'),
    tintaTesto: INK,
    promotori: 'colore',
    linea: 'rgba(15,20,18,.22)',
  },
  {
    nome: 'due-campi',
    titolo: 'Due campi — carta a sinistra, colore a destra',
    fondo: `background:linear-gradient(90deg, ${PAPER} 0%, ${PAPER} 58%, ${MAGENTA} 58%, ${MAGENTA} 100%)`,
    marchio: marchio({ esterno: 'url(#ge)', interno: 'url(#gi)', punto: MAGENTA }),
    posMarchio: 'left:60px;bottom:-150px;width:900px',
    logo: logotipo('#FFFFFF'),
    tintaTesto: '#FFFFFF',
    promotori: 'bianco',
    linea: 'rgba(255,255,255,.34)',
  },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });

/**
 * Il riquadro reale dei gruppi del logo, misurato dal browser: stimarlo a
 * occhio taglia il punto della «i», che arriva molto piu' in alto di dove
 * sembra.
 */
async function riquadro(svg, id, margine = 4) {
  const page = await browser.newPage();
  await page.setContent(`<body style="margin:0">${svg}</body>`);
  const b = await page.evaluate((id) => {
    const r = document.getElementById(id).getBBox();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  }, id);
  await page.close();
  return `${b.x - margine} ${b.y - margine} ${b.w + margine * 2} ${b.h + margine * 2}`;
}

const vbMono = await riquadro(monoSvg, 'mono-testo');
const vbPos = await riquadro(posSvg, 'pos-testo');

const loghi = {
  colore: {
    next4: `data:image/png;base64,${(await readFile('src/assets/partner/next4.png')).toString('base64')}`,
    wda: `data:image/png;base64,${(await readFile('src/assets/partner/wda.png')).toString('base64')}`,
    elis: elis('#035172'),
  },
  bianco: {
    next4: await tinta(SORGENTI.bianco.next4, [255, 255, 255]),
    wda: await tinta(SORGENTI.bianco.wda, [255, 255, 255]),
    elis: elis('#FFFFFF'),
  },
  inchiostro: {
    next4: await tinta(SORGENTI.inchiostro.next4, rgb(INK)),
    wda: await tinta(SORGENTI.inchiostro.wda, rgb(INK)),
    elis: elis(INK),
  },
};

function pagina(v) {
  const p = loghi[v.promotori];
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:P;src:url("data:font/woff2;base64,${poppins500}") format("woff2");font-weight:500}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1920px;height:1080px;overflow:hidden;font-family:P,sans-serif}
.tela{position:relative;width:1920px;height:1080px;overflow:hidden;${v.fondo}}
.marchio{position:absolute;${v.posMarchio}}
.colonna{position:absolute;right:104px;top:76px;bottom:80px;width:680px;
  display:flex;flex-direction:column;align-items:flex-start}
.centro{flex:1;display:flex;align-items:center}
.logotipo{width:660px}
.promotori{width:100%}
.promotori__linea{width:100%;height:1px;background:${v.linea};margin-bottom:30px}
.promotori__eti{font-size:19px;font-weight:500;letter-spacing:.17em;text-transform:uppercase;
  color:${v.tintaTesto};opacity:.8;margin-bottom:26px}
.promotori__riga{display:flex;align-items:center;gap:46px}
.promotori__riga img,.promotori__riga svg{width:auto;display:block}
/* Altezze diverse per pareggiare il peso ottico: i tre marchi hanno
   proporzioni molto distanti fra loro. */
.promotori__riga .n4{height:40px}
.promotori__riga svg{height:44px}
.promotori__riga .wd{height:46px}
</style></head><body><div class="tela">
  ${v.marchio}
  <div class="colonna">
    <div class="centro"><svg class="logotipo" viewBox="${v.logo === testoPos ? vbPos : vbMono}">${v.logo}</svg></div>
    <div class="promotori">
      <div class="promotori__linea"></div>
      <div class="promotori__eti">Un programma di</div>
      <div class="promotori__riga">
        <img class="n4" src="${p.next4}" alt="Next4">
        ${p.elis}
        <img class="wd" src="${p.wda}" alt="WDA">
      </div>
    </div>
  </div>
</div></body></html>`;
}

const scelta = process.argv[2];
const daFare = scelta ? VARIANTI.filter((v) => v.nome === scelta) : VARIANTI;
if (daFare.length === 0) {
  console.error(`variante sconosciuta: ${scelta}. Disponibili: ${VARIANTI.map((v) => v.nome).join(', ')}`);
  process.exit(1);
}

await mkdir(`${OUT}/varianti`, { recursive: true });
for (const v of daFare) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.setContent(pagina(v));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/varianti/impronta-${v.nome}.png` });
  await page.close();
  console.log(`${v.nome.padEnd(11)} ${v.titolo}`);
}
await browser.close();
