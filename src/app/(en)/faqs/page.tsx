import type { Metadata } from "next";
import { FaqsView } from "@/views/CompanyViews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("faqs", "en");

export default function Page() {
  return <FaqsView locale="en" />;
}
