/**
 * Copy della landing, dal concept `docs/concept/impronta-landing-v2.html`.
 *
 * Dove il concept mette un accento in corsivo o una parola in evidenza, il
 * testo e' spezzato in campi (`accent`, `strong`) invece che in HTML: cosi' la
 * traduzione resta allineata e nessun componente contiene stringhe visibili.
 */
export const it = {
  meta: {
    locale: "it_IT",
    title: "Impronta — Acceleratore d’impatto",
    description:
      "Impronta accelera ogni anno sei startup e spin-off con tecnologie a impatto su ambiente, salute e industria. Quattro mesi a Roma e un investimento di €150.000.",
    ogImage: "og-image.png",
    skipToContent: "Vai al contenuto",
    logoLabel: "Impronta, acceleratore d’impatto",
    homeLabel: "Impronta, torna all’inizio",
  },

  nav: {
    items: [
      { id: "programma", label: "Il programma" },
      { id: "come-funziona", label: "Come funziona" },
      { id: "chi-siamo", label: "Chi siamo" },
    ],
    cta: "Candidati",
    sectionsLabel: "Sezioni",
    langLabel: "Lingua del sito",
  },

  hero: {
    place: "Acceleratore d’impatto · Roma",
    callOpen: "Candidature aperte · Coorte 2026",
    callPending: "Coorte 2026 · Candidature in apertura",
    h1: [
      { text: "Ricerca" },
      { text: "che lascia" },
      { text: "il ", accent: "segno." },
    ],
    sub: [
      { text: "Ogni anno Impronta accelera " },
      { text: "sei startup e spin-off", strong: true },
      { text: " con tecnologie che migliorano l’ambiente, la salute e l’industria. Quattro mesi a Roma, " },
      { text: "€150.000 di investimento", strong: true },
      { text: " e un confronto diretto con le imprese." },
    ],
    ctaPrimary: "Candidati",
    ctaSecondary: "Scopri il programma",
  },

  programma: {
    label: "Il programma",
    intro: { before: "Un percorso breve e intenso per portare una tecnologia ", accent: "dal laboratorio", after: " alle persone che ne hanno bisogno." },
    nums: [
      { value: "6", label: "startup per coorte, dodici in due anni" },
      { prefix: "€", value: "150", accent: "mila", label: "di investimento in equity per ciascuna startup" },
      { value: "4", accent: "mesi", label: "di programma a Villa Fassini, Roma" },
      { value: "1", accent: "Demo Day", label: "davanti a imprese, investitori e istituzioni" },
    ],
  },

  fronti: {
    label: "Cosa cerchiamo",
    title: { before: "Tecnologie con un effetto ", accent: "misurabile" },
    lead: "Ogni startup definisce all’ingresso i propri obiettivi d’impatto e li verifica a fine percorso con metodologia SROI.",
    items: [
      {
        n: "01",
        name: "Ambiente",
        text: "Meno emissioni e sprechi, materiali circolari, energia pulita.",
        tags: ["Cleantech", "Agritech", "Bioplastiche", "Idrogeno verde"],
      },
      {
        n: "02",
        name: "Salute",
        text: "Cure, inclusione e servizi essenziali più vicini alle persone.",
        tags: ["Sanità digitale", "Biotech", "Tecnologie assistive"],
      },
      {
        n: "03",
        name: "Industria",
        text: "Deep tech che diventa produzione e lavoro qualificato sul territorio.",
        tags: ["Robotica", "Sensoristica", "AI per la manifattura"],
      },
    ],
  },

  perChi: {
    label: "Per chi",
    lead: { before: "Startup, spin-off universitari e gruppi di ricerca con una tecnologia ", accent: "già fuori", after: " dal laboratorio." },
    items: [
      { k: "TRL 3–6", v: "Dal proof of concept al primo test sul campo" },
      { k: "Lazio", v: "Sede operativa nella regione, anche da aprire prima dell’avvio" },
      { k: "Pre-seed", v: "Società costituita o ancora da costituire" },
    ],
  },

  comeFunziona: {
    label: "Come funziona",
    title: { before: "Quattro passaggi,", accent: "in un anno" },
    lead: "Dalla candidatura online alla sperimentazione con le imprese partner.",
    steps: [
      { n: "01", title: "Candidatura", text: "Racconti la tecnologia, il team e l’effetto che vuoi ottenere.", meta: "Online" },
      { n: "02", title: "Selezione", text: "Un colloquio e un incontro con l’Advisory Board del programma.", meta: "Circa 9 settimane" },
      { n: "03", title: "Accelerazione", text: "Moduli operativi, mentorship uno a uno e un investimento in equity.", meta: "4 mesi · Roma" },
      { n: "04", title: "Demo Day", text: "La presentazione a imprese e investitori. Le soluzioni scelte dai partner passano alla sperimentazione.", meta: "Sperimentazione fino a 24 settimane" },
    ],
  },

  chiSiamo: {
    label: "Un programma di",
    orgs: [
      { name: "Next4", role: "Investitore Attivo del programma", url: "https://www.next4.it/" },
      { name: "ELIS Innovation Hub", role: "Open innovation con le imprese e misurazione d’impatto", url: "https://www.elis.org/innovation-hub/" },
      { name: "WDA", role: "Venture building al fianco dei founder", url: "https://wda.company" },
    ],
    notes: [
      { title: "Villa Fassini, Roma", text: "Oltre 2.000 mq di spazi e 8 ettari di parco, a pochi minuti da Roma Tiburtina." },
      { title: "Venture Tech Lazio", text: "Il programma è cofinanziato da Venture Tech Lazio, gestito da Lazio Innova." },
    ],
  },

  chiusura: {
    label: "Coorte 2026",
    title: { before: "Lascia ", accent: "il segno." },
    deadlinePrefix: "Le candidature si raccolgono sulla piattaforma del programma fino al",
    deadlineSuffix: ".",
    pending: "Le candidature si raccoglieranno sulla piattaforma del programma.",
    cta: "Vai alla candidatura",
    mailPrefix: "Domande?",
  },

  footer: {
    promoters: "Un programma di Next4, ELIS Innovation Hub e WDA",
    address: "Villa Fassini · Via Giuseppe Donati 174, Roma",
    funding: "Cofinanziato da Venture Tech Lazio",
    programme: "PR FESR Lazio 2021–2027",
    institutionalPlaceholder: ["Loghi istituzionali", "UE · Regione Lazio · Lazio Innova"],
    rights: "© 2026 Impronta",
    legalLabel: "Note legali",
    privacy: "Privacy",
    cookie: "Cookie",
    contact: "Contatti",
  },

  privacy: {
    title: "Privacy policy",
    updated: "Ultimo aggiornamento",
    intro:
      "Questa pagina descrive come vengono trattati i dati delle persone che visitano il sito di Impronta Accelerator.",
    sections: [
      {
        h: "Titolare del trattamento",
        p: "Il titolare del trattamento è Next4Production S.r.l., soggetto proponente del programma Impronta Accelerator, in qualità di Investitore Attivo, con il supporto operativo di ELIS Innovation Hub e WDA S.r.l. Per esercitare i tuoi diritti puoi scrivere all’indirizzo di contatto indicato in fondo alla pagina.",
      },
      {
        h: "Dati raccolti da questo sito",
        p: "Il sito è statico e non utilizza cookie di profilazione, né strumenti di analisi o tracciamento di terze parti. I font sono ospitati direttamente su questo dominio: la navigazione non comporta richieste verso server esterni. Il provider di hosting può conservare log tecnici di accesso, per finalità di sicurezza e funzionamento del servizio.",
      },
      {
        h: "Candidature",
        p: "La candidatura al programma avviene tramite un modulo ospitato su una piattaforma esterna, raggiungibile dai pulsanti presenti in questa pagina. I dati inseriti nel modulo sono trattati per la valutazione della candidatura e per le comunicazioni relative al programma, secondo l’informativa mostrata sulla piattaforma stessa al momento della compilazione.",
      },
      {
        h: "Conservazione e comunicazione dei dati",
        p: "I dati delle candidature sono conservati per il tempo necessario alla valutazione e alla gestione del programma, e possono essere comunicati ai partner operativi coinvolti nella selezione e agli organi previsti dal bando Venture Tech Lazio, nel rispetto della normativa applicabile.",
      },
      {
        h: "I tuoi diritti",
        p: "Puoi chiedere in qualunque momento l’accesso, la rettifica o la cancellazione dei tuoi dati, la limitazione o l’opposizione al trattamento e la portabilità, ai sensi degli articoli 15–22 del Regolamento (UE) 2016/679. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali.",
      },
    ],
    contactPrefix: "Per qualsiasi richiesta relativa ai dati personali scrivi a",
    back: "Torna alla home",
    placeholder:
      "Questo testo è una base di partenza e non sostituisce una informativa validata legalmente: va rivista prima della pubblicazione.",
  },

  cookie: {
    title: "Cookie policy",
    updated: "Ultimo aggiornamento",
    intro: "Questo sito non utilizza cookie di profilazione, di analisi o di terze parti.",
    sections: [
      {
        h: "Cookie tecnici",
        p: "Il sito è composto da pagine statiche e non imposta cookie propri. Non sono presenti strumenti di analisi del traffico, pixel pubblicitari o widget di terze parti che possano installare cookie sul tuo dispositivo.",
      },
      {
        h: "Font e risorse esterne",
        p: "I caratteri tipografici sono ospitati su questo stesso dominio e non vengono caricati da servizi esterni: la navigazione non trasmette il tuo indirizzo IP a fornitori terzi.",
      },
      {
        h: "Piattaforme esterne",
        p: "I pulsanti di candidatura rimandano a un modulo ospitato su una piattaforma esterna. Una volta raggiunta quella pagina si applicano l’informativa e la gestione dei cookie di quella piattaforma, indipendenti da questo sito.",
      },
    ],
    back: "Torna alla home",
    placeholder:
      "Questo testo va aggiornato se in futuro verranno aggiunti strumenti di analisi, pixel di marketing o contenuti incorporati da terze parti.",
  },

  notFound: {
    title: "Pagina non trovata",
    text: "Il link che hai seguito non porta a nessuna pagina di questo sito.",
    back: "Torna alla home",
  },
};

export type Dict = typeof it;
