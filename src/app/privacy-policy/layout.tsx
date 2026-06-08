import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the DivineSarathi privacy policy. Learn how we handle your data, conversations, and account information in our Bhagavad Gita spiritual companion app.",
  pageKey: "privacy",
  keywords: ["DivineSarathi privacy", "spiritual app data policy"],
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      {children}
    </>
  );
}
