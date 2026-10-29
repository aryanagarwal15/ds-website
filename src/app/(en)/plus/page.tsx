import type { Metadata } from "next";
import { PlusView } from "@/views/MiscViews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("plus", "en");

export default function Page() {
  return <PlusView />;
}
