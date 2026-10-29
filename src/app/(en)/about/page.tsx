import type { Metadata } from "next";
import { AboutView } from "@/views/CompanyViews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about", "en");

export default function Page() {
  return <AboutView locale="en" />;
}
