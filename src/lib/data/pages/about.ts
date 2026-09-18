import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const aboutPages: PageContent[] = [
  {
    href: "/about",
    eyebrow: "About",
    title: "A school built by the people in it",
    intro:
      "Independent, not-for-profit, and in Brussels since 1951. Everything on this page is the short version — the sub-pages hold the detail.",
    heroImage: img("photo-1562774053-701939374585"),
    blocks: [
      {
        type: "prose",
        lead:
          "We are a school of about 1,350 students drawn from more than sixty countries, taught in English, from age two and a half to Grade 12.",
        body: [
          "The campus sits on eighteen hectares of woodland in Watermael-Boitsfort, ten minutes from the centre of Brussels. It has been a school since 1951, when a group of diplomatic and business families set one up for children who would otherwise have had nowhere to go.",
          "What has not changed since is the basic proposition: a rigorous academic programme that does not ask students to become someone else to succeed in it.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: 1951, display: "1951", label: "Founded" },
          { value: 18, suffix: "ha", label: "Campus" },
          { value: 60, suffix: "+", label: "Nationalities" },
          { value: 75, label: "Years of graduates" },
        ],
      },
      {
        type: "cards",
        heading: "Start here",
        items: [
          {
            title: "Mission & strategy",
            body: "What the school says it is for, and the five-year plan for getting there.",
            href: "/about/mission",
            image: img("photo-1454165804606-c3d57bc86b40", 900),
          },
          {
            title: "Our legacy",
            body: "Seventy-five years, four campuses' worth of building, and a lot of alumni.",
            href: "/about/legacy",
            image: img("photo-1481627834876-b7833e8f5570", 900),
          },
          {
            title: "Leadership",
            body: "The people running the school day to day, and how to reach them.",
            href: "/about/leadership",
            image: img("photo-1507003211169-0a1dd7228f2d", 900),
          },
          {
            title: "Governance",
            body: "The Board of Trustees, the association behind it, and how decisions get made.",
            href: "/about/governance",
            image: img("photo-1517048676732-d65bc937f952", 900),
          },
          {
            title: "News & media",
            body: "Everything published from campus, newest first.",
            href: "/about/news",
            image: img("photo-1523240795612-9a054b0db644", 900),
          },
          {
            title: "School calendar",
            body: "Term dates, holidays and the events worth putting in a diary.",
            href: "/about/calendar",
            image: img("photo-1506784983877-45594efa4cbe", 900),
          },
        ],
      },
      {
        type: "cta",
        heading: "The best way to understand a school is to walk around it",
        body: "Visits run most weekday mornings during term.",
        links: [
          { label: "Book a visit", href: "/admissions/inquire", variant: "solid" },
          { label: "Take the virtual tour", href: "/admissions/virtual-tour", variant: "outline" },
        ],
      },
    ],
  },

  {
    href: "/about/mission",
    eyebrow: "About",
    title: "Mission & strategy",
    intro:
      "One sentence about what the school is for, and the plan that turns it into decisions about timetables and budgets.",
    heroImage: img("photo-1454165804606-c3d57bc86b40"),
    blocks: [
      {
        type: "quote",
        text: "Everyone included, everyone challenged, everyone successful.",
        attribution: "The school mission",
      },
      {
        type: "prose",
        heading: "What that commits us to",
        body: [
          "Inclusion here is not a separate programme running alongside the academic one. It means the same curriculum is expected to work for a student who arrived last month with no English and for a student taking six Higher Level subjects, and that the school carries the burden of making that true rather than the student.",
          "Challenge means the ceiling is not lowered to make inclusion easier. Both things are supposed to be true at once, which is the hard part and the reason the strategy exists.",
        ],
      },
      {
        type: "list",
        heading: "The four strategic priorities",
        columns: 2,
        items: [
          "Relationships — every student known well enough by at least one adult that gaps get noticed early",
          "Pedagogy — assessment for learning and differentiation as the default practice, not an initiative",
          "Flexible pathways — more routes through school, so that talent does not have to fit one shape",
          "Learning systems — the platforms, data and professional development that make the first three sustainable",
        ],
      },
      {
        type: "split",
        heading: "The Big 4",
        body: [
          "Across the Lower School, four words do most of the behavioural work: safety, fairness, kindness and respect. They appear in the corridors, in restorative conversations, and in how students talk to each other about what went wrong.",
          "They are deliberately plain. A six-year-old can use them, and a sixteen-year-old cannot dismiss them.",
        ],
        image: img("photo-1544531585-9847b68c8c86"),
      },
      {
        type: "cta",
        heading: "Read the full strategic plan",
        body: "Published annually, with progress against each priority.",
        links: [{ label: "Contact the Director's office", href: "/contact", variant: "solid" }],
      },
    ],
  },

  {
    href: "/about/legacy",
    eyebrow: "About",
    title: "Our legacy",
    intro: "Seventy-five years of a school that was supposed to be temporary.",
    heroImage: img("photo-1481627834876-b7833e8f5570"),
    blocks: [
      {
        type: "steps",
        heading: "How we got here",
        items: [
          {
            title: "1951 — A school in a house",
            body: "Founded by families attached to the new international institutions in Brussels. Forty-odd students, a handful of teachers, and no expectation that it would last a decade.",
          },
          {
            title: "1960s — The Kattenberg campus",
            body: "The move to Watermael-Boitsfort and the château that still anchors the site. Enrolment passes five hundred.",
          },
          {
            title: "1970s — The IB arrives",
            body: "Among the earliest cohort of schools to offer the International Baccalaureate Diploma, which is now taken by most of the graduating class.",
          },
          {
            title: "1990s — Inclusion becomes policy",
            body: "The school commits to admitting students with a wide range of learning profiles, well before that was common in international education.",
          },
          {
            title: "2010s — Building for how we teach",
            body: "New arts, science and athletics facilities designed around collaborative teaching rather than rows of desks.",
          },
          {
            title: "Today",
            body: "Around 1,350 students, sixty-plus nationalities, and alumni in most countries you can name.",
          },
        ],
      },
      {
        type: "quote",
        text: "You check your prejudices at the door. Nobody is born hating; here nobody learns it.",
        attribution: "Seth F.",
        role: "Class of 1993",
      },
      {
        type: "cta",
        heading: "Were you here?",
        body: "The alumni network runs reunions, regional chapters and a directory.",
        links: [{ label: "Alumni", href: "/alumni", variant: "solid" }],
      },
    ],
  },

  {
    href: "/about/leadership",
    eyebrow: "About",
    title: "Leadership",
    intro: "The senior team, what each of them is responsible for, and how to reach them.",
    heroImage: img("photo-1507003211169-0a1dd7228f2d"),
    blocks: [
      {
        type: "cards",
        heading: "Senior leadership team",
        items: [
          {
            title: "Director",
            meta: "Whole school",
            body: "Accountable to the Board for the school's academic programme, finances and strategic direction.",
            image: img("photo-1560250097-0b93528c311a", 900),
          },
          {
            title: "Deputy Director, Learning",
            meta: "Curriculum",
            body: "Oversees curriculum design, assessment and professional development across all three divisions.",
            image: img("photo-1573497019940-1c28c88b4f3e", 900),
          },
          {
            title: "Lower School Principal",
            meta: "Preschool – Grade 6",
            body: "Leads the Early Childhood Centre and the elementary programme.",
            image: img("photo-1580489944761-15a19d654956", 900),
          },
          {
            title: "Middle School Principal",
            meta: "Grade 7 – 9",
            body: "Leads the middle years, including advisory and the transition into High School.",
            image: img("photo-1544005313-94ddf0286df2", 900),
          },
          {
            title: "High School Principal",
            meta: "Grade 10 – 12",
            body: "Leads the diploma programmes, university counselling and student leadership.",
            image: img("photo-1582750433449-648ed127bb54", 900),
          },
          {
            title: "Director of Admissions",
            meta: "Enrolment",
            body: "First point of contact for every enquiring family, from first email to first day.",
            image: img("photo-1594744803329-e58b31de8bf5", 900),
          },
        ],
      },
      {
        type: "cta",
        heading: "Need to reach someone specific?",
        body: "Reception will route you to the right office.",
        links: [{ label: "Contact the school", href: "/contact", variant: "solid" }],
      },
    ],
  },

  {
    href: "/about/governance",
    eyebrow: "About",
    title: "Governance",
    intro:
      "An independent not-for-profit association, governed by a volunteer Board of Trustees elected by the school community.",
    heroImage: img("photo-1517048676732-d65bc937f952"),
    blocks: [
      {
        type: "prose",
        body: [
          "The school is constituted under Belgian law as an association sans but lucratif — a not-for-profit. There are no shareholders and no owner. Any surplus goes back into the school.",
          "The Board of Trustees sets policy, approves the budget and appoints the Director. It does not manage the school day to day; that is the Director's job, and the separation is deliberate.",
        ],
      },
      {
        type: "list",
        heading: "What the Board is responsible for",
        columns: 2,
        items: [
          "Appointing, supporting and evaluating the Director",
          "Approving the annual budget and tuition schedule",
          "Setting and reviewing school policy",
          "Long-range strategic and capital planning",
          "Safeguarding the school's financial health and legal standing",
          "Monitoring progress against the strategic plan",
        ],
      },
      {
        type: "faq",
        heading: "Common questions",
        items: [
          {
            q: "Who can serve on the Board?",
            a: "Trustees are drawn from current parents, alumni and the wider community, and serve staggered multi-year terms on a volunteer basis. Elections are held annually at the general assembly.",
          },
          {
            q: "Can parents see Board decisions?",
            a: "Minutes of Board meetings are published to the community portal, with confidential personnel and individual student matters redacted.",
          },
          {
            q: "How do I raise something with the Board?",
            a: "Operational concerns go to the relevant principal first — that is almost always faster. Matters of policy can be raised through the Family Association or directly with the Board secretary.",
          },
        ],
      },
    ],
  },

  {
    href: "/about/news",
    eyebrow: "About",
    title: "News & media",
    intro: "Everything published from campus, newest first.",
    blocks: [{ type: "news-listing" }],
  },

  {
    href: "/about/calendar",
    eyebrow: "About",
    title: "School calendar",
    intro: "Term dates, holidays and the events worth putting in a diary.",
    blocks: [
      { type: "events-listing" },
      {
        type: "table",
        heading: "Term dates",
        note: "Provisional until confirmed by the Board each spring.",
        columns: ["Term", "Starts", "Ends"],
        rows: [
          ["Semester 1", "20 August 2026", "19 December 2026"],
          ["Winter break", "22 December 2026", "5 January 2027"],
          ["Semester 2", "6 January 2027", "19 June 2027"],
          ["Spring break", "30 March 2027", "13 April 2027"],
          ["Summer break", "22 June 2027", "18 August 2027"],
        ],
      },
    ],
  },
];
