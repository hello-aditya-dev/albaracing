/**
 * Career Timeline Data
 * Snapshot: 2026-08-14
 */

export interface CareerMilestone {
  year: string;
  label: string;
  text: string;
  sourceIds: string[];
}

export const careerTimeline: CareerMilestone[] = [
  {
    year: "2020–21",
    label: "First karts",
    text: "Discovered karting during the pandemic period and moved from casual driving toward competition.",
    sourceIds: ["S22", "S27"],
  },
  {
    year: "2022",
    label: "Zealand",
    text: "Third in the Zealand Championship; strong Danish/Nordic IAME results reported by Vogue Scandinavia.",
    sourceIds: ["S22"],
  },
  {
    year: "2023",
    label: "Rising Stars",
    text: "Won the Zealand Championship and won the Senior category of FIA Girls on Track – Rising Stars.",
    sourceIds: ["S22", "S11"],
  },
  {
    year: "2024",
    label: "Formula 4",
    text: "Made Indian F4 debut; MP Motorsport profile records a best result of sixth.",
    sourceIds: ["S13"],
  },
  {
    year: "2025",
    label: "F1 Academy",
    text: "Seventh overall with seven top-five finishes while representing Tommy Hilfiger; also gained British F4 experience.",
    sourceIds: ["S01", "S15"],
  },
  {
    year: "2025",
    label: "Beyond the cockpit",
    text: "Vogue/Teen Vogue editorial visibility, G.I.R.L. growth, book tour, and FIA Women in Motorsport Award.",
    sourceIds: ["S17", "S22", "S23", "S30"],
  },
  {
    year: "2026",
    label: "Ferrari",
    text: "Joined the Scuderia Ferrari Driver Academy; second F1 Academy season with MP Motorsport in Ferrari colours; British F4 development programme; WHOOP global ambassador.",
    sourceIds: ["S11", "S12", "S15", "S18"],
  },
  {
    year: "NEXT",
    label: "—",
    text: "",
    sourceIds: [],
  },
];
