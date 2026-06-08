"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Footer from "@/app/newComponents/Footer";

type FormState = { name: string; email: string; message: string };
type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = { name: "", email: "", message: "" };

export default function AboutPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus("idle");
    setErrorMessage("");
  };

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
                image: "/images/about/mohith_mahadevan.png",
                bio: "Mohith studied engineering at BITS Pilani and later completed his MBA at London Business School as a BK Birla Scholar. He previously worked in the CEO's office at Navi, where he worked closely with Sachin Bansal and helped scale the lending business from zero to over one billion dollars in assets under management.",
              },
              {
                name: "Aryan Agarwal",
                image: "/images/about/aryan_agarwal.png",
                bio: "Aryan Agarwal studied engineering at BITS Pilani and is the co-founder and CTO of Yenmo, a Y Combinator backed fintech startup in the financial technology space. He has extensive experience building technology products and leading teams from zero to scale.",
              },
            ].map(f => (
              <div key={f.name} className="flex-1 flex flex-col items-center md:items-start md:flex-row gap-5 max-w-[560px]">
                <img src={f.image} alt={f.name}
                  className="rounded-full object-cover object-center flex-shrink-0 bg-[#d9d9d9]"
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

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/90 backdrop-blur-sm rounded-[20px] px-8 py-12 shadow-[0_8px_40px_rgba(5,52,102,0.08)] border border-white/60"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#053466]/10"
                  >
                    <CheckCircle2 className="h-8 w-8 text-[#053466]" strokeWidth={1.75} />
                  </motion.div>
                  <h3 className="font-crimson text-[#053466] mb-3"
                    style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}>
                    Message sent
                  </h3>
                  <p className="font-inter text-[#4c4a48] mb-8 leading-relaxed"
                    style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }}>
                    Thank you for reaching out. We&apos;ve received your message and will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="font-inter text-[#053466] text-[16px] underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-4 text-left"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      className="flex-1 bg-white/80 backdrop-blur-sm rounded-[12px] px-4 py-3 font-inter text-[#4c4a48] text-[18px] outline-none border border-white/60 focus:border-[#053466] focus:bg-white transition-colors disabled:opacity-60"
                      placeholder="Name"
                      value={form.name}
                      disabled={status === "submitting"}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    />
                    <input
                      className="flex-1 bg-white/80 backdrop-blur-sm rounded-[12px] px-4 py-3 font-inter text-[#4c4a48] text-[18px] outline-none border border-white/60 focus:border-[#053466] focus:bg-white transition-colors disabled:opacity-60"
                      placeholder="Email address"
                      type="email"
                      value={form.email}
                      disabled={status === "submitting"}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <textarea
                    className="bg-white/80 backdrop-blur-sm rounded-[12px] px-4 py-3 font-inter text-[#4c4a48] text-[18px] outline-none border border-white/60 focus:border-[#053466] focus:bg-white transition-colors resize-none disabled:opacity-60"
                    placeholder="Your message"
                    rows={5}
                    value={form.message}
                    disabled={status === "submitting"}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  />

                  <AnimatePresence>
                    {status === "error" && errorMessage && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="font-inter text-[15px] text-[#b42318] text-center"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-center mt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex items-center gap-2.5 bg-[#053466] text-white font-inter text-[20px] rounded-[12px] px-10 py-3 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px] justify-center"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" strokeWidth={1.75} />
                          Send message
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
