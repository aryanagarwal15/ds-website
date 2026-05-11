"use client";

import React, { useState } from "react";
import Footer from "@/app/newComponents/Footer";

const faqs = [
  {
    q: "What is DivineSarathi?",
    a: "At DivineSarathi, we have built a voice based AI companion inspired by the teachings of Lord Krishna and the wisdom found in the Bhagavad Gita and other sacred texts. Through stories, conversations, and reflections, it offers perspectives on life, purpose, relationships, and personal growth. The goal is not to provide fixed answers, but to help people engage with timeless teachings in a way that fits naturally into modern life.",
  },
  {
    q: "Is DivineSarathi meant to represent Lord Krishna?",
    a: "DivineSarathi is inspired by the teachings and guidance associated with Lord Krishna, especially the wisdom found in the Bhagavad Gita. It does not claim to replace scripture, tradition, or spiritual teachers. Instead, it presents perspectives drawn from these teachings in a conversational format that invites reflection. The intention is to help people engage with these ideas with curiosity, respect, and sincerity.",
  },
  {
    q: "Who is DivineSarathi for?",
    a: "DivineSarathi is for anyone who is curious about the teachings of the Bhagavad Gita and other sacred texts. Some people come with deep familiarity with these traditions. Others are exploring them for the first time. Both are welcome.",
  },
  {
    q: "Where does DivineSarathi draw its insights from?",
    a: "DivineSarathi draws inspiration from the teachings found in sacred texts such as the Bhagavad Gita, the Mahabharata, and other traditional sources. Its responses are designed to reflect the spirit and ideas found in these teachings, presented in a way that encourages reflection and thoughtful engagement.",
  },
  {
    q: "How does DivineSarathi work?",
    a: "DivineSarathi uses voice based AI to allow users to interact through conversation. You can listen to stories, ask questions, or explore reflections based on teachings from sacred texts such as the Bhagavad Gita, the Mahabharata, and other traditional sources. Each interaction is designed to encourage thoughtful reflection rather than provide rigid instructions.",
  },
  {
    q: "What kind of questions can I ask DivineSarathi?",
    a: "People often ask questions related to life, purpose, relationships, work, decision making, and personal challenges. DivineSarathi responds by drawing from the ideas and perspectives found in sacred texts and presenting them in a conversational format.",
  },
  {
    q: "What DivineSarathi does not do?",
    a: "DivineSarathi does not offer medical advice, predict the future, or provide astrological remedies. Its purpose is to present perspectives from sacred teachings that may help users reflect on their own questions and experiences.",
  },
  {
    q: "Is DivineSarathi a replacement for reading scriptures?",
    a: "No. Sacred texts such as the Bhagavad Gita and the Mahabharata remain the primary sources of these teachings. DivineSarathi is simply another way to engage with these ideas through conversation and reflection.",
  },
  {
    q: "Do I have to follow the guidance given by DivineSarathi?",
    a: "No. DivineSarathi is not meant to give instructions or tell people what they should do. It presents perspectives drawn from sacred teachings. Users are encouraged to reflect on what resonates with them and approach the experience in their own way.",
  },
  {
    q: "Is my conversation private?",
    a: "Yes. Your conversations with DivineSarathi are treated with care and respect for your privacy. Your voice is not recorded, and your conversations are not shared publicly. DivineSarathi is designed to provide a safe and personal space for reflection.",
  },
  {
    q: "Can I delete my account?",
    a: "Yes. You can request deletion of your DivineSarathi account at any time. Once your account is deleted, your access to the service will be removed. If you need help with this process, you can contact our support team and we will assist you.",
  },
  {
    q: "Who created DivineSarathi?",
    a: "DivineSarathi was created by Mohith Mahadevan and Aryan Agarwal, long time friends who have known each other for over a decade. Both grew up engaging with these teachings and began exploring how modern technology could make them easier to experience in everyday life. You can learn more about the founders in the About section.",
  },
  {
    q: "Does DivineSarathi replace scriptures, teachers, or spiritual traditions?",
    a: "No. Sacred texts such as the Bhagavad Gita and the teachings that come from them have guided people for thousands of years. DivineSarathi does not attempt to replace these traditions. Instead, it is meant to be another way to engage with these teachings in everyday life. The goal is to make it easier for people to explore ideas, reflect on them, and perhaps feel encouraged to go deeper into the original texts themselves. DivineSarathi is best understood as a companion for reflection, not as an authority.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: {
  q: string; a: string; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div
      className="bg-[#fbf7ef] rounded-[20px] cursor-pointer select-none overflow-hidden transition-all duration-300"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4 px-6 md:px-8 py-6 md:py-7">
        <p className="font-inter font-medium text-[#4c4a48] leading-snug"
           style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
          {q}
        </p>
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#4c4a48]">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="11" width="16" height="2" rx="1" fill="#4c4a48" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="11" width="16" height="2" rx="1" fill="#4c4a48" />
              <rect x="11" y="4" width="2" height="16" rx="1" fill="#4c4a48" />
            </svg>
          )}
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? "600px" : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          overflow: "hidden",
        }}
      >
        <p className="font-inter font-normal text-[#4c4a48] leading-relaxed px-6 md:px-8 pb-7"
           style={{ fontSize: "clamp(14px, 1.2vw, 18px)" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 w-full">
        <div className="text-center px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <h1 className="font-crimson font-semibold text-[#053466] leading-tight"
              style={{ fontSize: "clamp(28px, 5.5vw, 80px)" }}>
            Frequently asked questions
          </h1>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 md:px-6 pb-20 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
