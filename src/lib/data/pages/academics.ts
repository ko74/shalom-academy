import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const academicsPages: PageContent[] = [
  {
    href: "/academics",
    eyebrow: "Academics",
    title: "Academics",
    intro:
      "Our curriculum is designed to challenge and support every learner, from the early years through to graduation.",
    heroImage: img("photo-1434030216411-0b793f4b4173"),
    blocks: [
      {
        type: "prose",
        lead: "A broad, balanced curriculum that prepares students for life beyond school.",
        body: [
          "At The Mickbess School, we offer a carefully sequenced programme that builds knowledge, skills and understanding year by year. Students move through clearly defined stages, each one laying the foundation for the next.",
          "Our approach combines strong academic foundations with opportunities to explore interests, develop creativity, and grow in confidence.",
        ],
      },
      {
        type: "cards",
        heading: "Classes offered",
        items: [
          {
            title: "Early Years",
            meta: "Ages 3 – 5",
            body: "Play-based learning that builds language, social skills and confidence.",
            image: img("photo-1587616211892-f743fcca64f9", 900),
          },
          {
            title: "Primary",
            meta: "Ages 5 – 11",
            body: "Core subjects in English, mathematics and science, enriched with art, music and physical education.",
            image: img("photo-1427504494785-3a9ca7044f45", 900),
          },
          {
            title: "Secondary",
            meta: "Ages 11 – 16",
            body: "A broad subject range taught by specialists, preparing students for external examinations.",
            image: img("photo-1524178232363-1fb2b075b655", 900),
          },
          {
            title: "Sixth Form",
            meta: "Ages 16 – 18",
            body: "Advanced study in chosen subjects, with university and career guidance throughout.",
            image: img("photo-1513364776144-60967b0f800f", 900),
          },
        ],
      },
      {
        type: "list",
        heading: "Subjects",
        intro: "Students study a wide range of subjects across the curriculum.",
        columns: 3,
        items: [
          "English",
          "Mathematics",
          "Science",
          "French",
          "History",
          "Geography",
          "Art & Design",
          "Music",
          "Physical Education",
          "Computer Science",
          "Religious Studies",
          "Personal, Social & Health Education",
        ],
      },
      {
        type: "cta",
        heading: "Learn more about our curriculum",
        body: "Get in touch to discuss how our academic programme can support your child.",
        links: [{ label: "Contact us", href: "/contact", variant: "solid" }],
      },
    ],
  },
];