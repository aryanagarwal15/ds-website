import type { Metadata } from "next";
import GuideView from "@/views/GuideView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("gitaAi", "en");

export default function Page() {
  return <GuideView guide="gitaAi" locale="en" />;
}
