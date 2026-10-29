import type { Metadata } from "next";
import FeatureView from "@/views/FeatureView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("krishnaAi", "hi");

export default function Page() {
  return <FeatureView feature="krishnaAi" locale="hi" />;
}
