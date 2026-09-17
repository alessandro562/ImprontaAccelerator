import type { Dict } from './it';

/**
 * L'annotazione `: Dict` è deliberata: se una chiave manca o è di troppo
 * rispetto all'italiano, `astro check` fallisce in CI invece di lasciare
 * testo italiano dentro la pagina inglese.
 */
export const en: Dict = {
  // EN-DA-RIVEDERE
  meta: {
    locale: "en_GB",
    title: "Impronta — Impact accelerator",
    description:
      "Each year Impronta accelerates six startups and spin-offs with technologies that improve the environment, health and industry. Four months in Rome and a €150,000 investment.",
    ogImage: "og-image-en.png",
    skipToContent: "Skip to content",
    logoLabel: "Impronta, impact accelerator",
    homeLabel: "Impronta, back to the top",
  },

  // EN-DA-RIVEDERE
  nav: {
    items: [
      { id: "programma", label: "The programme" },
      { id: "come-funziona", label: "How it works" },
      { id: "chi-siamo", label: "About us" },
    ],
    cta: "Apply",
    sectionsLabel: "Sections",
    langLabel: "Site language",
  },

  // EN-DA-RIVEDERE
  hero: {
    place: "Impact accelerator · Rome",
    callOpen: "Applications open · 2026 batch",
    callPending: "2026 batch · Applications opening soon",
    h1: [
      { text: "Innovation" },
      { text: "that leaves" },
      { text: "a ", accent: "mark." },
    ],
    sub: [
      { text: "Impronta is the impact accelerator by Next4, ELIS Innovation Hub and WDA. " },
      { text: "Six startups a year", strong: true },
      { text: ", " },
      { text: "€150,000 in equity", strong: true },
      { text: " and direct access to the companies looking for what you are building." },
    ],
    ctaPrimary: "Apply",
    ctaSecondary: "See the programme",
  },

  // EN-DA-RIVEDERE
  programma: {
    label: "The programme",
    intro: "We fund technologies that improve life in a community or a region. Impact arises in very different sectors: the programme looks at all of them.",
    nums: [
      { value: "6", label: "startups per batch, twelve in two years" },
      { prefix: "€", value: "150", accent: "k", label: "in equity for each startup" },
      { value: "4", accent: "months", label: "of programme, between sessions and fieldwork" },
      { value: "1", accent: "Demo Day", label: "before companies, investors and institutions" },
    ],
  },

  // EN-DA-RIVEDERE
  fronti: {
    label: "What we look for",
    title: "Technologies with a measurable effect",
    lead: "Impact goals set on entry, verified at the end with the SROI methodology.",
    items: [
      {
        n: "01",
        name: "Environment",
        text: "Fewer emissions and less waste, circular materials, clean energy.",
        tags: ["Cleantech", "Agritech", "Bioplastics", "Green hydrogen"],
      },
      {
        n: "02",
        name: "Health",
        text: "Care, inclusion and essential services, closer.",
        tags: ["Digital health", "Biotech", "Assistive technologies"],
      },
      {
        n: "03",
        name: "Industry",
        text: "Deep tech that becomes production and skilled work.",
        tags: ["Robotics", "Sensing", "AI for manufacturing"],
      },
      {
        n: "04",
        name: "Social",
        text: "Inclusion, education and services that strengthen communities.",
        tags: ["Inclusion", "Education", "Community services", "Social economy"],
      },
    ],
  },

  // EN-DA-RIVEDERE
  perChi: {
    label: "Who it is for",
    lead: "Startups, university spin-offs and research groups with a validated technology and a clear idea of where to apply it.",
    items: [
      { k: "TRL 3–9", v: "From proof of concept to market" },
      { k: "Lazio", v: "An operating base in Lazio, which may be opened before the start" },
      { k: "Pre-seed", v: "Incorporated, or still to be" },
    ],
  },

  // EN-DA-RIVEDERE
  comeFunziona: {
    label: "How it works",
    title: { riga1: "How you get in,", riga2: "and what you get" },
    lead: "Four steps, from the application to the proof of concept with industry.",
    steps: [
      { n: "01", title: "Application", text: "You present the technology, the team and the impact you are after.", meta: "Online" },
      { n: "02", title: "Selection", text: "We assess the technology, the team and the impact potential.", meta: "Interview and Advisory Board" },
      { n: "03", title: "Acceleration", text: "Working modules, one-to-one mentorship and €150,000 in equity.", meta: "4 months" },
      { n: "04", title: "Demo Day", text: "You pitch to companies and investors. Solutions chosen by the partners move on to a proof of concept.", meta: "Up to 24 weeks" },
    ],
  },

  // EN-DA-RIVEDERE
  chiSiamo: {
    label: "A programme by",
    orgs: [
      { slug: "next4", name: "Next4", role: "Active Investor in the programme", url: "https://www.next4.it/" },
      { slug: "elis", name: "ELIS Innovation Hub", role: "Open innovation and impact measurement", url: "https://www.elis.org/innovation-hub/" },
      { slug: "wda", name: "WDA", role: "Venture building alongside founders", url: "https://wda.company" },
    ],
  },

  // EN-DA-RIVEDERE
  sede: {
    label: "Villa Fassini, Rome",
    title: "The venue and the community",
    lead: "A place where startups, companies, universities and social organisations meet, experiment and build collaborations.",
    voci: [
      { t: "Workspaces", d: "Coworking and equipped desks for startups and partners." },
      { t: "Agorà Impronta", d: "Events, workshops and meetings with communities and stakeholders." },
      { t: "Testing areas", d: "Space for prototypes, testing, training and co-design sessions." },
      { t: "Community", d: "Access to the ELIS network of companies, universities, startups and experts." },
    ],
    foto: "Villa Fassini — photo to be added in src/assets/sede/",
  },

  chiusura: {
    label: "2026 batch",
    title: { before: "Leave ", accent: "a mark." },
    deadlinePrefix: "Applications are collected on the programme platform until",
    deadlineSuffix: ".",
    pending: "Applications will be collected on the programme platform.",
    cta: "Go to the application",
    mailPrefix: "Questions?",
  },

  // EN-DA-RIVEDERE
  footer: {
    promoters: "A programme by Next4, ELIS Innovation Hub and WDA",
    address: "Villa Fassini · Via Giuseppe Donati 174, Rome",
    rights: "© 2026 Impronta",
    legalLabel: "Legal",
    privacy: "Privacy",
    cookie: "Cookies",
    contact: "Contact",
  },

  privacy: {
    title: "Privacy policy",
    updated: "Last updated",
    intro:
      "This page explains how the data of people visiting the Impronta Accelerator website is handled.",
    sections: [
      {
        h: "Data controller",
        p: "The data controller is Next4Production S.r.l., the proposing entity of the Impronta Accelerator programme, acting as Active Investor with the operational support of ELIS Innovation Hub and WDA S.r.l. To exercise your rights, write to the contact address at the bottom of this page.",
      },
      {
        h: "Data collected by this website",
        p: "The site is static and uses no profiling cookies, analytics or third-party tracking tools. Fonts are hosted on this domain: browsing the site sends no requests to external servers. The hosting provider may keep technical access logs for security and service operation purposes.",
      },
      {
        h: "Applications",
        p: "Applications to the programme are submitted through a form hosted on an external platform, reachable from the buttons on this page. Data entered in the form is processed to assess the application and for communications about the programme, in line with the notice shown on that platform when you fill it in.",
      },
      {
        h: "Retention and disclosure",
        p: "Application data is kept for as long as necessary to assess applications and run the programme, and may be shared with the operating partners involved in selection and with the bodies required by the call, in accordance with applicable law.",
      },
      {
        h: "Your rights",
        p: "You may request access, rectification or erasure of your data, restriction of or objection to processing, and portability, at any time, under Articles 15–22 of Regulation (EU) 2016/679. You also have the right to lodge a complaint with the Italian Data Protection Authority.",
      },
    ],
    contactPrefix: "For any request about personal data, write to",
    back: "Back to home",
    placeholder:
      "This text is a starting point and does not replace a legally reviewed privacy notice: it should be revised before publication.",
  },

  cookie: {
    title: "Cookie policy",
    updated: "Last updated",
    intro: "This website uses no profiling, analytics or third-party cookies.",
    sections: [
      {
        h: "Technical cookies",
        p: "The site is made of static pages and sets no cookies of its own. There are no traffic analytics tools, advertising pixels or third-party widgets that could install cookies on your device.",
      },
      {
        h: "Fonts and external resources",
        p: "Typefaces are hosted on this same domain and are not loaded from external services: browsing does not send your IP address to third-party providers.",
      },
      {
        h: "External platforms",
        p: "The application buttons link to a form hosted on an external platform. Once you reach that page, that platform's own notice and cookie handling apply, independently of this site.",
      },
    ],
    back: "Back to home",
    placeholder:
      "This text must be updated if analytics tools, marketing pixels or embedded third-party content are added in future.",
  },

  // EN-DA-RIVEDERE
  notFound: {
    title: "Page not found",
    text: "The link you followed does not lead to any page on this site.",
    back: "Back to home",
  },
};
