import type { Metadata } from "next";
import HomeView from "@/views/HomeView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("home", "hi");

export default function Page() {
  return <HomeView locale="hi" />;
}
