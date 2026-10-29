import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/sources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sources", "hi");

export default function Page() {
  return <LongformView routeKey="sources" locale="hi" doc={DOC.hi} />;
}
