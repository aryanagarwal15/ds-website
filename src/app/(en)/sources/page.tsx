import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/sources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sources", "en");

export default function Page() {
  return <LongformView routeKey="sources" locale="en" doc={DOC.en} />;
}
