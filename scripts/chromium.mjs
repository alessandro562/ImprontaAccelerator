/**
 * Dove sta Chromium in questa immagine.
 *
 * Il Chromium scaricato da Playwright non corrisponde a quello installato, e
 * il percorso con il numero di versione dentro — `chromium-1194` — e' marcito
 * silenziosamente quando l'immagine e' stata aggiornata: `npm run og` e
 * `npm run banner` hanno smesso di partire, gli altri due si sono salvati solo
 * perche' avevano un ripiego. Il symlink senza versione regge gli
 * aggiornamenti; se un giorno sparisce anche quello, si lascia decidere a
 * Playwright.
 */
import { existsSync } from 'node:fs';

const SYMLINK = '/opt/pw-browsers/chromium';

export const opzioniChromium = existsSync(SYMLINK) ? { executablePath: SYMLINK } : {};
