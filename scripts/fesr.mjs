/**
 * Prepara i marchi della visibilita' FESR per il footer scuro.
 *
 *   npm run fesr
 *
 * Il file consegnato, `brand/fesr/loghi-fesr-originale.png`, e' una striscia
 * unica con i quattro marchi in fila e la frase gia' composta dentro
 * l'immagine. Da li' si ricavano quattro file separati, in versione negativa.
 *
 * Perche' quattro file: la striscia e' in 15,7:1, e su un telefono largo
 * 390px starebbe in venti pixel d'altezza. Separati vanno a capo.
 *
 * Perche' il negativo: sul fondo scuro del footer i marchi colorati — la
 * freccia tricolore, la bandiera, l'emblema della Repubblica, l'ottagono del
 * Lazio — si leggono benissimo. A sparire e' solo il lettering blu. La
 * versione negativa, bianca, e' quella che i kit istituzionali prevedono
 * proprio per questo caso: qui e' ricostruita dal positivo.
 *
 * Cosa non si tocca: nessun colore dei marchi veri e propri. Cambia soltanto
 * il colore delle scritte, e si aggiunge alla bandiera europea il filo bianco
 * che le sue regole chiedono quando sta su un fondo colorato.
 *
 * I confini fra marchio e scritta sono MISURATI, non stimati: le proporzioni
 * a occhio avevano gia' prodotto un puntino bianco sul bordo della freccia.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { statSync } from 'node:fs';

const SORGENTE = 'brand/fesr/loghi-fesr-originale.png';
const USCITA = 'src/assets/fesr';
const ALTEZZA = 200; // tutti alla stessa altezza: l'emblema europeo non dev'essere il piu' piccolo

/* La banda dei marchi dentro il PNG 6000x3375. Sotto ci sono le due righe di
   testo cotte nell'immagine, che scartiamo: in pagina il testo e' vero. */
const BANDA = { left: 0, top: 1481, width: 6000, height: 283 };

/* Colonne dei quattro marchi dentro la banda rifilata. */
const MARCHI = [
  { nome: '01-coesione-italia', left: 0, width: 631 },
  { nome: '02-unione-europea', left: 1140, width: 1145 },
  { nome: '03-repubblica-italiana', left: 2783, width: 262 },
  { nome: '04-regione-lazio', left: 3542, width: 894 },
];

/* Ogni passaggio e' una sharp a se', con una codifica in mezzo: concatenare
   trim e resize nella stessa pipeline lascia decidere a sharp l'ordine, e il
   ritaglio cambia dimensione sotto i piedi. */
const png = (pipeline) => pipeline.png().toBuffer();

/** Colonne che contengono qualcosa, raggruppate in bande. */
function bande(dati, W, H, alfaMin = 12) {
  const piene = [];
  for (let x = 0; x < W; x++) {
    let n = 0;
    for (let y = 0; y < H; y++) if (dati[(y * W + x) * 4 + 3] > alfaMin) n++;
    piene.push(n > 0);
  }
  const out = []; let a = null;
  for (let x = 0; x < W; x++) {
    if (piene[x] && a === null) a = x;
    if (!piene[x] && a !== null) { out.push([a, x - 1]); a = null; }
  }
  if (a !== null) out.push([a, W - 1]);
  return out.filter(([i, f]) => f - i > 2);
}

/** Prima colonna che contiene rosso o verde: l'inizio della freccia tricolore. */
function inizioTricolore(dati, W, H) {
  for (let x = 0; x < W; x++) {
    for (let y = 0; y < H; y++) {
      const i = (y * W + x) * 4;
      if (dati[i + 3] < 128) continue;
      const r = dati[i], g = dati[i + 1], b = dati[i + 2];
      if ((r > 140 && g < 90 && b < 90) || (g > 110 && r < 110 && b < 110)) return x;
    }
  }
  return W;
}

/** Riquadro dei pixel opachi in una fascia. */
function riquadro(dati, W, daX, aX, daY, aY) {
  let l = aX, r = daX, t = aY, b = daY;
  for (let y = daY; y < aY; y++) for (let x = daX; x < aX; x++) {
    if (dati[(y * W + x) * 4 + 3] > 128) {
      if (x < l) l = x; if (x > r) r = x; if (y < t) t = y; if (y > b) b = y;
    }
  }
  return { left: l, right: r + 1, top: t, bottom: b + 1 };
}

/** Porta a bianco il colore, lasciando intatta l'opacita': l'antialias resta. */
function scritteInBianco(dati, W, daX, aX, daY, aY) {
  for (let y = daY; y < aY; y++) for (let x = daX; x < aX; x++) {
    const i = (y * W + x) * 4;
    if (dati[i + 3] === 0) continue;
    dati[i] = 255; dati[i + 1] = 255; dati[i + 2] = 255;
  }
}

/**
 * Compone una fascia sopra il bianco.
 *
 * La parola «LAZIO» dentro la barra di Coesione non e' bianca: e' un buco a
 * opacita' parziale. Su carta il foglio la rende bianca, sul footer scuro
 * diventa illeggibile. Comporla sopra il bianco — con la formula vera,
 * non con una soglia — restituisce esattamente l'aspetto che ha sulla carta,
 * antialias compreso.
 */
function sopraBianco(dati, W, box) {
  for (let y = box.top; y < box.bottom; y++) for (let x = box.left; x < box.right; x++) {
    const i = (y * W + x) * 4;
    const a = dati[i + 3] / 255;
    dati[i] = Math.round(dati[i] * a + 255 * (1 - a));
    dati[i + 1] = Math.round(dati[i + 1] * a + 255 * (1 - a));
    dati[i + 2] = Math.round(dati[i + 2] * a + 255 * (1 - a));
    dati[i + 3] = 255;
  }
}

/** Il filo bianco attorno alla bandiera: un venticinquesimo della sua altezza. */
function filoBandiera(dati, W, H, box) {
  const s = Math.max(2, Math.round((box.bottom - box.top) / 25));
  for (let y = box.top - s; y < box.bottom + s; y++) for (let x = box.left - s; x < box.right + s; x++) {
    if (y < 0 || y >= H || x < 0 || x >= W) continue;
    if (x >= box.left && x < box.right && y >= box.top && y < box.bottom) continue;
    const i = (y * W + x) * 4;
    dati[i] = 255; dati[i + 1] = 255; dati[i + 2] = 255; dati[i + 3] = 255;
  }
}

await mkdir(USCITA, { recursive: true });

const banda = await png(sharp(SORGENTE).extract(BANDA));
const rifilata = await png(sharp(banda).trim({ threshold: 10 }));

for (const m of MARCHI) {
  const colonna = await png(sharp(rifilata).extract({ left: m.left, top: 0, width: m.width, height: BANDA.height }));
  const stretta = await png(sharp(colonna).trim({ threshold: 10 }));
  const { data, info } = await sharp(stretta).resize({ height: ALTEZZA })
    .ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  let nota = '';

  if (m.nome === '01-coesione-italia') {
    const freccia = inizioTricolore(data, W, H);
    /* Lo stacco fra il blocco scritto e la barra: la prima riga vuota sotto
       il lettering, cercata solo a sinistra della freccia. */
    let stacco = H;
    for (let y = Math.round(H * 0.3); y < H; y++) {
      let n = 0;
      for (let x = 0; x < freccia; x++) if (data[(y * W + x) * 4 + 3] > 12) n++;
      if (n === 0) { stacco = y; break; }
    }
    scritteInBianco(data, W, 0, freccia, 0, stacco);
    sopraBianco(data, W, riquadro(data, W, 0, freccia, stacco, H));
    nota = `freccia da x=${freccia}, barra da y=${stacco}`;
  }

  if (m.nome === '02-unione-europea') {
    const [bandiera, testo] = bande(data, W, H);
    scritteInBianco(data, W, testo[0], W, 0, H);
    filoBandiera(data, W, H, riquadro(data, W, bandiera[0], bandiera[1] + 1, 0, H));
    nota = `bandiera ${bandiera[0]}-${bandiera[1]}, testo da x=${testo[0]}`;
  }

  /* 03-repubblica-italiana non si tocca: l'emblema e' gia' leggibile sul scuro. */

  if (m.nome === '04-regione-lazio') {
    const [ottagono, testo] = bande(data, W, H);
    scritteInBianco(data, W, testo[0], W, 0, H);
    nota = `ottagono ${ottagono[0]}-${ottagono[1]}, testo da x=${testo[0]}`;
  }

  await sharp(data, { raw: { width: W, height: H, channels: 4 } }).webp({ quality: 92 })
    .toFile(`${USCITA}/${m.nome}.webp`);
  const { size } = statSync(`${USCITA}/${m.nome}.webp`);
  console.log(`${m.nome.padEnd(26)} ${W}x${H}  ${String((size / 1024).toFixed(0)).padStart(3)} KB   ${nota}`);
}
