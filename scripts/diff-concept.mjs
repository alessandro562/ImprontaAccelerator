/**
 * Confronto a pixel fra il concept e la build.
 *
 *   npm run diff
 *
 * Fotografa `docs/concept/impronta-landing-v2.html` e la home italiana
 * costruita, alle due viewport del brief, e le confronta con pixelmatch.
 * Scrive concept, sito e maschera delle differenze in docs/redesign-v2/diff/.
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { spawnSync } from 'node:child_process';
import { readFile, mkdir, rm, stat, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const BASE_PATH = '/ImprontaAccelerator';
const OUT = 'docs/redesign-v2/diff';
const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '390', width: 390, height: 844 },
];
// Tolleranza sulla geometria orizzontale: sotto questa soglia la differenza e'
// arrotondamento del layout, non uno scostamento.
const SOGLIA_X = 2; // px

/**
 * Scostamenti voluti, non regressioni.
 *
 * La seconda riga dei numeri ha colonne simmetriche invece che 7+5: con
 * Poppins «Demo Day» non ci stava, e rimpicciolire la cifra spezzava
 * l'allineamento fra i quattro numeri, che e' quello che regge la sezione.
 * Vedi «Adattamenti a Poppins» in src/styles/concept.css.
 */
const AMMESSI = new Set(['.num[2]', '.num[3]', '.num__v[2]', '.num__v[3]']);

// Il Chromium scaricato da Playwright non corrisponde a quello dell'immagine.
const SYSTEM_CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const launchOptions = existsSync(SYSTEM_CHROME) ? { executablePath: SYSTEM_CHROME } : {};

const TYPES = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain',
};

/** Ricostruisce solo se dist/ manca o e' piu' vecchia dei sorgenti. */
async function buildIfStale() {
  const newest = async (dir) => {
    let max = 0;
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      max = Math.max(max, entry.isDirectory() ? await newest(full) : (await stat(full)).mtimeMs);
    }
    return max;
  };
  let stale = true;
  if (existsSync('dist')) {
    stale = (await newest('src')) > (await stat('dist')).mtimeMs;
  }
  if (stale) {
    console.log('Build in corso…');
    const r = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit' });
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
}

/**
 * Il CSS con cui si allineano i caratteri del concept a quelli del sito.
 *
 * Due motivi, entrambi documentati in src/styles/concept.css:
 *
 * 1. Il concept carica i font da Google. Dove quella rete non c'e' — la CI, un
 *    container — ripiegherebbe sui font di sistema.
 * 2. Il sito usa i font di marca, Poppins e Inter, non quelli del concept.
 *
 * In entrambi i casi il confronto finirebbe per misurare la differenza fra i
 * caratteri invece che fra le strutture. Qui si iniettano nel concept le
 * @font-face della build, le stesse famiglie e gli stessi adattamenti che
 * Poppins impone: nessun asse variabile e nessun peso 650.
 * Il resto del CSS del concept non viene toccato.
 */
async function fontFacesDellaBuild() {
  const dir = 'dist/_astro';
  const css = [];
  for (const nome of await readdir(dir)) {
    if (nome.endsWith('.css')) css.push(await readFile(path.join(dir, nome), 'utf8'));
  }
  const regole = css.join('\n').match(/@font-face\s*{[^}]*}/g) ?? [];
  if (regole.length === 0) throw new Error('nessuna @font-face nella build: il confronto non sarebbe attendibile');
  return `
    ${regole.join('\n')}
    :root{
      --display:"Poppins", system-ui, sans-serif;
      --sans:"Inter", ui-sans-serif, system-ui, sans-serif;
      --serif:"Poppins", system-ui, sans-serif;
    }
    *{font-variation-settings:normal!important}
    .front__t,.step h3,.team__foot strong{font-weight:600!important}
  `;
}

/**
 * Serve la build sotto il base path di GitHub Pages, e il concept su /concept/.
 * Il concept sta in docs/, fuori da dist/: va servito a parte.
 */
function serve(fontFaces) {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    let file;
    if (url === '/concept/') {
      const html = await readFile('docs/concept/impronta-landing-v2.html', 'utf8');
      // Lo stile va in fondo al <head>: prima del <style> del concept
      // perderebbe contro le sue stesse dichiarazioni in :root.
      const conFontLocali = html
        .replace(/<link rel="preconnect"[^>]*>/g, '')
        .replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>/g, '')
        .replace('</head>', `<style>${fontFaces}</style></head>`);
      res.writeHead(200, { 'content-type': 'text/html' });
      return res.end(conFontLocali);
    }
    if (url.startsWith(BASE_PATH)) {
      const rest = url.slice(BASE_PATH.length) || '/';
      file = path.join('dist', rest);
      if (file.endsWith('/')) file = path.join(file, 'index.html');
    } else {
      res.writeHead(404); return res.end();
    }
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404); res.end('404');
    }
  });
  return new Promise((resolve) => {
    server.listen(0, () => resolve({ server, port: server.address().port }));
  });
}

/**
 * La griglia della pagina: per ogni blocco, dove comincia e quanto e' largo.
 *
 * E' questo che il confronto verifica. I pixel non bastano piu' come verdetto:
 * il copy del sito e' piu' asciutto di quello del concept, per richiesta, e i
 * testi piu' corti spostano tutto in verticale. Le posizioni orizzontali e
 * l'ordine dei blocchi, invece, devono restare identici: se cambiano, e' la
 * struttura ad essersi rotta.
 */
const GRIGLIA = () => {
  const selettori = [
    'section', '.wrap', '.hero h1', '.hero__sub', '.hero__cta',
    '.numbers__intro .label', '.numbers__intro p', '.num', '.num__v',
    '.head h2', '.head p', '.front', '.front__n', '.front__t', '.tags',
    '.who__lead', '.who__list', '.who__list li',
    '.steps__list', '.step', '.step__n',
    '.orgs', '.org', '.org__name', '.org__role', '.team__foot div',
    '.close h2', '.close p', '.foot__grid', '.foot__legal',
  ];
  const out = [];
  for (const sel of selettori) {
    document.querySelectorAll(sel).forEach((el, i) => {
      const r = el.getBoundingClientRect();
      out.push({ sel, i, x: Math.round(r.x), w: Math.round(r.width) });
    });
  }
  return out;
};

/**
 * Stato di cattura: tutto visibile e fermo, così il confronto non dipende dal
 * momento in cui scatta lo screenshot.
 */
const PREPARA = () => {
  document.querySelectorAll('[data-in], #steps').forEach((el) => el.classList.add('is-in'));
  const nav = document.getElementById('nav');
  if (nav) nav.style.position = 'absolute';
  const style = document.createElement('style');
  style.textContent = `*,*::before,*::after{
    animation-duration:0s!important;animation-delay:0s!important;
    animation-fill-mode:forwards!important;animation-play-state:paused!important;
    transition-duration:0s!important;transition-delay:0s!important}
    .rise{opacity:1!important;transform:none!important}
    .fade{opacity:1!important}
    .arch--draw{stroke-dashoffset:0!important}
    .dot--pop{transform:scale(1)!important}
    .steps__track span{transform:scaleX(1)!important}`;
  document.head.appendChild(style);
};

async function scatta(page, url, file, vp) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(PREPARA);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const griglia = await page.evaluate(GRIGLIA);
  const misure = await page.evaluate(() => {
    const box = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: Math.floor(r.x), y: Math.floor(r.y + window.scrollY), w: Math.ceil(r.width), h: Math.ceil(r.height) };
    };
    return {
      altezza: document.documentElement.scrollHeight,
      // I due testi che dipendono da config.ts: stato della call e frase di
      // chiusura con la data. Restano fuori dal conteggio.
      stato: box('.hero__meta .label:last-child'),
      chiusura: box('.close p'),
    };
  });
  await page.screenshot({ path: file, fullPage: true });
  return { ...misure, griglia };
}

/** Annerisce una zona in entrambe le immagini, così non pesa sul confronto. */
function maschera(img, box) {
  if (!box) return;
  for (let y = Math.max(0, box.y); y < Math.min(img.height, box.y + box.h); y++) {
    for (let x = Math.max(0, box.x); x < Math.min(img.width, box.x + box.w); x++) {
      const i = (img.width * y + x) << 2;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 0;
      img.data[i + 3] = 255;
    }
  }
}

/** Ritaglio di una fascia orizzontale. */
function fascia(img, y, h, w) {
  const out = new PNG({ width: w, height: h });
  PNG.bitblt(img, out, 0, y, w, h, 0, 0);
  return out;
}

await buildIfStale();
const { server, port } = await serve(await fontFacesDellaBuild());
const origin = `http://127.0.0.1:${port}`;
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch(launchOptions);
const page = await browser.newPage();
let problemi = 0;

for (const vp of VIEWPORTS) {
  const fConcept = path.join(OUT, `concept-${vp.name}.png`);
  const fSito = path.join(OUT, `sito-${vp.name}.png`);
  const fDiff = path.join(OUT, `diff-${vp.name}.png`);

  const mConcept = await scatta(page, `${origin}/concept/`, fConcept, vp);
  const mSito = await scatta(page, `${origin}${BASE_PATH}/`, fSito, vp);

  const a = PNG.sync.read(await readFile(fConcept));
  const b = PNG.sync.read(await readFile(fSito));
  const width = Math.min(a.width, b.width);

  // Lo stato della call sta nello stesso punto in entrambe: si maschera e basta.
  maschera(a, mConcept.stato);
  maschera(b, mSito.stato);

  /*
   * La frase di chiusura cambia numero di righe secondo config.ts, e tutto
   * quel che segue scorre. Si confrontano allora due fasce ancorate a estremi
   * diversi: dall'alto fino alla frase, e dal basso risalendo. Nel mezzo resta
   * fuori solo la frase stessa.
   */
  const yFrase = Math.min(mConcept.chiusura?.y ?? a.height, mSito.chiusura?.y ?? b.height);
  const fineFrase = (m, img) => (m.chiusura ? m.chiusura.y + m.chiusura.h : img.height);
  const coda = Math.min(a.height - fineFrase(mConcept, a), b.height - fineFrase(mSito, b));

  const confronta = (x, y, aY, bY, h) => {
    const d = new PNG({ width, height: h });
    const n = pixelmatch(fascia(a, aY, h, width).data, fascia(b, bY, h, width).data, d.data, width, h, { threshold: 0.1 });
    return { n, d, h };
  };

  const alto = confronta(0, 0, 0, 0, yFrase);
  const basso = confronta(0, 0, a.height - coda, b.height - coda, coda);

  const diff = new PNG({ width, height: alto.h + basso.h });
  PNG.bitblt(alto.d, diff, 0, 0, width, alto.h, 0, 0);
  PNG.bitblt(basso.d, diff, 0, 0, width, basso.h, 0, alto.h);
  const { writeFile } = await import('node:fs/promises');
  await writeFile(fDiff, PNG.sync.write(diff));

  const pixelConfrontati = width * (alto.h + basso.h);
  const perc = ((alto.n + basso.n) / pixelConfrontati) * 100;
  const deltaH = Math.abs(mConcept.altezza - mSito.altezza);

  // Verdetto: la griglia. Stessi blocchi, stesso ordine, stesse colonne.
  const gc = mConcept.griglia;
  const gs = mSito.griglia;
  const scostamenti = [];
  let ammessi = 0;
  if (gc.length !== gs.length) {
    scostamenti.push(`blocchi: ${gc.length} nel concept, ${gs.length} nel sito`);
  } else {
    for (let i = 0; i < gc.length; i++) {
      if (gc[i].sel !== gs[i].sel) { scostamenti.push(`ordine diverso a ${gc[i].sel}`); break; }
      const chiave = `${gc[i].sel}[${gc[i].i}]`;
      if (AMMESSI.has(chiave)) { ammessi += 1; continue; }
      if (Math.abs(gc[i].x - gs[i].x) > SOGLIA_X || Math.abs(gc[i].w - gs[i].w) > SOGLIA_X) {
        scostamenti.push(`${chiave} x ${gc[i].x}→${gs[i].x}, larghezza ${gc[i].w}→${gs[i].w}`);
      }
    }
  }
  if (scostamenti.length > 0) problemi += 1;

  console.log(
    `${vp.name}px  griglia: ${scostamenti.length === 0 ? `${gc.length} blocchi allineati` : `${scostamenti.length} scostamenti`}` +
    `${ammessi > 0 ? `, ${ammessi} deroghe dichiarate` : ''}  |  ` +
    `pixel diversi ${perc.toFixed(2)}% (il copy del sito e' piu' asciutto del concept)  |  ` +
    `altezza concept ${mConcept.altezza} / sito ${mSito.altezza}, Δ ${deltaH}px`,
  );
  for (const s of scostamenti.slice(0, 8)) console.log(`         ${s}`);
}

await browser.close();
server.close();
console.log(`\nImmagini in ${OUT}/`);
process.exit(problemi === 0 ? 0 : 1);
