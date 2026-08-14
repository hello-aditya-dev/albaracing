/**
 * Asset Registry
 * Every media slot in the site is tracked here.
 * Rights status: "required" | "approved" | "owned" | "placeholder"
 */

export interface AssetSlot {
  key: string;
  localPath: string | null;
  alt: string;
  rightsStatus: "required" | "approved" | "owned" | "placeholder";
  sourceReference?: string;
  focalDesktop?: string;
  focalMobile?: string;
}

export const assetSlots: AssetSlot[] = [
  { key: "hero.primary", localPath: null, alt: "Alba Larsen in 2026 Ferrari race suit", rightsStatus: "required", focalDesktop: "center-top", focalMobile: "center" },
  { key: "hero.mobile", localPath: null, alt: "Alba Larsen portrait, mobile crop", rightsStatus: "required", focalDesktop: "center", focalMobile: "center-top" },
  { key: "race.shanghai.hero", localPath: null, alt: "Alba Larsen on track at Shanghai 2026", rightsStatus: "required", focalDesktop: "right", focalMobile: "center" },
  { key: "race.montreal.hero", localPath: null, alt: "Alba Larsen on track at Montreal 2026", rightsStatus: "required" },
  { key: "race.silverstone.hero", localPath: null, alt: "Alba Larsen at Silverstone 2026", rightsStatus: "required" },
  { key: "race.zandvoort.hero", localPath: null, alt: "Alba Larsen at Zandvoort", rightsStatus: "required" },
  { key: "helmet.front", localPath: null, alt: "Alba Larsen 2026 helmet front view", rightsStatus: "required", focalDesktop: "center", focalMobile: "center" },
  { key: "helmet.side", localPath: null, alt: "Alba Larsen 2026 helmet side view", rightsStatus: "required" },
  { key: "helmet.rear", localPath: null, alt: "Alba Larsen 2026 helmet rear view", rightsStatus: "required" },
  { key: "world.vogue.01", localPath: null, alt: "Alba Larsen Vogue Scandinavia editorial", rightsStatus: "required", sourceReference: "Hasse Nielsen / Vogue Scandinavia" },
  { key: "world.teenvogue.01", localPath: null, alt: "Alba Larsen Teen Vogue feature", rightsStatus: "required", sourceReference: "Jocko Graves / Teen Vogue" },
  { key: "world.tommy.01", localPath: null, alt: "Alba Larsen Tommy Jeans Spring 2026 campaign", rightsStatus: "required", sourceReference: "Courtesy Tommy Jeans" },
  { key: "performance.whoop.01", localPath: null, alt: "WHOOP partnership hero image", rightsStatus: "required" },
  { key: "girl.community.01", localPath: null, alt: "G.I.R.L. track day participants", rightsStatus: "required" },
  { key: "girl.community.02", localPath: null, alt: "G.I.R.L. sim racing session", rightsStatus: "required" },
  { key: "press.headshot", localPath: null, alt: "Alba Larsen press headshot", rightsStatus: "required" },
  { key: "social.og", localPath: null, alt: "Alba Larsen social preview image", rightsStatus: "required" },
  { key: "brand.wordmark", localPath: null, alt: "Alba Racing wordmark", rightsStatus: "required", sourceReference: "Athletics" },
  { key: "brand.avatar", localPath: null, alt: "Alba Racing avatar mark", rightsStatus: "required", sourceReference: "Athletics" },
];

/** Check which assets are still missing */
export function getMissingAssets(): AssetSlot[] {
  return assetSlots.filter((a) => a.localPath === null && a.rightsStatus !== "owned");
}

/** Get asset by key */
export function getAsset(key: string): AssetSlot | undefined {
  return assetSlots.find((a) => a.key === key);
}
