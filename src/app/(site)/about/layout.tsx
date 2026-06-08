import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us — Our Mission & Founders",
  description:
    "Learn how DivineSarathi brings Bhagavad Gita wisdom into everyday life through voice conversations, daily stories, and reflection. Built by Mohith Mahadevan and Aryan Agarwal.",
  pageKey: "about",
  keywords: [
    "DivineSarathi founders",
    "Bhagavad Gita mission",
    "Hindu spiritual technology",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
