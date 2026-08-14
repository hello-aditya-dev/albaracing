/**
 * Press Index Data
 * Snapshot: 2026-08-14
 */

export interface PressItem {
  publication: string;
  title: string;
  date: string;
  categories: string[];
  url?: string;
  photographer?: string;
  rights: string;
}

export const pressItems: PressItem[] = [
  {
    publication: "Vogue Scandinavia",
    title: "Who is Alba Larsen? Meet the 16-year-old Danish driving prodigy",
    date: "2025-06-12",
    categories: ["fashion", "profile"],
    url: "https://www.voguescandinavia.com/articles/alba-hurup-larsen-interview",
    photographer: "Hasse Nielsen",
    rights: "third-party editorial; permission required for production image use",
  },
  {
    publication: "Teen Vogue",
    title: "F1 Academy Driver Alba Hurup Larsen on Finding Confidence in Fashion and Racing",
    date: "2025-11-25",
    categories: ["fashion", "profile"],
    url: "https://www.teenvogue.com/story/f1-academy-driver-alba-hurup-larsen",
    photographer: "Jocko Graves",
    rights: "third-party editorial; permission required",
  },
  {
    publication: "L'Officiel USA",
    title: "Alba Larsen Embraces Ultra-Cool Confidence for the Tommy Jeans Spring 2026 Campaign",
    date: "2026-03-03",
    categories: ["fashion", "campaign"],
    url: "https://www.lofficielusa.com/fashion/alba-hurup-larsen-interview-tommy-jeans-spring-2026-campaign-behind-the-scenes",
    rights: "request approved campaign assets",
  },
  {
    publication: "Forbes Australia",
    title: "From F1 Academy to Ferrari: Alba Larsen's data-driven ambitions",
    date: "2026-03-27",
    categories: ["performance", "data", "profile"],
    url: "https://www.forbes.com.au/life/f1/from-f1-academy-to-ferrari-alba-larsens-data-driven-ambitions/",
    rights: "third-party editorial; do not reuse imagery without permission",
  },
  {
    publication: "Formula1.com",
    title: "The best off-track storylines of the 2025 F1 Academy season",
    date: "2025-12-30",
    categories: ["racing", "G.I.R.L."],
    url: "https://www.formula1.com/en/latest/article/the-best-off-track-storylines-of-the-2025-f1-academy-season.23zq99DMIsSgdhvaEoRje5",
    rights: "use as factual reference",
  },
  {
    publication: "FIA",
    title: "2025 Women in Motorsport Award — Alba Larsen and G.I.R.L.",
    date: "2025-12-06",
    categories: ["G.I.R.L.", "racing"],
    rights: "FIA official; reference",
  },
];

export const pressCategories = [
  "RACING",
  "FASHION",
  "G.I.R.L.",
  "PERFORMANCE",
  "VIDEO",
] as const;
