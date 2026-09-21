/**
 * Costanti del sito.
 * Tutto ciò che il team di Impronta può voler cambiare senza toccare i
 * componenti sta qui dentro.
 */

/**
 * URL della candidatura sulla piattaforma esterna.
 *
 * Impostarlo cambia tre cose da solo: le CTA puntano alla piattaforma invece
 * che alla mail di contatto, l’etichetta dell’hero passa da «Candidature in
 * apertura» a «Candidature aperte», e la chiusura usa il presente.
 * Se un giorno torna vuoto, tutto ricade sulla mail senza rompersi.
 */
export const APPLICATION_FORM_URL = 'https://onesquare.elis.org/challenge/24';

/**
 * Scadenza della call, in formato ISO (es. '2026-03-31').
 * Lasciare vuoto per nascondere ovunque i riferimenti alla deadline.
 */
export const APPLICATION_DEADLINE = '';

/**
 * Apertura ai motori di ricerca.
 *
 * **Il team ha deciso il 18 settembre 2026 di aprirla.** Resta `false` per una
 * ragione di sequenza, non di merito: finché il sito vive su
 * `alessandro562.github.io/ImprontaAccelerator/`, togliere il noindex vuol dire
 * far indicizzare quell’indirizzo e poi doverlo far migrare a colpi di
 * redirect. Si mette a `true` nel momento in cui il dominio custom risponde:
 * è l’ultimo passo di `docs/DOMINIO.md`.
 *
 * Il valore governa il `<meta name="robots">` e `robots.txt`.
 *
 * Due cose restano fuori dal codice e in carico al team, da chiudere prima di
 * accenderlo:
 * - l’obbligo di visibilità FESR: se è attivo, i riferimenti a Venture Tech
 *   Lazio vanno rimessi in pagina (regola 5 di CLAUDE.md);
 * - i testi di privacy e cookie, che oggi dichiarano di essere una base di
 *   partenza non validata.
 */
export const INDEXABLE = false;

/**
 * I nomi delle persone (team di programma e Advisory Board) restano fuori
 * dalla pagina finche' il consenso alla pubblicazione non e' documentato.
 * Con `true` si pubblicano; la struttura in pagina e' gia' pronta.
 */
export const SHOW_PEOPLE_NAMES = false;

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
