/**
 * Le FAQ in inglese. Traduzione del documento italiano, non un testo
 * indipendente: stessa struttura, stessi gruppi, stesse domande, stesse voci.
 * `verificaParita` in fondo fa fallire la build se le due lingue divergono.
 *
 * I nomi propri restano com'e' (Next4 Group, Venture Tech Lazio, Lazio Innova,
 * PR FESR Lazio, SAFE, SROI, TRL, RIS3). Le cifre seguono l'uso inglese:
 * €150,000 e non 150.000 €.
 *
 * Tradotto il 17 novembre 2026 dal documento «FAQ Impronta Accelerator» di
 * ottobre. Non e' stato riletto da chi in Impronta risponde del testo inglese:
 * in particolare i termini di diritto societario e di aiuti di Stato
 * (condition precedent, undertaking, Business Register) vanno controllati.
 */
import type { GruppoFaq } from './tipi';
import { verificaParita } from './tipi';
import { faqIt } from './faq.it';

export const faqEn: GruppoFaq[] = [
  {
    titolo: "The programme",
    domande: [
      {
        q: "What is IMPRONTA Accelerator?",
        r: [
          {
            p: "It is the acceleration and investment programme for impact startups promoted by Next4 Group, with WDA and ELIS Innovation Hub as operating partners. It is based at Villa Fassini, in Rome, and is part of Venture Tech Lazio, the fund managed by Lazio Innova on behalf of the Lazio Region and co-funded by the European Union through the PR FESR Lazio 2021-2027.",
          },
        ],
      },
      {
        q: "What does it offer a startup?",
        r: [
          {
            p: "An investment of €150,000 in equity and four months of acceleration with WDA and ELIS Innovation Hub, made up of working modules and one-to-one mentorship, ending with a Demo Day in front of companies, investors and institutions. After the Demo Day, three to six months of Solution Integration, with a proof of concept alongside the corporate partners, and of coaching. Throughout the programme, the spaces at Villa Fassini and the partners’ network.",
          },
        ],
      },
      {
        q: "How many startups are selected?",
        r: [
          {
            p: "Up to 12 in total, with one batch a year. The 2026 batch includes up to six startups.",
          },
        ],
      },
      {
        q: "When does the 2026 batch start?",
        r: [
          {
            p: "Applications are open until December 2026, and about nine weeks pass between the application and the start of the programme. The start date will be published on the site. The programme lasts four months and ends with the Demo Day.",
          },
        ],
      },
    ],
  },
  {
    titolo: "Who can apply",
    domande: [
      {
        q: "Who can apply? Does the company have to be incorporated already?",
        r: [
          {
            p: "Startups already incorporated as an S.r.l. or S.p.A. can apply, and so can entrepreneurial teams, university spin-offs and research groups that are not yet incorporated. In that case you apply as a team and the company has to be incorporated before the investment. Even at the application stage we need a team with complementary skills and a real commitment to the project.",
          },
        ],
      },
      {
        q: "What are the main requirements?",
        r: [
          {
            p: "On the date of the investment resolution the startup must:",
          },
          {
            elenco: {
              tipo: "pun",
              voci: [
                {
                  testo: "be an unlisted small enterprise, registered in the Business Register for no more than five years, that has not distributed profits;",
                },
                {
                  testo: "have as its main activity, even if only in the business plan, an area of the Lazio Smart Specialisation Strategy (RIS3);",
                },
                {
                  testo: "have an operating office in Lazio, which can be opened after the application but before the funds are disbursed;",
                },
                {
                  testo: "carry out most of its activity in Lazio, with at least one founding partner in an operating role working full time in Lazio;",
                },
                {
                  testo: "not have received investments from Next4 Group in the past and not be related to Next4 Group;",
                },
                {
                  testo: "not be a company in difficulty and not operate in sectors excluded by European legislation.",
                },
              ],
            },
          },
          {
            p: ["The details are in the ", { t: "rules", href: "page:regolamento" }, "."],
          },
        ],
      },
      {
        q: "Do I already need an office in Lazio?",
        r: [
          {
            p: "Not to apply. In your application you declare your operating office in Lazio or your commitment to open one, and the office has to be opened, with evidence in the Business Register, before the investment is disbursed. It is a condition precedent, checked with the company registry extract (visura camerale): without an active office in Lazio the investment is not disbursed.",
          },
        ],
      },
      {
        q: "Do I have to move to Rome? Do I have to be at Villa Fassini every day?",
        r: [
          {
            p: "No, you do not need to be at Villa Fassini every day: attendance is required at certain moments of the programme. One of the requirements, though, is at least one founding partner, in an operating role, who works full time in Lazio.",
          },
        ],
      },
      {
        q: "Can I apply from another region or from abroad?",
        r: [
          {
            p: "Yes, if the startup opens an operating office in Lazio before the funds are disbursed and meets the other requirements, including the operating founding partner working full time in Lazio.",
          },
        ],
      },
      {
        q: "What stage of maturity do I need to be at?",
        r: [
          {
            p: "The minimum threshold is TRL 3: an experimental proof of concept, something that works in the lab and not just an idea on paper. The programme is designed for pre-seed and seed startups.",
          },
        ],
      },
      {
        q: "Which sectors?",
        r: [
          {
            p: "Four impact areas:",
          },
          {
            elenco: {
              tipo: "pun",
              voci: [
                {
                  testo: [{ t: "Environment:", b: true }, " cleantech, agritech, bioplastics, green hydrogen, renewable energy, management of natural resources."],
                },
                {
                  testo: [{ t: "Health:", b: true }, " digital health, biotechnology, assistive technologies, wellbeing and rehabilitation."],
                },
                {
                  testo: [{ t: "Industry:", b: true }, " robotics, sensor technology, artificial intelligence for manufacturing, sustainable manufacturing."],
                },
                {
                  testo: [{ t: "Social:", b: true }, " inclusion, education, community services, social economy."],
                },
              ],
            },
          },
          {
            p: "Within these areas the technology is open, as long as impact is part of the business model.",
          },
        ],
      },
      {
        q: "What does measurable impact mean?",
        r: [
          {
            p: "That social, environmental or industrial impact is built into the business model and is not a side activity. Impact goals are set when you enter the programme and verified at the end, using the SROI (Social Return on Investment) methodology, which translates the changes generated into economic value.",
          },
        ],
      },
      {
        q: "Can I apply if I already have investors?",
        r: [
          {
            p: "Yes, unless Next4 Group is one of them. During selection we check that the public aid you have already received as a startup stays within the limits set by the Venture Tech Lazio public notice.",
          },
        ],
      },
    ],
  },
  {
    titolo: "The investment",
    domande: [
      {
        q: "How much do you invest, and on what terms?",
        r: [
          {
            p: "€150,000 in equity at the start of the programme. At the end, a limited number of startups can receive a €200,000 follow-on, for a total investment of up to €350,000. The follow-on is not automatic: what counts is the milestones reached, market validation (proof of concept, pilot customers, letters of intent or first revenues), a strengthened team with full-time founders and consistency with the impact goals.",
          },
        ],
      },
      {
        q: "Who invests?",
        r: [
          {
            p: "Next4 Group, with its own funds (€45,000) and those of the public fund Venture Tech Lazio (€105,000).",
          },
        ],
      },
      {
        q: "What instrument do you invest with?",
        r: [
          {
            p: "A SAFE (Simple Agreement for Future Equity): a payment on account of a future capital increase that converts into shares of the company within 18 months.",
          },
        ],
      },
      {
        q: "What share of the company do you ask for?",
        r: [
          {
            p: "It depends on when the next round arrives:",
          },
          {
            elenco: {
              tipo: "pun",
              voci: [
                {
                  testo: "if within 18 months the startup closes a capital increase with third-party investors, the SAFE converts at that round’s valuation with a 20% discount, and Next4 Group’s stake cannot be lower than 8% of the fully diluted capital;",
                },
                {
                  testo: "if there is no round within 18 months, the SAFE converts automatically into 12% of the fully diluted capital.",
                },
              ],
            },
          },
        ],
      },
      {
        q: "When does the investment arrive?",
        r: [
          {
            p: "In a single payment when the SAFE is signed, at the start of the programme, after the conditions precedent have been checked, starting with the operating office in Lazio.",
          },
        ],
      },
      {
        q: "Does the programme have a cost?",
        r: [
          {
            p: "Applying is free. For selected startups, the programme services (incubation, mentorship, coaching and use of the Villa Fassini spaces) carry a maximum fee of €45,000 including VAT, invoiced only after the services have been delivered. The startup also reimburses the documented costs of the investment transaction, up to the lower of 5% of the investment and €15,000.",
          },
        ],
      },
    ],
  },
  {
    titolo: "Applying and selection",
    domande: [
      {
        q: "How do I apply?",
        r: [
          {
            p: "On the ELIS OneSquare platform, from the “Apply” button on the site:",
          },
          {
            elenco: {
              tipo: "num",
              voci: [
                {
                  testo: "you register and link your project (if the company is not yet incorporated, you list the team);",
                },
                {
                  testo: "you fill in the form on team, technology, expected impact, market and funding needs;",
                },
                {
                  testo: "you upload the pitch deck, the founders’ CVs and the declaration on the operating office in Lazio; if the company is already incorporated, also the updated company registry extract and share capital composition.",
                },
              ],
            },
          },
        ],
      },
      {
        q: "By when?",
        r: [
          {
            p: "Applications are open until December 2026. The exact closing date will be published on the site and on OneSquare.",
          },
        ],
      },
      {
        q: "How does selection work?",
        r: [
          {
            elenco: {
              tipo: "num",
              voci: [
                {
                  testo: "Check of the requirements on the application.",
                },
                {
                  testo: "Pre-selection by WDA and ELIS Innovation Hub, with an online interview on team, technology and market.",
                },
                {
                  testo: "One-to-one meeting with the Advisory Board.",
                },
                {
                  testo: "Investment proposal (term sheet) and resolution of the Board of Directors of Next4 Group.",
                },
                {
                  testo: "Check of the conditions precedent and signing of the SAFE.",
                },
                {
                  testo: "Start of the programme and disbursement of the investment.",
                },
              ],
            },
          },
          {
            p: "In all, about nine weeks from the application.",
          },
        ],
      },
      {
        q: "How do you assess applications?",
        r: [
          {
            p: "On six criteria: technological maturity, measurable impact, fit with the programme’s areas, scalability and potential for later rounds, complementarity with the corporate partners, and the team’s skills and commitment.",
          },
        ],
      },
      {
        q: "Who is on the Advisory Board?",
        r: [
          {
            p: "Independent experts in digital health, energy transition, manufacturing and technology transfer, and venture building, coordinated by a representative of Venture Tech Lazio.",
          },
        ],
      },
    ],
  },
  {
    titolo: "The path",
    domande: [
      {
        q: "What do you do in the four months?",
        r: [
          {
            p: "Modules on personal impact plan, design thinking and MVP, business model, marketing and sales, impact measurement and market discovery with the corporate partners, plus hours of one-to-one mentorship with mentors and experts from WDA and ELIS Innovation Hub.",
          },
        ],
      },
      {
        q: "What happens after the Demo Day?",
        r: [
          {
            p: "The startups chosen by the corporate partners start a proof of concept or a joint development agreement with them, lasting up to 24 weeks. In parallel, three to six months of coaching on finance, operations, go-to-market and fundraising.",
          },
        ],
      },
      {
        q: "How much commitment does it take?",
        r: [
          {
            p: "Taking part in the programme is mandatory: it is not a passive investment. It takes a fully dedicated founding partner and attendance at Villa Fassini at key moments. During the programme you can work in the Villa Fassini coworking space.",
          },
        ],
      },
      {
        q: "Does the information I share stay confidential?",
        r: [
          {
            p: "Yes. Application materials are treated as confidential and used only for selection and for the programme, and the intellectual property stays with the startup.",
          },
        ],
      },
    ],
  },
  {
    titolo: "Contacts",
    domande: [
      {
        q: "Who do I write to with other questions?",
        r: [
          {
            p: ["Write to ", { t: "info@improntaaccelerator.it", href: "mailto:info@improntaaccelerator.it" }, "."],
          },
        ],
      },
    ],
  },
];

verificaParita(faqIt, faqEn, 'faq');
