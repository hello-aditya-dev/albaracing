/**
 * Partnerships Data
 * Snapshot: 2026-08-14
 */

export interface Partner {
  name: string;
  relationship: string;
  current: boolean;
  sourceIds: string[];
  logoAsset?: string;
}

export const partners: Partner[] = [
  {
    name: "Scuderia Ferrari Driver Academy",
    relationship: "Driver development / academy member",
    current: true,
    sourceIds: ["S11", "S12"],
  },
  {
    name: "Ferrari",
    relationship: "2026 F1 Academy support identity",
    current: true,
    sourceIds: ["S01", "S12"],
  },
  {
    name: "MP Motorsport",
    relationship: "F1 Academy team",
    current: true,
    sourceIds: ["S13", "S14"],
  },
  {
    name: "WHOOP",
    relationship: "Three-year partnership; global ambassador",
    current: true,
    sourceIds: ["S18"],
  },
  {
    name: "Tommy Jeans / Tommy Hilfiger",
    relationship: "2025 F1 Academy partner; 2026 Tommy Jeans global brand ambassador/campaign",
    current: true,
    sourceIds: ["S24", "S25"],
  },
];
