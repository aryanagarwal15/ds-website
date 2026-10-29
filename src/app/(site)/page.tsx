import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import MalaDivider from "@/components/MalaDivider";
import DayFlow from "@/components/home/DayFlow";
import FaqPreview from "@/components/home/FaqPreview";
import Features from "@/components/home/Features";
import FinalCta from "@/components/home/FinalCta";
import Founders from "@/components/home/Founders";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import Why from "@/components/home/Why";
import PromiseSection from "@/components/home/Promise";
import Testimonials from "@/components/home/Testimonials";
import { homeFaqs } from "@/lib/faqs";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  createPageMetadata,
  faqPageJsonLd,
  mobileAppJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${SITE_NAME}: Talk with Krishna | Voice AI Bhagavad Gita Companion`,
  description: SITE_DESCRIPTION,
  pageKey: "home",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[mobileAppJsonLd, faqPageJsonLd(homeFaqs)]} />
      <Hero />
      <MalaDivider />
      <Pillars />
      <MalaDivider />
      <DayFlow />
      <Why />
      <Features />
      <Testimonials />
      <MalaDivider />
      <PromiseSection />
      <Founders />
      <MalaDivider />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
