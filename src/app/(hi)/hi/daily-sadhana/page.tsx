import type { Metadata } from "next";
import FeatureView from "@/views/FeatureView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("sadhana", "hi");

export default function Page() {
  return <FeatureView feature="sadhana" locale="hi" />;
}
