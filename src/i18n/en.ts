import type { Dict } from './it';

/**
 * L'annotazione `: Dict` è deliberata: se una chiave manca o è di troppo
 * rispetto all'italiano, `astro check` fallisce in CI invece di lasciare
 * testo italiano dentro la pagina inglese.
 */
export const en: Dict = {
  meta: {
    locale: "en_US",
    title: "Impronta — €150,000 for impact startups in Lazio, before the programme starts",
    description:
      "Six seats per cohort. €150,000 in equity in the bank before the programme starts, up to €350,000 with follow-on, and real PoCs with corporates from the ELIS network. By Next4, ELIS Innovation Hub and WDA.",
    ogImage: "og-image-en.png",
    skipToContent: "Skip to content",
  },

  nav: {
    items: [
      { id: "deal", label: "The deal" },
      { id: "target", label: "Who gets in" },
      { id: "percorso", label: "The four months" },
      { id: "partner", label: "Who's behind it" },
      { id: "faq", label: "FAQ" },
    ],
    cta: "Apply",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
  },

  hero: {
    badge: "Applications open · 2026 cohort",
    titleLead: "Most programmes pay you in advice.",
    titleAccent: "We pay first.",
    sub: "€150,000 in equity, in the bank before the programme starts. Up to €350,000 with follow-on.",
    ctaPrimary: "Apply",
    ctaSecondary: "Not ready for this cohort? Write to us",
    deadlinePrefix: "Applications close on",
  },

  funders: {
    promotersLabel: "A programme by",
    promoters: ["Next4", "ELIS Innovation Hub", "WDA"],
    fundingLabel: "Funded by",
    funding: "Venture Tech Lazio · Lazio Innova · Lazio Region · ERDF ROP 2021/2027",
  },

  deal: {
    eyebrow: "The investment",
    title: "We give you €150,000 before we ask you for anything.",
    lead: "Not at the end. Not in services. In equity, when the programme starts.",
    figures: [
      { value: "€150,000", label: "up front, in equity" },
      { value: "€200,000", label: "follow-on if you deliver" },
      { value: "6", label: "seats per cohort" },
    ],
    points: [
      {
        title: "The money comes before the work",
        text: "It is paid out when incubation begins, not after Demo Day. Hit your milestones and you unlock follow-on of up to €200,000 over the following two years.",
      },
      {
        title: "The board stays yours",
        text: "Three seats: you appoint two, the investor one. Venture Tech Lazio sits as an observer, with no voting rights.",
      },
      {
        title: "Then you go to the corporates",
        text: "After Demo Day a real proof of concept or Joint Development Agreement kicks off: up to 24 weeks, with sprints, checkpoints and agreed KPIs.",
      },
    ],
    detailsLabel: "How the investment works, in detail",
    details: [
      {
        h: "Who puts up the money",
        p: "Every deal is co-invested by Venture Tech Lazio, which brings €1,680,000 to the programme, and Next4 as Active Investor, which brings €720,000. €2,400,000 in total, across 12 startups and 3 follow-ons.",
      },
      {
        h: "Two conditions, stated up front",
        p: "The investment only takes effect if you have an operating office in Lazio — or commit to opening one before the money is paid out — and if you take part in the whole programme. These are not preferences: they are conditions of the Venture Tech Lazio call.",
      },
      {
        h: "How follow-on is decided",
        p: "We look at progress against the milestones agreed on entry, market validation — pilot customers, letters of intent, first revenue, industrial partnerships — founders' full-time availability, and the financial sustainability of the project.",
      },
      {
        h: "Stake and terms",
        p: "The investment is in equity. The specific stake and terms are set in the term sheet, based on the assessment of the project: it is one of the topics discussed with the Advisory Board, before the investment proposal.",
      },
    ],
  },

  target: {
    eyebrow: "Who gets in",
    title: "We look for people who have the technology and don't have a customer yet.",
    lead: "Six seats per cohort, twelve in total. Read this before applying — it will save you time.",
    yesTitle: "You're a fit if",
    yes: [
      "You're between TRL 3 and 6: from proof of concept to first field test.",
      "The technology is yours, not just a new business model.",
      "You operate in Lazio, or you'll open an office there before payout.",
      "Impact is your competitive edge, not your claim.",
      "You're not a company yet: that's fine, we'll walk you through incorporation.",
    ],
    noTitle: "Don't waste your time if",
    no: [
      "You've already closed a significant seed. We're late.",
      "The technology isn't yours.",
      "You can't commit to the whole programme.",
      "You don't want to build in Lazio.",
    ],
    areasLabel: "The three areas we invest in",
    areas: [
      { name: "Environment", verticals: ["Cleantech", "Renewables", "Precision agriculture"] },
      { name: "Social", verticals: ["Digital health", "Biotech", "Assistive technology"] },
      { name: "Industrial deep tech", verticals: ["Robotics", "Sensing", "AI for production"] },
    ],
    detailsLabel: "Selection criteria and the other verticals",
    criteriaTitle: "What we assess you on",
    criteria: [
      { title: "Technology", text: "Substantial technological content, validated to a degree consistent with pre-seed and seed." },
      { title: "Impact", text: "Measurable social, environmental or economic effects." },
      { title: "Scalability", text: "A model that can attract capital in seed or pre-Series A rounds." },
      { title: "Industrial fit", text: "Complementarity with the supply chains and corporate networks of the programme." },
      { title: "Team", text: "Skills consistent with the core business, and real operational commitment." },
    ],
    emergingLabel: "We also look at",
    emerging: ["Green hydrogen", "Environmental biotech", "Water technologies", "Bioplastics", "Blockchain", "Sustainable manufacturing"],
  },

  journey: {
    eyebrow: "The four months",
    title: "Demo Day isn't the finish line. It's where you start talking to buyers.",
    lead: "One cohort a year. The money arrives at the start, the work with corporates carries on after the end.",
    phases: [
      {
        name: "Scouting and selection",
        duration: "2 months",
        weeks: 8,
        text: "Application, interview, meeting with the Advisory Board.",
      },
      {
        name: "The programme",
        duration: "4 months",
        weeks: 17,
        text: "Nine hands-on modules and 1:1 mentorship, while you build.",
      },
      {
        name: "Demo Day",
        duration: "1 day",
        weeks: 1,
        text: "Investors, corporates and institutions, at Villa Fassini.",
      },
      {
        name: "PoC with corporates",
        duration: "up to 24 weeks",
        weeks: 24,
        text: "Experiments run in sprints, with a final business case. Alongside it, coaching on fundraising and go-to-market.",
      },
    ],
    detailsLabel: "The nine modules and the six steps of selection",
    modulesTitle: "What happens in the four months",
    modules: [
      { name: "Personal impact plan", by: "WDA", text: "The E.m.p.a.c.t. framework: positioning yourself as a founder and building a personal development plan." },
      { name: "Design thinking", by: "WDA", text: "From problem to an MVP tested with real users, iterating on the results." },
      { name: "Business model", by: "WDA", text: "Business Model Canvas, Lean Canvas and Value Proposition Canvas, starting from validation." },
      { name: "Strategic marketing", by: "WDA", text: "PESTEL, five forces and SWOT. Positioning, naming, tone of voice and visual identity." },
      { name: "Sales", by: "WDA", text: "The B2B, B2C and public-sector sales cycle, with sales pitch role-play." },
      { name: "Impact assessment", by: "ELIS", text: "The SROI methodology: outcomes, indicators, financial proxies and the impact pitch." },
      { name: "Market discovery", by: "ELIS", text: "The trends corporates are actually looking for, in one-to-one meetings." },
      { name: "Corporate solution identification", by: "ELIS", text: "The «Why Collaborate» toolkit: how to put a use case to a corporate." },
      { name: "1:1 mentorship", by: "ELIS + WDA", text: "Dedicated hours with mentors and experts from the joint network." },
    ],
    processTitle: "From application to cheque: nine weeks",
    steps: [
      { name: "Online application", text: "Preliminary eligibility check." },
      { name: "Interview", text: "Technological maturity, expected impact, team composition." },
      { name: "Advisory Board", text: "Project review and a monitoring sheet with milestones and KPIs." },
      { name: "Investment proposal", text: "Approval by the Investment Committee and by the Venture Tech Lazio committee." },
      { name: "Acceptance", text: "Signing the agreement and verifying the two conditions." },
      { name: "Payout and kick-off", text: "The money lands and the programme begins." },
    ],
  },

  backers: {
    eyebrow: "Who's behind it",
    title: "The people signing the cheque have done this before.",
    lead: "Impronta doesn't start from scratch: it starts from the track record of three organisations that cover the whole path, from the lab to scale-up.",
    corporatesLabel: "The network you're joining has already put startups inside",
    corporates: ["Eni", "Acea", "FS", "Microsoft", "Vodafone", "Saipem", "Maire Tecnimont", "CNR", "SACE", "European Space Agency"],
    corporatesNote: "Corporate partners of ELIS Innovation Hub's OPEN ITALY, ZERO and CrossConnect programmes.",
    stats: [
      { value: "200+", label: "PoCs closed with corporates in ten years of OPEN ITALY" },
      { value: "34", label: "startups accelerated in ZERO, with over €3M invested" },
      { value: "1:4.16", label: "the social return measured on ZERO's startups" },
      { value: "60+", label: "startups built by WDA since 2021" },
      { value: "122–316%", label: "the return on Next4's three exits in the last 36 months" },
    ],
    orgs: [
      { name: "Next4", role: "Active Investor — puts up the capital", text: "An investment holding with 11 direct holdings and over €15M in equity value. An accredited investor on CDP Venture Capital SGR's Fondo Rilancio platform.", url: "https://www.next4.it/" },
      { name: "ELIS Innovation Hub", role: "Opens the corporate doors", text: "Runs OPEN ITALY since 2015 and the ZERO and CrossConnect accelerators in CDP Venture Capital's National Network. In Rome since 1965.", url: "https://www.elis.org/innovation-hub/" },
      { name: "WDA", role: "Works inside the startup", text: "A venture builder that stands beside founders as an executive co-founder: from validation to incorporation and go-to-market.", url: "https://wda.company" },
    ],
    detailsLabel: "The other ecosystem partners",
    ecosystemIntro: "Agreements for scouting, technology transfer and growth after acceleration.",
    ecosystem: ["Sapienza University of Rome", "University of Cassino and Southern Lazio", "CNR", "CDP Venture Capital", "Fondazione Rome Technopole", "ROAD — Rome Advanced District", "InnovUP", "Enactus Italia"],
  },

  venue: {
    eyebrow: "The venue",
    title: "Villa Fassini, Rome.",
    text: "Dedicated space inside an innovation hub: an agora for kick-offs and Demo Day, an equipped coworking area, and a park where people actually meet.",
    facts: [
      { value: "2,000+ sqm", label: "of space" },
      { value: "8 hectares", label: "of park" },
      { value: "3 km", label: "from Rome Tiburtina" },
    ],
    addressLabel: "Address",
  },

  faq: {
    eyebrow: "The awkward questions",
    title: "What you'd want to ask before applying.",
    items: [
      {
        q: "Should I apply?",
        a: "If your technology is between TRL 3 and 6, if you built it, and if you're willing to work in Lazio: yes. If you've already closed a significant seed round, no — we're late and we know it.",
      },
      {
        q: "How much equity do you take?",
        a: "The investment is in equity, co-invested by Venture Tech Lazio and Next4. The stake is set in the term sheet based on the assessment of the project, and it's one of the topics discussed with the Advisory Board before the proposal. What we can tell you now: founders keep the majority of the board, and Venture Tech Lazio sits as an observer with no voting rights.",
      },
      {
        q: "We haven't incorporated yet.",
        a: "Not a problem. Teams, university spin-offs and research groups can apply: WDA walks you through incorporation, which has to be completed before payout.",
      },
      {
        q: "Do I have to move to Rome?",
        a: "You need an operating office in Lazio, or a commitment to open one before payout. That's a condition of the Venture Tech Lazio call, not our preference. The programme has space at Villa Fassini, and full participation is part of the investment agreement.",
      },
      {
        q: "What happens after Demo Day?",
        a: "The part that matters begins. ELIS kicks off proofs of concept and Joint Development Agreements with corporates — up to 24 weeks, with sprints, checkpoints and a final business case — while WDA carries on coaching you on fundraising, go-to-market and operations.",
      },
      {
        q: "When do we get the money?",
        a: "When the programme starts, once the two conditions are verified. Not at the end, and not conditional on Demo Day.",
      },
    ],
  },

  finalCta: {
    title: "Six seats. One cohort a year.",
    text: "Applying takes a few minutes. Then an interview and a meeting with the Advisory Board: no commitment before the investment proposal.",
    cta: "Apply",
    deadlinePrefix: "Applications close on",
    contactPrefix: "Got a question before applying? Write to",
  },

  footer: {
    tagline: "The impact accelerator of Italy's Lazio Region.",
    promotersTitle: "Promoted by",
    fundingTitle: "Funded by",
    funding:
      "Venture Tech Lazio — FARE Venture 2 section of the FARE Lazio Participation Fund, under the Lazio Region ERDF ROP 2021/2027 programme. Fund manager: Lazio Innova.",
    linksTitle: "Navigate",
    legalTitle: "Legal",
    privacy: "Privacy policy",
    cookie: "Cookie policy",
    rights: "All rights reserved.",
    contact: "Contact",
  },

  formMissing: {
    label: "Application form not configured yet",
    text: "Set APPLICATION_FORM_URL in src/config.ts to activate the CTAs.",
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
