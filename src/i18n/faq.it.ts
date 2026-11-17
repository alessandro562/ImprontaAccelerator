/**
 * Le FAQ del sito, dal documento «FAQ Impronta Accelerator».
 *
 * Generato da `scripts/docx_a_testi.py` a partire da 202610_FAQ_Impronta_Accelerator.docx.
 * Non si modifica a mano: il testo e' quello del documento, e una
 * correzione va fatta nel documento e rilanciata, altrimenti alla
 * prossima rigenerazione si perde.
 */
import type { GruppoFaq } from './tipi';

export const faqIt: GruppoFaq[] = [
  {
    titolo: "Il programma",
    domande: [
      {
        q: "Cos’è IMPRONTA Accelerator?",
        r: [
          {
            p: "È il programma di accelerazione e investimento per startup a impatto promosso da Next4 Group, con WDA ed ELIS Innovation Hub come partner operativi. Ha sede a Villa Fassini, a Roma, e rientra in Venture Tech Lazio, il fondo gestito da Lazio Innova per conto della Regione Lazio e cofinanziato dall’Unione europea con il PR FESR Lazio 2021-2027.",
          },
        ],
      },
      {
        q: "Cosa offre a una startup?",
        r: [
          {
            p: "Un investimento di 150.000 € in equity e quattro mesi di accelerazione con WDA ed ELIS Innovation Hub, tra moduli operativi e mentorship uno a uno, che si chiudono con un Demo Day davanti a imprese, investitori e istituzioni. Dopo il Demo Day, da tre a sei mesi di Solution Integration, con proof of concept insieme ai partner corporate, e di coaching. Per tutto il percorso, gli spazi di Villa Fassini e il network dei partner.",
          },
        ],
      },
      {
        q: "Quante startup selezionate?",
        r: [
          {
            p: "Fino a 12 in tutto, con un batch all’anno. Il batch 2026 prevede fino a sei startup.",
          },
        ],
      },
      {
        q: "Quando parte il batch 2026?",
        r: [
          {
            p: "Le candidature sono aperte fino a dicembre 2026 e dalla candidatura all’avvio del programma passano circa nove settimane. La data di partenza sarà pubblicata sul sito. Il percorso dura quattro mesi e si chiude con il Demo Day.",
          },
        ],
      },
    ],
  },
  {
    titolo: "Chi può candidarsi",
    domande: [
      {
        q: "Chi può candidarsi? Serve una società già costituita?",
        r: [
          {
            p: "Possono candidarsi startup già costituite come S.r.l. o S.p.A., ma anche team imprenditoriali, spin-off universitari e gruppi di ricerca non ancora costituiti. In questo caso ci si candida come team e la società va costituita prima dell’investimento. Già in candidatura serve un team con competenze complementari e un impegno reale sul progetto.",
          },
        ],
      },
      {
        q: "Quali sono i requisiti principali?",
        r: [
          {
            p: "Alla data della delibera di investimento la startup deve:",
          },
          {
            elenco: {
              tipo: "pun",
              voci: [
                {
                  testo: "essere una piccola impresa non quotata, iscritta al Registro delle Imprese da non più di cinque anni, che non ha distribuito utili;",
                },
                {
                  testo: "avere come attività principale, anche solo nel business plan, un ambito della Strategia di specializzazione intelligente del Lazio (RIS3);",
                },
                {
                  testo: "avere una sede operativa nel Lazio, che può essere aperta anche dopo la candidatura ma prima dell’erogazione;",
                },
                {
                  testo: "svolgere nel Lazio la maggior parte della propria attività, con almeno un socio fondatore con ruolo operativo a tempo pieno nel Lazio;",
                },
                {
                  testo: "non aver ricevuto in passato investimenti da Next4 Group e non essere legata a Next4 Group;",
                },
                {
                  testo: "non essere un’impresa in difficoltà e non operare in settori esclusi dalla normativa europea.",
                },
              ],
            },
          },
          {
            p: ["Il dettaglio è nel ", { t: "regolamento", href: "page:regolamento" }, "."],
          },
        ],
      },
      {
        q: "Devo avere già una sede nel Lazio?",
        r: [
          {
            p: "Non per candidarti. In candidatura dichiari la sede operativa nel Lazio o l’impegno ad aprirla, e la sede va aperta, con evidenza nel Registro delle Imprese, prima dell’erogazione dell’investimento. È una condizione sospensiva, verificata con la visura camerale: senza sede attiva nel Lazio l’investimento non viene erogato.",
          },
        ],
      },
      {
        q: "Devo trasferirmi a Roma? Devo stare tutti i giorni a Villa Fassini?",
        r: [
          {
            p: "No, non serve essere a Villa Fassini tutti i giorni: la presenza è richiesta in determinati momenti del programma. Tra i requisiti c’è però almeno un socio fondatore, con ruolo operativo, che lavori a tempo pieno nel Lazio.",
          },
        ],
      },
      {
        q: "Posso candidarmi da un’altra regione o dall’estero?",
        r: [
          {
            p: "Sì, se la startup apre una sede operativa nel Lazio prima dell’erogazione e rispetta gli altri requisiti, compreso il socio fondatore operativo a tempo pieno nel Lazio.",
          },
        ],
      },
      {
        q: "A che stadio di maturità devo essere?",
        r: [
          {
            p: "La soglia minima è TRL 3: una prova sperimentale del concetto, qualcosa che funziona in laboratorio e non solo un’idea su carta. Il programma è pensato per startup pre-seed e seed.",
          },
        ],
      },
      {
        q: "Quali settori?",
        r: [
          {
            p: "Quattro aree d’impatto:",
          },
          {
            elenco: {
              tipo: "pun",
              voci: [
                {
                  testo: [{ t: "Ambiente:", b: true }, " cleantech, agritech, bioplastiche, idrogeno verde, energie rinnovabili, gestione delle risorse naturali."],
                },
                {
                  testo: [{ t: "Salute:", b: true }, " sanità digitale, biotecnologie, tecnologie assistive, benessere e riabilitazione."],
                },
                {
                  testo: [{ t: "Industria:", b: true }, " robotica, sensoristica, intelligenza artificiale per la manifattura, manifattura sostenibile."],
                },
                {
                  testo: [{ t: "Sociale:", b: true }, " inclusione, educazione, servizi di comunità, economia sociale."],
                },
              ],
            },
          },
          {
            p: "Dentro questi ambiti la tecnologia è libera, purché l’impatto sia parte del modello di business.",
          },
        ],
      },
      {
        q: "Cosa significa impatto misurabile?",
        r: [
          {
            p: "Che l’impatto sociale, ambientale o industriale è integrato nel modello di business e non è un’attività a margine. Gli obiettivi d’impatto si fissano all’ingresso nel programma e si verificano alla fine, con la metodologia SROI (Social Return on Investment), che traduce in valore economico i cambiamenti generati.",
          },
        ],
      },
      {
        q: "Posso candidarmi se ho già degli investitori?",
        r: [
          {
            p: "Sì, a meno che tra loro ci sia Next4 Group. In selezione verifichiamo che gli aiuti pubblici già ricevuti come startup restino nei limiti previsti dall’avviso Venture Tech Lazio.",
          },
        ],
      },
    ],
  },
  {
    titolo: "L’investimento",
    domande: [
      {
        q: "Quanto investite e a quali condizioni?",
        r: [
          {
            p: "150.000 € in equity all’avvio del percorso. Al termine, un numero limitato di startup può ricevere un follow-on da 200.000 €, per un investimento complessivo fino a 350.000 €. Il follow-on non è automatico: contano le milestone raggiunte, la validazione di mercato (proof of concept, clienti pilota, lettere d’intento o primi ricavi), un team rafforzato con founder a tempo pieno e la coerenza con gli obiettivi d’impatto.",
          },
        ],
      },
      {
        q: "Chi investe?",
        r: [
          {
            p: "Next4 Group, con risorse proprie (45.000 €) e del fondo pubblico Venture Tech Lazio (105.000 €).",
          },
        ],
      },
      {
        q: "Con quale strumento investite?",
        r: [
          {
            p: "Con un SAFE (Simple Agreement for Future Equity): un versamento in conto futuro aumento di capitale che si converte in quote della società entro 18 mesi.",
          },
        ],
      },
      {
        q: "Che quota della società chiedete?",
        r: [
          {
            p: "Dipende da quando arriva il prossimo round:",
          },
          {
            elenco: {
              tipo: "pun",
              voci: [
                {
                  testo: "se entro 18 mesi la startup chiude un aumento di capitale con investitori terzi, il SAFE si converte alla valutazione di quel round con uno sconto del 20%, e la quota di Next4 Group non può essere inferiore all’8% del capitale fully diluted;",
                },
                {
                  testo: "se entro 18 mesi non c’è un round, il SAFE si converte automaticamente nel 12% del capitale fully diluted.",
                },
              ],
            },
          },
        ],
      },
      {
        q: "Quando arriva l’investimento?",
        r: [
          {
            p: "In un’unica soluzione alla firma del SAFE, all’avvio del percorso, dopo la verifica delle condizioni sospensive, a partire dalla sede operativa nel Lazio.",
          },
        ],
      },
      {
        q: "Il programma ha un costo?",
        r: [
          {
            p: "La candidatura è gratuita. Per le startup selezionate, i servizi del programma (incubazione, mentorship, coaching e uso degli spazi di Villa Fassini) hanno un corrispettivo massimo di 45.000 € IVA inclusa, fatturato solo dopo che i servizi sono stati erogati. La startup rimborsa anche le spese documentate dell’operazione di investimento, fino al minore tra il 5% dell’investimento e 15.000 €.",
          },
        ],
      },
    ],
  },
  {
    titolo: "La candidatura e la selezione",
    domande: [
      {
        q: "Come mi candido?",
        r: [
          {
            p: "Sulla piattaforma ELIS OneSquare, dal pulsante “Candidati” del sito:",
          },
          {
            elenco: {
              tipo: "num",
              voci: [
                {
                  testo: "ti registri e associ il progetto (se la società non è ancora costituita, indichi il team);",
                },
                {
                  testo: "compili il form su team, tecnologia, impatto atteso, mercato e fabbisogno finanziario;",
                },
                {
                  testo: "carichi il pitch deck, i CV dei founder e la dichiarazione sulla sede operativa nel Lazio; se la società è già costituita, anche la visura camerale e la composizione del capitale aggiornate.",
                },
              ],
            },
          },
        ],
      },
      {
        q: "Entro quando?",
        r: [
          {
            p: "Le candidature sono aperte fino a dicembre 2026. La data esatta di chiusura sarà pubblicata sul sito e su OneSquare.",
          },
        ],
      },
      {
        q: "Come funziona la selezione?",
        r: [
          {
            elenco: {
              tipo: "num",
              voci: [
                {
                  testo: "Verifica dei requisiti sulla candidatura.",
                },
                {
                  testo: "Preselezione di WDA ed ELIS Innovation Hub, con un’intervista online su team, tecnologia e mercato.",
                },
                {
                  testo: "Incontro uno a uno con l’Advisory Board.",
                },
                {
                  testo: "Proposta di investimento (term sheet) e delibera del consiglio di amministrazione di Next4 Group.",
                },
                {
                  testo: "Verifica delle condizioni sospensive e firma del SAFE.",
                },
                {
                  testo: "Avvio del programma ed erogazione dell’investimento.",
                },
              ],
            },
          },
          {
            p: "In tutto, circa nove settimane dalla candidatura.",
          },
        ],
      },
      {
        q: "Come valutate le candidature?",
        r: [
          {
            p: "Su sei criteri: maturità tecnologica, impatto misurabile, coerenza con le aree del programma, scalabilità e potenziale per i round successivi, complementarità con i partner corporate, competenze e impegno del team.",
          },
        ],
      },
      {
        q: "Chi fa parte dell’Advisory Board?",
        r: [
          {
            p: "Esperti indipendenti di sanità digitale, transizione energetica, manifattura e trasferimento tecnologico, venture building, coordinati da un rappresentante di Venture Tech Lazio.",
          },
        ],
      },
    ],
  },
  {
    titolo: "Il percorso",
    domande: [
      {
        q: "Cosa si fa nei quattro mesi?",
        r: [
          {
            p: "Moduli su impact plan personale, design thinking e MVP, modello di business, marketing e vendite, misurazione dell’impatto e market discovery con i partner corporate, più ore di mentorship uno a uno con mentor ed esperti di WDA ed ELIS Innovation Hub.",
          },
        ],
      },
      {
        q: "Cosa succede dopo il Demo Day?",
        r: [
          {
            p: "Le startup scelte dai partner corporate avviano con loro un proof of concept o un accordo di sviluppo congiunto, fino a 24 settimane. In parallelo, da tre a sei mesi di coaching su finanza, operations, go-to-market e raccolta.",
          },
        ],
      },
      {
        q: "Quanto impegno richiede?",
        r: [
          {
            p: "La partecipazione al programma è obbligatoria: non è un investimento passivo. Servono un socio fondatore pienamente dedicato e la presenza a Villa Fassini nei momenti chiave. Durante il percorso puoi lavorare nel coworking di Villa Fassini.",
          },
        ],
      },
      {
        q: "Le informazioni che condivido restano riservate?",
        r: [
          {
            p: "Sì. I materiali della candidatura sono trattati in via riservata e usati solo per la selezione e per il programma, e la proprietà intellettuale resta della startup.",
          },
        ],
      },
    ],
  },
  {
    titolo: "Contatti",
    domande: [
      {
        q: "A chi scrivo per altre domande?",
        r: [
          {
            p: ["A ", { t: "info@improntaaccelerator.it", href: "mailto:info@improntaaccelerator.it" }, "."],
          },
        ],
      },
    ],
  },
];
