/**
 * Il regolamento della call, dal documento «Regolamento Impronta Accelerator».
 *
 * Generato da `scripts/docx_a_testi.py` a partire da 202610_Regolamento_Impronta_Accelerator.docx.
 * Non si modifica a mano: il testo e' quello del documento, e una
 * correzione va fatta nel documento e rilanciata, altrimenti alla
 * prossima rigenerazione si perde.
 */
import type { Articolo } from './tipi';

export const articoliIt: Articolo[] = [
  {
    n: 1,
    titolo: "Oggetto e finalità",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Il presente regolamento disciplina la call per la selezione delle startup del batch 2026 di IMPRONTA Accelerator (di seguito il “Programma”), il programma di accelerazione e investimento dedicato alle startup a impatto che operano o intendono operare nel Lazio.",
            },
            {
              testo: "Il Programma sostiene startup con soluzioni tecnologiche capaci di generare un impatto ambientale, sociale o tecnologico-industriale misurabile e integrato nel modello di business, insieme a un potenziale di crescita economica.",
            },
            {
              testo: "Il Programma unisce un investimento in equity, un percorso di accelerazione di quattro mesi con Demo Day e una fase successiva di sperimentazione con i partner corporate e di coaching.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 2,
    titolo: "Soggetti promotori e finanziamento",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Il Programma è promosso da Next4Production S.r.l. (di seguito “Next4 Group”), in qualità di Investitore Attivo e soggetto responsabile del Programma.",
            },
            {
              testo: "WDA S.r.l. ed ELIS Innovation Hub S.r.l. partecipano come partner operativi per lo scouting, l’accelerazione e il trasferimento tecnologico.",
            },
            {
              testo: "Il Programma è realizzato nell’ambito di Venture Tech Lazio, il fondo gestito da Lazio Innova S.p.A. per conto della Regione Lazio nella sezione FARE Venture 2 del Fondo FARE Lazio, cofinanziato dall’Unione europea nell’ambito del PR FESR Lazio 2021-2027 (di seguito “VTL”), CUP F88D23001340009. Next4 Group investe nelle Startup con risorse proprie e con le risorse di VTL, secondo il rapporto di co-investimento previsto dall’avviso pubblico Venture Tech Lazio pubblicato sul BURL n. 52 del 1° luglio 2025 (di seguito l’“Avviso”) e dal contratto tra Next4 Group e Lazio Innova.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 3,
    titolo: "Definizioni",
    blocchi: [
      {
        p: "Ai fini del presente regolamento si intende per:",
      },
      {
        elenco: {
          tipo: "pun",
          voci: [
            {
              testo: [{ t: "Startup:", b: true }, " la società, costituita o da costituire, che presenta la candidatura;"],
            },
            {
              testo: [{ t: "Team proponente:", b: true }, " il gruppo di persone che presenta la candidatura per una società non ancora costituita;"],
            },
            {
              testo: [{ t: "Candidatura:", b: true }, " la domanda di partecipazione presentata sulla piattaforma OneSquare;"],
            },
            {
              testo: [{ t: "Advisory Board:", b: true }, " il comitato di esperti indipendenti, coordinato da un rappresentante di VTL, che valuta le candidature preselezionate;"],
            },
            {
              testo: [{ t: "Comitato Investimenti:", b: true }, " l’organo che delibera sugli investimenti del Programma, rappresentato dal consiglio di amministrazione di Next4 Group;"],
            },
            {
              testo: [{ t: "Proposta di investimento:", b: true }, " il term sheet con cui Next4 Group propone alla Startup le condizioni dell’investimento;"],
            },
            {
              testo: [{ t: "Contratto di investimento:", b: true }, " il SAFE e i patti parasociali tra Next4 Group, la Startup e i soci fondatori che disciplinano l’investimento;"],
            },
            {
              testo: [{ t: "Scheda di monitoraggio:", b: true }, " il documento che registra la situazione iniziale della Startup e fissa milestone e indicatori di avanzamento e di impatto;"],
            },
            {
              testo: [{ t: "Solution Integration:", b: true }, " la fase successiva al Demo Day in cui le Startup individuate dai partner corporate sviluppano con loro un proof of concept o un accordo di sviluppo congiunto."],
            },
          ],
        },
      },
    ],
  },
  {
    n: 4,
    titolo: "Destinatari",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Possono candidarsi:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "startup costituite in forma di società a responsabilità limitata o di società per azioni;",
                  },
                  {
                    testo: "team imprenditoriali, spin-off universitari e gruppi di ricerca non ancora costituiti in società, che si impegnano a costituire una S.r.l. o una S.p.A. almeno cinque giorni lavorativi prima della delibera di investimento.",
                  },
                ],
              },
            },
            {
              testo: "Il Programma si rivolge a iniziative in fase pre-seed o seed iniziale, con una maturità tecnologica pari almeno a TRL 3 (prova sperimentale del concetto).",
            },
            {
              testo: ["Possono candidarsi anche Startup e team di altre regioni o di altri Paesi, purché rispettino i requisiti dell’", { t: "art. 5", href: "#art-5" }, " entro i termini indicati."],
            },
          ],
        },
      },
    ],
  },
  {
    n: 5,
    titolo: "Requisiti di ammissibilità",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Alla data della delibera di investimento la Startup deve, cumulativamente:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "essere una piccola impresa non quotata, iscritta al Registro delle Imprese da non più di cinque anni, che non ha distribuito utili, ai sensi dell’art. 22 del Regolamento (UE) 2023/1315;",
                  },
                  {
                    testo: "avere come oggetto sociale principale, o prevedere nel business plan, un’attività rientrante nella Strategia di specializzazione intelligente della Regione Lazio (RIS3);",
                  },
                  {
                    testo: "avere almeno una sede operativa nel Lazio, risultante dal Registro delle Imprese; se la sede non è ancora aperta, l’apertura deve essere prevista nel business plan e avvenire prima dell’erogazione dell’investimento;",
                  },
                  {
                    testo: "prevedere nel business plan che la maggior parte della propria attività operativa, e la maggioranza dei nuovi dipendenti, si svolga nel Lazio;",
                  },
                  {
                    testo: "prevedere che almeno uno dei soci fondatori con un ruolo operativo lavori a tempo pieno nel Lazio;",
                  },
                  {
                    testo: "non essere parte correlata di Next4 Group né aver ricevuto, a qualsiasi titolo, un precedente investimento da Next4 Group;",
                  },
                  {
                    testo: "non essere un’impresa in difficoltà, come definita dall’art. 2, punto 18, del Regolamento (UE) 2023/1315;",
                  },
                  {
                    testo: "non operare né intendere operare nei settori esclusi dall’allegato V, lettera B, del Regolamento (UE) 2021/523 (InvestEU) o dall’art. 7 del Regolamento (UE) 2021/1058;",
                  },
                  {
                    testo: "possedere i requisiti di ammissibilità dell’Appendice 2 dell’Avviso, tra cui la regolarità contributiva (DURC), il rispetto della normativa antimafia e l’assenza delle condanne e delle sanzioni ivi indicate;",
                  },
                  {
                    testo: "essere in regola, se tenuta, con l’obbligo di assicurazione contro i rischi catastrofali di cui all’art. 1, commi 101-111, della legge 213/2023;",
                  },
                  {
                    testo: "impegnarsi a restare una piccola impresa entro cinque anni dalla costituzione;",
                  },
                  {
                    testo: "non avere, nello stesso round di investimento, altri investitori che usano risorse del PNRR.",
                  },
                ],
              },
            },
            {
              testo: "La quota di VTL investita nella Startup, sommata agli altri aiuti di Stato ricevuti ai sensi dell’art. 22 del Regolamento (UE) 2023/1315, non può superare 500.000 €. In fase di selezione la Startup dichiara gli aiuti già ricevuti.",
            },
            {
              testo: "I requisiti sono dichiarati dalla Startup con dichiarazione sostitutiva ai sensi del D.P.R. 445/2000 e verificati prima della delibera di investimento e prima dell’erogazione. Devono essere mantenuti per tutta la durata dell’investimento.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 6,
    titolo: "Ambiti di impatto",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Il Programma è aperto a tutti gli ambiti tecnologici. È determinante la capacità della soluzione di generare un impatto misurabile, integrato nel modello di business, in uno dei seguenti ambiti:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: [{ t: "Ambiente:", b: true }, " cleantech, agritech, bioplastiche, idrogeno verde, energie rinnovabili e gestione sostenibile delle risorse naturali;"],
                  },
                  {
                    testo: [{ t: "Salute:", b: true }, " sanità digitale, biotecnologie, tecnologie assistive, benessere e riabilitazione;"],
                  },
                  {
                    testo: [{ t: "Industria:", b: true }, " robotica, sensoristica, intelligenza artificiale per la manifattura, manifattura sostenibile;"],
                  },
                  {
                    testo: [{ t: "Sociale:", b: true }, " inclusione, educazione, servizi di comunità, economia sociale."],
                  },
                ],
              },
            },
            {
              testo: "Gli obiettivi di impatto sono definiti all’ingresso nel Programma e misurati con la metodologia SROI (Social Return on Investment).",
            },
          ],
        },
      },
    ],
  },
  {
    n: 7,
    titolo: "Il Programma",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Il Programma prevede, per ciascun batch:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "un percorso di accelerazione di quattro mesi, con moduli su impact plan personale, design thinking e MVP, modello di business, marketing strategico, tecniche di vendita, misurazione dell’impatto, market discovery e proposta ai partner corporate, e ore di mentorship individuale con mentor ed esperti del network di ELIS Innovation Hub e WDA;",
                  },
                  {
                    testo: "un Demo Day finale davanti a imprese, investitori e istituzioni;",
                  },
                  {
                    testo: "dopo il Demo Day, da tre a sei mesi di Solution Integration, fino a 24 settimane, per le Startup individuate dai partner corporate, e in parallelo un percorso di coaching su finanza, operations, marketing, sviluppo commerciale e raccolta di capitali.",
                  },
                ],
              },
            },
            {
              testo: "Le attività si svolgono a Villa Fassini, Via Giuseppe Donati 174, Roma, e in parte a distanza. Durante il Programma le Startup possono usare gli spazi di coworking di Villa Fassini.",
            },
            {
              testo: "La partecipazione alla Solution Integration dipende dall’interesse dei partner corporate e non è garantita a tutte le Startup.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 8,
    titolo: "Investimento",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Per ciascuna Startup selezionata è previsto un investimento iniziale di 150.000 € (centocinquantamila euro), di cui 45.000 € di risorse proprie di Next4 Group e 105.000 € di risorse di VTL. Le partecipazioni sono intestate a Next4 Group.",
            },
            {
              testo: "L’investimento avviene tramite SAFE (Simple Agreement for Future Equity), cioè un versamento in conto futuro aumento di capitale che si converte in partecipazioni di nuova emissione:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "al primo aumento di capitale qualificato sottoscritto da investitori terzi entro 18 mesi, alla valutazione pre-money di quell’aumento scontata del 20%, con una partecipazione minima di Next4 Group pari all’8% del capitale fully diluted;",
                  },
                  {
                    testo: "in assenza di aumento qualificato, alla scadenza dei 18 mesi, in una partecipazione pari al 12% del capitale fully diluted.",
                  },
                ],
              },
            },
            {
              testo: ["L’investimento è versato in un’unica soluzione alla firma del SAFE, all’avvio del percorso di accelerazione, dopo la verifica delle condizioni sospensive dell’", { t: "art. 13", href: "#art-13" }, "."],
            },
            {
              testo: "La Startup rimborsa a Next4 Group le spese documentate dell’operazione entro il minore tra il 5% dell’investimento e 15.000 €.",
            },
            {
              testo: "Gli altri termini dell’investimento sono definiti nella Proposta di investimento e nel Contratto di investimento.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 9,
    titolo: "Servizi del Programma",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "I servizi di accelerazione, mentorship, coaching e l’uso degli spazi di Villa Fassini sono resi alle Startup selezionate dai partner operativi per conto di Next4 Group.",
            },
            {
              testo: "Per i servizi del Programma la Startup riconosce a Next4 Group un corrispettivo massimo di 45.000 € IVA inclusa, disciplinato da un separato contratto di servizi e fatturato solo dopo l’effettiva erogazione dei servizi. Il corrispettivo riguarda solo l’investimento iniziale.",
            },
            {
              testo: ["Il follow-on dell’", { t: "art. 14", href: "#art-14" }, " non comporta ulteriori corrispettivi per servizi."],
            },
          ],
        },
      },
    ],
  },
  {
    n: 10,
    titolo: "Modalità e termini di candidatura",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: ["La candidatura si presenta esclusivamente online, sulla piattaforma OneSquare di ELIS (", { t: "onesquare.elis.org/challenge/24", href: "https://onesquare.elis.org/challenge/24" }, "). Le candidature sono aperte fino a dicembre 2026; la data di chiusura ed eventuali proroghe sono pubblicate sul sito del Programma."],
            },
            {
              testo: "Per candidarsi occorre:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "registrarsi su OneSquare e associare il progetto; per le società non ancora costituite si indica il Team proponente;",
                  },
                  {
                    testo: "compilare il modulo di candidatura con le informazioni su team, tecnologia e maturità tecnologica (TRL), impatto atteso, mercato, modello di business e fabbisogno finanziario;",
                  },
                  {
                    testo: "allegare il pitch deck in formato PDF, i CV dei soci fondatori e la dichiarazione sostitutiva sulla sede operativa nel Lazio, esistente o da aprire; per le società già costituite, anche la visura camerale e la composizione del capitale sociale aggiornate.",
                  },
                ],
              },
            },
            {
              testo: "Ogni Startup o Team proponente può presentare una sola candidatura. Le candidature incomplete o presentate oltre il termine non sono ammesse.",
            },
            {
              testo: "La candidatura è gratuita.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 11,
    titolo: "Selezione",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "La selezione si svolge in più fasi:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: [{ t: "verifica di ammissibilità", b: true }, " dei requisiti formali;"],
                  },
                  {
                    testo: [{ t: "preselezione", b: true }, ", coordinata da WDA con ELIS Innovation Hub, sulla base dello Startup Readiness Framework (team, prodotto e tecnologia, mercato), con un’intervista online;"],
                  },
                  {
                    testo: [{ t: "incontro uno a uno con l’Advisory Board", b: true }, ", che svolge una due diligence qualitativa e redige la Scheda di monitoraggio;"],
                  },
                  {
                    testo: [{ t: "Proposta di investimento", b: true }, " alla Startup e sua accettazione;"],
                  },
                  {
                    testo: [{ t: "delibera", b: true }, " del Comitato Investimenti e verifica delle condizioni sospensive dell’", { t: "art. 13", href: "#art-13" }, ";"],
                  },
                  {
                    testo: [{ t: "firma del SAFE, avvio del Programma", b: true }, " ed erogazione dell’investimento."],
                  },
                ],
              },
            },
            {
              testo: "Dalla candidatura all’avvio del Programma passano indicativamente nove settimane.",
            },
            {
              testo: "Gli esiti di ciascuna fase sono comunicati via email al referente indicato nella candidatura. Le valutazioni sono discrezionali e insindacabili.",
            },
            {
              testo: "Nel batch 2026 sono selezionate fino a sei Startup. I promotori non sono tenuti a selezionare un numero minimo di Startup.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 12,
    titolo: "Criteri di valutazione",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Le candidature sono valutate sui seguenti criteri:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "innovazione tecnologica e maturità, coerente con le fasi pre-seed e seed;",
                  },
                  {
                    testo: "impatto generato: capacità di produrre effetti sociali, ambientali o economici misurabili, in linea con la RIS3 Lazio 2021-2027;",
                  },
                  {
                    testo: ["coerenza con gli ambiti di impatto dell’", { t: "art. 6", href: "#art-6" }, " e potenziale di adozione industriale;"],
                  },
                  {
                    testo: "scalabilità e capacità di attrarre capitali nei round successivi;",
                  },
                  {
                    testo: "complementarità con le competenze, le filiere e i network dei partner del Programma;",
                  },
                  {
                    testo: "team: competenze coerenti, impegno operativo e, ove presenti, esperienze rilevanti nel settore.",
                  },
                ],
              },
            },
            {
              testo: "I criteri sono valutati in modo integrato e concorrono complessivamente al giudizio.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 13,
    titolo: "Condizioni sospensive",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "L’efficacia dell’investimento è subordinata a:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "la costituzione della società in forma di S.r.l. o S.p.A., per i Team proponenti, almeno cinque giorni lavorativi prima della delibera di investimento;",
                  },
                  {
                    testo: "l’apertura di una sede operativa nel Lazio, risultante dal Registro delle Imprese e attestata con visura camerale aggiornata;",
                  },
                  {
                    testo: ["la verifica dei requisiti dell’", { t: "art. 5", href: "#art-5" }, ";"],
                  },
                  {
                    testo: "l’esito positivo delle verifiche antimafia, del casellario giudiziale, della regolarità contributiva e fiscale e del Registro Nazionale degli Aiuti;",
                  },
                  {
                    testo: "la firma del Contratto di investimento e del contratto di servizi del Programma, che comporta l’obbligo di partecipare integralmente al Programma.",
                  },
                ],
              },
            },
            {
              testo: "Se le condizioni non si verificano, la Startup decade dall’investimento e dall’ammissione al Programma.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 14,
    titolo: "Follow-on",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Al termine del percorso, Next4 Group può deliberare un investimento follow-on di 200.000 € per un numero limitato di Startup (fino a due nell’intero Programma), per un investimento complessivo fino a 350.000 € per Startup.",
            },
            {
              testo: "Il follow-on non è automatico. È valutato dal team del Programma e dall’Advisory Board sulla base di:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "avanzamento tecnico e organizzativo, con il raggiungimento di almeno il 70% delle milestone della Scheda di monitoraggio;",
                  },
                  {
                    testo: "validazione di mercato, come clienti pilota, lettere d’intento, primi ricavi o partnership industriali;",
                  },
                  {
                    testo: "rafforzamento del team, con soci fondatori a tempo pieno e competenze complementari;",
                  },
                  {
                    testo: "sostenibilità finanziaria e impatto misurabile.",
                  },
                ],
              },
            },
            {
              testo: ["Può accedere al follow-on solo la Startup che mantiene i requisiti dell’", { t: "art. 5", href: "#art-5" }, "."],
            },
          ],
        },
      },
    ],
  },
  {
    n: 15,
    titolo: "Obblighi delle Startup selezionate",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Le Startup selezionate si impegnano a:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "partecipare integralmente al Programma, con almeno un socio fondatore dedicato e la presenza a Villa Fassini nei momenti indicati nel calendario;",
                  },
                  {
                    testo: "fornire informazioni veritiere e aggiornate sull’andamento della società, sugli indicatori della Scheda di monitoraggio e sui dati necessari alla misurazione dell’impatto;",
                  },
                  {
                    testo: "rispettare gli obblighi di informazione e pubblicità sul cofinanziamento dell’Unione europea e della Regione Lazio, pubblicando sul proprio sito una sintetica informativa e i loghi previsti;",
                  },
                  {
                    testo: "prestare il consenso alla pubblicazione dei dati richiesti dalla normativa sulla trasparenza degli aiuti pubblici e consentire i controlli di Lazio Innova, della Regione Lazio e degli organismi di audit nazionali ed europei;",
                  },
                  {
                    testo: "partecipare, su richiesta, agli eventi di Lazio Innova e della Regione Lazio dedicati agli investimenti di VTL;",
                  },
                  {
                    testo: "mantenere per tutta la durata dell’investimento la sede operativa e la maggior parte degli addetti nel Lazio e rispettare il business plan, concordando con Next4 Group eventuali variazioni;",
                  },
                  {
                    testo: ["comunicare tempestivamente ogni variazione dei requisiti dell’", { t: "art. 5", href: "#art-5" }, "."],
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  {
    n: 16,
    titolo: "Riservatezza",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Le informazioni e i documenti trasmessi con la candidatura sono trattati in via riservata e usati solo per la selezione e la gestione del Programma, fermi gli obblighi di comunicazione a Lazio Innova, alla Regione Lazio e agli organismi di controllo.",
            },
            {
              testo: "Le Startup si impegnano a mantenere riservate le informazioni non pubbliche ricevute durante il Programma da promotori, partner corporate e altre Startup. L’obbligo resta valido anche dopo la conclusione del Programma.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 17,
    titolo: "Proprietà intellettuale",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "La partecipazione alla call e al Programma non comporta alcun trasferimento di proprietà intellettuale: quanto presentato e sviluppato resta di titolarità della Startup.",
            },
            {
              testo: "Con il consenso della Startup selezionata, i promotori possono usarne nome, logo e una breve descrizione del progetto per comunicare il Programma.",
            },
            {
              testo: "Gli accordi con i partner corporate durante la Solution Integration, compresa la proprietà intellettuale dei risultati, sono disciplinati da contratti separati.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 18,
    titolo: "Trattamento dei dati personali",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "I dati personali sono trattati ai sensi del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003, per la gestione della call e del Programma.",
            },
            {
              testo: ["Il titolare del trattamento è Next4Production S.r.l. I dati possono essere comunicati ai partner operativi coinvolti nella selezione e agli organi previsti dall’Avviso. Le candidature presentate su OneSquare sono trattate anche secondo l’informativa mostrata sulla piattaforma al momento della compilazione. L’informativa completa è pubblicata alla pagina ", { t: "improntaaccelerator.it/privacy", href: "page:privacy" }, "."],
            },
            {
              testo: ["Gli interessati possono esercitare i diritti previsti dagli artt. 15-22 del GDPR scrivendo a ", { t: "info@improntaaccelerator.it", href: "mailto:info@improntaaccelerator.it" }, " e proporre reclamo al Garante per la protezione dei dati personali."],
            },
          ],
        },
      },
    ],
  },
  {
    n: 19,
    titolo: "Esclusione e decadenza",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "Sono causa di esclusione dalla selezione o di decadenza dal Programma e dall’investimento, senza diritto a indennizzi:",
              sotto: {
                tipo: "let",
                voci: [
                  {
                    testo: "dichiarazioni false o mendaci;",
                  },
                  {
                    testo: ["la perdita di uno dei requisiti dell’", { t: "art. 5", href: "#art-5" }, ";"],
                  },
                  {
                    testo: ["il mancato verificarsi delle condizioni sospensive dell’", { t: "art. 13", href: "#art-13" }, ";"],
                  },
                  {
                    testo: "la violazione del presente regolamento o degli obblighi di riservatezza;",
                  },
                  {
                    testo: "la mancata partecipazione al Programma senza giustificato motivo.",
                  },
                ],
              },
            },
            {
              testo: "Non possono candidarsi le Startup in cui siano soci o amministratori dipendenti, amministratori o membri degli organi di valutazione dei promotori, o loro parenti entro il secondo grado.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 20,
    titolo: "Limitazione di responsabilità",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "I promotori non rispondono di malfunzionamenti della piattaforma OneSquare o di altri eventi tecnici che impediscano la presentazione della candidatura nei termini.",
            },
            {
              testo: ["La partecipazione alla call non dà diritto all’investimento né ad altre utilità. L’investimento è subordinato alle delibere dell’", { t: "art. 11", href: "#art-11" }, " e alla firma del Contratto di investimento."],
            },
          ],
        },
      },
    ],
  },
  {
    n: 21,
    titolo: "Modifiche",
    blocchi: [
      {
        elenco: {
          tipo: "num",
          voci: [
            {
              testo: "I promotori possono modificare, prorogare, sospendere o annullare la call per esigenze organizzative, per motivi di forza maggiore o per adeguarla a indicazioni di Lazio Innova o della Regione Lazio.",
            },
            {
              testo: "Le modifiche sono pubblicate sul sito del Programma e diventano efficaci dalla pubblicazione.",
            },
          ],
        },
      },
    ],
  },
  {
    n: 22,
    titolo: "Legge applicabile e foro",
    blocchi: [
      {
        p: "Il presente regolamento è disciplinato dalla legge italiana. Per ogni controversia è competente in via esclusiva il Foro di Roma.",
      },
    ],
  },
  {
    n: 23,
    titolo: "Contatti",
    blocchi: [
      {
        p: ["Per informazioni: ", { t: "info@improntaaccelerator.it", href: "mailto:info@improntaaccelerator.it" }, "."],
      },
    ],
  },
];
