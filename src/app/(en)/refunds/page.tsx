import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/refunds";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("refunds", "en");

export default function Page() {
  return <LongformView routeKey="refunds" locale="en" doc={DOC.en} />;
}
