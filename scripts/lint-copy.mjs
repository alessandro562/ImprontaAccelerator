/**
 * Controllo lessicale sugli anti-pattern 15-22 del brief.
 *
 *   npm run lint:copy
 *
 * Legge i dizionari e l'HTML costruito, se presente. Ogni occorrenza va
 * corretta o motivata: lo script esce con codice 1 se ne trova.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const RULES = [
  { id: 15, name: 'costruzione "non … ma"', re: /\bnon\s+(?:[a-zà-ù']+\s+){0,4}ma\b/gi },
  { id: 16, name: 'inciso ", non "', re: /,\s+non\s/gi },
  { id: 17, name: 'enfasi vuota', re: /\b(davvero|sul serio|lo sappiamo|really|truly|we know)\b/gi },
  { id: 18, name: 'domanda nel titolo di sezione', re: /^(?!.*\bFAQ\b).*\?$/ , titlesOnly: true },
  { id: 20, name: 'parola da evitare', re: /\b(benefici reali|trasformare|trasformiamo|insieme|concreto|concreta|sfide|valore aggiunto|promessa|viaggio|journey|game.?chang\w+|unlock\w*)\b/gi },
];

/**
 * Occorrenze ammesse: il contrasto e' una precisazione di merito richiesta
 * dal brief, non la figura retorica che l'anti-pattern 16 vieta.
 */
const ALLOWED = [
  'partner di quei programmi, non di Impronta',
  'partners of those programmes, not of Impronta',
  'alla societa, non alle persone',
  'alla società, non alle persone',
  'by the company, not by individuals',
];

const allowed = (line) => ALLOWED.some((phrase) => line.includes(phrase));

const files = ['src/i18n/it.ts', 'src/i18n/en.ts'];
if (existsSync('dist')) {
  const walk = async (dir) => {
    const out = [];
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...(await walk(full)));
      else if (e.name.endsWith('.html')) out.push(full);
    }
    return out;
  };
  files.push(...(await walk('dist')));
}

let found = 0;
for (const file of files) {
  const text = await readFile(file, 'utf8');
  const lines = text.split('\n');
  for (const rule of RULES) {
    if (rule.titlesOnly) continue;
    lines.forEach((line, i) => {
      if (allowed(line)) return;
      for (const match of line.matchAll(rule.re)) {
        found += 1;
        console.log(`${file}:${i + 1}  [${rule.id} ${rule.name}] ${match[0].trim()}`);
      }
    });
  }
}

// Titoli con punto interrogativo: solo nelle FAQ sono ammessi.
for (const file of files.filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/<h[12][^>]*>([^<]*\?)<\/h[12]>/gi)) {
    found += 1;
    console.log(`${file}  [18 domanda nel titolo] ${match[1].trim()}`);
  }
}

console.log(found === 0 ? 'Nessun anti-pattern lessicale.' : `${found} occorrenze da correggere o motivare.`);
process.exit(found === 0 ? 0 : 1);
