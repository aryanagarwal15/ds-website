import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/howItWorks";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("howItWorks", "en");

export default function Page() {
  return <LongformView routeKey="howItWorks" locale="en" doc={DOC.en} />;
}
