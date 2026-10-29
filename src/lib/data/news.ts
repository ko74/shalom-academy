export type NewsPost = {
  id: string;
  title: string;
  date: string; // ISO
  category: string;
  href: string;
  image: string;
};

export const newsPosts: NewsPost[] = [
  {
    id: "gabriel",
    title: "A Class of 2027 student takes gold at the national maths olympiad",
    date: "2026-09-10",
    category: "High School",
    href: "/news-events#news-maths-olympiad",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "science-lab",
    title: "The new Lower School science lab opens its doors",
    date: "2026-09-08",
    category: "Campus",
    href: "/news-events#news-lower-school-science-lab",
    image:
      "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "seventy-five",
    title: "Seventy-five years of school, drawn by our Grade 5 students",
    date: "2026-09-04",
    category: "Community",
    href: "/news-events#news-75-years",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "largest-class",
    title: "Meet the largest graduating class in the school's history",
    date: "2026-08-31",
    category: "High School",
    href: "/news-events#news-class-of-2027",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "welcome-back",
    title: "Welcome back: the first week of the new school year in pictures",
    date: "2026-08-27",
    category: "Community",
    href: "/news-events#news-welcome-back",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "faculty-return",
    title: "Faculty and staff return to campus for orientation week",
    date: "2026-08-24",
    category: "Faculty",
    href: "/news-events#news-faculty-orientation",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "new-director",
    title: "Introducing our new Director",
    date: "2026-08-21",
    category: "Leadership",
    href: "/news-events#news-new-director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "stem-fair",
    title: "Middle School STEM discovery fair fills the sports hall",
    date: "2026-06-25",
    category: "Middle School",
    href: "/news-events#news-stem-fair",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=60",
  },
];

export type SchoolEvent = {
  id: string;
  title: string;
  date: string; // ISO
  time?: string;
  location: string;
  href: string;
};

export const upcomingEvents: SchoolEvent[] = [
  {
    id: "open-morning",
    title: "Admissions open morning",
    date: "2026-09-24",
    time: "09:00 – 11:30",
    location: "Château reception",
    href: "/admissions/inquire",
  },
  {
    id: "back-to-school-hs",
    title: "High School back-to-school evening",
    date: "2026-09-26",
    time: "18:00 – 20:00",
    location: "Main theatre",
    href: "/news-events",
  },
  {
    id: "raiders-home",
    title: "Raiders home fixtures — football and volleyball",
    date: "2026-10-03",
    time: "All day",
    location: "North pitches & sports hall",
    href: "/facilities",
  },
  {
    id: "international-festival",
    title: "International Festival",
    date: "2026-10-11",
    time: "11:00 – 17:00",
    location: "Across campus",
    href: "/news-events",
  },
  {
    id: "fa-coffee",
    title: "Family Association welcome coffee",
    date: "2026-10-15",
    time: "08:30 – 10:00",
    location: "Community room",
    href: "/news-events",
  },
];
