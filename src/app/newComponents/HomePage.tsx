"use client";

import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import GuidanceSection from "./GuidanceSection";
import DailyPracticeSection from "./DailyPracticeSection";
import TestimonialsSection from "./Testimonial";
import FloatingAudioButton from "./FloatingAudioButton";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7efe6] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GuidanceSection />
      <DailyPracticeSection />
      <TestimonialsSection />
      <FloatingAudioButton />
      <Footer />
    </div>
  );
}
