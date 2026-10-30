import type { Metadata } from "next";
import { ROUTES, hindiPath, pathFor, type Locale, type RouteKey } from "./routes";
import {
  APP_STORE_URL,
  CONTACT_EMAIL,
  FOUNDERS,
  PLAY_STORE_URL,
  PLUS,
  PLUS_PUBLIC,
  FREE,
  SAME_AS,
  SITE_ALT_NAME,
  SITE_NAME,
  SITE_URL,
} from "./site";

export const abs = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export function hreflang(key: RouteKey): Record<string, string> {
  const r = ROUTES[key];
  const langs: Record<string, string> = { "en-IN": abs(r.en), "x-default": abs(r.en) };
  const hi = hindiPath(key);
  if (hi) langs["hi-IN"] = abs(hi);
  return langs;
}

/** Title, description, canonical, hreflang, Open Graph and robots for one page. */
export function pageMetadata(key: RouteKey, locale: Locale = "en"): Metadata {
  const r = ROUTES[key];
  const path = pathFor(key, locale);
  const url = abs(path);
  const title = key === "home" ? r.title[locale] : `${r.title[locale]} | ${SITE_NAME}`;
  const description = r.description[locale];
  const index = r.index && (key !== "plus" || PLUS_PUBLIC);
  const og = `/og/${key}.png`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: hreflang(key) },
    openGraph: {
      type: "website",
      locale: locale === "hi" ? "hi_IN" : "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: og, width: 1200, height: 630, alt: r.title[locale] }],
    },
    twitter: { card: "summary_large_image", site: "@DivineSarathi", title, description, images: [og] },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
      : { index: false, follow: true },
    other: { "apple-itunes-app": `app-id=6752269118, app-argument=${url}` },
  };
}

/* ── structured data ─────────────────────────────────────────── */

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  email: CONTACT_EMAIL,
  description:
    `DivineSarathi makes ${FREE.en.app} for iPhone and Android where people talk with Krishna AI, an AI voice grounded in the Bhagavad Gita, in English or Hindi.`,
  sameAs: SAME_AS,
  founder: FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  url: SITE_URL,
  inLanguage: ["en-IN", "hi-IN"],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

/**
 * The app itself. Store ratings are shown on the page as text but left out of
 * this markup: Google's rules don't allow ratings gathered on other sites.
 */
export const mobileAppLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  alternateName: [SITE_ALT_NAME, "DivineSarathi: Krishna AI Gita", "Krishna AI"],
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  inLanguage: ["en", "hi"],
  description:
    "Talk with Krishna AI by voice or text in English or Hindi, hear a sacred story each morning, learn the Bhagavad Gita verse by verse, and practise guided breath meditation.",
  installUrl: [APP_STORE_URL, PLAY_STORE_URL],
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: [
    { "@type": "Offer", name: PLUS_PUBLIC ? "Free to start" : "Free", price: "0", priceCurrency: "INR", category: "free" },
    ...(PLUS_PUBLIC
      ? [
          { "@type": "Offer", name: "Sarathi Plus monthly", price: PLUS.monthly.replace(/[^\d]/g, ""), priceCurrency: "INR" },
          { "@type": "Offer", name: "Sarathi Plus yearly", price: PLUS.yearly.replace(/[^\d]/g, ""), priceCurrency: "INR" },
        ]
      : []),
  ],
};

export function breadcrumbLd(key: RouteKey, locale: Locale = "en") {
  const items = [{ name: ROUTES.home.name[locale], item: abs(pathFor("home", locale)) }];
  if (key !== "home") items.push({ name: ROUTES[key].name[locale], item: abs(pathFor(key, locale)) });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
  };
}

export function faqLd(faqs: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function webPageLd(key: RouteKey, locale: Locale = "en") {
  const r = ROUTES[key];
  return {
    "@context": "https://schema.org",
    "@type": key === "about" ? "AboutPage" : "WebPage",
    "@id": `${abs(pathFor(key, locale))}#webpage`,
    url: abs(pathFor(key, locale)),
    name: r.title[locale],
    description: r.description[locale],
    inLanguage: locale === "hi" ? "hi-IN" : "en-IN",
    dateModified: r.updated,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#app` },
  };
}
