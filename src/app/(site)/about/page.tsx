"use client";

import React, { useState } from "react";
import Footer from "@/app/newComponents/Footer";

export default function AboutPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "80vh" }}>
        <div className="absolute inset-0">
          <img src="/images/about/about_us_bg.webp" alt=""
            className="hidden md:block w-full h-full object-cover object-center" />
          <img src="/images/about/about_us_bg_m.webp" alt=""
            className="md:hidden w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-white/20" />
        </div>
        <div className="relative z-10 px-6 py-32 max-w-[1260px] mx-auto">
          <h1 className="font-crimson font-semibold text-[#053466] leading-tight mb-8"
            style={{ fontSize: "clamp(32px, 5.5vw, 80px)" }}>
            We grew up with these teachings.<br />
            Now we are building a new way to experience them.
          </h1>
          <p className="font-inter text-[#4c4a48] mx-auto"
            style={{ fontSize: "clamp(18px, 2vw, 28px)", maxWidth: 1036 }}>
            DivineSarathi brings the wisdom of the Bhagavad Gita and other sacred texts into everyday life through conversation, stories, and reflection.
          </p>
        </div>
      </section>

      {/* ── OUR MISSION ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="font-crimson font-semibold text-[#053466] mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>
              Our Mission
            </h2>
            <p className="font-inter text-black leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
              For thousands of years, people have turned to the Bhagavad Gita, the Mahabharata, the Ramayana, the Puranas, and other sacred texts for guidance on life, duty, relationships, and purpose. These teachings have shaped how generations understand responsibility, courage, and inner clarity. Yet today, many people feel distant from these sources of wisdom. The teachings remain powerful, but the ways in which we engage with them have not always kept pace with modern life. DivineSarathi exists to help people reconnect with these teachings in a way that feels natural in the present day.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[420px] rounded-[24px] overflow-hidden">
            <img src="/images/about/mission.webp" alt="Our Mission"
              className="w-full h-full object-cover" style={{ maxHeight: 460 }} />
          </div>
        </div>
      </section>

      {/* ── WHY WE BUILT ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1360px] mx-auto flex flex-col-reverse lg:flex-row gap-12 items-start">
          <div className="flex-shrink-0 w-full lg:w-[380px] rounded-[24px] overflow-hidden">
            <img src="/images/about/why_built.webp" alt="Why We Built DivineSarathi"
              className="w-full h-full object-cover" style={{ maxHeight: 460 }} />
          </div>
          <div className="flex-1">
            <h2 className="font-crimson text-[#053466] mb-6"
              style={{ fontSize: "clamp(28px, 3.2vw, 48px)" }}>
              Why We Built DivineSarathi
            </h2>
            <p className="font-inter text-black leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
              We are not outsiders trying to build a product around a market opportunity. We grew up with these teachings. Many of these stories and ideas were part of our homes, our families, and our everyday lives. As we grew older, we often found ourselves returning to these teachings when thinking about difficult decisions, personal growth, and the deeper questions of life. DivineSarathi grew from this experience. It is our attempt to bring these teachings into a form that fits naturally into the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT DIVINESARATHI IS ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-crimson text-[#053466] mb-6"
              style={{ fontSize: "clamp(28px, 3.2vw, 48px)" }}>
              What DivineSarathi Is
            </h2>
            <p className="font-inter text-black leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
              At DivineSarathi, we have built a voice based AI companion inspired by the teachings of Lord Krishna and the wisdom found in the Bhagavad Gita and other sacred texts. Through stories, conversations, and reflections, it invites people to explore questions about life, purpose, relationships, and inner clarity. DivineSarathi does not claim to provide final answers. Instead, it presents perspectives rooted in timeless teachings and encourages each person to reflect and decide what resonates with them.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[340px]">
            <img src="/images/about/phone.webp" alt="DivineSarathi App"
              className="w-full object-contain mx-auto" style={{ maxHeight: 500 }} />
          </div>
        </div>
      </section>

      {/* ── BUILT BY SEEKERS ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-[1360px] mx-auto">
          <h2 className="font-crimson text-[#053466] mb-6"
            style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>
            Built by Seekers
          </h2>
          <p className="font-inter text-black mx-auto mb-16"
            style={{ fontSize: "clamp(16px, 1.6vw, 24px)", maxWidth: 971 }}>
            DivineSarathi is built by Mohith Mahadevan and Aryan Agarwal, friends and collaborators for over a decade.
          </p>

          {/* Founders */}
          <div className="flex flex-col md:flex-row gap-12 justify-center text-left">
            {[
              {
                name: "Mohith Mahadevan",
                bio: "Mohith studied engineering at BITS Pilani and later completed his MBA at London Business School as a BK Birla Scholar. He previously worked in the CEO's office at Navi, where he worked closely with Sachin Bansal and helped scale the lending business from zero to over one billion dollars in assets under management.",
              },
              {
                name: "Aryan Agarwal",
                bio: "Aryan Agarwal studied engineering at BITS Pilani and is the co-founder and CTO of Yenmo, a Y Combinator backed fintech startup in the financial technology space. He has extensive experience building technology products and leading teams from zero to scale.",
              },
            ].map(f => (
              <div key={f.name} className="flex-1 flex flex-col items-center md:items-start md:flex-row gap-5 max-w-[560px]">
                <img src="/images/about/founder_placeholder.webp" alt={f.name}
                  className="rounded-full object-cover flex-shrink-0 bg-[#d9d9d9]"
                  style={{ width: 140, height: 140, backgroundColor: "#d9d9d9" }} />
                <div className="text-center md:text-left">
                  <h3 className="font-crimson text-[#053466] mb-3"
                    style={{ fontSize: "clamp(24px, 2.5vw, 40px)" }}>
                    {f.name}
                  </h3>
                  <p className="font-inter text-black leading-relaxed"
                    style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}>
                    {f.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-inter text-black mx-auto mt-16"
            style={{ fontSize: "clamp(16px, 1.6vw, 24px)", maxWidth: 1280 }}>
            Both founders have spent years engaging with these teachings in their personal lives. DivineSarathi is being built not only as a technology product, but as an offering created by people who are themselves seekers. Through DivineSarathi, we are bringing together cultural depth, spiritual curiosity, and modern technology to create a space where timeless wisdom can be experienced in everyday life.
          </p>
        </div>
      </section>

      {/* ── CONTACT US ───────────────────────────────────────────── */}
      <section id="contact" className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about/contact_us.webp" alt=""
            className="hidden md:block w-full h-full object-cover object-center" />
          <img src="/images/about/contact_us_m.webp" alt=""
            className="md:hidden w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10">
          <div className="max-w-[640px] mx-auto">
            <h2 className="font-crimson text-[#053466] mb-10"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}>
              Contact Us
            </h2>
            <form className="flex flex-col gap-4 text-left"
              onSubmit={e => { e.preventDefault(); }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  className="flex-1 bg-[#f5f5f5] rounded-[12px] px-4 py-3 font-inter text-[#4c4a48] text-[18px] outline-none border border-transparent focus:border-[#053466]"
                  placeholder="Name" value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                <input
                  className="flex-1 bg-[#f5f5f5] rounded-[12px] px-4 py-3 font-inter text-[#4c4a48] text-[18px] outline-none border border-transparent focus:border-[#053466]"
                  placeholder="Email address" type="email" value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
              </div>
              <textarea
                className="bg-[#f5f5f5] rounded-[12px] px-4 py-3 font-inter text-[#4c4a48] text-[18px] outline-none border border-transparent focus:border-[#053466] resize-none"
                placeholder="Your message" rows={5} value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
              <div className="flex justify-center mt-2">
                <button type="submit"
                  className="bg-[#053466] text-white font-inter text-[20px] rounded-[12px] px-10 py-3 hover:opacity-90 transition-opacity">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
