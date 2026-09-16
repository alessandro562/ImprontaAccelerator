// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Sito e base path sono guidati da variabili d'ambiente, così il passaggio da
 * GitHub Pages a un dominio custom non richiede toccare il codice. In CI i due
 * valori arrivano da `actions/configure-pages`, che li legge dalle impostazioni
 * Pages del repo: quando imposterai il dominio custom, `base_path` diventa ""
 * e la build si adatta da sola.
 */
const SITE_URL = process.env.SITE_URL || 'https://alessandro562.github.io';
const BASE_PATH = process.env.BASE_PATH || '/ImprontaAccelerator';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,

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
