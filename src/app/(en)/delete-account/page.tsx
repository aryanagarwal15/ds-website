import type { Metadata } from "next";
import LongformView from "@/views/LongformView";
import { DOC } from "@/content/legal/deleteAccount";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("deleteAccount", "en");

export default function Page() {
  return <LongformView routeKey="deleteAccount" locale="en" doc={DOC.en} />;
}
