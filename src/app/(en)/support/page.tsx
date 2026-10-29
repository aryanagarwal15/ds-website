import type { Metadata } from "next";
import { SupportView } from "@/views/CompanyViews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("support", "en");

export default function Page() {
  return <SupportView locale="en" />;
}
