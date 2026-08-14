/**
 * Source Registry
 * Snapshot: 2026-08-14
 */

export interface Source {
  id: string;
  tier: number;
  name: string;
  url?: string;
  useFor: string[];
  snapshot: string;
  warning?: string;
  volatile?: string[];
}

export const sources: Source[] = [
  {
    id: "S01", tier: 1, name: "F1 Academy - Alba Larsen driver profile",
    url: "https://www.f1academy.com/Racing-Series/Drivers/45/Alba-Larsen",
    useFor: ["DOB", "nationality", "team", "car number", "2025 seven top-five finishes", "2025 seventh overall", "Ferrari support", "Kevin Magnussen mentorship"],
    snapshot: "2026-08-14",
  },
  {
    id: "S02", tier: 1, name: "F1 Academy - 2026 driver standings",
    url: "https://www.f1academy.com/Racing-Series/Standings/Driver",
    useFor: ["current standings", "points by race", "season status"],
    snapshot: "2026-08-14",
  },
  {
    id: "S03", tier: 1, name: "F1 Academy - 2026 season guide/calendar",
    useFor: ["2026 F1 Academy calendar", "car specification", "format"],
    snapshot: "2026-08-14",
  },
  {
    id: "S04", tier: 1, name: "F1 Academy - Shanghai 2026 results",
    useFor: ["Shanghai qualifying P2", "Shanghai results", "practice P2"],
    snapshot: "2026-08-14",
  },
  {
    id: "S05", tier: 1, name: "F1 Academy - Montreal 2026 results",
    useFor: ["Montreal qualifying and results"],
    snapshot: "2026-08-14",
  },
  {
    id: "S06", tier: 1, name: "F1 Academy - Montreal penalty report",
    useFor: ["Montreal reverse-grid P11 after five-second penalty"],
    snapshot: "2026-08-14",
  },
  {
    id: "S07", tier: 1, name: "F1 Academy - Silverstone 2026 results",
    useFor: ["Silverstone qualifying P13", "Silverstone reverse-grid P10", "Silverstone feature P10"],
    snapshot: "2026-08-14",
  },
  {
    id: "S08", tier: 1, name: "F1 Academy - 2026 teammate head-to-head",
    useFor: ["qualifying head-to-head Larsen 3 Gademan 1", "race head-to-head context"],
    snapshot: "2026-08-14",
  },
  {
    id: "S09", tier: 1, name: "F1 Academy - 2026 ambitions / Shanghai narrative",
    useFor: ["Shanghai best qualifying P2", "led feature race before restart error", "approved quote context"],
    snapshot: "2026-08-14",
  },
  {
    id: "S10", tier: 1, name: "F1 Academy - 2026 helmet story",
    useFor: ["baby-blue helmet rationale", "red-white Denmark/Ferrari reference", "helmet personality philosophy"],
    snapshot: "2026-08-14",
  },
  {
    id: "S11", tier: 1, name: "Ferrari - SFDA new recruits",
    useFor: ["SFDA joining date 1 Jan 2026"],
    snapshot: "2026-08-14",
  },
  {
    id: "S12", tier: 1, name: "Ferrari - Alba Larsen 2026 F1 Academy campaign",
    useFor: ["Ferrari-backed 2026 F1 Academy campaign", "MP Motorsport", "British F4 programme"],
    snapshot: "2026-08-14",
  },
  {
    id: "S13", tier: 1, name: "MP Motorsport - Alba Larsen driver page",
    useFor: ["current team profile", "career summary"],
    snapshot: "2026-08-14",
  },
  {
    id: "S14", tier: 1, name: "MP Motorsport - 2026 continuity announcement",
    useFor: ["MP Motorsport relationship", "2025 season context"],
    snapshot: "2026-08-14",
  },
  {
    id: "S15", tier: 1, name: "FIA British F4 - Alba Larsen driver profile",
    useFor: ["2026 British F4 participation", "Chris Dittmann Racing"],
    snapshot: "2026-08-14",
  },
  {
    id: "S16", tier: 1, name: "FIA British F4 - Zandvoort event results",
    useFor: ["Zandvoort overall P3 result"],
    snapshot: "2026-08-14",
  },
  {
    id: "S17", tier: 1, name: "FIA - 2025 Women in Motorsport Award",
    useFor: ["inaugural FIA Women in Motorsport Award", "G.I.R.L. 400+ Denmark participants at award time", "2026 15,000 participant ambition"],
    snapshot: "2026-08-14",
  },
  {
    id: "S18", tier: 1, name: "WHOOP - Alba Larsen partnership",
    useFor: ["three-year WHOOP partnership", "global ambassador", "performance and G.I.R.L. context"],
    snapshot: "2026-08-14",
  },
  {
    id: "S19", tier: 2, name: "Athletics - Alba Racing identity case study",
    useFor: ["existing brand identity", "wordmark philosophy", "avatar", "vibrant palette", "italic secondary typography"],
    snapshot: "2026-08-14",
  },
  {
    id: "S20", tier: 2, name: "G.I.R.L. official website",
    useFor: ["initiative mission", "current programme modules", "founder copy"],
    snapshot: "2026-08-14",
  },
];

/** Dev-only: lookup source by ID */
export function getSource(id: string): Source | undefined {
  return sources.find((s) => s.id === id);
}
