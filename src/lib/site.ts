/**
 * Facts about DivineSarathi that appear across the site, the structured data
 * and llms.txt. Change a fact here and every page, schema and AI file follows.
 */

export const SITE_URL = "https://www.divinesarathi.in";
export const SITE_NAME = "DivineSarathi";
/** How people often type the name: searched, spoken and written as two words. */
export const SITE_ALT_NAME = "Divine Sarathi";
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

/** Our other content pages. Linked from the footer; Arth Decoded stays out of sameAs. */
export const CONTENT_PAGES = {
  notesByKrishna: { name: "Notes by Krishna", href: "https://www.instagram.com/notesbykrishna" },
  /** TODO: Arth Decoded's address; the footer shows the link once this is set. */
  arthDecoded: { name: "Arth Decoded", href: null as string | null },
};

/** Official profiles only, for Organization sameAs. */
export const SAME_AS = [
  PLAY_STORE_URL,
  APP_STORE_URL,
  SOCIAL.youtube,
  SOCIAL.instagram,
  CONTENT_PAGES.notesByKrishna.href,
  SOCIAL.linkedin,
  SOCIAL.x,
  SOCIAL.facebook,
];

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

/**
 * How we say the price. "Free" while everything is free; once Plus is public
 * every page, FAQ and schema switches to "free to start" on its own.
 */
export const FREE = PLUS_PUBLIC
  ? {
      en: { app: "an app, free to start,", on: "Free to start on iPhone and Android", get: "on iPhone and Android, free to start" },
      hi: { app: "मुफ़्त में शुरू होने वाला एक ऐप", on: "iPhone और Android पर मुफ़्त में शुरू करें", get: "iPhone और Android पर, मुफ़्त में शुरू करें" },
    }
  : {
      en: { app: "a free app", on: "Free on iPhone and Android", get: "free on iPhone and Android" },
      hi: { app: "एक मुफ़्त ऐप", on: "iPhone और Android पर मुफ़्त", get: "iPhone और Android पर मुफ़्त" },
    };

export const PLUS = {
  monthly: "₹349",
  yearly: "₹2,699",
  firstMonth: "₹99",
  voicePerMonth: { en: "2 hours", hi: "2 घंटे" },
};

/**
 * Link to the stores through /download so every install is counted with the
 * page and spot it came from. Phones always land on their own store.
 * Not utm_* tags: on an internal link those would restart the visit in
 * Analytics as "website", wiping out where the visitor really came from.
 * /download maps these back to the utm fields our server already stores.
 */
export function storeLink(store: "ios" | "android" | null, page: string, spot: string) {
  const q = new URLSearchParams({ from: "website", page, spot });
  if (store) q.set("store", store);
  return `/download?${q.toString()}`;
}
