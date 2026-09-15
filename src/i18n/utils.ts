import { getRelativeLocaleUrl, getAbsoluteLocaleUrl } from 'astro:i18n';

export const LOCALES = ['it', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'it';

/**
 * Id delle sezioni della one-pager.
 * Restano identici in italiano e in inglese: se cambiassero, il selettore di
 * lingua non potrebbe conservare l’ancora su cui si trova il visitatore.
 */
export const SECTIONS = ['deal', 'target', 'percorso', 'partner', 'faq'] as const;

const BASE = import.meta.env.BASE_URL; // termina sempre con "/" (trailingSlash: 'always')

/**
 * URL di un file in `public/`.
 * Astro non applica il base agli href scritti a mano: ogni riferimento a
 * `public/` deve passare da qui, o si rompe su GitHub Pages.
 *
 * Da NON usare per le rotte: quelle passano da `localeUrl()`, che il base lo
 * applica già (usarli insieme raddoppierebbe il prefisso).
 */
export function asset(path: string): string {
  return `${BASE}${path.replace(/^\/+/, '')}`;
}

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function currentLocale(astroLocale: string | undefined): Locale {
  return isLocale(astroLocale) ? astroLocale : DEFAULT_LOCALE;
}

/**
 * Da un pathname completo alla chiave di pagina neutra rispetto alla lingua.
 * `/ImprontaAccelerator/en/privacy/` → `privacy`
 */
export function pageKeyFromUrl(pathname: string): string {
  const withoutBase = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\//, '');
  return withoutBase.replace(/^(it|en)(\/|$)/, '').replace(/\/$/, '');
}

/** URL relativo di una pagina in una data lingua (il base è già applicato). */
export function localeUrl(locale: Locale, pageKey = ''): string {
  return getRelativeLocaleUrl(locale, pageKey);
}

/** URL assoluto, per canonical, hreflang e Open Graph. */
export function absoluteLocaleUrl(locale: Locale, pageKey = ''): string {
  return getAbsoluteLocaleUrl(locale, pageKey);
}
