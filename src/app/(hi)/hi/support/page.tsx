import type { Metadata } from "next";
import { SupportView } from "@/views/CompanyViews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("support", "hi");

export default function Page() {
  return <SupportView locale="hi" />;
}
