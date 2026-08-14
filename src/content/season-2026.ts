/**
 * 2026 F1 Academy Season Data
 * Snapshot: 2026-08-14
 * Sources: S02, S03, S04, S05, S06, S07, S08, S09
 */

import type { VolatileValue } from "./profile";

export interface QualifyingResult {
  position: number;
  time?: string;
}

export interface RaceResult {
  name: string;
  position: number;
  points: number;
  note?: string;
}

export interface Round {
  round: number;
  venue: string;
  country: string;
  dateStart: string;
  dateEnd: string;
  status: "complete" | "next" | "upcoming";
  qualifying?: QualifyingResult;
  practice?: { position: number; time?: string };
  races: RaceResult[];
  story: string;
  sourceIds: string[];
}

export interface Season {
  year: number;
  series: string;
  team: string;
  supportedBy: string;
  number: VolatileValue<number>;
  standing: VolatileValue<number>;
  points: VolatileValue<number>;
  qualifyingHeadToHead: {
    larsen: number;
    gademan: number;
    kosterman: number;
    asOf: string;
    sourceId: string;
  };
  rounds: Round[];
}

export const season2026: Season = {
  year: 2026,
  series: "F1 Academy",
  team: "MP Motorsport",
  supportedBy: "Ferrari",
  number: {
    value: 12,
    asOf: "2026-08-14",
    sourceId: "S01",
  },
  standing: {
    value: 9,
    asOf: "2026-08-14",
    sourceId: "S02",
  },
  points: {
    value: 24,
    asOf: "2026-08-14",
    sourceId: "S02",
  },
  qualifyingHeadToHead: {
    larsen: 3,
    gademan: 1,
    kosterman: 0,
    asOf: "2026-08-14",
    sourceId: "S08",
  },
  rounds: [
    {
      round: 1,
      venue: "Shanghai",
      country: "China",
      dateStart: "2026-03-13",
      dateEnd: "2026-03-15",
      status: "complete",
      qualifying: { position: 2, time: "2:04.585" },
      practice: { position: 2, time: "2:05.017" },
      races: [
        { name: "Reverse Grid Race", position: 18, points: 0 },
        { name: "Feature Race", position: 8, points: 4 },
      ],
      story:
        "Alba started the season with her best F1 Academy qualifying result, P2. She took the lead of the Feature Race, but a Safety Car restart error turned a potential breakthrough weekend into four points.",
      sourceIds: ["S04", "S09"],
    },
    {
      round: 2,
      venue: "Montreal",
      country: "Canada",
      dateStart: "2026-05-22",
      dateEnd: "2026-05-24",
      status: "complete",
      races: [
        { name: "Opening Race", position: 5, points: 10 },
        {
          name: "Reverse Grid Race",
          position: 11,
          points: 0,
          note: "five-second penalty after crossing line in podium position",
        },
        { name: "Feature Race", position: 6, points: 9 },
      ],
      story:
        "Montreal produced strong race pace and nineteen championship points across the weekend. In the Reverse Grid Race, Alba crossed the line in a podium position before a five-second penalty dropped her to P11.",
      sourceIds: ["S05", "S06"],
    },
    {
      round: 3,
      venue: "Silverstone",
      country: "Great Britain",
      dateStart: "2026-07-03",
      dateEnd: "2026-07-05",
      status: "complete",
      qualifying: { position: 13, time: "2:02.713" },
      races: [
        { name: "Reverse Grid Race", position: 10, points: 0 },
        { name: "Feature Race", position: 10, points: 1 },
      ],
      story:
        "P13 in qualifying and two P10 finishes made Silverstone the hardest F1 Academy weekend of the year so far. The response came through more track time, a British F4 podium and a fast Zandvoort test.",
      sourceIds: ["S07"],
    },
    {
      round: 4,
      venue: "Zandvoort",
      country: "Netherlands",
      dateStart: "2026-08-21",
      dateEnd: "2026-08-23",
      status: "next",
      qualifying: undefined,
      races: [],
      story:
        "In July, Alba returned to Zandvoort in British F4 and finished on the overall podium. Days later she was second quickest in the opening session of F1 Academy testing. Now the championship comes back to the same circuit.",
      sourceIds: ["S16"],
    },
    {
      round: 5,
      venue: "Austin",
      country: "United States",
      dateStart: "2026-10-22",
      dateEnd: "2026-10-25",
      status: "upcoming",
      qualifying: undefined,
      races: [],
      story: "",
      sourceIds: ["S03"],
    },
    {
      round: 6,
      venue: "Las Vegas",
      country: "United States",
      dateStart: "2026-11-19",
      dateEnd: "2026-11-21",
      status: "upcoming",
      qualifying: undefined,
      races: [],
      story: "",
      sourceIds: ["S03"],
    },
  ],
};

/** Zandvoort-specific data (British F4 + F1 Academy testing) */
export const zandvoortContext = {
  britishF4Position: {
    value: 3,
    asOf: "2026-08-14",
    sourceId: "S16",
  },
  f1AcademyTesting: "Second quickest in opening session",
  nextRaceDates: "21–23 Aug",
};
