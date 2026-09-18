/**
 * Homepage content.
 *
 * Copy here is written for this build rather than lifted from the live site,
 * so the project can be shared freely. Swap this file for a CMS query
 * (Contentful, Sanity, Finalsite API…) without touching any component.
 */

export type Slide = {
  id: string;
  image: string;
  alt: string;
  focal?: string;
};

export const heroHeadline = "Leaders in inclusive academic excellence";

export const heroWords = ["Included", "Challenged", "Successful"];

export const heroSlides: Slide[] = [
  {
    id: "assembly",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=70",
    alt: "Students gathered in a bright school atrium between classes",
  },
  {
    id: "science",
    image:
      "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=2000&q=70",
    alt: "Two students running an experiment in a science laboratory",
  },
  {
    id: "field",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=2000&q=70",
    alt: "A school football team training on the pitch at golden hour",
  },
  {
    id: "studio",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=2000&q=70",
    alt: "A student rehearsing with an instrument in the music studio",
  },
  {
    id: "library",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2000&q=70",
    alt: "Reading corner of the school library with tall shelves",
  },
];

export const introText =
  "We are an independent, not-for-profit school in Brussels for students from Preschool to Grade 12, offering an immersive and culturally rich education to families from all over the world.";

/* ---------------------------------------------------------------- */

export const personalised = {
  eyebrow: "Personalised learning",
  title: "An education designed around you",
  body: "Every student arrives with a different profile — different languages, different strengths, a different starting point. The curriculum bends to meet them, so the support and the challenge both land where they are needed. The system moves around the student, not the other way round.",
  image:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=70",
  alt: "A teacher working one-to-one with a student at a desk",
};

export type FocusArea = {
  id: string;
  title: string;
  body: string;
  image: string;
};

export const focusAreas: FocusArea[] = [
  {
    id: "relationships",
    title: "Relationships",
    body: "Knowing a student well is what makes it possible to support and stretch them. Strong relationships are the foundation of everything else here.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "pedagogy",
    title: "Pedagogy",
    body: "Teachers are specialists in their subjects who focus on assessment for learning and on differentiation, so instruction fits each student's profile.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "pathways",
    title: "Flexible learning paths",
    body: "Course options, co-curricular activities and academic pathways keep expanding so that different interests and talents each have a route through school.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "systems",
    title: "Learning systems",
    body: "Digital platforms, shared data, differentiated assessment and sustained professional development give teachers the scaffolding to do their best work.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=70",
  },
];

/* ---------------------------------------------------------------- */

export type Division = {
  id: string;
  name: string;
  grades: string;
  href: string;
  image: string;
  note: string;
};

export const divisions: Division[] = [
  {
    id: "lower",
    name: "Lower School",
    grades: "Preschool – Grade 6",
    href: "/learning/lower-school",
    note: "Play, enquiry and the first steps into two languages.",
    image:
      "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grade 7 – 9",
    href: "/learning/middle-school",
    note: "Room to experiment, and a structure that holds while they do.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=70",
  },
  {
    id: "high",
    name: "High School",
    grades: "Grade 10 – 12",
    href: "/learning/high-school",
    note: "IB Diploma, High School Diploma, and the path that fits.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=70",
  },
];

/* ---------------------------------------------------------------- */

export type Story = {
  id: string;
  name: string;
  role: string;
  excerpt: string;
  quote: string;
  image: string;
};

export type StoryGroup = {
  id: "students" | "parents" | "alumni";
  label: string;
  intro: string;
  stories: Story[];
};

export const storyGroups: StoryGroup[] = [
  {
    id: "students",
    label: "Students",
    intro:
      "An immersive campus, a genuinely international cohort and learning that is built around them — it is why students are glad to come back on a Monday.",
    stories: [
      {
        id: "yunji",
        name: "Yunji P.",
        role: "Grade 4",
        excerpt:
          "A young digital artist on brushes, colour and the sketchbooks she plans to publish.",
        quote:
          "I want to be an illustrator and fill a gallery with things I drew myself.",
        image:
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "abel",
        name: "Abel L.",
        role: "Grade 9",
        excerpt:
          "Studying maths in English and science in French, while keeping a third language going at home.",
        quote:
          "French is where I read and imagine. English is where I argue things out.",
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "krish",
        name: "Krish D.",
        role: "Grade 12",
        excerpt:
          "Built a mobile app that gives users with cognitive differences one simple place to manage a day.",
        quote:
          "The brief was simple: nine tabs, no manual, nothing you have to be taught.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "council",
        name: "Student Council",
        role: "Lower School",
        excerpt:
          "Three Grade 6 representatives on kindness week, recycling drives and giving younger students a vote.",
        quote: "People listen to us. That is the whole point of the council.",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "carolina",
        name: "Carolina S.",
        role: "Grade 12",
        excerpt:
          "Moved from Portugal two years ago; now heading for a politics degree and a life in public service.",
        quote:
          "A community that celebrates what each person is best at — that is the recipe.",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=70",
      },
    ],
  },
  {
    id: "parents",
    label: "Parents",
    intro:
      "Families are partners in the work, not an audience for it. Much of what happens here happens because parents make it happen.",
    stories: [
      {
        id: "alix",
        name: "Alix V.",
        role: "Family Association President",
        excerpt:
          "Every family joins the Family Association automatically — the volunteers make sure nobody arrives and stays a stranger.",
        quote: "The job is making a very large school feel small very quickly.",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "karika",
        name: "Karika S.",
        role: "Former parent",
        excerpt:
          "Three years, two children, and a long list of things she ended up volunteering for.",
        quote:
          "Adaptability, confidence and respect. Those are the things that lasted.",
        image:
          "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "therese",
        name: "Thérèse S.",
        role: "New Early Childhood parent",
        excerpt:
          "Her two-and-a-half-year-old settled into the Early Childhood Centre in under a week.",
        quote: "By day four she was walking in ahead of us. That told us enough.",
        image:
          "https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=900&q=70",
      },
    ],
  },
  {
    id: "alumni",
    label: "Alumni",
    intro:
      "Graduating classes scatter across the world and then keep finding each other. The network is the quiet part of the offer.",
    stories: [
      {
        id: "madeleine",
        name: "Madeleine S.",
        role: "Class of 1993 · Clinic founder",
        excerpt:
          "Dentistry in London, orthodontics in Barcelona and Paris, and now her own international clinic.",
        quote: "My time at school set the groundwork for the whole career.",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "bram",
        name: "Bram d.D.",
        role: "Class of 2015 · Transplant researcher",
        excerpt:
          "Now a PhD candidate in transplant surgery, working as an organ perfusionist.",
        quote:
          "School taught analysis over memorisation. That is what holds up in a hospital.",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "seth",
        name: "Seth F.",
        role: "Class of 1993 · News producer",
        excerpt:
          "Twelve years here, then Boston, then three decades of television and two Emmys.",
        quote:
          "You check your prejudices at the door. Nobody is born hating; here nobody learns it.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=70",
      },
      {
        id: "chloe",
        name: "Chloé D.",
        role: "Class of 1999 · Executive coach",
        excerpt:
          "Arrived from the Belgian system with no confidence and left with an English A Diploma.",
        quote: "A school of life, and a school for life.",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=70",
      },
    ],
  },
];

/* ---------------------------------------------------------------- */

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  note: string;
};

export const stats: Stat[] = [
  {
    id: "languages",
    value: 55,
    suffix: "+",
    label: "Spoken languages",
    note: "Students can take the local languages right through school while keeping their home language alive in the timetable.",
  },
  {
    id: "nationalities",
    value: 60,
    suffix: "+",
    label: "Nationalities",
    note: "A campus where learning happens with and from people who grew up somewhere entirely different.",
  },
  {
    id: "students",
    value: 1300,
    suffix: "+",
    label: "Students",
    note: "Three divisions keep the scale human — small enough that people know each other by name.",
  },
  {
    id: "teachers",
    value: 215,
    suffix: "+",
    label: "Teachers",
    note: "Faculty bring global perspective into every subject, not only the ones with 'international' in the title.",
  },
  {
    id: "ratio",
    value: 7,
    display: "7:1",
    label: "Students to teachers",
    note: "Enough time per student for the relationship that personalised learning actually depends on.",
  },
];

/* ---------------------------------------------------------------- */

export type Programme = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string;
};

export const programmes: Programme[] = [
  {
    id: "academics",
    kicker: "Academics",
    title: "Challenging every learner",
    body: "Schools are often told to choose between being inclusive and being academically strong. Year on year, the results here say that is a false choice: personalised pathways produce both exceptional outcomes and a real sense of belonging.",
    href: "/learning",
    cta: "Learning here",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "languages",
    kicker: "Languages",
    title: "A multilingual community",
    body: "English is the main language of instruction, but French starts at age 2.5 and the bilingual programme runs from Grade 5. Dutch, Spanish and Japanese follow, alongside a Home Language Programme that brings students' own languages into the school day.",
    href: "/learning/language-learning",
    cta: "Language learning",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "athletics",
    kicker: "Athletics",
    title: "Inspiring every athlete",
    body: "More than fifteen sports, fifty competitive teams and facilities to match. Students are encouraged to pick up something new each season rather than specialise early.",
    href: "/student-life/athletics",
    cta: "Meet the Raiders",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "arts",
    kicker: "Arts",
    title: "Unleashing creativity",
    body: "Theatre, film, music and visual arts run from the first year to the last. Every student gets the room to find an artistic voice and an audience to try it on.",
    href: "/student-life/arts",
    cta: "Arts programme",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "support",
    kicker: "Student support",
    title: "Empowering every learner",
    body: "Inclusion and Challenge services meet students where they are across every age group, so the right support and the right stretch arrive at the same time.",
    href: "/learning/student-support",
    cta: "Student support",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "after-school",
    kicker: "After-school",
    title: "Discovering passions",
    body: "A wide activities programme for older students, and a flexible supervised space for Preschool to Grade 6 where the afternoon can just be an afternoon.",
    href: "/student-life/activities",
    cta: "After-school activities",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1400&q=70",
  },
];
