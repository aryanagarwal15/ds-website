import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/privacy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy", "hi");

export default function Page() {
  return <LongformView routeKey="privacy" locale="hi" doc={DOC.hi} />;
}
