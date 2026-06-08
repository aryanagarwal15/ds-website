"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeelingSection from "./FeelingSection";
import MeetSection from "./MeetSection";
import ReturnSection from "./ReturnSection";
import PromiseSection from "./PromiseSection";
import TestimonialsSection from "./Testimonial";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ds-cream overflow-x-hidden selection:bg-ds-navy/10 selection:text-ds-navy">
      <HeroSection />
      <FeelingSection />
      <MeetSection />
      <ReturnSection />
      <PromiseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
