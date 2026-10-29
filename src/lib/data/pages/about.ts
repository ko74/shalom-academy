import type { PageContent } from "./types";

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const aboutPages: PageContent[] = [
  {
    href: "/about",
    eyebrow: "About Us",
    title: "About The Mickbess School",
    intro:
      "A welcoming school community in Appolonia, where every child is known, supported, and challenged to grow.",
    heroImage: img("photo-1523240795612-9a054b0db644"),
    blocks: [
      {
        type: "prose",
        lead: "The Mickbess School – Appolonia is a place where children come first.",
        body: [
          "Founded with the belief that education should be both joyful and rigorous, our school serves families in Appolonia and beyond. From the earliest years through to graduation, we nurture curiosity, confidence, and character in equal measure.",
          "Set on a purpose-built campus, we offer a calm, stimulating environment where students feel safe to explore, make mistakes, and discover what they love.",
        ],
      },
      {
        type: "cards",
        heading: "What makes us special",
        items: [
          {
            title: "Small classes",
            body: "Every student is known by name. Our teachers build genuine relationships that help each child thrive.",
            image: img("photo-1503676260728-1c00da094a0b", 900),
          },
          {
            title: "Dedicated teachers",
            body: "Passionate educators who go beyond the curriculum to inspire a lifelong love of learning.",
            image: img("photo-1544717305-2782549b5136", 900),
          },
          {
            title: "A caring community",
            body: "Families, staff and students work together in partnership, creating a school that feels like home.",
            image: img("photo-1523240795612-9a054b0db644", 900),
          },
        ],
      },
      {
        type: "cta",
        heading: "Come and see for yourself",
        body: "The best way to understand The Mickbess School is to walk around campus and meet our team.",
        links: [
          { label: "Book a visit", href: "/admissions", variant: "solid" },
          { label: "Contact us", href: "/contact", variant: "outline" },
        ],
      },
    ],
  },
];
