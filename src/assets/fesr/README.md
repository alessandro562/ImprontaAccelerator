# Marchi della visibilità FESR

Quattro file, uno per marchio, nel footer di ogni pagina. L'ordine in pagina è
quello alfabetico dei nomi, che è anche quello del documento originale.

| | |
|---|---|
| `01-coesione-italia.webp` | Coesione Italia 21-27 Lazio |
| `02-unione-europea.webp` | Cofinanziato dall'Unione europea |
| `03-repubblica-italiana.webp` | Repubblica Italiana |
| `04-regione-lazio.webp` | Regione Lazio |

## Perché quattro file e non la striscia originale

Il file consegnato, in `brand/fesr/loghi-fesr-originale.png`, è una striscia
unica con i quattro marchi in fila e la frase già composta dentro
l'immagine. Non va bene per una pagina web, per due motivi:

- la striscia è in **15,7:1**: su un telefono largo 390px starebbe in venti
  pixel d'altezza e l'emblema europeo non si leggerebbe. Separati, i marchi
  vanno a capo e restano leggibili;
- la frase cotta dentro il PNG è in un carattere che non è quello della
  landing, e non si può selezionare, tradurre o leggere con uno screen reader.
  In pagina è testo vero, da `footer.fesr` nei dizionari.

## Come sono stati ricavati

Dalla striscia originale, ritagliando la banda dei marchi (y 1481–1763 nel
PNG a 6000x3375), poi ogni marchio per la sua colonna, rifilato sul contenuto
e portato a 200px di altezza. In pagina sono tutti alla **stessa altezza**:
è il modo standard di allineare marchi diversi, e tiene l'emblema europeo
grande quanto gli altri.

## Cosa non si può fare

I marchi istituzionali **non si ricolorano e non si invertono**. Per questo
stanno su un pannello bianco invece che direttamente sul fondo scuro del
footer: sull'inchiostro «COESIONE ITALIA» e «REGIONE LAZIO» sono blu scuro su
quasi nero e spariscono.

## Da verificare con Lazio Innova

La dimensione minima dell'emblema europeo. Il regolamento parla di un emblema
«ben visibile» e, per i siti web, non più piccolo del più grande degli altri
loghi presenti. In pagina i marchi sono alti 30–40px, mentre i loghi dei
promotori nella sezione «Un programma di» arrivano a 88px. Se la
rendicontazione chiede una proporzione diversa, qui si cambia una riga di
`height` in `concept.css`.
