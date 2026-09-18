# Foto della sede

I file che stanno qui finiscono nel carosello della sezione «La sede e la
community». Non serve toccare il codice per aggiungerne, toglierne o
riordinarne.

| Quante foto | Cosa compare in pagina |
|---|---|
| nessuna | un riquadro tratteggiato che dichiara che la foto va inserita |
| una | l'immagine, senza controlli |
| due o più | il carosello, con frecce e punti |

## Regole

- **Il nome decide l'ordine**, che è quello alfabetico: per questo i file sono
  numerati `01-`, `02-`, `03-`.
- **Ogni foto vuole il suo testo alternativo**, in `src/i18n/it.ts` ed
  `en.ts`, sotto `sede.galleria.scatti`, nello stesso ordine. Se aggiungi una
  terza foto senza aggiungere la terza riga, quella foto eredita un alt
  generico: la pagina resta valida ma la descrizione è peggiore.
- **Formato**: orizzontale o quadrato. In pagina viene ritagliata in **4:3**
  dal centro, quindi quello che sta ai bordi può sparire.
- **Dimensione**: almeno **1400px** di lato lungo. In pagina la foto occupa
  circa 506px su desktop: sotto i 1000px di sorgente si vede sgranata sugli
  schermi densi, che sono tutti i telefoni e quasi tutti i portatili.
- **Peso**: `.webp` a qualità 82 è il compromesso giusto. Gli originali a
  piena risoluzione vanno in `brand/sede/`, non qui.

## Come sono state preparate quelle attuali

```sh
# 01 — originale 1100x1125, ritagliato in 4:3 sul soggetto
npx sharp-cli -i brand/sede/villa-fassini-giardino.webp \
  -o src/assets/sede/01-giardino.webp resize 1400 1050 --fit cover

# 02 — originale 516x387, gia' in 4:3: non si ingrandisce, si converte e basta
npx sharp-cli -i brand/sede/villa-fassini-ingresso.jpg \
  -o src/assets/sede/02-ingresso.webp
```

`02-ingresso` è a **516px**, sotto il minimo consigliato: sugli schermi densi
si vede. È da sostituire con uno scatto a piena risoluzione appena ce n'è uno.
