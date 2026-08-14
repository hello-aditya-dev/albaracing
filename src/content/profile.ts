/**
 * Alba Larsen Driver Profile
 * Snapshot: 2026-08-14
 * Source: S01, S22, S27, S28
 */

export interface VolatileValue<T> {
  value: T;
  asOf: string;
  sourceId: string;
}

export interface Manager {
  name: string;
  email: string;
  publicSourceId: string;
}

export interface DriverProfile {
  name: string;
  displayName: string;
  fullName: string;
  dob: string;
  hometown: string;
  nationality: string;
  age: VolatileValue<number>;
  currentTeam: string;
  supportedBy: string;
  carNumber: VolatileValue<number>;
  mentor: string;
  manager: Manager;
  socialInstagram: string;
}

export const profile: DriverProfile = {
  name: "Alba Larsen",
  displayName: "ALBA LARSEN",
  fullName: "Alba Sophia Hurup Larsen",
  dob: "2008-12-12",
  hometown: "Roskilde",
  nationality: "Denmark",
  age: {
    value: 17,
    asOf: "2026-08-14",
    sourceId: "S01",
  },
  currentTeam: "MP Motorsport",
  supportedBy: "Ferrari",
  carNumber: {
    value: 12,
    asOf: "2026-08-14",
    sourceId: "S01",
  },
  mentor: "Kevin Magnussen",
  manager: {
    name: "Lars Hemming Jørgensen",
    email: "lars@a-l-b-a.com",
    publicSourceId: "S28",
  },
  socialInstagram: "@alba.racing",
};
