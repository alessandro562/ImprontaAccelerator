/**
 * Costanti del sito.
 * Tutto ciò che il team di Impronta può voler cambiare senza toccare i
 * componenti sta qui dentro.
 */

/**
 * URL del form di candidatura esterno (Typeform / Tally / Google Form).
 * Finché resta vuoto, le CTA mostrano un avviso invece di puntare a un link
 * rotto: vedi `hasApplicationForm`.
 */
export const APPLICATION_FORM_URL = '';

/**
 * Scadenza della call, in formato ISO (es. '2026-03-31').
 * Lasciare vuoto per nascondere ovunque i riferimenti alla deadline.
 */
export const APPLICATION_DEADLINE = '';

export const CONTACT_EMAIL = 'info@improntaaccelerator.it';

/** Sedi e riferimenti fisici del programma. */
export const VENUE = {
  name: 'Villa Fassini',
  street: 'Via Giuseppe Donati 174',
  postalCode: '00159',
  city: 'Roma',
  country: 'IT',
} as const;

/** Profili social del programma. Le voci vuote non vengono renderizzate. */
export const SOCIAL = {
  linkedin: '',
  instagram: '',
} as const;

export const PARTNER_URLS = {
  next4: 'https://www.next4.it/',
  elis: 'https://www.elis.org/innovation-hub/',
  wda: 'https://wda.company',
  lazioInnova: 'https://www.lazioinnova.it/',
} as const;

export const hasApplicationForm = APPLICATION_FORM_URL.trim().length > 0;
export const hasDeadline = APPLICATION_DEADLINE.trim().length > 0;

/** Deadline formattata nella lingua corrente, o null se non impostata. */
export function formattedDeadline(locale: 'it' | 'en'): string | null {
  if (!hasDeadline) return null;
  const date = new Date(APPLICATION_DEADLINE);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
