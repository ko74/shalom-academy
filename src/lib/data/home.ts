/**
 * Homepage content.
 *
 * Copy here is written for this build rather than lifted from any live site,
 * so the project can be shared freely. Swap this file for a CMS query
 * (Contentful, Sanity, Finalsite API…) without touching any component.
 */

export type Slide = {
  id: string;
  image: string;
  alt: string;
  focal?: string;
};

export const heroHeadline = "A place where children come first";

export const heroWords = ["Nurtured", "Challenged", "Inspired"];

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
  "The Mickbess School – Appolonia is a welcoming school community where every child is known, supported, and challenged to grow. From the earliest years through to graduation, we nurture curiosity, confidence and character in equal measure.";

/* ---------------------------------------------------------------- */

export const personalised = {
  eyebrow: "Personalised learning",
  title: "An education designed around you",
  body:
    "Every student arrives with a different profile — different strengths, different interests, a different starting point. Our teachers get to know each child as an individual, so the support and the challenge both land where they are needed. The curriculum bends to meet the student, not the other way round.",
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
    title: "Strong relationships",
    body: "Knowing a student well is what makes it possible to support and stretch them. Strong relationships are the foundation of everything else here.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "pedagogy",
    title: "Great teaching",
    body: "Teachers are specialists in their subjects who focus on assessment for learning and on differentiation, so instruction fits each student's profile.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "pathways",
    title: "Flexible learning paths",
    body: "Course options, co-curricular activities and academic pathways keep expanding so that different interests and ambitions all have a place.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "community",
    title: "A caring community",
    body: "Families, staff and students work together in partnership, creating a school where everyone belongs and every voice is heard.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=70",
  },
];

/* ---------------------------------------------------------------- */

export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  note?: string;
};

export const stats: Stat[] = [
  {
    id: "founded",
    value: 2024,
    display: "2024",
    label: "Founded",
    note: "The Mickbess School – Appolonia opened its doors to welcome its first families.",
  },
  {
    id: "students",
    value: 12,
    suffix: "+",
    label: "Average class size",
    note: "Small enough that every child is known by name, large enough for lively discussion.",
  },
  {
    id: "subjects",
    value: 12,
    suffix: "+",
    label: "Subjects taught",
    note: "From English and mathematics to art, music, computing and physical education.",
  },
  {
    id: "teachers",
    value: 15,
    suffix: "+",
    label: "Teachers",
    note: "Dedicated educators who go beyond the curriculum to inspire a lifelong love of learning.",
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
    body: "A broad, balanced curriculum that builds knowledge, skills and understanding year by year — from Early Years through to Sixth Form.",
    href: "/academics",
    cta: "Explore academics",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "languages",
    kicker: "Languages",
    title: "A multilingual community",
    body: "English is the main language of instruction, with French and other languages woven into the school day alongside a home-language programme.",
    href: "/academics",
    cta: "Languages",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "athletics",
    kicker: "Athletics",
    title: "Inspiring every athlete",
    body: "Sport and physical education are for everyone. Students are encouraged to try something new each season rather than specialise early.",
    href: "/facilities",
    cta: "See facilities",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "arts",
    kicker: "Arts",
    title: "Unleashing creativity",
    body: "Art, music and drama give every student the room to find an artistic voice and an audience to try it on.",
    href: "/facilities",
    cta: "Arts programme",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "support",
    kicker: "Student support",
    title: "Empowering every learner",
    body: "Pastoral care and learning support meet students where they are, so the right support and the right stretch arrive at the same time.",
    href: "/about",
    cta: "Student support",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "after-school",
    kicker: "After-school",
    title: "Discovering passions",
    body: "Clubs, activities and supervised care give students space to explore interests beyond the classroom.",
    href: "/facilities",
    cta: "After-school activities",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1400&q=70",
  },
];

/* ---------------------------------------------------------------- */
/*  Community stories data                                          */
/* ---------------------------------------------------------------- */

export type Story = {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  excerpt: string;
};

export type StoryGroup = {
  id: string;
  label: string;
  intro: string;
  stories: Story[];
};

export const storyGroups: StoryGroup[] = [
  {
    id: "students",
    label: "Students",
    intro: "Hear from our learners about life at The Mickbess School.",
    stories: [
      {
        id: "s1",
        name: "Maya, Age 10",
        role: "Primary student",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=70",
        quote: "I love coming to school every day. My teachers make learning fun.",
        excerpt: "Maya joined us in Grade 4 and has grown in confidence every term.",
      },
      {
        id: "s2",
        name: "Kwame, Age 14",
        role: "Secondary student",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=70",
        quote: "The science lab is my favourite place — we get to do real experiments.",
        excerpt: "Kwame is preparing for his external examinations with our specialist teachers.",
      },
      {
        id: "s3",
        name: "Aisha, Age 17",
        role: "Sixth Form student",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=70",
        quote: "The support I’ve received has helped me aim for university.",
        excerpt: "Aisha is our head girl and plans to study medicine after graduation.",
      },
    ],
  },
  {
    id: "parents",
    label: "Parents",
    intro: "What families say about our school community.",
    stories: [
      {
        id: "p1",
        name: "Mrs. Asante",
        role: "Parent",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=70",
        quote: "The school feels like an extension of our family.",
        excerpt: "Both our children attend The Mickbess School and thrive here.",
      },
      {
        id: "p2",
        name: "Mr. Osei",
        role: "Parent",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
        quote: "Communication is excellent and the teachers truly care.",
        excerpt: "We appreciate the regular updates and open-door policy.",
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  Learning journey divisions                                      */
/* ---------------------------------------------------------------- */

export type Division = {
  id: string;
  name: string;
  grades: string;
  note: string;
  href: string;
  image: string;
};

export const divisions: Division[] = [
  {
    id: "early-years",
    name: "Early Years",
    grades: "Ages 3 – 5",
    note: "Play-based learning that builds language, social skills and confidence.",
    href: "/academics",
    image: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "primary",
    name: "Primary",
    grades: "Ages 5 – 11",
    note: "Core subjects in English, mathematics and science, enriched with art, music and physical education.",
    href: "/academics",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "secondary",
    name: "Secondary",
    grades: "Ages 11 – 16",
    note: "A broad subject range taught by specialists, preparing students for external examinations.",
    href: "/academics",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=70",
  },
  {
    id: "sixth-form",
    name: "Sixth Form",
    grades: "Ages 16 – 18",
    note: "Advanced study in chosen subjects, with university and career guidance throughout.",
    href: "/academics",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=70",
  },
];
