import type { Dict } from './it';

/**
 * L'annotazione `: Dict` è deliberata: se una chiave manca o è di troppo
 * rispetto all'italiano, `astro check` fallisce in CI invece di lasciare
 * testo italiano dentro la pagina inglese.
 */
export const en: Dict = {
  meta: {
    locale: "en_US",
    title: "Impronta Accelerator — €150,000 for impact startups in Lazio, Italy",
    description:
      "The accelerator for deep tech and impact startups in Italy's Lazio Region: €150,000 initial investment, up to €350,000 per startup, four months of hands-on venture building and real proofs of concept with 100+ corporates. By Next4, ELIS Innovation Hub and WDA.",
    ogImage: "og-image-en.png",
    skipToContent: "Skip to content",
  },

  nav: {
    items: [
      { id: "programma", label: "The programme" },
      { id: "target", label: "Who we look for" },
      { id: "percorso", label: "The journey" },
      { id: "partner", label: "Partners" },
      { id: "faq", label: "FAQ" },
    ],
    cta: "Apply",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Language",
  },

  hero: {
    badge: "Applications open · 2026 cohort",
    titleLead: "We take your technology",
    titleAccent: "from the lab to the market.",
    sub: "Impronta is the accelerator for impact startups in Italy's Lazio Region. Equity capital paid out before the programme starts, four months of venture building alongside your team, and real experiments with ELIS Innovation Hub's network of over 100 corporates.",
    ctaPrimary: "Apply now",
    ctaSecondary: "See the journey",
    deadlinePrefix: "Applications close on",
    facts: [
      { value: "€150,000", label: "initial investment, paid before the programme starts" },
      { value: "up to €350,000", label: "per startup, including follow-on" },
      { value: "4 months", label: "of programme, plus PoCs with corporates" },
      { value: "6 startups", label: "per cohort, up to 12 in total" },
    ],
  },

  funders: {
    promotersLabel: "A programme by",
    promoters: ["Next4", "ELIS Innovation Hub", "WDA"],
    fundingLabel: "Funded by",
    funding:
      "Venture Tech Lazio — FARE Venture 2 section of the FARE Lazio Participation Fund · Lazio Innova, Lazio Region · ERDF ROP 2021/2027",
  },

  thesis: {
    eyebrow: "Why Impronta",
    title: "Lazio is not short of technology. It is short of people who take it out of the lab.",
    body: [
      "The regional ecosystem is full of university spin-offs, research groups and technical teams with promising solutions. Almost none of them reach the market: the innovation pipeline rewards startups that are already mature — precisely the ones that need capital and method the least.",
      "Impronta exists to close that gap. It is not a training course with a pitch at the end: it is an enhanced incubator that puts capital, venture building and direct access to the corporate market inside the same programme.",
    ],
    manifesto: "Capital alone is not enough. Neither is training. You need the market.",
    pillars: [
      {
        title: "Real capital, up front",
        text: "€150,000 in equity paid out before the programme begins, not promised at the end. Capital is useful while you build, not afterwards.",
      },
      {
        title: "Venture building, not lectures",
        text: "A team that has founded and grown startups works alongside you as an executive co-founder, on real decisions.",
      },
      {
        title: "Markets, not simulations",
        text: "Proofs of concept and Joint Development Agreements with corporates that are genuinely looking for a technology like yours.",
      },
    ],
  },

  value: {
    eyebrow: "What you get",
    title: "What a very early stage startup needs in order not to stall.",
    intro:
      "Impronta combines the three things that never work on their own: money, method and customers. Here is what goes into your startup.",
    items: [
      {
        tag: "Capital",
        title: "€150,000 initial investment",
        text: "Equity, co-invested by Venture Tech Lazio and Next4 as Active Investor. The capital is paid out when the programme starts, not at the end.",
      },
      {
        tag: "Capital",
        title: "Up to €200,000 in follow-on",
        text: "For startups that show progress against agreed KPIs, a second investment over the following two years. Up to €350,000 in total.",
      },
      {
        tag: "Method",
        title: "Four months of venture building",
        text: "Nine hands-on modules — from design thinking to business model, from strategic marketing to sales — plus 1:1 mentorship across the joint ELIS and WDA network.",
      },
      {
        tag: "Market",
        title: "PoCs and Joint Development Agreements",
        text: "After the programme, experiments of up to 24 weeks with corporate partners: sprints, checkpoints, KPIs and a final business case on scalability.",
      },
      {
        tag: "Space",
        title: "A base inside an innovation hub",
        text: "Dedicated space at Villa Fassini: an agora for kick-offs and Demo Day, an equipped coworking area, and 8 hectares of park three kilometres from Rome Tiburtina station.",
      },
      {
        tag: "Capital",
        title: "Investor readiness and Demo Day",
        text: "Investor-grade documentation, impact assessment using the SROI methodology, and a Demo Day in front of investors and industrial partners from the CDP Venture Capital network.",
      },
    ],
  },

  target: {
    eyebrow: "Who we look for",
    title: "Very early stage impact startups. Even before incorporation.",
    intro:
      "Impronta selects up to 12 startups across two cohorts. These are the requirements — read them before applying, they will save you time.",
    checklistTitle: "This is for you if",
    checklist: [
      "You are at pre-seed or early seed stage, with technology at TRL 3–6: from proof of concept to preliminary validation in the field.",
      "You have a strong technological or scientific innovation component, not just a new business model.",
      "You operate in Lazio, or you are willing to open an operating office in the Region before the investment is paid out.",
      "Your environmental or social impact is a competitive advantage, not just a stated value.",
      "You are a team with technical or research backgrounds, even as first-time entrepreneurs.",
      "You are not a company yet: teams, university spin-offs and research groups are eligible, and WDA supports you through incorporation before the investment.",
    ],
    notForYouTitle: "This is not for you if",
    notForYou: [
      "You have already closed a significant seed round and are only looking for capital: Impronta works upstream, where method and market access matter too.",
      "Your solution has no proprietary technological or scientific content.",
      "You cannot commit to taking part in the whole programme: participation is a condition of the investment.",
      "You do not intend to develop your business in the Lazio Region.",
    ],
    areasTitle: "Three areas of impact",
    areasIntro:
      "The areas follow the trajectories of the RIS3 Lazio 2021–2027 Smart Specialisation Strategy.",
    areas: [
      {
        name: "Environment",
        text: "Solutions that cut emissions, consumption and waste, and make resource management sustainable.",
        verticals: [
          "Precision agriculture",
          "Cleantech",
          "Renewable energy",
          "Bioplastics and circular materials",
          "Efficient natural resource management",
        ],
      },
      {
        name: "Social",
        text: "Projects that improve health, inclusion and access to essential services for people and communities.",
        verticals: [
          "Digital health",
          "Biotechnology",
          "Assistive technologies",
          "Wellbeing and rehabilitation",
          "Digital welfare and care",
        ],
      },
      {
        name: "Technology and industry",
        text: "Deep tech that turns research into scalable industrial applications and skilled employment.",
        verticals: [
          "Sustainable manufacturing",
          "Robotics",
          "Blockchain",
          "Industrial sensors",
          "AI applied to production",
        ],
      },
    ],
    emergingLabel: "We stay open to emerging verticals too",
    emerging: [
      "Environmental biotechnology",
      "Green hydrogen",
      "Advanced sensing",
      "Water technologies",
      "Next-generation robotics",
    ],
    criteriaTitle: "How we assess you",
    criteria: [
      { title: "Innovation and maturity", text: "Substantial technological content, with a level of validation consistent with pre-seed and seed stages (TRL 3–6)." },
      { title: "Impact generated", text: "Measurable social, environmental or economic effects, aligned with the priorities of RIS3 Lazio." },
      { title: "Sector fit", text: "Activity within the identified areas of impact, with concrete applications and potential for industrial adoption." },
      { title: "Scalability and appeal", text: "A model able to move towards the market and attract capital in seed or pre-Series A rounds." },
      { title: "Fit with the partners", text: "Complementarity between your proposal and the skills, supply chains and industrial networks of the programme." },
      { title: "Team and commitment", text: "Skills consistent with the core business, adequate operational commitment and relevant sector experience." },
    ],
  },

  journey: {
    eyebrow: "The journey",
    title: "From application to market, in four phases.",
    intro:
      "One cohort a year, six startups per cohort. Capital arrives when the programme starts, and the journey does not end at Demo Day.",
    durationLabel: "Duration",
    operatorLabel: "Run by",
    phases: [
      {
        name: "Scouting and selection",
        duration: "2 months",
        operator: "WDA + ELIS Innovation Hub",
        text: "Public call and proactive scouting with universities, technology transfer offices and local incubators. Online application, screening and qualitative due diligence on team, technology and market.",
      },
      {
        name: "Impronta programme",
        duration: "4 months",
        operator: "WDA + ELIS Innovation Hub",
        text: "Nine hands-on modules and 1:1 mentorship. You work on your impact plan, business model, go-to-market and readiness to collaborate with corporates.",
      },
      {
        name: "Demo Day",
        duration: "1 day",
        operator: "WDA + ELIS Innovation Hub",
        text: "Pitching to investors, corporate partners and institutions from the ecosystem, at Villa Fassini.",
      },
      {
        name: "After the programme",
        duration: "up to 24 weeks",
        operator: "ELIS Innovation Hub (PoC) · WDA (coaching)",
        text: "Solution Integration: proofs of concept and Joint Development Agreements with corporates, run in sprints with regular checkpoints. In parallel, coaching on finance, operations, marketing, business development and fundraising.",
      },
    ],
  },

  modules: {
    eyebrow: "The modules",
    title: "Nine modules, built for technical teams.",
    intro:
      "The programme assumes you can build the technology. It works on everything else: understanding the problem, the model, the market, the sale and the impact.",
    byLabel: "Run by",
    items: [
      { name: "Personal impact plan", by: "WDA", text: "The E.m.p.a.c.t. framework: strategic coaching, self-positioning and building a personal development plan as a founder. Output: an impact plan to take to stakeholders, grants and public settings." },
      { name: "Design thinking", by: "WDA", text: "Problem exploration through interviews and field observation, ideation, prototyping and MVP testing with real users. Fast iteration on results." },
      { name: "Business model canvas", by: "WDA", text: "Evolving your business model from validation onwards, using the Business Model Canvas, Lean Canvas and Value Proposition Canvas." },
      { name: "Strategic marketing", by: "WDA", text: "Context analysis with PESTEL, five forces and SWOT, segmentation and positioning. Brand design, naming, tone of voice and visual identity." },
      { name: "Sales techniques", by: "WDA", text: "The full sales cycle and commercial communication for B2B, B2C and public sector buyers. Channel selection and sales pitch role-play." },
      { name: "Impact assessment", by: "ELIS Innovation Hub", text: "The SROI methodology: building your impact framework, defining outcomes, indicators and financial proxies, up to the impact pitch." },
      { name: "Market discovery", by: "ELIS Innovation Hub", text: "The market trends corporate partners are actually looking for. Output: a Challenge Model Canvas built from one-to-one meetings." },
      { name: "Corporate solution identification", by: "ELIS Innovation Hub", text: "The «Why Collaborate» toolkit: how to propose a use case to a corporate, with objectives, resources, milestones, KPIs and risk assessment." },
      { name: "1:1 mentorship", by: "WDA + ELIS Innovation Hub", text: "Dedicated hours with mentors and experts from the joint network, on product, business, legal and organisation." },
    ],
  },

  process: {
    eyebrow: "How to apply",
    title: "Six steps, nine weeks.",
    intro:
      "The process is public and the same for everyone. Knowing what lies ahead makes applying far less daunting than it looks.",
    steps: [
      { name: "Online application", text: "Fill in the application form. Preliminary assessment of eligibility requirements." },
      { name: "Online interview", text: "A conversation about technological maturity, expected impact and team composition, using the Startup Readiness Framework." },
      { name: "Meeting with the Advisory Board", text: "A one-to-one review for qualitative and quantitative analysis of the project. This produces the monitoring sheet with milestones and KPIs." },
      { name: "Investment proposal", text: "Approval by the Investment Committee and by the Venture Tech Lazio Investment Committee, then the formal proposal." },
      { name: "Acceptance", text: "Signing the agreement and verifying the conditions: an operating office in Lazio and a commitment to take part in the whole programme." },
      { name: "Kick-off and payment", text: "The capital is paid out and the programme begins. There is no waiting period between investment and work." },
    ],
    note: "Scouting runs continuously throughout the programme: if the current cohort is closed, your application stays valid for the next one.",
  },

  numbers: {
    eyebrow: "Who is behind it",
    title: "Three organisations that have done this work before.",
    intro:
      "Impronta does not start from scratch: it builds on the track record of its three partners, who together cover the whole path from the lab to scale-up.",
    groups: [
      {
        org: "ELIS Innovation Hub",
        role: "Open innovation and venture acceleration",
        stats: [
          { value: "100+", label: "corporates, universities and funds in the network" },
          { value: "200+", label: "PoCs delivered in ten years of OPEN ITALY" },
          { value: "34", label: "startups accelerated through the ZERO accelerator" },
          { value: "1:4.16", label: "SROI of the startups in the ZERO programme" },
        ],
      },
      {
        org: "WDA",
        role: "Venture building",
        stats: [
          { value: "60+", label: "startups supported since 2021" },
          { value: "€3M+", label: "raised by the ventures built" },
          { value: "3 stages", label: "in the method: validation, creation, execution" },
        ],
      },
      {
        org: "Next4",
        role: "Active Investor of the programme",
        stats: [
          { value: "11", label: "direct holdings, over 50 indirect" },
          { value: "€15M+", label: "of equity value in the portfolio" },
          { value: "122–316%", label: "ROI across three exits in the last 36 months" },
        ],
      },
    ],
  },

  compare: {
    eyebrow: "The difference",
    title: "With and without Impronta.",
    withoutTitle: "On your own",
    without: [
      "Capital arrives late, once the technology window has already narrowed.",
      "Corporates are out of reach: they want references an early stage startup does not have.",
      "You learn the method by making mistakes, and every mistake costs months of runway.",
      "Impact stays a statement, with no metrics an investor would recognise.",
      "You prepare your first round with improvised materials.",
    ],
    withTitle: "With Impronta",
    with: [
      "€150,000 in equity paid before kick-off, plus follow-on of up to €200,000.",
      "PoCs and Joint Development Agreements with corporates from the ELIS network, with KPIs and a business case.",
      "A venture builder beside you as executive co-founder, for four months and beyond.",
      "Impact measured with the SROI methodology, in a framework investors recognise.",
      "Investor readiness, Demo Day and access to the CDP Venture Capital network.",
    ],
  },

  partners: {
    eyebrow: "Partners and ecosystem",
    title: "A programme built by people who work on the ground.",
    orgs: [
      {
        name: "Next4",
        role: "Proposing entity and Active Investor",
        text: "An investment holding and innovation platform focused on digital transformation. An accredited professional investor on the Fondo Rilancio platform managed by CDP Venture Capital SGR, with hubs in Boston, San Francisco and Dubai.",
        url: "https://www.next4.it/",
      },
      {
        name: "ELIS Innovation Hub",
        role: "Open innovation, acceleration and impact",
        text: "An open innovation and venture acceleration operator born from the ELIS Consortium, in Rome since 1965. It runs OPEN ITALY and the ZERO and CrossConnect accelerators within CDP Venture Capital's National Accelerator Network.",
        url: "https://www.elis.org/innovation-hub/",
      },
      {
        name: "WDA",
        role: "Venture building and scouting",
        text: "A venture builder that works alongside founding teams as executive co-founder, from model validation to incorporation and go-to-market. It has designed and run programmes such as Boost Your Ideas, Enactus and Unicredit Start Lab.",
        url: "https://wda.company",
      },
    ],
    ecosystemTitle: "With the support of the ecosystem",
    ecosystemIntro:
      "Agreements and collaborations for scouting, technology transfer and growth after acceleration.",
    ecosystem: [
      "Sapienza University of Rome",
      "University of Cassino and Southern Lazio",
      "CNR — Italian National Research Council",
      "CDP Venture Capital",
      "Fondazione Rome Technopole",
      "ROAD — Rome Advanced District",
      "InnovUP",
      "Enactus Italia",
    ],
  },

  venue: {
    eyebrow: "The venue",
    title: "Villa Fassini, Rome.",
    text: "The programme has dedicated space inside an innovation hub under development: an agora for kick-offs, workshops and Demo Day, an equipped coworking area, and shared spaces alongside companies, educators and non-profit organisations.",
    facts: [
      { value: "2,000+ sqm", label: "of space" },
      { value: "8 hectares", label: "of park" },
      { value: "3 km", label: "from Rome Tiburtina" },
      { value: "86", label: "parking spaces" },
    ],
    addressLabel: "Address",
  },

  faq: {
    eyebrow: "Frequently asked questions",
    title: "The questions everyone asks.",
    items: [
      {
        q: "How much equity do you take?",
        a: "The investment is in equity, co-invested by Venture Tech Lazio and Next4 as Active Investor. The specific stake and terms are set out in the term sheet, based on the assessment of the project: it is one of the topics discussed with the Advisory Board, before the investment proposal.",
      },
      {
        q: "Do I need to be an incorporated company already?",
        a: "No. The programme is also open to entrepreneurial teams, university spin-offs and research groups still in formation. WDA supports you through incorporation, which must be completed before the investment is paid out.",
      },
      {
        q: "Do I need to be based in Lazio?",
        a: "You need an operating office in the Lazio Region, or a commitment to open one before the investment is paid out. This is a condition precedent of the Venture Tech Lazio call, not a preference: development, validation and market activities take place in the Region.",
      },
      {
        q: "How mature does my technology need to be?",
        a: "Between TRL 3 and TRL 6. That means you have at least experimental validation of the technological principle (TRL 3–4), or a first prototype or MVP (TRL 5), or you are testing in limited operational settings (TRL 6). If you only have an idea that has not been experimentally validated, it is too early.",
      },
      {
        q: "When do I receive the investment?",
        a: "At the start of the programme, before the incubation journey begins, once the conditions precedent have been verified. Not at the end, and not conditional on Demo Day.",
      },
      {
        q: "What happens after Demo Day?",
        a: "The journey continues for another three to six months. ELIS Innovation Hub starts the proofs of concept and Joint Development Agreements with corporate partners — experiments of up to 24 weeks, with sprints, checkpoints and a final business case — while WDA continues coaching on finance, operations, marketing, business development and fundraising.",
      },
      {
        q: "How does the follow-on work?",
        a: "A second investment of up to €200,000, for a limited number of startups over the following two years. It is assessed on progress against agreed milestones, market validation, founders' full-time availability and the financial sustainability of the project.",
      },
      {
        q: "How many startups join the programme?",
        a: "Six per cohort, one cohort a year, up to a maximum of 12 startups in total.",
      },
      {
        q: "Does the programme take place in person?",
        a: "The programme has dedicated space at Villa Fassini in Rome, where kick-offs, workshops and Demo Day take place. Full participation in the journey is a condition of the investment.",
      },
    ],
  },

  finalCta: {
    title: "If your technology is ready to leave the lab, let's talk.",
    text: "Applying takes a few minutes. From there come an interview and a discussion with the Advisory Board: no commitment before the investment proposal.",
    cta: "Apply now",
    deadlinePrefix: "Applications close on",
    contactPrefix: "Got a question before applying? Write to us at",
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
