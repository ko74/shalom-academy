import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const admissionsPages: PageContent[] = [
  {
    href: "/admissions",
    eyebrow: "Admissions",
    title: "Admissions",
    intro:
      "We admit throughout the year, at every grade, as long as there is space and the programme is the right fit. Here is how it works.",
    heroImage: img("photo-1523240795612-9a054b0db644"),
    blocks: [
      {
        type: "prose",
        lead:
          "Most families arrive mid-posting, at short notice, with a lot else going on. The process is built around that.",
        body: [
          "There is no single admissions deadline. Applications are reviewed as they arrive, and a decision usually follows within two weeks of a complete file.",
          "Places at the most in-demand entry points — Grade 6, Grade 9 and Grade 11 — do fill, so apply early if your dates allow it. If a grade is full, you go on a waiting list and we tell you honestly where you stand.",
        ],
      },
      {
        type: "steps",
        heading: "The five steps",
        items: [
          {
            title: "Enquire",
            body: "Tell us the ages of your children and roughly when you need a place. An admissions officer replies within two working days.",
          },
          {
            title: "Visit",
            body: "In person if you are in Brussels, online if you are not. You will meet an admissions officer and, where possible, the relevant principal.",
          },
          {
            title: "Apply",
            body: "The online form, plus two years of school reports, a passport copy and any existing learning assessments.",
          },
          {
            title: "Review",
            body: "The admissions committee reads the whole file. For some applicants there is a short conversation or an English assessment.",
          },
          {
            title: "Enrol",
            body: "You receive an offer, confirm the place with a deposit, and the onboarding team takes over — bus routes, uniforms for PE, the first-day logistics.",
          },
        ],
      },
      {
        type: "cards",
        heading: "The detail",
        items: [
          { title: "Inquire & visit", body: "Book a campus morning or an online meeting.", href: "/admissions/inquire", image: img("photo-1524178232363-1fb2b075b655", 900) },
          { title: "Apply", body: "The form, the documents and what happens after you press send.", href: "/admissions/apply", image: img("photo-1434030216411-0b793f4b4173", 900) },
          { title: "Tuition & fees", body: "The full published schedule for the coming school year.", href: "/admissions/tuition", image: img("photo-1554224155-6726b3ff858f", 900) },
          { title: "Financial aid", body: "Need-based aid and the scholarship programme.", href: "/admissions/financial-aid", image: img("photo-1509062522246-3755977927d7", 900) },
          { title: "Access Programme", body: "Support for students who need more than the standard provision.", href: "/admissions/access-programme", image: img("photo-1503676260728-1c00da094a0b", 900) },
          { title: "Security & transport", body: "Bus routes, campus access and safeguarding.", href: "/admissions/security-transport", image: img("photo-1544620347-c4fd4a3d5957", 900) },
        ],
      },
      {
        type: "cta",
        heading: "Start with a conversation",
        body: "No form to fill in first — an email is enough.",
        links: [
          { label: "Enquire now", href: "/admissions/inquire", variant: "solid" },
          { label: "Read the FAQ", href: "/admissions/faq", variant: "outline" },
        ],
      },
    ],
  },

  {
    href: "/admissions/inquire",
    eyebrow: "Admissions",
    title: "Inquire & visit",
    intro:
      "Campus visits run on weekday mornings during term. They take about ninety minutes and you will see classrooms in use, not empty ones.",
    heroImage: img("photo-1524178232363-1fb2b075b655"),
    blocks: [
      {
        type: "prose",
        heading: "What a visit involves",
        body: [
          "You will meet an admissions officer, walk the parts of campus relevant to your children's ages, and sit in on or observe at least one lesson. Where the timetable allows, you will also meet the principal of the division your child would join.",
          "Bring questions. The visit is more useful as a conversation than a tour, and the people showing you round are allowed to give you straight answers.",
        ],
      },
      { type: "contact" },
      {
        type: "faq",
        heading: "Before you come",
        items: [
          {
            q: "Can I bring my children?",
            a: "Yes, and we would encourage it for anyone Grade 4 and above. Younger children are welcome but the visit is long for them.",
          },
          {
            q: "Can we visit if we are not in Belgium yet?",
            a: "Yes — we run the same meeting over video, and the virtual tour covers the campus itself. Many families enrol without ever setting foot here first.",
          },
          {
            q: "How long before we need to decide?",
            a: "An offer is normally held for two weeks. If you are waiting on a posting confirmation, tell us and we will work with the real dates.",
          },
        ],
      },
    ],
  },

  {
    href: "/admissions/virtual-tour",
    eyebrow: "Admissions",
    title: "Virtual tour",
    intro:
      "Eighteen hectares, three divisions and a château, from wherever you happen to be posted right now.",
    heroImage: img("photo-1562774053-701939374585"),
    blocks: [
      {
        type: "prose",
        body: [
          "The tour is a 360-degree walkthrough covering the Early Childhood Centre, the Lower School, the science and design labs, the theatre, the library, the sports hall and the grounds.",
          "It runs in any modern browser and needs no account. On a phone, moving the handset moves the view.",
        ],
      },
      {
        type: "cta",
        heading: "Open the tour",
        body: "Best on a laptop, but it works on anything.",
        links: [
          { label: "Launch virtual tour", href: "https://www.360marketinglab.org.uk/", variant: "solid", external: true },
          { label: "Book a real visit instead", href: "/admissions/inquire", variant: "outline" },
        ],
      },
    ],
  },

  {
    href: "/admissions/stories",
    eyebrow: "Admissions",
    title: "Community stories",
    intro:
      "Students, parents and alumni, in their own words. The homepage carries a selection; this is the archive.",
    heroImage: img("photo-1544005313-94ddf0286df2"),
    blocks: [
      {
        type: "prose",
        body: [
          "We publish these unedited beyond length. The interviews are conducted by the communications team, but nobody is asked to say anything in particular, and the ones that are critical get published too.",
        ],
      },
      {
        type: "cards",
        heading: "Recent interviews",
        items: [
          { title: "Yunji P.", meta: "Grade 4", body: "A young digital artist on brushes, colour and the sketchbooks she plans to publish.", image: img("photo-1503454537195-1dcabb73ffb9", 900) },
          { title: "Abel L.", meta: "Grade 9", body: "Maths in English, science in French, and a third language kept alive at home.", image: img("photo-1522075469751-3a6694fb2f61", 900) },
          { title: "Krish D.", meta: "Grade 12", body: "The app he built for users with cognitive differences, and why it has nine tabs.", image: img("photo-1519389950473-47ba0277781c", 900) },
          { title: "Alix V.", meta: "Family Association President", body: "On making a very large school feel small, very quickly.", image: img("photo-1573497019940-1c28c88b4f3e", 900) },
          { title: "Bram d.D.", meta: "Class of 2015", body: "From the IB Diploma to a PhD in transplant surgery.", image: img("photo-1582750433449-648ed127bb54", 900) },
          { title: "Chloé D.", meta: "Class of 1999", body: "Arrived with no confidence, left with an English A Diploma.", image: img("photo-1544005313-94ddf0286df2", 900) },
        ],
      },
    ],
  },

  {
    href: "/admissions/apply",
    eyebrow: "Admissions",
    title: "Apply",
    intro: "The form takes about twenty minutes. The documents take longer — start collecting them now.",
    heroImage: img("photo-1434030216411-0b793f4b4173"),
    blocks: [
      {
        type: "list",
        heading: "What you will need to upload",
        columns: 2,
        items: [
          "School reports for the last two academic years, translated into English or French if needed",
          "A copy of the student's passport or national identity document",
          "Any existing educational, psychological or language assessments",
          "A recent passport-style photograph",
          "Immunisation records",
          "The name and email of a current teacher who can be contacted for a reference",
        ],
      },
      {
        type: "prose",
        heading: "On learning assessments",
        body: [
          "Send them. A diagnosis, a support plan or an old psychologist's report will never count against an application — it is the thing that lets us work out whether we can give your child what they need, and how.",
          "Withholding it usually produces a worse outcome for the student later, when support that could have been in place from day one has to be assembled in a hurry.",
        ],
      },
      {
        type: "table",
        heading: "What happens when",
        columns: ["Stage", "Typical time"],
        rows: [
          ["Acknowledgement of your application", "1 working day"],
          ["File marked complete, once documents are in", "Varies — usually within a week"],
          ["Admissions committee review", "5–10 working days"],
          ["Decision issued", "Within 2 weeks of a complete file"],
          ["Place held after an offer", "2 weeks"],
        ],
      },
      {
        type: "cta",
        heading: "Ready to apply",
        body: "You can save the form and come back to it.",
        links: [
          { label: "Open the application form", href: "/admissions/inquire", variant: "solid" },
          { label: "Questions first", href: "/admissions/faq", variant: "outline" },
        ],
      },
    ],
  },

  {
    href: "/admissions/tuition",
    eyebrow: "Admissions",
    title: "Tuition & fees",
    intro:
      "Published in full, in euro, for the 2026–27 school year. Most corporate and institutional employers cover some or all of it.",
    heroImage: img("photo-1554224155-6726b3ff858f"),
    blocks: [
      {
        type: "table",
        heading: "Annual tuition 2026–27",
        note: "Figures are illustrative for this rebuild. Confirm current rates with the admissions office.",
        columns: ["Programme", "Age / grade", "Annual tuition"],
        rows: [
          ["Early Childhood — half day", "2.5 – 4 years", "€14,900"],
          ["Early Childhood — full day", "3 – 4 years", "€21,400"],
          ["Lower School", "Kindergarten – Grade 5", "€28,700"],
          ["Middle School", "Grade 6 – 8", "€31,200"],
          ["High School", "Grade 9 – 12", "€34,600"],
        ],
      },
      {
        type: "table",
        heading: "One-off and additional fees",
        columns: ["Fee", "When", "Amount"],
        rows: [
          ["Application fee", "On application, non-refundable", "€350"],
          ["Enrolment deposit", "On accepting a place, credited to tuition", "€3,000"],
          ["Capital levy", "First year only", "€4,500"],
          ["Bus — return, per year", "Optional", "€2,150"],
          ["IB Diploma examination fees", "Grade 12", "At cost"],
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Can we pay in instalments?",
            a: "Yes. Tuition can be paid annually, in two instalments, or in three. Annual payment carries a small discount; instalments carry a small administrative charge.",
          },
          {
            q: "Is there a sibling discount?",
            a: "A reduction applies from the third enrolled child onwards, applied to the youngest child's tuition.",
          },
          {
            q: "What if we arrive mid-year?",
            a: "Tuition is pro-rated by term from the date of entry. Arriving in January costs roughly half a year.",
          },
          {
            q: "What is not included?",
            a: "Lunches, bus transport, some overnight trips, instrument hire, and examination fees in the final years. Everything else — books, devices, day trips, most after-school activities — is included.",
          },
        ],
      },
      {
        type: "cta",
        heading: "Cost should not be the reason you do not ask",
        body: "Need-based aid is available and applications are confidential.",
        links: [{ label: "Financial aid & scholarships", href: "/admissions/financial-aid", variant: "solid" }],
      },
    ],
  },

  {
    href: "/admissions/access-programme",
    eyebrow: "Admissions",
    title: "Access Programme",
    intro:
      "For students whose learning profile needs substantially more than the standard classroom provision — and who belong here anyway.",
    heroImage: img("photo-1503676260728-1c00da094a0b"),
    blocks: [
      {
        type: "prose",
        body: [
          "Most students with additional needs are supported inside the mainstream programme by the Inclusion team. The Access Programme is for the smaller group whose needs go beyond that: significant cognitive differences, complex profiles, or a level of individual support that a classroom teacher cannot provide alongside twenty others.",
          "Students in the programme are members of their grade. They are in homeroom, in assemblies, at lunch, on trips and in after-school activities with everyone else. What differs is the academic programme, which is individually designed and delivered with dedicated staffing.",
        ],
      },
      {
        type: "list",
        heading: "What the programme provides",
        columns: 2,
        items: [
          "An individual learning plan reviewed each term with the family",
          "Dedicated specialist teachers and learning assistants",
          "Functional academics alongside life and independence skills",
          "Speech, occupational and physical therapy on site",
          "Work experience and transition planning in the final years",
          "Full participation in the social and co-curricular life of the school",
        ],
      },
      {
        type: "prose",
        heading: "Admission to the programme",
        body: [
          "Places are limited and admission is separate from general admission. It involves a full review of existing assessments, a meeting with the family, and usually an observation period.",
          "We will tell you honestly if we do not think we are the right setting. That conversation is more useful to your child than an optimistic yes.",
        ],
      },
      {
        type: "cta",
        heading: "Talk to the Access team",
        links: [{ label: "Contact admissions", href: "/contact", variant: "solid" }],
      },
    ],
  },

  {
    href: "/admissions/financial-aid",
    eyebrow: "Admissions",
    title: "Financial aid & scholarship",
    intro:
      "A need-based aid budget and a small merit scholarship programme. Both are confidential and neither affects an admissions decision.",
    heroImage: img("photo-1509062522246-3755977927d7"),
    blocks: [
      {
        type: "prose",
        heading: "Need-based aid",
        body: [
          "Aid is assessed on demonstrated financial need, using a standard third-party assessment of family circumstances. Awards typically cover between 10% and 60% of tuition and are reviewed annually.",
          "Admissions decisions are made before any financial information is seen. The two processes run separately, and the admissions committee does not know who has applied for aid.",
        ],
      },
      {
        type: "prose",
        heading: "Scholarships",
        body: [
          "A small number of scholarships are awarded each year to students entering Grade 11, on the basis of academic record, contribution to school life, and a written statement. Scholarships are open to both existing students and new applicants.",
        ],
      },
      {
        type: "steps",
        heading: "How to apply for aid",
        items: [
          { title: "Apply for a place first", body: "Aid applications are only assessed for students who already hold an offer or are enrolled." },
          { title: "Submit the financial assessment", body: "Through the third-party service, with supporting tax documentation." },
          { title: "Committee review", body: "The aid committee meets twice a year, in March and again in June for late arrivals." },
          { title: "Decision", body: "Awards are communicated in writing and are renewable subject to annual review." },
        ],
      },
      { type: "cta", heading: "Ask about aid", body: "Nothing you say at this stage commits you to anything.", links: [{ label: "Contact admissions", href: "/contact", variant: "solid" }] },
    ],
  },

  {
    href: "/admissions/faq",
    eyebrow: "Admissions",
    title: "Admissions FAQ",
    intro: "The questions that come up most often, answered properly.",
    heroImage: img("photo-1517245386807-bb43f82c33c4"),
    blocks: [
      {
        type: "faq",
        heading: "Getting in",
        items: [
          { q: "Is the school selective?", a: "Not academically, in the sense of admitting only high performers. We do assess whether we can meet a student's needs with the staffing and programme we have, which is a different question. Most applicants are admitted." },
          { q: "Does my child need to speak English?", a: "No. English Language Development supports students with little or no English from Preschool through to Grade 10, in class and in dedicated sessions. Students routinely arrive with none and sit IB exams in English six years later." },
          { q: "When should we apply?", a: "As soon as you know your dates. Grade 6, Grade 9 and Grade 11 fill earliest. Outside those, mid-year places usually exist." },
          { q: "Is there a waiting list?", a: "Where a grade is full, yes. We tell you your approximate position and update you when it changes, rather than leaving you to chase." },
        ],
      },
      {
        type: "faq",
        heading: "Day to day",
        items: [
          { q: "What are the school hours?", a: "The academic day runs roughly 08:30 to 15:30, with after-school activities and supervision available until 18:00." },
          { q: "How do students get to school?", a: "A bus network covers most of Brussels and the surrounding communes. Many older students use public transport or cycle." },
          { q: "Is there a uniform?", a: "No, other than PE kit and team strips." },
          { q: "What about lunch?", a: "A cafeteria with hot meals, allergen-aware options and a salad bar. Students may also bring lunch." },
          { q: "Do students need their own laptop?", a: "Devices are provided from Grade 3 upwards as part of tuition. Younger students use shared classroom devices." },
        ],
      },
      {
        type: "faq",
        heading: "Programme",
        items: [
          { q: "Which diploma do students take?", a: "Most take the IB Diploma. The school also awards a High School Diploma, and students can combine the two or take individual IB certificate courses — the pathway is built around the student." },
          { q: "Where do graduates go?", a: "Universities across Europe, the UK, North America and increasingly Asia. The counselling team works with students from Grade 10 onwards." },
          { q: "Can my child continue their home language?", a: "The Home Language Programme runs timetabled instruction in the languages most spoken by our families, and can be taken through to an IB language A." },
        ],
      },
      { type: "cta", heading: "Still stuck?", body: "Admissions answers email within two working days.", links: [{ label: "Ask us directly", href: "/contact", variant: "solid" }] },
    ],
  },

  {
    href: "/admissions/security-transport",
    eyebrow: "Admissions",
    title: "Security & transport",
    intro: "How students get here, and how the campus is kept safe once they arrive.",
    heroImage: img("photo-1544620347-c4fd4a3d5957"),
    blocks: [
      {
        type: "split",
        heading: "Getting to campus",
        body: [
          "The bus network runs across Brussels and into the surrounding communes, with routes reviewed each year against where families actually live. Every bus carries a supervisor in addition to the driver, and parents can see their child's bus on a live map.",
          "Older students often travel independently by tram, bus or bicycle. The campus has secure cycle parking and sits a short walk from public transport.",
        ],
        image: img("photo-1570125909232-eb263c188f7e"),
      },
      {
        type: "list",
        heading: "On campus",
        columns: 2,
        items: [
          "Single controlled entrance, staffed during school hours",
          "Visitor registration and badges for anyone without a school pass",
          "Named safeguarding leads in each division, known to students",
          "Regular drills for fire, lockdown and evacuation",
          "On-site nursing team during school hours",
          "Vetting and background checks for all staff, contractors and regular volunteers",
        ],
      },
      { type: "cta", heading: "Read the safeguarding policy", links: [{ label: "Child safeguarding", href: "/child-safeguarding", variant: "solid" }] },
    ],
  },
];
