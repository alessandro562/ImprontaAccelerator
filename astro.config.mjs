// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Sito e base path sono guidati da variabili d'ambiente, così il passaggio da
 * GitHub Pages a un dominio custom non richiede toccare il codice. In CI i due
 * valori arrivano da `actions/configure-pages`, che li legge dalle impostazioni
 * Pages del repo: con un dominio custom `base_path` è la stringa vuota, perché
 * il sito sta alla radice del dominio.
 *
 * `??` e non `||`: la stringa vuota è falsy, quindi `||` scarterebbe proprio il
 * valore corretto del dominio custom e rimetterebbe `/ImprontaAccelerator`.
 * È successo davvero, il 18 settembre 2026: il sito è andato online sul dominio
 * chiedendo CSS e font a `/ImprontaAccelerator/_astro/…`, dove non c'erano
 * piu', e si è presentato senza un foglio di stile. Qui la differenza fra
 * "variabile assente" e "variabile vuota" è tutto.
 *
 * Variabile assente (sviluppo in locale, `npm run diff`, `npm run screens`):
 * si ricade sul project site di GitHub. Variabile vuota (CI con dominio
 * custom): base alla radice.
 */
const SITE_URL = process.env.SITE_URL ?? 'https://alessandro562.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/ImprontaAccelerator';

export default defineConfig({
  site: SITE_URL,
  // Astro vuole '/' per la radice, non la stringa vuota.
  base: BASE_PATH === '' ? '/' : BASE_PATH,

  // GitHub Pages redirige 301 da /en a /en/: pinnare 'always' allinea i
  // canonical a ciò che Pages serve davvero e rende BASE_URL deterministico.
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Astro 7 usa 'jsx' di default, che elimina gli spazi tra elementi inline
  // (es. "<strong>Impronta</strong> <span>Accelerator</span>" → attaccati).
  compressHTML: true,

  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },

  integrations: [
    sitemap({
      // pagina di controllo interna: fuori dalla sitemap
      filter: (page) => !page.includes('/stile'),
      i18n: {
        defaultLocale: 'it',
        locales: { it: 'it-IT', en: 'en-US' },
      },
    }),
  ],
});
