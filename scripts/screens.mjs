/**
 * QA visivo: costruisce il sito, lo serve sotto il base path di GitHub Pages
 * e fotografa ogni pagina e ogni sezione alle tre viewport del brief.
 *
 *   npm run screens -- <nome-cartella>
 *
 * Oltre agli screenshot stampa un report su: overflow orizzontale, immagini
 * senza alt, link vuoti o che ignorano il base path, gerarchia dei titoli.
 * Con --axe esegue anche l'analisi di accessibilita'.
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { spawnSync } from 'node:child_process';
import { readFile, mkdir, rm, cp, stat, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const BASE_PATH = '/ImprontaAccelerator';
const OUT_ROOT = 'docs/redesign/screens';
const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '768', width: 768, height: 1024 },
  { name: '390', width: 390, height: 844 },
];

// Il Chromium scaricato da Playwright non corrisponde a quello presente
// nell'immagine: si usa quello di sistema quando c'e'.
const SYSTEM_CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const launchOptions = existsSync(SYSTEM_CHROME) ? { executablePath: SYSTEM_CHROME } : {};

const label = process.argv[2];
const withAxe = process.argv.includes('--axe');
if (!label || label.startsWith('--')) {
  console.error('Uso: npm run screens -- <nome-cartella> [--axe]');
  process.exit(1);
}

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
    const [srcTime, distTime] = [await newest('src'), (await stat('dist')).mtimeMs];
    stale = srcTime > distTime;
  }
  if (stale) {
    console.log('Build in corso…');
    const r = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit' });
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
}

/** Serve dist/ sotto il base path, come fa GitHub Pages. */
async function serve() {
  const root = path.resolve('.qa-serve');
  await rm(root, { recursive: true, force: true });
  await mkdir(path.join(root, BASE_PATH.slice(1)), { recursive: true });
  await cp('dist', path.join(root, BASE_PATH.slice(1)), { recursive: true });

  const TYPES = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
    '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif',
    '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
    '.json': 'application/json', '.ico': 'image/x-icon',
  };

  const server = createServer(async (req, res) => {
    const url = decodeURIComponent((req.url ?? '/').split('?')[0]);
    const candidates = url.endsWith('/') ? [url + 'index.html'] : [url, url + '/index.html'];
    for (const c of candidates) {
      const file = path.join(root, c);
      if (!file.startsWith(root)) break;
      try {
        const body = await readFile(file);
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
        return res.end(body);
      } catch { /* prova il candidato successivo */ }
    }
    // GitHub Pages redirige /path -> /path/ prima di servire l'indice
    if (!url.endsWith('/') && existsSync(path.join(root, url, 'index.html'))) {
      res.writeHead(301, { Location: url + '/' });
      return res.end();
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404');
  });
  await new Promise((r) => server.listen(0, r));
  return { server, port: server.address().port, root };
}

/** Pagine da fotografare: quelle presenti nella build. */
async function discoverPages() {
  const wanted = ['/', '/en/', '/condizioni/', '/en/conditions/', '/stile/', '/privacy/', '/cookie/'];
  return wanted.filter((p) => existsSync(path.join('dist', p, 'index.html')) || (p === '/' && existsSync('dist/index.html')));
}

await buildIfStale();
const { server, port, root } = await serve();
const origin = `http://127.0.0.1:${port}${BASE_PATH}`;
const outDir = path.join(OUT_ROOT, label);
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch(launchOptions);
const problems = [];
const note = (p) => { problems.push(p); };
const pages = await discoverPages();
console.log(`Pagine: ${pages.join(' ')}`);

for (const pagePath of pages) {
  const slug = pagePath === '/' ? 'home' : pagePath.replace(/^\/|\/$/g, '').replace(/\//g, '-');

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    page.on('console', (m) => { if (m.type() === 'error') note(`[console] ${slug} ${vp.name}: ${m.text()}`); });
    page.on('requestfailed', (r) => note(`[richiesta fallita] ${slug}: ${r.url()}`));

    const res = await page.goto(origin + pagePath, { waitUntil: 'networkidle' });
    if (!res || res.status() >= 400) { note(`[http ${res?.status()}] ${pagePath}`); await page.close(); await context.close(); continue; }
    await page.evaluate(() => document.fonts.ready);

    // header non sticky, animazioni ferme, tutte le <details> aperte
    await page.addStyleTag({ content: `
      *,*::before,*::after{animation:none!important;transition:none!important}
      header{position:static!important}
      html{scroll-behavior:auto!important}
    `});
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
    await page.waitForTimeout(150);

    if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) {
      const w = await page.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
      note(`[overflow] ${slug} a ${vp.name}px: scrollWidth ${w[0]} > viewport ${w[1]}`);
    }

    await page.screenshot({ path: path.join(outDir, `${slug}-${vp.name}-full.png`), fullPage: true });

    for (const id of await page.$$eval('section[id]', (els) => els.map((e) => e.id))) {
      const el = await page.$(`section[id="${id}"]`);
      if (el) await el.screenshot({ path: path.join(outDir, `${slug}-${vp.name}-${id}.png`) }).catch(() => {});
    }

    // controlli strutturali una sola volta per pagina
    if (vp.name === '1440') {
      for (const img of await page.$$eval('img', (els) => els.map((e) => ({ src: e.getAttribute('src'), alt: e.getAttribute('alt') }))))
        if (img.alt === null) note(`[alt mancante] ${slug}: ${img.src}`);

      for (const href of await page.$$eval('a', (els) => els.map((e) => e.getAttribute('href'))))
        if (href === null || href.trim() === '') note(`[href vuoto] ${slug}`);
        else if (href.startsWith('/') && !href.startsWith(BASE_PATH + '/')) note(`[base path ignorato] ${slug}: ${href}`);

      const levels = await page.$$eval('h1,h2,h3,h4,h5,h6', (els) => els.map((e) => +e.tagName[1]));
      const h1 = levels.filter((l) => l === 1).length;
      if (h1 !== 1) note(`[titoli] ${slug}: ${h1} H1 (atteso 1)`);
      for (let i = 1; i < levels.length; i++)
        if (levels[i] - levels[i - 1] > 1) note(`[titoli] ${slug}: salto da H${levels[i - 1]} a H${levels[i]}`);
    }

    if (withAxe && vp.name === '1440') {
      const { default: AxeBuilder } = await import('@axe-core/playwright');
      const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      for (const v of r.violations)
        if (['serious', 'critical'].includes(v.impact)) note(`[axe ${v.impact}] ${slug}: ${v.id} — ${v.help} (${v.nodes.length})`);
    }

    await page.close();
    await context.close();
  }
}

await browser.close();
server.close();
await rm(root, { recursive: true, force: true });

console.log(`\nScreenshot in ${outDir}/`);
if (problems.length === 0) console.log('Nessun problema rilevato.');
else { console.log(`\n${problems.length} problemi:`); for (const p of [...new Set(problems)]) console.log(' -', p); }
process.exit(problems.length ? 1 : 0);
