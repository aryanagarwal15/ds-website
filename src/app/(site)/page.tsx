import type { Metadata } from "next";
import React from "react";
import App from "@/app/App";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, mobileAppJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Talk to Krishna | Bhagavad Gita Devotional App",
  description:
    "DivineSarathi is your voice-first spiritual companion. Talk to Krishna AI, learn the Bhagavad Gita verse by verse, explore Gita for daily life, and listen to daily devotional stories.",
  pageKey: "home",
  keywords: [
    "download Bhagavad Gita app",
    "Krishna spiritual guide",
    "daily Gita verse app",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={mobileAppJsonLd} />
      <App />
    </>
  );
}
