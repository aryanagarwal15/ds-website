import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/terms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms", "hi");

export default function Page() {
  return <LongformView routeKey="terms" locale="hi" doc={DOC.hi} />;
}
