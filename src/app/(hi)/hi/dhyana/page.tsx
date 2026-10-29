import type { Metadata } from "next";
import FeatureView from "@/views/FeatureView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("dhyana", "hi");

export default function Page() {
  return <FeatureView feature="dhyana" locale="hi" />;
}
