import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const learningPages: PageContent[] = [
  {
    href: "/learning",
    eyebrow: "Learning",
    title: "Learning here",
    intro:
      "One curriculum from age two and a half to Grade 12, designed to bend around the student rather than the other way round.",
    heroImage: img("photo-1434030216411-0b793f4b4173"),
    blocks: [
      {
        type: "prose",
        lead:
          "English is the language of instruction. French starts at 2.5. The IB Diploma sits at the end of it, but it is not the only way through.",
        body: [
          "The programme is built in three divisions with deliberate overlap at the joins, so that moving from Grade 6 to Grade 7, or Grade 9 to Grade 10, is a step rather than a cliff.",
          "What holds it together is a shared approach to assessment and differentiation: teachers plan from what students can currently do, not from what a scheme of work says they should be able to do by now.",
        ],
      },
      {
        type: "cards",
        heading: "The three divisions",
        items: [
          { title: "Lower School", meta: "Preschool – Grade 6", body: "Play, enquiry and the first steps into two languages.", href: "/learning/lower-school", image: img("photo-1587616211892-f743fcca64f9", 900) },
          { title: "Middle School", meta: "Grade 7 – 9", body: "Room to experiment, and a structure that holds while they do.", href: "/learning/middle-school", image: img("photo-1427504494785-3a9ca7044f45", 900) },
          { title: "High School", meta: "Grade 10 – 12", body: "IB Diploma, High School Diploma, and the path that fits.", href: "/learning/high-school", image: img("photo-1524178232363-1fb2b075b655", 900) },
        ],
      },
      {
        type: "cards",
        heading: "Across all three",
        items: [
          { title: "Student support", body: "Inclusion and Challenge, in the same team.", href: "/learning/student-support", image: img("photo-1503676260728-1c00da094a0b", 900) },
          { title: "STEM learning", body: "Design, robotics, and science that involves getting things wrong.", href: "/learning/stem-learning", image: img("photo-1581092160562-40aa08e78837", 900) },
          { title: "Language learning", body: "French, Dutch, Spanish, Japanese, and the Home Language Programme.", href: "/learning/language-learning", image: img("photo-1456513080510-7bf3a84b82f8", 900) },
          { title: "Community engagement", body: "Service that is assessed like everything else.", href: "/learning/community-engagement", image: img("photo-1559027615-cd4628902d4a", 900) },
          { title: "Academic performance", body: "Results, and what they do and do not tell you.", href: "/learning/academic-performance", image: img("photo-1454165804606-c3d57bc86b40", 900) },
        ],
      },
    ],
  },

  {
    href: "/learning/lower-school",
    eyebrow: "Learning",
    title: "Lower School",
    intro:
      "Preschool through Grade 6. The years where children learn how to learn, and decide whether they like it.",
    heroImage: img("photo-1587616211892-f743fcca64f9"),
    blocks: [
      {
        type: "prose",
        body: [
          "The Early Childhood Centre takes children from two and a half. The day is built around play, language and the slow business of becoming a person who can share, wait and try again.",
          "From Kindergarten onwards, literacy and numeracy take a bigger share of the timetable, but enquiry stays the method. Units run for weeks and end in something made, performed or explained to an audience.",
        ],
      },
      {
        type: "split",
        heading: "Two languages from the start",
        body: [
          "French lessons begin at 2.5, taught by specialists, and build steadily. From Grade 5 students can join the French bilingual programme, taking part of the academic curriculum in French.",
          "For many children this is a third or fourth language. That is normal here, and the programme is designed for it.",
        ],
        image: img("photo-1503454537195-1dcabb73ffb9"),
        links: [{ label: "Language learning", href: "/learning/language-learning", variant: "outline" }],
      },
      {
        type: "list",
        heading: "A week in the Lower School",
        columns: 2,
        items: [
          "Homeroom literacy and numeracy with the class teacher",
          "Specialist French, taught in small groups by level",
          "Science and design in the new Lower School lab",
          "Music, visual art and drama with specialist teachers",
          "PE and swimming",
          "Library, with a librarian who knows what each child last read",
        ],
      },
      {
        type: "quote",
        text: "People listen to us. That is the whole point of the council.",
        attribution: "Grade 6 Student Council",
      },
      { type: "cta", heading: "See a Lower School morning", links: [{ label: "Book a visit", href: "/admissions/inquire", variant: "solid" }] },
    ],
  },

  {
    href: "/learning/middle-school",
    eyebrow: "Learning",
    title: "Middle School",
    intro:
      "Grades 7 to 9. Three years of considerable change, held by a structure that assumes it.",
    heroImage: img("photo-1427504494785-3a9ca7044f45"),
    blocks: [
      {
        type: "prose",
        body: [
          "Students move to a full subject timetable with specialist teachers, which is a large jump from one classroom and one teacher. Advisory exists to absorb that: a small group with one adult who follows them across the three years and is responsible for noticing.",
          "Academically, the emphasis moves from being taught to managing your own work — planning, meeting deadlines, asking for help before rather than after. Executive function is taught explicitly, not assumed.",
        ],
      },
      {
        type: "list",
        heading: "The core programme",
        columns: 2,
        items: [
          "English, mathematics, science, individuals and societies",
          "A second language, continued or begun",
          "Design and digital technology",
          "Visual art, music and drama on rotation",
          "Physical and health education",
          "Advisory, service learning and a residential trip each year",
        ],
      },
      {
        type: "split",
        heading: "Trips that are not day trips",
        body: [
          "Each year group travels: Normandy in Grade 8, an Alpine week, and service-focused trips further afield. They are curriculum, not reward, and they are where a lot of the growing up happens.",
        ],
        image: img("photo-1539635278303-d4002c07eae3"),
        reverse: true,
      },
      { type: "cta", heading: "Questions about the transition into Grade 7?", links: [{ label: "Talk to the Middle School office", href: "/contact", variant: "solid" }] },
    ],
  },

  {
    href: "/learning/high-school",
    eyebrow: "Learning",
    title: "High School",
    intro:
      "Grades 10 to 12. The IB Diploma, the High School Diploma, and combinations of the two built around the student.",
    heroImage: img("photo-1524178232363-1fb2b075b655"),
    blocks: [
      {
        type: "prose",
        body: [
          "Grade 10 is a foundation year: broad, demanding, and designed to inform the choices made at the end of it. Grades 11 and 12 are the diploma years.",
          "Most students take the full IB Diploma. Some take IB courses individually alongside the High School Diploma. A smaller group follows a pathway designed for them. All three routes lead to university places, and none of them is presented to students as the lesser option.",
        ],
      },
      {
        type: "table",
        heading: "Pathways at a glance",
        columns: ["Pathway", "Who it suits", "Leads to"],
        rows: [
          ["Full IB Diploma", "Students wanting the broadest, most demanding route", "Universities worldwide"],
          ["High School Diploma with IB courses", "Students who want depth in some subjects, breadth in others", "Universities worldwide, with course certificates"],
          ["High School Diploma", "Students whose strengths sit outside a six-subject diploma", "Universities, conservatoires, applied programmes"],
        ],
      },
      {
        type: "list",
        heading: "Beyond the timetable",
        columns: 2,
        items: [
          "University counselling from Grade 10, with a named counsellor",
          "Extended Essay supervision and Theory of Knowledge",
          "CAS — creativity, activity, service — over eighteen months",
          "Model United Nations, debate and speech competitions",
          "Student leadership and the school council",
          "Internships and work experience in Brussels institutions",
        ],
      },
      {
        type: "quote",
        text: "School taught analysis over memorisation. That is what holds up in a hospital.",
        attribution: "Bram d.D.",
        role: "Class of 2015",
      },
      { type: "cta", heading: "See the results", links: [{ label: "Academic performance", href: "/learning/academic-performance", variant: "solid" }] },
    ],
  },

  {
    href: "/learning/student-support",
    eyebrow: "Learning",
    title: "Student support",
    intro:
      "Inclusion and Challenge sit in one team, because they are the same job: working out what a student needs and making sure they get it.",
    heroImage: img("photo-1503676260728-1c00da094a0b"),
    blocks: [
      {
        type: "prose",
        body: [
          "Support is not a room students are sent to. Most of it happens in class, through how lessons are planned and how teachers are supported to plan them. Specialists push into classrooms far more often than they pull students out.",
          "Where a student does need individual work — language, literacy, executive function, a specific difficulty — it is timetabled, reviewed and shared with the family. Nothing happens that parents find out about at the end of term.",
        ],
      },
      {
        type: "cards",
        heading: "What the team covers",
        items: [
          { title: "Learning support", body: "For identified learning differences, in class and in individual sessions.", image: img("photo-1509062522246-3755977927d7", 900) },
          { title: "English Language Development", body: "For students arriving with little or no English, Preschool to Grade 10.", image: img("photo-1456513080510-7bf3a84b82f8", 900) },
          { title: "Challenge", body: "Extension, acceleration and competition for students who need the ceiling raised.", image: img("photo-1434030216411-0b793f4b4173", 900) },
          { title: "Counselling", body: "Social and emotional support, in every division, confidential within safeguarding limits.", image: img("photo-1573497019940-1c28c88b4f3e", 900) },
          { title: "Speech and occupational therapy", body: "On site, integrated with classroom work.", image: img("photo-1581092160562-40aa08e78837", 900) },
          { title: "Access Programme", body: "For profiles needing substantially more than standard provision.", href: "/admissions/access-programme", image: img("photo-1544531585-9847b68c8c86", 900) },
        ],
      },
      { type: "cta", heading: "Worried about something specific?", body: "Tell admissions early. It gives us more to work with.", links: [{ label: "Get in touch", href: "/contact", variant: "solid" }] },
    ],
  },

  {
    href: "/learning/stem-learning",
    eyebrow: "Learning",
    title: "STEM learning",
    intro:
      "Science, technology, engineering and mathematics — taught as things you do, with the failure left in.",
    heroImage: img("photo-1581092160562-40aa08e78837"),
    blocks: [
      {
        type: "prose",
        body: [
          "The new Lower School science lab means the youngest students now run experiments in a proper lab rather than at a classroom table. By Middle School, design and digital technology are timetabled subjects with their own workshop space.",
          "In High School, the sciences run to IB Higher Level, and the design programme covers CAD, fabrication, electronics and programming.",
        ],
      },
      {
        type: "list",
        heading: "Where it shows up",
        columns: 2,
        items: [
          "The Middle School STEM Discovery Fair, each June",
          "Robotics teams competing across Europe",
          "Destination Imagination challenges from Grade 3",
          "Extended Essays in the sciences, supervised by subject specialists",
          "A maker space open at lunch and after school",
          "Coding clubs from Grade 2 upwards",
        ],
      },
      {
        type: "split",
        heading: "Mathematics, without the sorting hat",
        body: [
          "Students are taught in mixed groups for longer than is typical, with differentiation inside the classroom rather than early streaming. The evidence that early setting helps anybody except the top set is thin, and it costs a lot of students their confidence.",
          "By High School there are genuinely different courses, because IB Mathematics is genuinely different at each level. That choice is made with the student, late, on evidence.",
        ],
        image: img("photo-1509228627152-72ae9ae6848d"),
        reverse: true,
      },
    ],
  },

  {
    href: "/learning/language-learning",
    eyebrow: "Learning",
    title: "Language learning",
    intro:
      "English is the language of instruction. It is rarely the only language in the room, and the programme is built on that.",
    heroImage: img("photo-1456513080510-7bf3a84b82f8"),
    blocks: [
      {
        type: "table",
        heading: "What is offered, and when",
        columns: ["Language", "From", "To"],
        rows: [
          ["French", "Age 2.5", "IB Language A or B, Higher Level"],
          ["French bilingual programme", "Grade 5", "Grade 9, feeding into IB French A"],
          ["Dutch", "Grade 6", "IB Language B"],
          ["Spanish", "Grade 6", "IB Language B"],
          ["Japanese", "Grade 6", "IB Language B"],
          ["English Language Development", "Preschool", "Grade 10"],
          ["Home Language Programme", "Grade 1", "IB Language A, school-supported self-taught"],
        ],
      },
      {
        type: "prose",
        heading: "The Home Language Programme",
        body: [
          "Students who speak a language at home that the school does not teach can still study it formally — timetabled, tutored, and in many cases taken through to an IB Language A at Higher Level.",
          "This matters more than it sounds. Students who lose their home language lose access to their grandparents, and to a large part of who they are. Keeping it is also, consistently, good for their English.",
        ],
      },
      {
        type: "quote",
        text: "French is where I read and imagine. English is where I argue things out.",
        attribution: "Abel L.",
        role: "Grade 9",
      },
    ],
  },

  {
    href: "/learning/community-engagement",
    eyebrow: "Learning",
    title: "Community engagement",
    intro:
      "Service that is planned, sustained and reflected on — not a collection of afternoons that look good on an application.",
    heroImage: img("photo-1559027615-cd4628902d4a"),
    blocks: [
      {
        type: "prose",
        body: [
          "Service learning runs from the Lower School, where it looks like a class project with a real beneficiary, up to CAS in the diploma years, where students design and carry out sustained commitments over eighteen months.",
          "The test we apply is whether the partner organisation would notice if we stopped. Where the answer is no, it is an activity, not service, and we call it that.",
        ],
      },
      {
        type: "cards",
        heading: "Long-running partnerships",
        items: [
          { title: "Local food distribution", body: "Weekly volunteering with a Brussels food bank, run by Grade 11 and 12 students.", image: img("photo-1593113630400-ea4288922497", 900) },
          { title: "Refugee education support", body: "Tutoring and language support in partnership with resettlement organisations in the city.", image: img("photo-1497486751825-1233686d5d80", 900) },
          { title: "Environmental stewardship", body: "Managing the woodland on campus and a long-term biodiversity monitoring project.", image: img("photo-1441974231531-c6227db76b6e", 900) },
        ],
      },
      { type: "cta", heading: "Organisations: get in touch", body: "We are always looking for partnerships that are genuinely reciprocal.", links: [{ label: "Contact the school", href: "/contact", variant: "solid" }] },
    ],
  },

  {
    href: "/learning/academic-performance",
    eyebrow: "Learning",
    title: "Academic performance",
    intro:
      "The results, published in full, with what they mean and what they do not.",
    heroImage: img("photo-1454165804606-c3d57bc86b40"),
    blocks: [
      {
        type: "stats",
        heading: "IB Diploma, most recent cohort",
        items: [
          { value: 34, suffix: "", label: "Average points (world average 30)" },
          { value: 97, suffix: "%", label: "Pass rate" },
          { value: 22, suffix: "%", label: "Scored 40 points or above" },
          { value: 3, label: "Perfect 45-point scores" },
        ],
      },
      {
        type: "prose",
        heading: "Reading these honestly",
        body: [
          "A school average is a blunt instrument. It rises if you restrict who is allowed to sit the exam, and ours does not do that: we enter students across a wide range of profiles, including students who arrived four years earlier with no English.",
          "The number we watch internally is the difference between a student's predicted grades on entry to Grade 11 and what they actually achieve. That is the part the school is responsible for.",
        ],
      },
      {
        type: "list",
        heading: "Where the last three graduating classes went",
        columns: 3,
        items: [
          "KU Leuven",
          "UCLouvain",
          "Delft University of Technology",
          "University of Amsterdam",
          "Imperial College London",
          "University of Edinburgh",
          "Trinity College Dublin",
          "Sciences Po",
          "Bocconi",
          "McGill",
          "University of Toronto",
          "NYU",
          "Berklee College of Music",
          "University of Tokyo",
          "National University of Singapore",
        ],
      },
      { type: "cta", heading: "Full results and destination reports", links: [{ label: "Request from the counselling office", href: "/contact", variant: "solid" }] },
    ],
  },
];
