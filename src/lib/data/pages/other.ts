import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const otherPages: PageContent[] = [
  /* ---------------------------------------------------------------- Give */
  {
    href: "/give",
    eyebrow: "Give",
    title: "Give to the school",
    intro:
      "Tuition covers the running of the school. Philanthropy covers the things that make it more than that.",
    heroImage: img("photo-1559027615-cd4628902d4a"),
    blocks: [
      {
        type: "prose",
        body: [
          "As a not-for-profit, the school budgets to break even. Gifts fund what a break-even budget cannot: financial aid, capital projects, and programmes that would otherwise be cut first.",
          "Every gift is acknowledged and reported on. Donors see what their money did.",
        ],
      },
      {
        type: "cards",
        heading: "Where gifts go",
        items: [
          { title: "Financial aid", body: "The largest single use of donated funds — places for students whose families could not otherwise be here.", image: img("photo-1509062522246-3755977927d7", 900) },
          { title: "Capital projects", body: "Buildings and facilities, most recently the Lower School science lab.", image: img("photo-1581092160562-40aa08e78837", 900) },
          { title: "Programme endowment", body: "Long-term funds protecting arts, athletics and service programmes from budget cycles.", image: img("photo-1514320291840-2e0a9bf2a9ae", 900) },
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Make a gift", body: "One-off, recurring, or a pledge over several years.", href: "/give/make-a-gift" },
          { title: "Gift policy", body: "What we accept, how gifts are recognised, and how restrictions work.", href: "/give/gift-policy" },
          { title: "Tax deductibility", body: "Belgian tax treatment and cross-border giving.", href: "/give/tax-deductibility" },
        ],
      },
    ],
  },
  {
    href: "/give/make-a-gift",
    eyebrow: "Give",
    title: "Make a gift",
    intro: "One-off, recurring, or a multi-year pledge. Any amount is useful and all of it is acknowledged.",
    heroImage: img("photo-1593113630400-ea4288922497"),
    blocks: [
      {
        type: "table",
        heading: "Ways to give",
        columns: ["Method", "Best for", "Notes"],
        rows: [
          ["Bank transfer", "Larger one-off gifts", "No processing fee — the school receives the full amount"],
          ["Card payment", "Convenience", "Processed securely; a small fee applies"],
          ["Standing order", "Recurring monthly or annual giving", "Easiest to plan against"],
          ["Multi-year pledge", "Capital campaigns", "Arranged through the development office"],
          ["Gift in kind", "Equipment, expertise, services", "Subject to the gift acceptance policy"],
          ["Legacy", "Leaving something in a will", "Please tell us, so we can plan for it"],
        ],
      },
      { type: "cta", heading: "Talk to the development office", body: "Especially for anything above a few thousand euro, or restricted to a particular purpose.", links: [{ label: "Get in touch", href: "/contact", variant: "solid" }] },
    ],
  },
  {
    href: "/give/gift-policy",
    eyebrow: "Give",
    title: "Gift policy",
    intro: "What the school accepts, what it declines, and how donors are recognised.",
    blocks: [
      {
        type: "list",
        heading: "Principles",
        items: [
          "The school accepts gifts that advance its mission and declines those that do not, regardless of size",
          "No gift may confer influence over admissions, hiring, grading or curriculum",
          "Restricted gifts are accepted only where the restriction is practical to honour in perpetuity",
          "Anonymity is always available and always respected",
          "Gifts in kind are valued independently where a valuation is required",
          "The Board approves any naming recognition",
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Can I direct my gift to a specific programme?", a: "Yes, within reason. Broad restrictions — financial aid, athletics, the arts — are straightforward. Very narrow restrictions can become unworkable over time, and we will say so rather than accept and quietly ignore them." },
          { q: "Will my gift be publicised?", a: "Only with your consent. Donors are listed in the annual report by giving level unless they ask not to be." },
          { q: "Does giving affect my child's admission?", a: "No. The admissions committee has no visibility of donor records, and this is audited." },
        ],
      },
    ],
  },
  {
    href: "/give/tax-deductibility",
    eyebrow: "Give",
    title: "Tax deductibility",
    intro: "How gifts are treated for Belgian tax purposes, and what is possible from elsewhere.",
    blocks: [
      {
        type: "prose",
        body: [
          "Gifts from Belgian taxpayers above the statutory annual minimum may qualify for a tax reduction, for which the school issues a certificate in the following calendar year.",
          "Donors resident elsewhere can often give tax-effectively through a cross-border giving network such as Transnational Giving Europe, or through a national friends organisation where one exists.",
        ],
      },
      {
        type: "prose",
        heading: "Please take advice",
        body: [
          "The school is not able to give tax advice, and the treatment of a gift depends on your own circumstances and residence. Speak to your adviser before making a large gift, and tell the development office what structure you plan to use so the paperwork matches.",
        ],
      },
      { type: "cta", heading: "Request a giving certificate", links: [{ label: "Contact development", href: "/contact", variant: "solid" }] },
    ],
  },

  /* ---------------------------------------------------------------- Join */
  {
    href: "/join",
    eyebrow: "Join us",
    title: "Work here",
    intro:
      "Teaching in a school that takes both inclusion and academic ambition seriously, in a city that is easy to live in.",
    heroImage: img("photo-1517245386807-bb43f82c33c4"),
    blocks: [
      {
        type: "prose",
        body: [
          "We recruit year-round, mostly for August starts, and we recruit for disposition as much as for subject expertise. The programme asks teachers to differentiate genuinely, work in teams, and be accountable for the progress of every student in the room.",
          "In return: sustained professional development, small classes, a two-year induction for teachers new to the school, and colleagues who are unusually good.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Current openings", body: "Everything we are actively recruiting for.", href: "/join/current-openings", image: img("photo-1454165804606-c3d57bc86b40", 900) },
          { title: "Professional development", body: "What the school invests in, and what it expects.", href: "/join/professional-development", image: img("photo-1524178232363-1fb2b075b655", 900) },
          { title: "Living in Belgium", body: "Visas, housing, healthcare and the practical business of moving.", href: "/join/living-in-belgium", image: img("photo-1559113202-c916b8e44373", 900) },
        ],
      },
      {
        type: "list",
        heading: "What the package typically includes",
        columns: 2,
        items: [
          "Competitive salary on a published scale",
          "Relocation allowance and shipping",
          "Assistance with visas and work permits for you and your family",
          "Tuition remission for dependent children",
          "Private health insurance and pension contribution",
          "Annual professional development budget per teacher",
        ],
      },
    ],
  },
  {
    href: "/join/current-openings",
    eyebrow: "Join us",
    title: "Current openings",
    intro: "Roles we are actively recruiting for. Speculative applications are also read.",
    blocks: [
      { type: "openings" },
      { type: "cta", heading: "Nothing that fits?", body: "Send a speculative application — we keep them on file for the recruiting season.", links: [{ label: "Contact HR", href: "/contact", variant: "solid" }] },
    ],
  },
  {
    href: "/join/professional-development",
    eyebrow: "Join us",
    title: "Professional development",
    intro:
      "Personalised learning for students only works if it is also true for teachers. This is the part of the strategy that costs the most.",
    heroImage: img("photo-1524178232363-1fb2b075b655"),
    blocks: [
      {
        type: "list",
        heading: "What is in place",
        columns: 2,
        items: [
          "A two-year induction programme for every teacher new to the school",
          "An annual professional development budget held by each teacher",
          "IB workshop funding for teachers new to the Diploma Programme",
          "Weekly collaborative planning time, timetabled rather than optional",
          "Instructional coaching, non-evaluative and opt-in",
          "Support and study leave for teachers pursuing a master's degree",
          "Internal conference days led by colleagues, twice a year",
          "Action research projects with a small grant attached",
        ],
      },
      {
        type: "quote",
        text: "The school will pay for almost any training you can justify. What it will not do is let you sit on it afterwards.",
        attribution: "A department head, at induction",
      },
    ],
  },
  {
    href: "/join/living-in-belgium",
    eyebrow: "Join us",
    title: "Living in Belgium",
    intro:
      "Brussels is smaller, greener and considerably cheaper than most people expect. Here is the practical part.",
    heroImage: img("photo-1559113202-c916b8e44373"),
    blocks: [
      {
        type: "cards",
        items: [
          { title: "Visas and permits", body: "For non-EU staff, the school sponsors the work permit and single-permit application and handles most of the paperwork. Allow three months.", image: img("photo-1450101499163-c8848c66ca85", 900) },
          { title: "Housing", body: "Most staff live in Watermael-Boitsfort, Ixelles, Uccle or Woluwe. Relocation support includes an agent and time off to look.", image: img("photo-1560448204-e02f11c3d0e2", 900) },
          { title: "Healthcare", body: "Belgian healthcare is excellent and cheap. You will join a mutualité; the school provides supplementary private cover.", image: img("photo-1576091160399-112ba8d25d1d", 900) },
          { title: "Language", body: "Brussels is officially bilingual French and Dutch, and functionally trilingual. You will manage in English; you will enjoy it more with some French.", image: img("photo-1456513080510-7bf3a84b82f8", 900) },
        ],
      },
      {
        type: "list",
        heading: "Things people say afterwards",
        columns: 2,
        items: [
          "You can be in Paris, Amsterdam, London or Cologne in under two hours by train",
          "The Sonian Forest starts at the edge of campus and runs for 4,000 hectares",
          "Rent is roughly half what it is in London or Geneva",
          "Cycling infrastructure has improved enormously in the last five years",
          "The weather is genuinely as advertised",
          "Nobody prepares you for how good the bread is",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- Contact */
  {
    href: "/contact",
    eyebrow: "Contact",
    title: "Contact us",
    intro:
      "Reception is open 08:00 to 17:00 on school days and will route you to the right office.",
    blocks: [
      { type: "contact" },
      {
        type: "table",
        heading: "Direct lines",
        columns: ["Office", "For"],
        rows: [
          ["Admissions", "Enquiries, visits, applications, financial aid"],
          ["Lower School office", "Preschool to Grade 6 — attendance, day-to-day matters"],
          ["Middle School office", "Grade 7 to 9"],
          ["High School office", "Grade 10 to 12, university counselling"],
          ["Finance", "Invoices, payment plans, tuition queries"],
          ["Human resources", "Recruitment and employment"],
          ["Development", "Giving, alumni relations"],
          ["Transport", "Bus routes, passes, changes"],
        ],
      },
    ],
  },

  /* -------------------------------------------------------------- Portal */
  {
    href: "/community-portal",
    eyebrow: "My school",
    title: "Community portal",
    intro:
      "The signed-in area for current families and staff: reports, calendars, registration, payments and directories.",
    blocks: [
      {
        type: "list",
        heading: "What is behind the login",
        columns: 2,
        items: [
          "Student reports and continuous assessment",
          "Class pages and homework",
          "Activity and athletics registration",
          "Bus tracking and transport changes",
          "Invoices and payment plans",
          "The family directory, with opt-in controls",
          "Absence reporting",
          "Board minutes and school policies",
        ],
      },
      { type: "cta", heading: "Lost your login?", body: "The IT helpdesk can reset it within a working day.", links: [{ label: "Contact the helpdesk", href: "/contact", variant: "solid" }] },
    ],
  },
  {
    href: "/alumni",
    eyebrow: "My school",
    title: "Alumni",
    intro:
      "Seventy-five years of graduating classes, currently living in most countries you can name.",
    heroImage: img("photo-1523050854058-8df90110c9f1"),
    blocks: [
      {
        type: "cards",
        heading: "What the network does",
        items: [
          { title: "Reunions", body: "Milestone-year reunions on campus each June, plus regional gatherings in London, New York, Geneva and Singapore.", image: img("photo-1511795409834-ef04bbd61622", 900) },
          { title: "Directory", body: "An opt-in directory for finding classmates and making professional connections.", image: img("photo-1517245386807-bb43f82c33c4", 900) },
          { title: "Careers", body: "Alumni return to talk to Grade 11 and 12 students, and to offer internships in Brussels and beyond.", image: img("photo-1507003211169-0a1dd7228f2d", 900) },
        ],
      },
      { type: "cta", heading: "Reconnect", body: "Update your details and we will stop emailing an address you last used in 2004.", links: [{ label: "Get in touch", href: "/contact", variant: "solid" }] },
    ],
  },
  {
    href: "/shop",
    eyebrow: "My school",
    title: "School shop",
    intro: "Raiders kit, PE uniform, stationery and the things students forget at home.",
    blocks: [
      {
        type: "table",
        heading: "Opening hours",
        columns: ["Day", "Hours"],
        rows: [
          ["Monday to Thursday", "08:00 – 09:30 and 15:00 – 16:30"],
          ["Friday", "08:00 – 09:30"],
          ["August, week before term", "09:00 – 16:00 daily"],
        ],
      },
      {
        type: "list",
        heading: "What is stocked",
        columns: 2,
        items: [
          "PE kit and swim gear",
          "Raiders team strips and supporter wear",
          "Stationery and art supplies",
          "Water bottles, bags and lunch boxes",
          "Graduation and reunion merchandise",
          "Second-hand uniform, run by the Family Association",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- Utility */
  {
    href: "/site-map",
    eyebrow: "Utility",
    title: "Site map",
    intro: "Every page on this site, in one list.",
    blocks: [{ type: "site-map" }],
  },
  {
    href: "/accessibility-statement",
    eyebrow: "Utility",
    title: "Accessibility statement",
    intro:
      "This site aims to meet WCAG 2.2 level AA. Where it falls short, we want to know.",
    blocks: [
      {
        type: "list",
        heading: "What has been built in",
        columns: 2,
        items: [
          "A skip link to main content on every page",
          "Keyboard access to every control, with visible focus indicators",
          "Focus trapped inside dialogs, and Escape to close",
          "Colour contrast meeting AA for text and interface elements",
          "Meaningful alternative text, and empty alt on decorative images",
          "Motion reduced automatically for anyone who requests it in their OS",
          "Semantic headings, landmarks and correctly wired tab panels",
          "Live regions announcing the hero slideshow",
        ],
      },
      {
        type: "prose",
        heading: "Known limitations",
        body: [
          "Some third-party embeds — the virtual tour in particular — are outside our control and may not meet the same standard. Where that is the case, an accessible alternative is available on request.",
          "If you hit a barrier anywhere on this site, tell us what you were trying to do and what happened. We treat those reports as bugs, not feedback.",
        ],
      },
      { type: "cta", heading: "Report a barrier", links: [{ label: "Contact us", href: "/contact", variant: "solid" }] },
    ],
  },
  {
    href: "/privacy-policy",
    eyebrow: "Utility",
    title: "Privacy policy",
    intro:
      "What personal data the school holds, why, and what rights you have over it under the GDPR.",
    blocks: [
      {
        type: "prose",
        body: [
          "This page is illustrative. A real privacy policy must be drafted for the specific institution and reviewed by counsel — do not deploy this text.",
        ],
      },
      {
        type: "list",
        heading: "What a school policy needs to cover",
        items: [
          "The identity and contact details of the data controller and the data protection officer",
          "Each category of data held — applicants, students, families, staff, alumni, website visitors",
          "The lawful basis for each processing purpose",
          "Who data is shared with, including processors and any transfers outside the EEA",
          "Retention periods, by category",
          "Data subject rights: access, rectification, erasure, restriction, portability, objection",
          "How to complain, including to the Belgian Data Protection Authority",
        ],
      },
    ],
  },
  {
    href: "/cookie-policy",
    eyebrow: "Utility",
    title: "Cookie policy",
    intro: "What this site stores in your browser, and what it is for.",
    blocks: [
      {
        type: "table",
        columns: ["Category", "Purpose", "Consent"],
        rows: [
          ["Strictly necessary", "Session handling, security, load balancing", "Not required"],
          ["Preferences", "Remembering language and display choices", "Required"],
          ["Analytics", "Aggregate usage measurement", "Required"],
          ["Marketing", "Not used on this site", "—"],
        ],
      },
      {
        type: "prose",
        body: [
          "This rebuild sets no analytics or marketing cookies at all. If you add them, add a consent banner that blocks them until consent is given — a banner that fires the tags first is not consent.",
        ],
      },
    ],
  },
  {
    href: "/child-safeguarding",
    eyebrow: "Utility",
    title: "Child safeguarding",
    intro:
      "The school's first responsibility is that children are safe. Everything else depends on it.",
    blocks: [
      {
        type: "list",
        heading: "What is in place",
        columns: 2,
        items: [
          "Named, trained safeguarding leads in every division",
          "Criminal record checks and reference verification for all staff, contractors and regular volunteers",
          "Safer recruitment practice, including questions about child protection at interview",
          "Annual safeguarding training for every adult on campus",
          "A code of conduct governing adult–student interaction, including online and on trips",
          "Clear reporting routes for students, staff and parents, including anonymous routes",
          "A record-keeping system with defined retention and access controls",
          "Annual review by the Board",
        ],
      },
      {
        type: "prose",
        heading: "If you are worried about a child",
        body: [
          "Tell a safeguarding lead, a principal or any member of staff. You do not need to be certain, and you are not expected to investigate. Reporting a concern that turns out to be nothing is exactly what the system is for.",
          "Concerns about an adult at the school are reported to the Director; concerns about the Director are reported to the Chair of the Board.",
        ],
      },
      { type: "cta", heading: "Report a concern", links: [{ label: "Contact the school", href: "/contact", variant: "solid" }] },
    ],
  },
];
