import type { Dict } from './it';

/**
 * L'annotazione `: Dict` è deliberata: se una chiave manca o è di troppo
 * rispetto all'italiano, `astro check` fallisce in CI invece di lasciare
 * testo italiano dentro la pagina inglese.
 *
 * Traduzione provvisoria fedele all'italiano approvato. Le chiavi marcate
 * `EN-DA-RIVEDERE` attendono la revisione madrelingua della fase 10.
 */
export const en: Dict = {
  // EN-DA-RIVEDERE
  meta: {
    locale: "en_GB",
    title: "Impronta — acceleration and investment for impact startups in Lazio",
    description:
      "Impronta selects six startups a year with technologies between TRL 3 and 6 in environment, health and industry. An initial equity investment of €150,000, a four-month programme at Villa Fassini, access to partner companies. A programme by Next4, ELIS Innovation Hub and WDA, co-financed by Venture Tech Lazio.",
    ogImage: "og-image.png",
    skipToContent: "Skip to content",
  },

  // EN-DA-RIVEDERE
  nav: {
    items: [
      { id: "programma", label: "Programme" },
      { id: "requisiti", label: "Eligibility" },
      { id: "investimento", label: "Investment" },
      { id: "calendario", label: "Timeline" },
      { id: "chi-siamo", label: "About us" },
      { id: "faq", label: "FAQ" },
    ],
    cta: "Apply",
    openMenu: "Open the menu",
    closeMenu: "Close the menu",
    langLabel: "Site language",
    conditions: "Terms",
  },

  // EN-DA-RIVEDERE
  hero: {
    h1: "Acceleration and investment for impact startups in Lazio",
    lead: "Each year Impronta selects six startups and spin-offs with technologies between technology readiness level (TRL) 3 and 6, in the environment, health and industry areas. Each receives €150,000 in equity, a four-month programme at Villa Fassini and access to the partner companies.",
    callOpenPrefix: "Applications open until",
    callPending: "Applications opening soon",
    ctaPrimary: "Apply",
    ctaSecondary: "Read the terms",
    photoPlaceholder: "Villa Fassini, exterior or agora",
  },

  // EN-DA-RIVEDERE
  keyFacts: {
    deadlineLabel: "Applications",
    deadlinePending: "Opening soon",
    items: [
      { label: "Places", value: "6 per cohort" },
      { label: "Initial investment", value: "€150,000" },
      { label: "Duration", value: "4 months" },
      { label: "Location", value: "Villa Fassini, Rome" },
    ],
  },

  // EN-DA-RIVEDERE
  programma: {
    title: "Three impact areas",
    lead: "Impronta funds technologies that produce a measurable effect on the environment, on people's health or on the productive capacity of the region.",
    areas: [
      {
        name: "Environment",
        text: "Technologies that reduce emissions, consumption and waste, and that make resource management sustainable.",
        verticals: ["Cleantech", "Renewable energy", "Precision agriculture", "Bioplastics and circular materials"],
      },
      {
        name: "Health and inclusion",
        text: "Solutions that improve health, inclusion and access to essential services in communities.",
        verticals: ["Digital health", "Biotechnology", "Assistive technologies", "Rehabilitation and wellbeing"],
      },
      {
        name: "Industry",
        text: "Scientific research and deep tech applied to production, with effects on competitiveness and skilled employment.",
        verticals: ["Sustainable manufacturing", "Robotics", "Industrial sensing", "Artificial intelligence for production"],
      },
    ],
    emerging: "The programme also assesses applications in green hydrogen, environmental biotechnology, water technologies, advanced sensing and next-generation robotics.",
    measureTitle: "How impact is measured",
    measureText:
      "At the start of the programme each startup builds an impact plan: the expected effects and the indicators used to verify them. At the end of the programme the same indicators are measured using the SROI methodology, which expresses the social return on each euro invested.",
    measureSource:
      "The module is run by ELIS Innovation Hub, which applies the same methodology in the ZERO cleantech accelerator: across the 34 startups of that programme the measured social return was 1:4.16.",
  },

  // EN-DA-RIVEDERE
  requisiti: {
    title: "Who can apply",
    lead: "All requirements must be met. An operating base in Lazio and full participation are conditions precedent: without them the investment lapses.",
    yesTitle: "You can apply if",
    yes: [
      "You are an incorporated startup, or a research group or university spin-off in the process of incorporating. WDA supports you through incorporation before the investment.",
      "Your technology sits between TRL 3 and TRL 6: from experimental validation of the principle to testing in a limited operational context.",
      "You are at pre-seed or early seed stage.",
      "Your solution falls within one of the three impact areas, or within the emerging areas.",
      "You have an operating base in Lazio, or you commit to opening one before the investment is paid out.",
    ],
    noTitle: "The programme is not suitable if",
    no: [
      "You have already closed a seed round of significant size.",
      "The technology is not owned by the company or group applying.",
      "The founders cannot commit to working full time on the company.",
      "You do not intend to open an operating base in Lazio.",
      "You cannot take part in the programme in full.",
    ],
    criteriaTitle: "Assessment criteria",
    criteriaHeaders: ["Criterion", "What we assess"],
    criteria: [
      ["Innovation and maturity", "The scientific or technological substance and the degree of validation reached"],
      ["Impact", "The expected effect on environment, health or employment, and whether it can be measured"],
      ["Fit with the areas", "Whether the solution belongs to one of the programme's impact areas"],
      ["Scalability", "The ability to attract capital in subsequent rounds"],
      ["Industrial fit", "Proximity to the supply chains and partner companies of the promoters"],
      ["Team", "The skills relative to what you are building and the time you can devote to it"],
    ],
  },

  // EN-DA-RIVEDERE
  investimento: {
    title: "Investment and commitments",
    lead: "The programme invests €150,000 in equity per startup, co-invested by Venture Tech Lazio and Next4. The investment carries obligations that are worth knowing before applying.",
    receiveTitle: "What you receive",
    receive: [
      { title: "Initial investment", text: "€150,000 in equity. The investment is paid out under the terms of the investment agreement." },
      { title: "Follow-on investment", text: "€200,000 for a maximum of three startups, over 2028–2029, assessed on progress against the monitoring sheet, on traction, on the team and on impact." },
      { title: "Four months of programme", text: "Nine operational modules and individual mentorship, run by WDA and ELIS Innovation Hub." },
      { title: "Premises", text: "Dedicated space at Villa Fassini, in Rome, for the duration of the programme." },
      { title: "Access to the partner companies", text: "Startups selected by the partner companies begin a proof of concept or a joint development agreement, of up to 24 weeks." },
    ],
    commitTitle: "What you commit to",
    commit: [
      { title: "Operating base in Lazio", text: "To be opened before the investment is paid out, if you do not already have one." },
      { title: "Full participation", text: "Attendance at all programme activities is part of the investment agreement." },
      { title: "Founders' operational commitment", text: "A full operational role and non-competition for up to twelve months after leaving the company." },
      { title: "Fee for incubation services", text: "The company pays Next4 a fee for incubation services and for use of the premises, invoiced under the investment agreement." },
      { title: "Governance", text: "A board of at least three members, investor voting rights over certain transactions, reporting at least quarterly." },
    ],
    calloutTitle: "Conditions precedent",
    calloutText:
      "An operating base in Lazio and full participation in the programme are conditions precedent of the agreement: failure to meet them causes the investment to lapse.",
    capitalTitle: "Where the capital comes from",
    capitalHeaders: ["Item", "Amount"],
    capital: [
      ["Venture Tech Lazio", "€1,680,000 (70%)"],
      ["Next4, Active Investor", "€720,000 (30%)"],
      ["Total", "€2,400,000"],
      ["Initial investments", "12 of €150,000"],
      ["Follow-on", "up to 3 of €200,000"],
    ],
    cta: "Read all the terms",
  },

  // EN-DA-RIVEDERE
  calendario: {
    title: "Programme timeline",
    lead: "One cohort a year, six startups per cohort, twelve in total between 2026 and 2027.",
    selectionTitle: "Selection, nine weeks",
    selection: [
      { name: "Online application", when: "W1–W2", detail: "Eligibility check" },
      { name: "Online interview", when: "W3" },
      { name: "Advisory Board", when: "W4–W5", detail: "Individual meeting and monitoring sheet" },
      { name: "Investment proposal", when: "W6–W7", detail: "Resolution of the investment committees" },
      { name: "Acceptance", when: "W8", detail: "Verification of the conditions precedent" },
      { name: "Start and payment", when: "W9" },
    ],
    programTitle: "Programme, four months",
    moduleHeaders: ["Module", "Content", "Run by"],
    modules: [
      ["Personal impact plan", "E.m.p.a.c.t. framework: entrepreneurial purpose, individual development plan, overcoming barriers of gender, geography and socio-economic condition", "WDA"],
      ["Design thinking", "Problem analysis, prototyping and MVP testing with real users", "WDA"],
      ["Business model", "Business Model Canvas, Lean Canvas and Value Proposition Canvas", "WDA"],
      ["Strategic marketing", "Context analysis, segmentation, positioning, visual identity", "WDA"],
      ["Sales techniques", "The sales cycle towards companies, individuals and public administration", "WDA"],
      ["Impact assessment", "SROI methodology: outcomes, indicators, financial proxies", "ELIS Innovation Hub"],
      ["Market discovery", "The needs of the partner companies, gathered in individual meetings", "ELIS Innovation Hub"],
      ["Corporate solution identification", "The «Why Collaborate» toolkit: how to propose a proof of concept to a company", "ELIS Innovation Hub"],
      ["Individual mentorship", "Dedicated hours with mentors and experts from the joint network", "WDA and ELIS Innovation Hub"],
    ],
    afterTitle: "Demo Day and after the programme",
    afterText:
      "The programme closes with Demo Day, a day of presentations to companies, investors and institutions.",
    afterText2:
      "After Demo Day, startups selected by the partner companies begin a proof of concept of up to 24 weeks, organised in sprints with interim reviews and a final assessment of results, run by ELIS Innovation Hub. In parallel WDA continues with three to six months of coaching on growth and fundraising.",
  },

  // EN-DA-RIVEDERE
  chiSiamo: {
    title: "Who runs the programme",
    lead: "Impronta comes from three organisations with distinct roles, and is co-financed by Venture Tech Lazio.",
    orgs: [
      {
        name: "Next4",
        role: "Proposing entity and Active Investor",
        text: "An investment holding and innovation platform, accredited on the Fondo Rilancio platform of CDP Venture Capital. It holds eleven direct and more than fifty indirect shareholdings.",
        url: "https://www.next4.it/",
      },
      {
        name: "ELIS Innovation Hub",
        role: "Operating partner for open innovation and impact measurement",
        text: "Since 2015 it has run OPEN ITALY, which has led to more than 200 proofs of concept with over 100 partner companies, and the ZERO cleantech accelerator, with 34 startups accelerated, 12 proofs of concept and more than 800 hours of mentorship. In Rome since 1965.",
        url: "https://www.elis.org/innovation-hub/",
      },
      {
        name: "WDA",
        role: "Operating partner for venture building",
        text: "Since 2021 it has supported more than 60 startups, which have mobilised over €3 million in capital. It works alongside founding teams from validation through incorporation to the first users.",
        url: "https://wda.company",
      },
    ],
    corporatesTitle: "Partner companies of the ELIS programmes",
    corporatesText:
      "The OPEN ITALY, ZERO and CrossConnect programmes run by ELIS Innovation Hub have involved, among others, Eni, Acea, FS, Microsoft, Vodafone, Saipem, Maire Tecnimont, CNR, SACE and the European Space Agency. They are partners of those programmes, not of Impronta.",
    ecosystemTitle: "Collaborations in the region",
    ecosystemText:
      "Enactus Italia works with the programme as an academic originator. Collaborations with Sapienza University of Rome, the University of Cassino and Southern Lazio, CNR, CDP Venture Capital, InnovUp, ROAD and Fondazione Rome Technopole are being defined.",
    peopleTitle: "Programme team",
    peopleNote:
      "Names are published once consent has been confirmed. The roles set out by the programme are listed below.",
    teamRoles: [
      "Program Manager",
      "Investment Manager",
      "Investment Specialist",
      "Innovation Program Manager",
      "Innovation Specialist",
      "Innovation Specialist",
      "Acceleration and Venture Expert",
    ],
    advisoryTitle: "Advisory Board",
    advisoryText:
      "One representative of Venture Tech Lazio and four independent members with expertise in digital health, sustainable mobility and the energy transition, entrepreneurship and industrial technology transfer.",
  },

  // EN-DA-RIVEDERE
  sede: {
    title: "Villa Fassini, Rome",
    text: "The programme takes place at Villa Fassini, the operating base of ELIS Innovation Hub. Startups have the use of an agora for meetings and Demo Day, an equipped coworking space and the common areas.",
    factsHeaders: ["Item", "Value"],
    facts: [
      ["Space", "over 2,000 sqm"],
      ["Park", "8 hectares"],
      ["Distance from Roma Tiburtina", "under 3 km"],
      ["Parking", "86 spaces"],
    ],
    addressLabel: "Address",
    mapLabel: "Open in Maps",
    photoPlaceholder: "Villa Fassini, agora or coworking space",
  },

  // EN-DA-RIVEDERE
  faq: {
    title: "Frequently asked questions",
    groups: [
      {
        name: "Eligibility",
        items: [
          { q: "Can we apply if we have not incorporated yet?", a: "Yes. The programme is open to research groups and university spin-offs in the process of incorporating. WDA supports you through incorporation, which must be completed before the investment is paid out." },
          { q: "How do we establish whether our technology is between TRL 3 and 6?", a: "TRL 3 and 4 correspond to experimental validation of the technological principle, TRL 5 to a first prototype or MVP, TRL 6 to testing in a limited operational context. If the technology has not yet been validated experimentally, the application is premature." },
          { q: "Do we already need a base in Lazio?", a: "No, but you must commit to opening one before the investment is paid out. It is a condition precedent of the agreement." },
          { q: "Can founders with a university role take part?", a: "The investment agreement requires a full operational commitment from the founders. Compatibility with academic positions must be assessed case by case with the relevant institution." },
          { q: "Our technology is licensed from the university. Is that a problem?", a: "The investment agreement requires the intellectual property to be owned by the company. Licensing arrangements with a technology transfer office must be examined before the investment." },
        ],
      },
      {
        name: "Investment",
        items: [
          { q: "How much equity is acquired?", a: "The stake is set in the term sheet on the basis of the valuation of the project. The minimum clauses of the agreement are published on the Terms page." },
          { q: "Does the programme have costs for the startup?", a: "Yes. The company pays Next4 a fee for incubation services and for use of the premises, invoiced under the investment agreement. The amount and the arrangements are set out on the Terms page." },
          { q: "When is the investment paid out?", a: "After acceptance of the proposal and verification of the conditions precedent, under the terms of the investment agreement." },
        ],
      },
      {
        name: "Programme",
        items: [
          { q: "Is the proof of concept with the partner companies guaranteed?", a: "No. The proof of concept applies to the startups selected by the partner companies at the end of the programme." },
          { q: "How much presence is required at Villa Fassini?", a: "The programme includes activities held in person at Villa Fassini. The weekly frequency is communicated with the cohort calendar." },
        ],
      },
      {
        name: "Applying",
        items: [
          { q: "What happens if we are not selected?", a: "Applications that are not selected may be resubmitted to the following cohort. Scouting remains active for the whole duration of the programme." },
        ],
      },
    ],
    contactPrefix: "For questions not covered on this page:",
  },

  // EN-DA-RIVEDERE
  chiusura: {
    text: "Impronta is selecting six startups for the 2026 cohort.",
    ctaPrimary: "Apply",
    contactPrefix: "For questions before applying:",
  },

  // EN-DA-RIVEDERE
  footer: {
    tagline: "Acceleration and investment programme for impact startups.",
    promotersTitle: "Promoted by",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    conditions: "Investment terms",
    privacy: "Privacy policy",
    cookie: "Cookie policy",
    institutionalLabel: "Co-financed by",
    institutionalPlaceholder: "EU emblem, Regione Lazio, Lazio Innova — logos to be added",
    funding:
      "Impronta is co-financed by Venture Tech Lazio, the FARE Venture 2 section of the FARE Lazio Participation Fund, under the 2021/2027 ERDF Regional Programme of Regione Lazio. Fund manager: Lazio Innova. Programme name in the proposal: IMPACT BUILDER.",
    rights: "All rights reserved.",
  },

  // EN-DA-RIVEDERE
  formMissing: {
    label: "Application form not configured yet",
    text: "Set APPLICATION_FORM_URL in src/config.ts to activate the calls to action.",
  },

  // EN-DA-RIVEDERE
  condizioni: {
    title: "Investment terms",
    lead: "A summary of the minimum clauses set out by the investment agreement. The binding terms are those of the agreement signed by each company.",
    tocLabel: "On this page",
    backHome: "Back to home",
    clauseHeaders: ["Clause", "What it provides", "What it means for you"],
    sections: [
      {
        id: "investimento-follow-on",
        title: "Investment and follow-on",
        text: "An initial investment of €150,000 in equity per startup, co-invested by Venture Tech Lazio (70%) and Next4 as Active Investor (30%). A follow-on of €200,000 for a maximum of three startups over 2028–2029.",
        rows: [],
      },
      {
        id: "condizioni-sospensive",
        title: "Conditions precedent",
        text: "",
        rows: [
          ["Operating base in Lazio", "The company must have or open an operating base in the Lazio Region before the investment is paid out", "If you do not have a base in Lazio you must open one: without it, the investment is not completed"],
          ["Full participation", "The company undertakes to take part in all programme activities", "Systematic absence from activities can cause the investment to lapse"],
        ],
      },
      {
        id: "governance",
        title: "Governance and investor rights",
        text: "",
        rows: [
          ["Board of directors", "At least three members: two appointed by the founders, one by Next4. Venture Tech Lazio designates an observer with no voting rights", "You keep the majority of the board. The observer attends meetings but does not vote"],
          ["Reserved matters", "Extraordinary transactions, amendments to the articles, distribution of dividends, transfer or licensing of intellectual property and stock option plans require the favourable vote of Next4 and Venture Tech Lazio", "On these matters you cannot resolve without the investors' agreement"],
          ["Reporting", "Reporting to investors at least quarterly", "You must produce periodic reporting"],
          ["Liquidation preference", "Non-participating, equal to the amount paid in", "On a liquidation the investors first recover what they paid in, without participating further"],
          ["Co-sale and drag-along", "A co-sale right. Drag-along after four years for offers covering at least 50% of the capital at a valuation of no less than €2,000,000", "After four years a purchase offer meeting those thresholds can oblige you to sell"],
        ],
      },
      {
        id: "impegni-fondatori",
        title: "Founders' commitments",
        text: "",
        rows: [
          ["Lock-up", "The founders do not transfer their shares for three years", "You cannot sell your shareholding in the first three years"],
          ["Operational role and non-competition", "A full operational commitment and a non-competition undertaking for up to twelve months after leaving", "The programme assumes you work full time on the company"],
          ["Intellectual property", "Full ownership of the intellectual property vested in the company", "Patents and licences must be held by the company, not by individuals"],
          ["Bad leaver", "Reverse vesting within four years, with a call option at nominal value", "If you leave the company within four years without good cause, part of your shares can be bought back at nominal value"],
        ],
      },
      {
        id: "costi",
        title: "Costs borne by the startup",
        text: "The company pays Next4 a fee for incubation services and for use of the premises, invoiced under the investment agreement.",
        rows: [],
      },
      {
        id: "criteri-follow-on",
        title: "Follow-on criteria",
        text: "Achievement of at least 70% of the milestones on the monitoring sheet, market validation, availability of the founders and financial sustainability of the project.",
        rows: [],
      },
    ],
    regulationLabel: "Full programme rules",
    regulationNote: "Document not yet available.",
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
        p: "Application data is kept for as long as necessary to assess applications and run the programme, and may be shared with the operating partners involved in selection and with the bodies required by the Venture Tech Lazio call, in accordance with applicable law.",
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
    intro:
      "This website uses no profiling, analytics or third-party cookies.",
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
};
