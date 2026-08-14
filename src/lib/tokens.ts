/**
 * Design Tokens
 * Status: prototype approximations until official Alba brand guidelines are supplied
 */

export const tokens = {
  colors: {
    ink: "#101010",
    paper: "#FAF8F2",
    cream: "#F1E7D2",
    albaRed: "#F22316",         // prototype approximation
    velocityBlue: "#146CFF",    // prototype approximation
    babyBlue2026: "#86C8E8",    // prototype approximation — from helmet story
    signalPink: "#F05BA7",      // prototype approximation
    paddockYellow: "#EAB54A",   // prototype approximation
    white: "#FFFFFF",
  },
  spacing: {
    base: 4,
    mobileMargin: 20,
    tabletMargin: 32,
    desktopMarginMin: 48,
    desktopMarginMax: 72,
  },
  radii: {
    small: 8,
    medium: 16,
    large: 28,
  },
  motion: {
    fastMs: 180,
    pageMs: 380,
    heroMs: 780,
    slowEditorialMs: 900,
  },
} as const;

/** Site Mode Configuration */
export type SiteMode = "concept" | "official";

export function getSiteMode(): SiteMode {
  const mode = process.env.NEXT_PUBLIC_SITE_MODE || "concept";
  return mode === "official" ? "official" : "concept";
}

export function isConceptMode(): boolean {
  return getSiteMode() === "concept";
}
