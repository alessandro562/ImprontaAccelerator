import type { Dict } from './it';

/**
 * L'annotazione `: Dict` è deliberata: se una chiave manca o è di troppo
 * rispetto all'italiano, `astro check` fallisce in CI invece di lasciare
 * testo italiano dentro la pagina inglese.
 */
export const en: Dict = {
  meta: {
    locale: "en_US",
    title: "Impronta — the impact accelerator of Italy's Lazio Region",
    description:
      "We help researchers, spin-offs and technical teams in Lazio take technology out of the lab: cutting emissions, making care and services reachable, creating skilled work. A programme by Next4, ELIS Innovation Hub and WDA.",
    ogImage: "og-image-en.png",
    skipToContent: "Skip to content",
  },

  nav: {
    items: [
      { id: "impatto", label: "What changes" },
      { id: "target", label: "Who we work with" },
      { id: "sostegno", label: "How we support you" },
      { id: "percorso", label: "The four months" },
      { id: "faq", label: "FAQ" },
    ],
    cta: "Apply",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
  },

  hero: {
    badge: "Applications open · 2026 cohort",
    titleLead: "A technology that stays in the lab",
    titleAccent: "hasn't helped anyone yet.",
    sub: "Impronta helps researchers, spin-offs and technical teams in Lazio turn what they have built into something that reaches people.",
    ctaPrimary: "Apply",
    ctaSecondary: "Not your moment yet? Write to us",
    deadlinePrefix: "Applications close on",
  },

  funders: {
    promotersLabel: "A programme by",
    promoters: ["Next4", "ELIS Innovation Hub", "WDA"],
    fundingLabel: "Funded by",
    funding: "Venture Tech Lazio · Lazio Innova · Lazio Region · ERDF ROP 2021/2027",
  },

  change: {
    eyebrow: "What changes",
    title: "Three ways a technology stops being a promise.",
    lead: "We select solutions with an effect you can name: something that goes down, something that becomes reachable, someone who gets work.",
    effects: [
      {
        headline: "Fewer emissions, less waste",
        text: "Technologies for efficient use of resources, circular materials, clean energy.",
        verticals: ["Cleantech", "Renewables", "Precision agriculture", "Bioplastics"],
      },
      {
        headline: "Care and services that arrive",
        text: "Solutions that improve health, inclusion and access to essential services in communities.",
        verticals: ["Digital health", "Biotechnology", "Assistive technology", "Rehabilitation"],
      },
      {
        headline: "Skilled work",
        text: "Scientific research and deep tech that become industrial applications, and bring skills to the region.",
        verticals: ["Sustainable manufacturing", "Robotics", "Sensing", "AI for production"],
      },
    ],
    measureTitle: "And then we measure it.",
    measureText:
      "At the start you build an impact plan: which effects you expect, and with which indicators. At the end we check what actually happened, using the SROI methodology. That's the difference between claiming impact and showing it.",
    measureStat: {
      value: "1:4.16",
      label: "the social return measured on the startups of ELIS Innovation Hub's ZERO accelerator",
    },
    detailsLabel: "The other fields we look at",
    detailsText:
      "We stay open to emerging verticals, still uncommon but moving fast across Italy and Europe.",
    emerging: ["Green hydrogen", "Environmental biotechnology", "Water technologies", "Advanced sensing", "Next-generation robotics"],
  },

  target: {
    eyebrow: "Who we work with",
    title: "Researchers, spin-offs and technical teams. Even before incorporation.",
    lead: "Six places per cohort, twelve in total. The requirements are few and clear: reading them now will save you time.",
    yesTitle: "You're in if",
    yes: [
      "Your technology is between TRL 3 and 6: from proof of concept to first field test.",
      "You built it, and it isn't just a new business model.",
      "You work in Lazio, or you'll open an office there before the programme starts.",
      "The effect on people or the environment is part of the solution, not an add-on.",
      "You haven't incorporated yet: we'll walk you through it.",
    ],
    noTitle: "Probably not if",
    no: [
      "You've already closed a significant seed round: we're late.",
      "The technology isn't yours.",
      "You can't follow the whole programme.",
      "You don't intend to build in Lazio.",
    ],
    detailsLabel: "How we read applications",
    criteriaTitle: "What we look at",
    criteria: [
      { title: "The technology", text: "Real scientific or technical content, at a maturity consistent with the early stages." },
      { title: "The effect", text: "A social or environmental benefit you can describe and measure, not just state." },
      { title: "The reach", text: "A concrete chance that the solution leaves the prototype and gets to people." },
      { title: "The industrial fit", text: "Proximity to the supply chains and companies the programme works with." },
      { title: "The team", text: "Skills that match what you're building, and real time to give it." },
    ],
  },

  support: {
    eyebrow: "How we support you",
    title: "Capital, method, and an open door into industry.",
    lead: "The three things that, taken one at a time, are never enough to get a technology out of the lab.",
    pillars: [
      {
        title: "Capital at the start",
        text: "€150,000 in equity paid when the programme begins, and up to €200,000 for those who carry on over the following two years. The board stays with a founder majority.",
      },
      {
        title: "A team that works with you",
        text: "Four months with people who have built startups: model, market, positioning. Plus work on your own growth as a founder, not only on the company.",
      },
      {
        title: "Industry, for real",
        text: "After Demo Day an experiment of up to 24 weeks opens with a corporate partner, with objectives and indicators agreed up front.",
      },
    ],
    detailsLabel: "The conditions, in full",
    details: [
      {
        h: "Where the capital comes from",
        p: "Every deal is co-invested by Venture Tech Lazio, which brings €1,680,000 to the programme, and Next4 as Active Investor, which brings €720,000. €2,400,000 in total, across twelve startups and three continuations.",
      },
      {
        h: "Two conditions, stated up front",
        p: "Support only takes effect if you have an operating office in Lazio — or commit to opening one before payout — and if you take part in the whole programme. These aren't our preferences: they are conditions of the Venture Tech Lazio call.",
      },
      {
        h: "How it continues after the first year",
        p: "We look at progress against the objectives agreed on entry, the first signals from the market — pilot users, letters of intent, industrial collaborations — and the time founders actually give the project.",
      },
      {
        h: "Stake and terms",
        p: "The investment is in equity. The specific stake and terms are set in the term sheet based on the assessment of the project, and it is one of the topics discussed with the Advisory Board before the proposal.",
      },
    ],
  },

  journey: {
    eyebrow: "The four months",
    title: "Demo Day isn't the finish line. It's where the technology gets tested.",
    lead: "One cohort a year. Support arrives at the start, and the work with industry carries on after the programme ends.",
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
        text: "Companies, investors and institutions, at Villa Fassini.",
      },
      {
        name: "Testing with industry",
        duration: "up to 24 weeks",
        weeks: 24,
        text: "The solution is tried in a real setting, in sprints, with a final review of the results.",
      },
    ],
    detailsLabel: "The nine modules and the six steps of selection",
    modulesTitle: "What happens in the four months",
    modules: [
      { name: "Personal impact plan", by: "WDA", text: "The E.m.p.a.c.t. framework: your purpose as a founder, a personal development plan, and work on the barriers that make getting there harder." },
      { name: "Design thinking", by: "WDA", text: "From the real problem to an MVP tested with the people who should be using it." },
      { name: "Business model", by: "WDA", text: "Business Model Canvas, Lean Canvas and Value Proposition Canvas, starting from what validation told you." },
      { name: "Positioning", by: "WDA", text: "Context analysis, segmentation, naming, tone of voice and visual identity." },
      { name: "Reaching your first users", by: "WDA", text: "The commercial cycle towards companies, people and public bodies, with hands-on practice." },
      { name: "Impact measurement", by: "ELIS", text: "The SROI methodology: expected outcomes, indicators, financial proxies and how to present results." },
      { name: "Market discovery", by: "ELIS", text: "The needs companies are actually trying to solve, in one-to-one meetings." },
      { name: "Building a collaboration", by: "ELIS", text: "The «Why Collaborate» toolkit: how to propose an experiment to a company." },
      { name: "1:1 mentorship", by: "ELIS + WDA", text: "Dedicated hours with mentors and experts from the joint network." },
    ],
    processTitle: "From application to kick-off: nine weeks",
    steps: [
      { name: "Online application", text: "Preliminary eligibility check." },
      { name: "Interview", text: "Maturity of the technology, expected effect, team composition." },
      { name: "Advisory Board", text: "Project review and a sheet with objectives and indicators." },
      { name: "Proposal", text: "Approval by the Investment Committee and the Venture Tech Lazio committee." },
      { name: "Acceptance", text: "Signing the agreement and verifying the two conditions." },
      { name: "Kick-off", text: "The programme begins and support is paid out." },
    ],
  },

  backers: {
    eyebrow: "Who's behind it",
    title: "Three organisations that have done this work before.",
    lead: "Impronta doesn't start from scratch: it starts with people who have been bringing research and industry together for years, covering the whole stretch from the lab to industrial scale.",
    corporatesLabel: "Technologies from this network have already been tested inside",
    corporates: ["Eni", "Acea", "FS", "Microsoft", "Vodafone", "Saipem", "Maire Tecnimont", "CNR", "SACE", "European Space Agency"],
    corporatesNote: "Partners of ELIS Innovation Hub's OPEN ITALY, ZERO and CrossConnect programmes. A solution adopted by a company at that scale is impact that multiplies.",
    stats: [
      { value: "200+", label: "experiments completed in ten years of OPEN ITALY" },
      { value: "34", label: "startups supported in the ZERO cleantech accelerator" },
      { value: "60+", label: "startups built by WDA since 2021" },
      { value: "100+", label: "companies, universities and research centres in the network" },
    ],
    orgs: [
      { name: "Next4", role: "Active Investor of the programme", text: "An investment holding and innovation platform, accredited on CDP Venture Capital SGR's Fondo Rilancio platform.", url: "https://www.next4.it/" },
      { name: "ELIS Innovation Hub", role: "Open innovation and impact measurement", text: "Runs OPEN ITALY since 2015 and the ZERO and CrossConnect accelerators in CDP Venture Capital's National Network. In Rome since 1965.", url: "https://www.elis.org/innovation-hub/" },
      { name: "WDA", role: "Venture building beside the founders", text: "Works with teams as an executive co-founder: from validation to incorporation and first users.", url: "https://wda.company" },
    ],
    detailsLabel: "The other ecosystem partners",
    ecosystemIntro: "Agreements for scouting, technology transfer and growth after acceleration.",
    ecosystem: ["Sapienza University of Rome", "University of Cassino and Southern Lazio", "CNR", "CDP Venture Capital", "Fondazione Rome Technopole", "ROAD — Rome Advanced District", "InnovUP", "Enactus Italia"],
  },

  venue: {
    eyebrow: "The venue",
    title: "Villa Fassini, Rome.",
    text: "Dedicated space inside an innovation hub: an agora for gatherings and Demo Day, an equipped coworking area, and a park where companies, educators and non-profits cross paths.",
    facts: [
      { value: "2,000+ sqm", label: "of space" },
      { value: "8 hectares", label: "of park" },
      { value: "3 km", label: "from Rome Tiburtina" },
    ],
    addressLabel: "Address",
  },

  faq: {
    eyebrow: "Frequently asked questions",
    title: "What you'd want to ask before applying.",
    items: [
      {
        q: "Should I apply?",
        a: "If your technology is between TRL 3 and 6, if you built it, and if you're willing to develop it in Lazio: yes. If you've already closed a significant seed round, no — we're late and we know it.",
      },
      {
        q: "What do you mean by impact?",
        a: "A benefit for people or the environment that can be described and measured: emissions avoided, services that become reachable, skilled employment. Not a statement of intent at the end of a pitch, but an effect with indicators, verified at the end of the programme using the SROI methodology.",
      },
      {
        q: "We haven't incorporated yet.",
        a: "Not a problem. Teams, university spin-offs and research groups can apply: WDA walks you through incorporation, which has to be completed before the programme starts.",
      },
      {
        q: "Do I have to move to Rome?",
        a: "You need an operating office in Lazio, or a commitment to open one before kick-off: that's a condition of the Venture Tech Lazio call. The programme has space at Villa Fassini, and taking part in full is part of the agreement.",
      },
      {
        q: "How does the financial support work?",
        a: "€150,000 in equity at the start of the programme, and up to €200,000 for those who carry on over the following two years. It's co-invested by Venture Tech Lazio and Next4; the stake is set in the term sheet, and the board stays with a founder majority.",
      },
      {
        q: "What happens after Demo Day?",
        a: "The part where the technology leaves the programme begins. ELIS starts an experiment with a corporate partner — up to 24 weeks, with objectives, interim checks and a final review of results — while WDA carries on supporting you on growth and fundraising.",
      },
    ],
  },

  finalCta: {
    title: "If what you've built could be useful to someone, let's get it out of the lab.",
    text: "Applying takes a few minutes. Then an interview and a meeting with the Advisory Board: no commitment before the proposal.",
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
