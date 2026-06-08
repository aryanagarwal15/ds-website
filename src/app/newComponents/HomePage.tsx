"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FeelingSection from "./FeelingSection";
import MeetSection from "./MeetSection";
import ReturnSection from "./ReturnSection";
import PromiseSection from "./PromiseSection";
import TestimonialsSection from "./Testimonial";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ds-cream overflow-x-hidden selection:bg-ds-navy/10 selection:text-ds-navy">
      <HeroSection />
      {/* <FeaturesSection /> */}
      <FeelingSection />
      <MeetSection />
      <ReturnSection />
      <PromiseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
