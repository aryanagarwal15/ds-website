import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQs — Bhagavad Gita App Questions Answered",
  description:
    "Answers to common questions about DivineSarathi: how Krishna AI works, privacy, scripture sources, who it's for, and how it complements the Bhagavad Gita.",
  pageKey: "faqs",
  keywords: [
    "DivineSarathi FAQ",
    "Krishna AI questions",
    "Bhagavad Gita app privacy",
    "spiritual app FAQ",
  ],
});

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
          faqPageJsonLd(faqs),
        ]}
      />
      {children}
    </>
  );
}
