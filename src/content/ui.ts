import type { Locale } from "@/lib/routes";
import { FREE } from "@/lib/site";

/** Words shared by every page: nav, footer, store buttons, ratings. */
export const UI = {
  en: {
    skip: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    getApp: "Get the app",
    nav: ["krishnaAi", "gita", "sadhana", "about"] as const,
    language: { label: "हिंदी", aria: "हिंदी में पढ़ें" },
    appStoreAlt: "Download on the App Store",
    playAlt: "Get it on Google Play",
    qr: "Scan to get the app",
    ratings: (ios: string, play: string, downloads: string) => [
      `${ios} on the App Store`,
      `${play} on Google Play`,
      `${downloads} downloads`,
    ],
    free: FREE.en.on,
    footerBlurb: "Talk with Krishna AI, hear a sacred story each morning and learn the Bhagavad Gita, in English and Hindi.",
    footerRights: "DivineSarathi. Made in India.",
    moreFromUs: "Also from us:",
    learnMore: "Learn more",
    updated: "Updated",
    breadcrumbHome: "Home",
    questions: "Questions",
  },
  hi: {
    skip: "सामग्री पर जाएँ",
    menuOpen: "मेन्यू खोलें",
    menuClose: "मेन्यू बंद करें",
    getApp: "ऐप पाएँ",
    nav: ["krishnaAi", "gita", "sadhana", "about"] as const,
    language: { label: "English", aria: "Read in English" },
    appStoreAlt: "App Store से डाउनलोड करें",
    playAlt: "Google Play पर पाएँ",
    qr: "ऐप पाने के लिए स्कैन करें",
    ratings: (ios: string, play: string, downloads: string) => [
      `App Store पर ${ios}`,
      `Google Play पर ${play}`,
      `${downloads} डाउनलोड`,
    ],
    free: FREE.hi.on,
    footerBlurb: "कृष्ण AI से बात करें, हर सुबह एक पावन कथा सुनें और भगवद गीता सीखें, हिंदी और अंग्रेज़ी में।",
    footerRights: "DivineSarathi. भारत में बना।",
    moreFromUs: "हमारे और पेज:",
    learnMore: "और जानें",
    updated: "अपडेट",
    breadcrumbHome: "होम",
    questions: "सवाल-जवाब",
  },
} satisfies Record<Locale, unknown>;

export function formatDate(iso: string, locale: Locale) {
  return new Date(iso + "T00:00:00+05:30").toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
