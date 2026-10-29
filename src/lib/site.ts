/**
 * Facts about DivineSarathi that appear across the site, the structured data
 * and llms.txt. Change a fact here and every page, schema and AI file follows.
 */

export const SITE_URL = "https://www.divinesarathi.in";
export const SITE_NAME = "DivineSarathi";
export const SITE_TAGLINE = { en: "Your charioteer, always.", hi: "सदा आपका सारथी।" };

export const GOOGLE_ANALYTICS_ID = "G-JWVTV86NH0";
export const GOOGLE_SITE_VERIFICATION = "7F6JGmyPHFbC_JPXTGoLP8I-oBAaqGMJgsOcj_8pQkE";

export const CONTACT_EMAIL = "founders@divinesarathi.in";

export const IOS_APP_ID = "6752269118";
export const ANDROID_PACKAGE = "in.divinesarathi";
export const APP_STORE_URL = `https://apps.apple.com/in/app/divinesarathi/id${IOS_APP_ID}`;
export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/divinesarathi",
  x: "https://x.com/DivineSarathi",
  youtube: "https://www.youtube.com/@DivineSarathi",
  linkedin: "https://www.linkedin.com/company/divinesarathi",
  facebook: "https://www.facebook.com/profile.php?id=61578551830799",
};

export const FOUNDERS = [
  { name: "Mohith Mahadevan", role: "Co-founder" },
  { name: "Aryan Agarwal", role: "Co-founder" },
];

/** Store ratings as shown on the listings. Refresh before each release of the site. */
export const RATINGS = {
  asOf: "2026-10-29",
  appStore: { value: 4.9, count: 49 },
  googlePlay: { value: 4.7, count: 156 },
  downloads: "10K+",
};

/**
 * Sarathi Plus is still dark on the server. While this is false the /plus page
 * is hidden (noindex, out of nav and sitemap) and no page states voice limits.
 */
export const PLUS_PUBLIC = false;

export const PLUS = {
  monthly: "₹349",
  yearly: "₹2,699",
  firstMonth: "₹99",
  voicePerMonth: { en: "2 hours", hi: "2 घंटे" },
};

/**
 * Link to the stores through /download so every install is counted with the
 * page and spot it came from. Phones always land on their own store.
 */
export function storeLink(store: "ios" | "android" | null, page: string, spot: string) {
  const q = new URLSearchParams({ utm_source: "website", utm_medium: page, utm_content: spot });
  if (store) q.set("store", store);
  return `/download?${q.toString()}`;
}
