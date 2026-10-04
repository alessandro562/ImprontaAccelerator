# Marchi della visibilità FESR

Quattro file, uno per marchio, nel footer di ogni pagina. **Sono le versioni
negative**: lettering bianco, per il fondo scuro del sito. Si rigenerano con
`npm run fesr`, che li ricava dal file consegnato in
`brand/fesr/loghi-fesr-originale.png`. Non vanno modificati a mano.

| | |
|---|---|
| `01-coesione-italia.webp` | Coesione Italia 21-27 Lazio |
| `02-unione-europea.webp` | Cofinanziato dall'Unione europea |
| `03-repubblica-italiana.webp` | Repubblica Italiana |
| `04-regione-lazio.webp` | Regione Lazio |

## Perché non la striscia originale

Il file consegnato è una striscia unica con i quattro marchi in fila e la
frase già composta dentro l'immagine. Due cose non andavano:

- la striscia è in **15,7:1**. Su un telefono largo 390px starebbe in venti
  pixel d'altezza e l'emblema europeo non si leggerebbe. Separati, i marchi
  vanno a capo e restano leggibili;
- la frase cotta dentro il PNG è in un carattere estraneo alla landing, non si
  seleziona, non si traduce e uno screen reader non la vede. In pagina è testo
  vero, da `footer.fesr` nei dizionari.

## Perché la versione negativa

Sul fondo scuro i **marchi colorati si leggono benissimo**: la freccia
tricolore, la bandiera, l'emblema della Repubblica, l'ottagono del Lazio. A
sparire è solo il **lettering blu**, che su quasi nero diventa invisibile. La
versione negativa, bianca, è quella che i kit istituzionali prevedono proprio
per questo caso.

Il primo tentativo era stato mettere i positivi su un pannello bianco. Tecnicamente
corretto, visivamente un cerotto: un rettangolo bianco in fondo a una pagina
scura. Il negativo è la strada giusta.

## Cosa lo script tocca e cosa no

**Non tocca nessun colore dei marchi.** Cambia solo il colore delle scritte e
aggiunge alla bandiera europea il filo bianco che le sue regole chiedono quando
sta su un fondo colorato (spessore: un venticinquesimo dell'altezza).

Tre casi particolari, tutti **misurati** dallo script e non stimati a occhio —
le proporzioni a occhio avevano già prodotto un puntino bianco sul bordo della
freccia tricolore:

- **Coesione Italia**: il confine con la freccia è il primo pixel rosso o
  verde; lo stacco fra lettering e barra è la prima riga vuota.
- **Unione europea** e **Regione Lazio**: il confine fra marchio e scritta è
  lo stacco fra le due bande di contenuto.
- La parola «LAZIO» dentro la barra blu **non è bianca**: è un buco a opacità
  parziale, che su carta il foglio rende bianco e su fondo scuro sparisce. Lo
  script compone quella zona sopra il bianco, con la formula vera e non con
  una soglia, così l'antialias resta pulito.

**Repubblica Italiana non viene toccato**: l'emblema è già leggibile sullo
scuro così com'è.

## Da verificare con Lazio Innova

Due cose, entrambe fuori dalla mia portata:

1. **La versione negativa ufficiale.** Quella in uso è ricostruita dal
   positivo. I kit di visibilità la contengono quasi sempre: se arriva, si
   sostituiscono i quattro file e si può togliere la ricostruzione dallo
   script.
2. **La dimensione minima dell'emblema europeo.** Il regolamento chiede un
   emblema «ben visibile» e, per i siti, non più piccolo del più grande degli
   altri loghi presenti. Qui i marchi sono alti 30–40px, mentre i loghi dei
   promotori nella sezione «Un programma di» arrivano a 88px. Si cambia la
   riga `height` di `.foot__fesr-loghi img` in `concept.css`.
