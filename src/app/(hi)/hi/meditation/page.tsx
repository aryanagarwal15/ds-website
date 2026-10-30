import type { Metadata } from "next";
import FeatureView from "@/views/FeatureView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("meditation", "hi");

export default function Page() {
  return <FeatureView feature="meditation" locale="hi" />;
}
