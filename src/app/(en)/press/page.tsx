import type { Metadata } from "next";
import { PressView } from "@/views/MiscViews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("press", "en");

export default function Page() {
  return <PressView />;
}
