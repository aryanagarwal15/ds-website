import { faqs } from "@/lib/faqs";
import { faqsHi } from "@/lib/faqs-hi";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_HI,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/seo";

const ABOUT_MISSION = `For thousands of years, people have turned to the Bhagavad Gita, the Mahabharata, the Ramayana, the Puranas, and other sacred texts for guidance on life, duty, relationships, and purpose. DivineSarathi exists to help people reconnect with these teachings in a way that feels natural in the present day.`;

const ABOUT_FOUNDERS = `DivineSarathi is built by Mohith Mahadevan and Aryan Agarwal. Mohith studied engineering at BITS Pilani and completed his MBA at London Business School. Aryan studied engineering at BITS Pilani and is co-founder and CTO of Yenmo, a Y Combinator-backed fintech startup.`;

const PRIVACY_SUMMARY = `DivineSarathi collects only what is needed to run the app, keep it safe, improve experiences, and comply with the law. We do not sell personal data. Contact: founders@divinesarathi.in. Last updated: 10 September 2025.`;

export function generateLlmsTxt(): string {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION} Available in English and Hindi. Founded by Mohith Mahadevan and Aryan Agarwal. Contact: founders@divinesarathi.in.

## Product

- [Home](${SITE_URL}/): Voice-first Bhagavad Gita companion with Krishna AI, daily stories, and Gita for daily life.
- [Download](${SITE_URL}/download): Download the free app on the App Store and Google Play.
- [App Store](${APP_STORE_URL}): Direct link to the DivineSarathi iOS app listing.
- [Google Play](${PLAY_STORE_URL}): Direct link to the DivineSarathi Android app listing.

## About

- [About Us](${SITE_URL}/about): Mission, founders, and why DivineSarathi was built to bring sacred text wisdom into everyday life.
- [FAQs](${SITE_URL}/faqs): Common questions about Krishna AI, privacy, scriptures, and how the app works.

## Hindi (हिंदी)

- [होम](${SITE_URL}/hi): DivineSarathi का हिंदी होम पेज — कृष्ण AI और भगवद गीता ऐप।
- [हमारे बारे में](${SITE_URL}/hi/about): मिशन, संस्थापक, और DivineSarathi का उद्देश्य।
- [अक्सर पूछे जाने वाले प्रश्न](${SITE_URL}/hi/faqs): ऐप, गोपनीयता, और शास्त्रों के बारे में सामान्य प्रश्न।

## Legal & Reference

- [Privacy Policy](${SITE_URL}/privacy-policy): How DivineSarathi handles user data, conversations, and account information.
- [Sitemap](${SITE_URL}/sitemap.xml): Machine-readable index of all public pages.
- [Full content for AI](${SITE_URL}/llms-full.txt): Complete markdown corpus of key site content for single-fetch ingestion.

## Social

${SOCIAL_PROFILES.map((url) => `- ${url}`).join("\n")}
`;
}

function formatFaqs(
  title: string,
  items: ReadonlyArray<{ q: string; a: string }>
): string {
  const body = items
    .map((faq) => `### ${faq.q}\n\n${faq.a}`)
    .join("\n\n");

  return `## ${title}\n\n${body}`;
}

export function generateLlmsFullTxt(): string {
  return `# ${SITE_NAME} — Full Content Corpus

> ${SITE_DESCRIPTION}

---

## Overview

${SITE_NAME} is a voice-first spiritual companion inspired by Lord Krishna and the Bhagavad Gita. Users can talk through life's questions, learn the Gita verse by verse, explore daily stories rooted in sacred Hindu texts, and receive reflective guidance drawn from the Mahabharata and other traditional sources.

- Website: ${SITE_URL}
- App Store: ${APP_STORE_URL}
- Google Play: ${PLAY_STORE_URL}
- Languages: English (en-IN), Hindi (hi-IN)
- Contact: founders@divinesarathi.in

---

## About DivineSarathi

${ABOUT_MISSION}

DivineSarathi is a voice-based AI companion inspired by the teachings of Lord Krishna and the wisdom found in the Bhagavad Gita and other sacred texts. Through stories, conversations, and reflections, it invites people to explore questions about life, purpose, relationships, and inner clarity. It does not claim to provide final answers or replace scripture, tradition, or spiritual teachers.

### Founders

${ABOUT_FOUNDERS}

---

${formatFaqs("Frequently Asked Questions (English)", faqs)}

---

${formatFaqs("अक्सर पूछे जाने वाले प्रश्न (Hindi)", faqsHi)}

---

## Hindi Site Summary

${SITE_DESCRIPTION_HI}

---

## Download

Download DivineSarathi on iOS: ${APP_STORE_URL}
Download DivineSarathi on Android: ${PLAY_STORE_URL}

A free voice-first Bhagavad Gita devotional app with Krishna AI, daily stories, and Gita for daily life guidance.

---

## Privacy Policy Summary

${PRIVACY_SUMMARY}

Full policy: ${SITE_URL}/privacy-policy
`;
}
