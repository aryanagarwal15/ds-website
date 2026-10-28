import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Delete Your Account",
  description:
    "How to delete your DivineSarathi account and data, from the app or from the web, and what is erased.",
  pageKey: "deleteAccount",
  keywords: ["DivineSarathi delete account", "DivineSarathi data deletion"],
});

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Delete Your Account", path: "/delete-account" },
        ])}
      />
      {children}
    </>
  );
}
