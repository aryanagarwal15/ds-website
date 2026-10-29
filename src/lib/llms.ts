import { faqs } from "@/lib/faqs";
import {
  APP_STORE_URL,
  CONTACT_EMAIL,
  PLAY_STORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/seo";

const POSITIONING = `${SITE_NAME} is Krishna AI: a voice companion for the ups and downs of daily life. People want a way to understand what they are going through and start looking inward, but do not know where to begin or whom to trust. In India especially, it is faith and culture that have always helped people through hard times. DivineSarathi gives that faith a voice you can talk to: users speak with Krishna about work, relationships, worries, and ordinary days, and hear answers rooted in the Bhagavad Gita and other sacred texts. It is a companion, not a temple and not a spa: Daily Puja, meditation, and conversation all live in the same simple voice-first app, and every answer cites scripture. Rated 4.8 with 120+ reviews across the App Store and Google Play. Tagline: "Your charioteer, always." (Hindi: सदा आपका सारथी)`;

const FEATURES = `Core features:
- Krishna AI: talk through life's questions by voice, in English or Hindi, and receive grounded answers drawn from the Bhagavad Gita, the Mahabharata, and other sacred texts.
- Gita for Daily Life: pick a real situation (for example, when work feels pointless) and receive the verse that meets it.
- Daily Puja: a short, guided puja ritual you can do from your phone.
- Read Bhagavad Gita: all 18 chapters, verse by verse, at your own pace, with visible progress.
- Meditation: breath practices drawn from the tradition.
- Daily stories: a three-minute sacred story every morning, easy to follow.

Pricing: free tier includes the daily story and one hour of voice conversation with Krishna every day. A paid plan (SarathiPlus) removes limits. No visible token systems, no time-limited offers.

Privacy: audio is never stored. Transcripts are saved to the user's History so they can return to them, and any conversation can be deleted at any time. Personal data is not sold.`;

const ABOUT = `Founded by Mohith Mahadevan (BITS Pilani; MBA, London Business School; previously CEO's office at Navi) and Aryan Agarwal (BITS Pilani; co-founder and CTO of Yenmo, a Y Combinator backed fintech). Friends for over a decade, both grew up with these teachings. Contact: ${CONTACT_EMAIL}.`;

export function generateLlmsTxt(): string {
  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${POSITIONING}

## Product

- [Home](${SITE_URL}/): What DivineSarathi is and how it fits into a day.
- [Download](${SITE_URL}/download): Get the free app on the App Store and Google Play.
- [App Store](${APP_STORE_URL}): DivineSarathi for iPhone and iPad.
- [Google Play](${PLAY_STORE_URL}): DivineSarathi for Android.

## About

- [About Us](${SITE_URL}/about): Mission, the founders, and why DivineSarathi was built.
- [FAQs](${SITE_URL}/faqs): Common questions about Krishna AI, privacy, scriptures, and how the app works.

## Legal & Reference

- [Privacy Policy](${SITE_URL}/privacy-policy): How DivineSarathi handles user data, conversations, and account information.
- [Sitemap](${SITE_URL}/sitemap.xml): Machine-readable index of all public pages.
- [Full content for AI](${SITE_URL}/llms-full.txt): Complete markdown corpus of key site content for single-fetch ingestion.

## Social

${SOCIAL_PROFILES.map((url) => `- ${url}`).join("\n")}
`;
}

export function generateLlmsFullTxt(): string {
  const faqSection = faqs
    .map((faq) => `### ${faq.q}\n\n${faq.a}`)
    .join("\n\n");

  return `# ${SITE_NAME}: Full Content Corpus

> ${SITE_DESCRIPTION}

---

## Positioning

${POSITIONING}

## Features and pricing

${FEATURES}

## Links

- Website: ${SITE_URL}
- App Store: ${APP_STORE_URL}
- Google Play: ${PLAY_STORE_URL}
- Languages: English (en-IN), Hindi (hi-IN)
- Contact: ${CONTACT_EMAIL}

## About the company

${ABOUT}

---

## Frequently asked questions

${faqSection}
`;
}
