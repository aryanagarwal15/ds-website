import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy", "en");

export default function Page() {
  return <LongformView routeKey="privacy" locale="en" doc={DOC.en} />;
}
