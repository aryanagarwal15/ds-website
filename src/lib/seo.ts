import type { Metadata } from "next";

export const SITE_URL = "https://www.divinesarathi.in";

export const SITE_NAME = "DivineSarathi";

export const SITE_DESCRIPTION =
  "DivineSarathi is a voice-first spiritual companion inspired by Lord Krishna and the Bhagavad Gita. Talk through life's questions, learn the Gita verse by verse, and explore daily stories rooted in sacred Hindu texts.";

export const SITE_DESCRIPTION_HI =
  "DivineSarathi एक आवाज़-आधारित आध्यात्मिक साथी है, जो भगवान कृष्ण और भगवद गीता से प्रेरित है। जीवन के सवालों पर बात करें, गीता श्लोक-दर-श्लोक सीखें, और पवित्र हिंदू ग्रंथों पर आधारित दैनिक कथाएँ सुनें।";

export const DEFAULT_OG_IMAGE = "/images/og-image.png";

export const APP_STORE_URL =
  "https://apps.apple.com/in/app/divinesarathi/id6752269118";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/divinesarathi",
  "https://x.com/DivineSarathi",
  "https://www.youtube.com/@DivineSarathi",
  "https://www.linkedin.com/company/divinesarathi",
  "https://www.facebook.com/profile.php?id=61578551830799",
];

export const KEYWORDS = [
  "Bhagavad Gita app",
  "Krishna AI",
  "spiritual companion app",
  "Hindu devotional app",
  "daily devotional",
  "Gita for daily life",
  "talk to Krishna",
  "Bhagavad Gita daily verse",
  "spiritual guidance app",
  "voice meditation app",
  "Hindu spiritual app India",
  "Mahabharata stories app",
  "sacred texts app",
];

export const KEYWORDS_HI = [
  "भगवद गीता ऐप",
  "कृष्ण AI",
  "आध्यात्मिक ऐप",
  "हिंदू भक्ति ऐप",
  "दैनिक भक्ति",
  "गीता से जीवन मार्गदर्शन",
  "कृष्ण से बात करें",
  "भगवद गीता दैनिक श्लोक",
  "आध्यात्मिक मार्गदर्शन ऐप",
  "Krishna AI app India",
  "Gita app Hindi",
];

export type Locale = "en" | "hi";

export type PageKey = "home" | "about" | "faqs" | "download" | "privacy";

export const PAGE_PATHS: Record<
  PageKey,
  { en: string; hi: string | null }
> = {
  home: { en: "/", hi: "/hi" },
  about: { en: "/about", hi: "/hi/about" },
  faqs: { en: "/faqs", hi: "/hi/faqs" },
  download: { en: "/download", hi: null },
  privacy: { en: "/privacy-policy", hi: null },
};

export function getPagePath(pageKey: PageKey, locale: Locale): string {
  const paths = PAGE_PATHS[pageKey];
  if (locale === "hi" && paths.hi) return paths.hi;
  return paths.en;
}

export function buildHreflangAlternates(pageKey: PageKey): Record<string, string> {
  const paths = PAGE_PATHS[pageKey];
  const languages: Record<string, string> = {
    "en-IN": `${SITE_URL}${paths.en}`,
    "x-default": `${SITE_URL}${paths.en}`,
  };
  if (paths.hi) {
    languages["hi-IN"] = `${SITE_URL}${paths.hi}`;
  }
  return languages;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  pageKey: PageKey;
  locale?: Locale;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  pageKey,
  locale = "en",
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const path = getPagePath(pageKey, locale);
  const url = `${SITE_URL}${path}`;
  const isHome = pageKey === "home";
  const fullTitle = isHome ? title : `${title} | ${SITE_NAME}`;
  const baseKeywords = locale === "hi" ? KEYWORDS_HI : KEYWORDS;

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(pageKey),
    },
    openGraph: {
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Bhagavad Gita spiritual companion app`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DivineSarathi",
      creator: "@DivineSarathi",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  description: SITE_DESCRIPTION,
  email: "founders@divinesarathi.in",
  sameAs: SOCIAL_PROFILES,
  founder: [
    {
      "@type": "Person",
      name: "Mohith Mahadevan",
    },
    {
      "@type": "Person",
      name: "Aryan Agarwal",
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en-IN", "hi-IN"],
};

export const mobileAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#mobileapp`,
  name: SITE_NAME,
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  description: SITE_DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  installUrl: APP_STORE_URL,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageJsonLd(
  faqs: ReadonlyArray<{ q: string; a: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
