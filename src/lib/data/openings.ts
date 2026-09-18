export type Opening = {
  id: string;
  title: string;
  division: "Lower School" | "Middle School" | "High School" | "Whole school" | "Operations";
  type: "Full time" | "Part time" | "Fixed term";
  starts: string;
  summary: string;
};

export const openings: Opening[] = [
  {
    id: "hs-physics",
    title: "Teacher of Physics (IB Diploma)",
    division: "High School",
    type: "Full time",
    starts: "August 2027",
    summary:
      "Teaching Physics at Standard and Higher Level, plus Grade 10 integrated science. Extended Essay supervision expected.",
  },
  {
    id: "ls-classroom",
    title: "Grade 3 Classroom Teacher",
    division: "Lower School",
    type: "Full time",
    starts: "August 2027",
    summary:
      "Homeroom teaching in a two-form year group, with specialist support for French, music, art and PE.",
  },
  {
    id: "ms-french",
    title: "Teacher of French",
    division: "Middle School",
    type: "Full time",
    starts: "August 2027",
    summary:
      "Teaching across the ability range from beginner to near-native, including the bilingual programme.",
  },
  {
    id: "inclusion",
    title: "Learning Support Specialist",
    division: "Whole school",
    type: "Full time",
    starts: "January 2027",
    summary:
      "Push-in and pull-out support across two divisions, with responsibility for a caseload of individual learning plans.",
  },
  {
    id: "counsellor",
    title: "School Counsellor",
    division: "Middle School",
    type: "Fixed term",
    starts: "January 2027",
    summary:
      "One-year maternity cover. Individual and group counselling, plus the social-emotional curriculum in advisory.",
  },
  {
    id: "coach",
    title: "Athletics Coach — Swimming",
    division: "Operations",
    type: "Part time",
    starts: "Immediate",
    summary:
      "Coaching competitive squads across three seasons, including travel to tournaments.",
  },
  {
    id: "sub",
    title: "Substitute Teachers",
    division: "Whole school",
    type: "Part time",
    starts: "Rolling",
    summary:
      "We maintain a pool of day-to-day substitutes across all three divisions. Applications accepted year-round.",
  },
];
