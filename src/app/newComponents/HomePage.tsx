"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeelingSection from "./FeelingSection";
import NotAloneSection from "./NotAloneSection";
import MeetSection from "./MeetSection";
import ReturnSection from "./ReturnSection";
import FeaturesSection from "./FeaturesSection";
import PromiseSection from "./PromiseSection";
import TestimonialsSection from "./Testimonial";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbf7ef] overflow-x-hidden">
      <HeroSection />
      <FeelingSection />
      <NotAloneSection />
      <MeetSection />
      <ReturnSection />
      <FeaturesSection />
      <PromiseSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
