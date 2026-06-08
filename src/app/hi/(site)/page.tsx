import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HiHomePage from "@/app/newComponents/hi/HiHomePage";
import {
  SITE_DESCRIPTION_HI,
  createPageMetadata,
  mobileAppJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "कृष्ण से बात करें | भगवद गीता भक्ति ऐप",
  description: SITE_DESCRIPTION_HI,
  pageKey: "home",
  locale: "hi",
  keywords: [
    "भगवद गीता ऐप डाउनलोड",
    "कृष्ण आध्यात्मिक मार्गदर्शक",
    "दैनिक गीता श्लोक ऐप",
    "Krishna se baat karo app",
  ],
});

export default function HiHome() {
  return (
    <>
      <JsonLd data={mobileAppJsonLd} />
      <HiHomePage />
    </>
  );
}
