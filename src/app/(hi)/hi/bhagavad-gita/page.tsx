import type { Metadata } from "next";
import FeatureView from "@/views/FeatureView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("gita", "hi");

export default function Page() {
  return <FeatureView feature="gita" locale="hi" />;
}
