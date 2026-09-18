import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const studentLifePages: PageContent[] = [
  {
    href: "/student-life",
    eyebrow: "Student life",
    title: "Student life",
    intro:
      "What happens around the timetable, which for a lot of students turns out to be the part they remember.",
    heroImage: img("photo-1514320291840-2e0a9bf2a9ae"),
    blocks: [
      {
        type: "prose",
        body: [
          "Arts, athletics and activities are open to everyone, and that is a policy rather than a sentiment: teams are not cut, productions are cast broadly, and students are encouraged to pick up something new each season instead of specialising at twelve.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Arts", body: "Theatre, film, music and visual art, from the first year to the last.", href: "/student-life/arts", image: img("photo-1514320291840-2e0a9bf2a9ae", 900) },
          { title: "Athletics", body: "Fifteen sports, fifty teams, and the Raiders.", href: "/student-life/athletics", image: img("photo-1461896836934-ffe607ba8211", 900) },
          { title: "After-school activities", body: "Clubs, coaching and supervised afternoons.", href: "/student-life/activities", image: img("photo-1472162072942-cd5147eb3902", 900) },
          { title: "Camps", body: "Summer and holiday programmes, open beyond the school.", href: "/student-life/camps", image: img("photo-1478131143081-80f7f84ca84d", 900) },
        ],
      },
    ],
  },

  {
    href: "/student-life/arts",
    eyebrow: "Student life",
    title: "Arts",
    intro:
      "Four disciplines, three divisions, and a theatre that is in use most evenings of the week.",
    heroImage: img("photo-1514320291840-2e0a9bf2a9ae"),
    blocks: [
      {
        type: "cards",
        heading: "The programme",
        items: [
          { title: "Theatre", body: "Two main-stage productions a year, a student-directed festival, and technical theatre taught as a subject in its own right.", image: img("photo-1503095396549-807759245b35", 900) },
          { title: "Music", body: "Choirs, concert band, orchestra, jazz ensemble and rock bands, plus individual instrumental tuition on site.", image: img("photo-1513364776144-60967b0f800f", 900) },
          { title: "Visual art", body: "Drawing, painting, printmaking, ceramics and photography, with a gallery space that changes each term.", image: img("photo-1460661419201-fd4cecdf8a8b", 900) },
          { title: "Film", body: "Production from Middle School upwards, with an annual student film festival judged externally.", image: img("photo-1485846234645-a62644f84728", 900) },
        ],
      },
      {
        type: "prose",
        heading: "Casting and cutting",
        body: [
          "Productions are cast to include, not to showcase. Directors are expected to build a show around the students who auditioned rather than lament the ones who did not.",
          "This does not lower the standard. The main-stage productions tour, and several alumni have gone on to conservatoires and professional work.",
        ],
      },
      { type: "cta", heading: "Come to a performance", body: "Most productions are open to the public.", links: [{ label: "See the calendar", href: "/about/calendar", variant: "solid" }] },
    ],
  },

  {
    href: "/student-life/athletics",
    eyebrow: "Student life",
    title: "Athletics",
    intro:
      "The Raiders. Over fifteen sports, around fifty teams, and a no-cut policy that we actually keep.",
    heroImage: img("photo-1461896836934-ffe607ba8211"),
    blocks: [
      {
        type: "stats",
        items: [
          { value: 15, suffix: "+", label: "Sports offered" },
          { value: 50, suffix: "+", label: "Competitive teams" },
          { value: 3, label: "Seasons per year" },
          { value: 0, label: "Students cut from a squad" },
        ],
      },
      {
        type: "list",
        heading: "Sports by season",
        columns: 3,
        items: [
          "Football",
          "Volleyball",
          "Cross-country",
          "Swimming",
          "Basketball",
          "Rugby",
          "Tennis",
          "Track and field",
          "Softball",
          "Golf",
          "Badminton",
          "Ultimate frisbee",
        ],
      },
      {
        type: "split",
        heading: "Competition beyond Brussels",
        body: [
          "Teams compete in the international schools circuit across Belgium, the Netherlands, Germany, France and the UK. Tournament weekends involve travel, host families and, for most students, the first time they represent something.",
          "Facilities include two full pitches, a sports hall, a swimming pool, tennis courts and a fitness suite, all on campus.",
        ],
        image: img("photo-1526506118085-60ce8714f8c5"),
      },
      { type: "cta", heading: "Fixtures and results", links: [{ label: "School calendar", href: "/about/calendar", variant: "solid" }] },
    ],
  },

  {
    href: "/student-life/activities",
    eyebrow: "Student life",
    title: "After-school activities",
    intro:
      "Around a hundred activities a season for older students, and a flexible supervised programme for the youngest.",
    heroImage: img("photo-1472162072942-cd5147eb3902"),
    blocks: [
      {
        type: "prose",
        body: [
          "Activities run in three seasons, mirroring the athletics calendar. Registration opens a fortnight before each season and most activities are included in tuition.",
          "For Preschool to Grade 6, the supervision programme runs until 18:00: a supervised, unhurried space with games, reading, outdoor time and help with homework if it is wanted. Booking is flexible by the day.",
        ],
      },
      {
        type: "list",
        heading: "A sample of what runs",
        columns: 3,
        items: [
          "Robotics",
          "Model United Nations",
          "Debate and public speaking",
          "Student newspaper",
          "Chess",
          "Cooking",
          "Climbing",
          "Coding club",
          "Photography",
          "Yearbook",
          "Choir and bands",
          "Environmental action group",
          "Duke of Edinburgh's International Award",
          "Board games",
          "Homework club",
        ],
      },
      { type: "cta", heading: "Registration opens each season", links: [{ label: "Community portal", href: "/community-portal", variant: "solid" }] },
    ],
  },

  {
    href: "/student-life/camps",
    eyebrow: "Student life",
    title: "Camps",
    intro:
      "Summer and holiday camps on campus, open to our own families and to children from across Brussels.",
    heroImage: img("photo-1478131143081-80f7f84ca84d"),
    blocks: [
      {
        type: "cards",
        heading: "What runs",
        items: [
          { title: "Summer camp", meta: "Ages 4 – 14, weekly", body: "Six weeks across July and August. Sport, art, science, swimming and a lot of outdoor time in the woods.", image: img("photo-1502086223501-7ea6ecd79368", 900) },
          { title: "Language camp", meta: "Ages 6 – 14", body: "English or French immersion in the mornings, activities in the afternoons. Popular with families arriving before the school year starts.", image: img("photo-1503676260728-1c00da094a0b", 900) },
          { title: "Sports academies", meta: "Ages 8 – 16", body: "Week-long intensives in football, volleyball, tennis and swimming, coached by school staff.", image: img("photo-1526506118085-60ce8714f8c5", 900) },
          { title: "Holiday camps", meta: "Autumn, winter, spring", body: "Shorter programmes during school breaks, for families who are in Brussels over the holidays.", image: img("photo-1544531585-9847b68c8c86", 900) },
        ],
      },
      {
        type: "faq",
        items: [
          { q: "Do you have to be a student here?", a: "No. Camps are open to any child in the age range, and a good proportion of campers come from other schools in Brussels." },
          { q: "What are the hours?", a: "09:00 to 16:00, with supervised early drop-off from 08:00 and late pick-up until 18:00 at additional cost." },
          { q: "What language are camps run in?", a: "English, with French-speaking staff in every group. The language camps are the exception, by design." },
        ],
      },
      { type: "cta", heading: "Booking opens in February", links: [{ label: "Ask about camps", href: "/contact", variant: "solid" }] },
    ],
  },
];
