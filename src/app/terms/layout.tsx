import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "The terms for using DivineSarathi, including Sarathi Plus: what is free, how the subscription renews, and how to cancel it.",
  pageKey: "terms",
  keywords: ["DivineSarathi terms", "Sarathi Plus subscription terms"],
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ])}
      />
      {children}
    </>
  );
}
