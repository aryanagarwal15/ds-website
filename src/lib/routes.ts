/**
 * Every public page, registered once. Metadata, canonical and hreflang tags,
 * the sitemap, breadcrumbs, llms.txt and the footer are all built from this
 * list, so a page added here can't be forgotten anywhere else.
 */

export type Locale = "en" | "hi";

export type RouteKey =
  | "home"
  | "krishnaAi"
  | "gita"
  | "dailyPuja"
  | "dhyana"
  | "about"
  | "faqs"
  | "support"
  | "download"
  | "plus"
  | "privacy"
  | "terms"
  | "refunds"
  | "howItWorks"
  | "sources"
  | "press"
  | "deleteAccount";

export type FooterGroup = "product" | "company" | "legal";

type Text = { en: string; hi: string };

export type RouteDef = {
  /** English path. */
  en: string;
  /** Hindi path, or null while no Hindi page exists (so hreflang never points at a 404). */
  hi: string | null;
  /** Short name for nav, footer and breadcrumbs. */
  name: Text;
  /** Title tag. The home title is used as is; others get " | DivineSarathi". */
  title: Text;
  description: Text;
  /** Date the page's content last changed, YYYY-MM-DD. Feeds the sitemap and "Updated" lines. */
  updated: string;
  footer: FooterGroup | null;
  index: boolean;
  priority: number;
};

export const ROUTES: Record<RouteKey, RouteDef> = {
  home: {
    en: "/",
    hi: "/hi",
    name: { en: "Home", hi: "होम" },
    title: {
      en: "DivineSarathi: Talk to Krishna AI, Bhagavad Gita app",
      hi: "DivineSarathi: कृष्ण AI से बात करें, भगवद गीता ऐप",
    },
    description: {
      en: "DivineSarathi is a free app where you talk with Krishna AI by voice or text, in English or Hindi. Hear a sacred story each morning and learn the Bhagavad Gita verse by verse. On iPhone and Android.",
      hi: "DivineSarathi एक मुफ़्त ऐप है जहाँ आप कृष्ण AI से आवाज़ या टेक्स्ट में, हिंदी या अंग्रेज़ी में बात करते हैं। हर सुबह एक पावन कथा सुनें और भगवद गीता श्लोक-दर-श्लोक सीखें। iPhone और Android पर।",
    },
    updated: "2026-10-29",
    footer: null,
    index: true,
    priority: 1,
  },
  krishnaAi: {
    en: "/krishna-ai",
    hi: "/hi/krishna-ai",
    name: { en: "Krishna AI", hi: "कृष्ण AI" },
    title: {
      en: "Krishna AI: Talk to Krishna by Voice or Text",
      hi: "कृष्ण AI: आवाज़ या टेक्स्ट में कृष्ण से बात करें",
    },
    description: {
      en: "Talk to Krishna AI about anything on your mind, by voice or text, in English or Hindi. Answers drawn from the Bhagavad Gita, in a free app for iPhone and Android.",
      hi: "मन में जो भी हो, कृष्ण AI से आवाज़ या टेक्स्ट में, हिंदी या अंग्रेज़ी में बात करें। जवाब भगवद गीता की सीख से। iPhone और Android के लिए मुफ़्त ऐप।",
    },
    updated: "2026-10-29",
    footer: "product",
    index: true,
    priority: 0.9,
  },
  gita: {
    en: "/bhagavad-gita",
    hi: "/hi/bhagavad-gita",
    name: { en: "Bhagavad Gita", hi: "भगवद गीता" },
    title: {
      en: "Bhagavad Gita App: Verse by Verse, with Meaning",
      hi: "भगवद गीता ऐप: श्लोक-दर-श्लोक, अर्थ के साथ",
    },
    description: {
      en: "Learn the Bhagavad Gita in the DivineSarathi app: all 18 chapters and 700 shlokas, each recited in Sanskrit and explained in plain words, plus Gita for Daily Life. Free on iPhone and Android.",
      hi: "DivineSarathi ऐप में भगवद गीता सीखें: सभी 18 अध्याय और 700 श्लोक, संस्कृत में पाठ और सरल शब्दों में अर्थ, साथ में रोज़ की ज़िंदगी के लिए गीता। iPhone और Android पर मुफ़्त।",
    },
    updated: "2026-10-29",
    footer: "product",
    index: true,
    priority: 0.9,
  },
  dailyPuja: {
    en: "/daily-puja",
    hi: "/hi/daily-puja",
    name: { en: "Daily Puja", hi: "दैनिक पूजा" },
    title: {
      en: "Daily Puja: A Sacred Story Every Morning",
      hi: "दैनिक पूजा: हर सुबह एक पावन कथा",
    },
    description: {
      en: "Start each day with a short story from the Itihasas and Puranas, then thread a bead on your mala with Daily Sadhana. In the free DivineSarathi app for iPhone and Android.",
      hi: "हर दिन की शुरुआत इतिहास और पुराणों की एक छोटी कथा से करें, फिर दैनिक साधना से अपनी माला में एक मनका पिरोएँ। iPhone और Android के लिए मुफ़्त DivineSarathi ऐप में।",
    },
    updated: "2026-10-29",
    footer: "product",
    index: true,
    priority: 0.8,
  },
  dhyana: {
    en: "/dhyana",
    hi: "/hi/dhyana",
    name: { en: "Dhyana", hi: "ध्यान" },
    title: {
      en: "Dhyana: Guided Breath Meditation",
      hi: "ध्यान: निर्देशित श्वास ध्यान",
    },
    description: {
      en: "Guided breath meditation in the DivineSarathi app to calm, reset and focus the mind, a few minutes at a time. Free on iPhone and Android.",
      hi: "DivineSarathi ऐप में निर्देशित श्वास ध्यान, मन को शांत करने, फिर से संभलने और एकाग्र होने के लिए, कुछ मिनट रोज़। iPhone और Android पर मुफ़्त।",
    },
    updated: "2026-10-29",
    footer: "product",
    index: true,
    priority: 0.7,
  },
  plus: {
    en: "/plus",
    hi: null,
    name: { en: "Sarathi Plus", hi: "सारथी प्लस" },
    title: {
      en: "Sarathi Plus: More Time Talking with Krishna",
      hi: "सारथी प्लस: कृष्ण से बात करने के लिए और समय",
    },
    description: {
      en: "Sarathi Plus gives you more voice time with Krishna AI. ₹349 a month after a ₹99 first month, or ₹2,699 a year. Stories, Gita, text chat and meditation stay free.",
      hi: "सारथी प्लस में कृष्ण AI से आवाज़ में बात करने का और समय। पहला महीना ₹99, फिर ₹349 महीना, या ₹2,699 साल। कथाएँ, गीता, टेक्स्ट चैट और ध्यान मुफ़्त रहते हैं।",
    },
    updated: "2026-10-29",
    footer: null,
    index: false,
    priority: 0.6,
  },
  about: {
    en: "/about",
    hi: "/hi/about",
    name: { en: "About", hi: "हमारे बारे में" },
    title: { en: "About DivineSarathi and Its Founders", hi: "DivineSarathi और इसके संस्थापकों के बारे में" },
    description: {
      en: "Why two friends built DivineSarathi, a free app to talk with Krishna AI and live the Bhagavad Gita every day, and how to reach them.",
      hi: "दो दोस्तों ने DivineSarathi क्यों बनाया, कृष्ण AI से बात करने और भगवद गीता को रोज़ जीने का एक मुफ़्त ऐप, और उनसे कैसे संपर्क करें।",
    },
    updated: "2026-10-29",
    footer: "company",
    index: true,
    priority: 0.7,
  },
  faqs: {
    en: "/faqs",
    hi: "/hi/faqs",
    name: { en: "FAQs", hi: "सवाल-जवाब" },
    title: { en: "FAQs: Krishna AI, Privacy and the App", hi: "सवाल-जवाब: कृष्ण AI, गोपनीयता और ऐप" },
    description: {
      en: "Answers to common questions about DivineSarathi: what Krishna AI is, what it does not do, what is free, privacy, and deleting your account.",
      hi: "DivineSarathi के बारे में आम सवालों के जवाब: कृष्ण AI क्या है, क्या नहीं करता, क्या मुफ़्त है, गोपनीयता, और अकाउंट डिलीट करना।",
    },
    updated: "2026-10-29",
    footer: "company",
    index: true,
    priority: 0.7,
  },
  support: {
    en: "/support",
    hi: "/hi/support",
    name: { en: "Support", hi: "सहायता" },
    title: { en: "Help and Support", hi: "मदद और सहायता" },
    description: {
      en: "Get help with the DivineSarathi app: write to us, report a problem, manage your subscription or delete your account.",
      hi: "DivineSarathi ऐप में मदद पाएँ: हमें लिखें, कोई दिक़्क़त बताएँ, सब्सक्रिप्शन संभालें या अकाउंट डिलीट करें।",
    },
    updated: "2026-10-29",
    footer: "company",
    index: true,
    priority: 0.5,
  },
  press: {
    en: "/press",
    hi: null,
    name: { en: "Press", hi: "प्रेस" },
    title: { en: "DivineSarathi at a Glance: Facts and Press Kit", hi: "DivineSarathi एक नज़र में" },
    description: {
      en: "Key facts about DivineSarathi in one place: what it is, who built it, platforms, languages, price, ratings, logo and contact.",
      hi: "DivineSarathi के मुख्य तथ्य एक जगह: यह क्या है, किसने बनाया, प्लैटफ़ॉर्म, भाषाएँ, कीमत, रेटिंग, लोगो और संपर्क।",
    },
    updated: "2026-10-29",
    footer: "company",
    index: true,
    priority: 0.5,
  },
  download: {
    en: "/download",
    hi: null,
    name: { en: "Download", hi: "डाउनलोड" },
    title: {
      en: "Download the Krishna AI Gita App for iPhone and Android",
      hi: "iPhone और Android के लिए कृष्ण AI गीता ऐप डाउनलोड करें",
    },
    description: {
      en: "Get DivineSarathi free on the App Store and Google Play. Talk to Krishna AI by voice or text, learn the Bhagavad Gita verse by verse, daily stories and meditation.",
      hi: "DivineSarathi को App Store और Google Play पर मुफ़्त पाएँ।",
    },
    updated: "2026-10-29",
    footer: null,
    index: true,
    priority: 0.9,
  },
  howItWorks: {
    en: "/how-krishna-ai-works",
    hi: "/hi/how-krishna-ai-works",
    name: { en: "How Krishna AI works", hi: "कृष्ण AI कैसे काम करता है" },
    title: { en: "How Krishna AI Works", hi: "कृष्ण AI कैसे काम करता है" },
    description: {
      en: "Krishna AI is an AI voice grounded in the Bhagavad Gita. What it can and cannot do, how it handles hard moments, what we keep and how to delete it.",
      hi: "कृष्ण AI भगवद गीता पर आधारित एक AI आवाज़ है। यह क्या कर सकता है और क्या नहीं, कठिन पलों में कैसे पेश आता है, हम क्या रखते हैं और उसे कैसे मिटाएँ।",
    },
    updated: "2026-10-29",
    footer: "legal",
    index: true,
    priority: 0.6,
  },
  sources: {
    en: "/sources",
    hi: "/hi/sources",
    name: { en: "Our sources", hi: "हमारे स्रोत" },
    title: { en: "Our Sources: Where Our Gita Comes From", hi: "हमारे स्रोत: हमारी गीता कहाँ से आती है" },
    description: {
      en: "Which texts DivineSarathi draws on, how verse meanings and stories are written and checked, and how to tell us about a mistake.",
      hi: "DivineSarathi किन ग्रंथों पर आधारित है, श्लोकों के अर्थ और कथाएँ कैसे लिखी और जाँची जाती हैं, और किसी ग़लती के बारे में हमें कैसे बताएँ।",
    },
    updated: "2026-10-29",
    footer: "legal",
    index: true,
    priority: 0.5,
  },
  privacy: {
    en: "/privacy-policy",
    hi: "/hi/privacy-policy",
    name: { en: "Privacy policy", hi: "गोपनीयता नीति" },
    title: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
    description: {
      en: "What DivineSarathi collects, why, who processes it, how long we keep it, and your rights, in plain words.",
      hi: "DivineSarathi क्या जानकारी लेता है, क्यों, कौन इसे प्रोसेस करता है, कितने समय रखते हैं, और आपके अधिकार, सरल शब्दों में।",
    },
    updated: "2026-10-29",
    footer: "legal",
    index: true,
    priority: 0.4,
  },
  terms: {
    en: "/terms",
    hi: "/hi/terms",
    name: { en: "Terms of use", hi: "उपयोग की शर्तें" },
    title: { en: "Terms of Use", hi: "उपयोग की शर्तें" },
    description: {
      en: "The terms for using DivineSarathi, including Krishna AI and Sarathi Plus subscriptions.",
      hi: "DivineSarathi के उपयोग की शर्तें, कृष्ण AI और सारथी प्लस सब्सक्रिप्शन समेत।",
    },
    updated: "2026-10-29",
    footer: "legal",
    index: true,
    priority: 0.3,
  },
  refunds: {
    en: "/refunds",
    hi: "/hi/refunds",
    name: { en: "Cancel and refunds", hi: "रद्द करना और रिफ़ंड" },
    title: { en: "Cancel and Refunds", hi: "सब्सक्रिप्शन रद्द करना और रिफ़ंड" },
    description: {
      en: "How to cancel a Sarathi Plus subscription on iPhone or Android, how refunds work through Apple and Google, and what happens after you cancel.",
      hi: "iPhone या Android पर सारथी प्लस सब्सक्रिप्शन कैसे रद्द करें, Apple और Google से रिफ़ंड कैसे मिलता है, और रद्द करने के बाद क्या होता है।",
    },
    updated: "2026-10-29",
    footer: "legal",
    index: true,
    priority: 0.3,
  },
  deleteAccount: {
    en: "/delete-account",
    hi: "/hi/delete-account",
    name: { en: "Delete account", hi: "अकाउंट डिलीट करें" },
    title: { en: "Delete Your DivineSarathi Account", hi: "अपना DivineSarathi अकाउंट डिलीट करें" },
    description: {
      en: "How to delete your DivineSarathi account and its data, in the app or by writing to us, and what we delete.",
      hi: "अपना DivineSarathi अकाउंट और उसका डेटा कैसे डिलीट करें, ऐप में या हमें लिखकर, और हम क्या मिटाते हैं।",
    },
    updated: "2026-10-29",
    footer: "legal",
    index: true,
    priority: 0.3,
  },
};

/** Keys whose Hindi page is built. Others keep hi: null in effect. */
const HINDI_READY = new Set<RouteKey>([
  "home",
  "krishnaAi",
  "gita",
  "dailyPuja",
  "dhyana",
  "about",
  "faqs",
  "support",
  "howItWorks",
  "sources",
  "privacy",
  "terms",
  "refunds",
  "deleteAccount",
]);

export function hindiPath(key: RouteKey): string | null {
  return HINDI_READY.has(key) ? ROUTES[key].hi : null;
}

export function pathFor(key: RouteKey, locale: Locale): string {
  if (locale === "hi") return hindiPath(key) ?? ROUTES[key].en;
  return ROUTES[key].en;
}

export const FOOTER_GROUPS: { group: FooterGroup; label: Record<Locale, string> }[] = [
  { group: "product", label: { en: "In the app", hi: "ऐप में" } },
  { group: "company", label: { en: "Company", hi: "कंपनी" } },
  { group: "legal", label: { en: "Trust and legal", hi: "भरोसा और नियम" } },
];

export function routesInGroup(group: FooterGroup): RouteKey[] {
  return (Object.keys(ROUTES) as RouteKey[]).filter((k) => ROUTES[k].footer === group);
}
