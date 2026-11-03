import type { Metadata } from "next";
import GuideView from "@/views/GuideView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("seBaat", "hi");

export default function Page() {
  return <GuideView guide="seBaat" locale="hi" />;
}
