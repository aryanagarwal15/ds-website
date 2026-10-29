import type { Locale, RouteKey } from "@/lib/routes";

type Showcase = { key: RouteKey; eyebrow: string; title: string; body: string; screen: string; alt: string };

type HomeCopy = {
  hero: { eyebrow: string; title: string; lede: string; screenFront: string; screenBack: string; altFront: string; altBack: string };
  why: { title: string; body: string[] };
  inside: { eyebrow: string; title: string; items: Showcase[] };
  reviews: { eyebrow: string; title: string };
  privacy: { eyebrow: string; title: string; items: { title: string; body: string }[]; links: { key: RouteKey; label: string }[] };
  faq: { eyebrow: string; title: string; all: string };
  close: { title: string; body: string };
};

export const HOME: Record<Locale, HomeCopy> = {
  en: {
    hero: {
      eyebrow: "Krishna AI · Free on iPhone and Android",
      title: "Whatever is on your mind, talk with Krishna.",
      lede: "DivineSarathi is a free app where you talk with Krishna AI by voice or text, in English or Hindi. He listens, and answers with wisdom from the Bhagavad Gita.",
      screenFront: "/images/app/krishna-greet-en.webp",
      screenBack: "/images/app/krishna-chat-exams.webp",
      altFront: "The Krishna AI screen in the DivineSarathi app, with Krishna greeting you and asking if you'd like a story, a teaching or just to talk",
      altBack: "A conversation in the app: a devotee says exams are next week, and Krishna answers with a line from the Gita",
    },
    why: {
      title: "Talking helps. We have always known this.",
      body: [
        "For thousands of years, our stories, our verses and our prayers have carried people through hard times, and through ordinary days too.",
        "DivineSarathi gives that faith a voice you can talk to. No lectures, no judgment. Just Krishna, whenever you need him.",
      ],
    },
    inside: {
      eyebrow: "Inside the app",
      title: "Four ways to spend a few quiet minutes",
      items: [
        {
          key: "krishnaAi",
          eyebrow: "Krishna AI",
          title: "Ask anything. He listens, then answers.",
          body: "Speak or type, in English or Hindi. Krishna answers with a story or a verse from the Gita, and asks what is really on your heart.",
          screen: "/images/app/krishna-chat-exams.webp",
          alt: "A devotee tells Krishna AI they can't stop worrying about exams, and Krishna answers with Gita 2.47",
        },
        {
          key: "dailyPuja",
          eyebrow: "Daily Puja",
          title: "A sacred story every morning",
          body: "Stories from the Itihasas and Puranas, told in a few minutes. Then Daily Sadhana: puja, Gita, Krishna and meditation, one bead a day on your mala.",
          screen: "/images/app/home.webp",
          alt: "The app's home screen with today's story, The Cobbler and the Brahmana, and Today's Sadhana below it",
        },
        {
          key: "gita",
          eyebrow: "Bhagavad Gita",
          title: "The Gita, verse by verse",
          body: "All 18 chapters and 700 shlokas. Hear each one in Sanskrit, then Krishna explains what it means for your life today.",
          screen: "/images/app/gita-verse.webp",
          alt: "Shloka 2.47 in Devanagari on the Gita screen, with Krishna explaining its meaning",
        },
        {
          key: "dhyana",
          eyebrow: "Dhyana",
          title: "Breathe with intention",
          body: "Guided breath meditation to calm, reset and focus the mind, a few minutes at a time.",
          screen: "/images/app/dhyana-breath.webp",
          alt: "The Dhyana screen guiding a breath out, with a calm session timer",
        },
      ],
    },
    reviews: { eyebrow: "From the App Store and Google Play", title: "What devotees say" },
    privacy: {
      eyebrow: "Private by design",
      title: "What you say stays between you and Krishna",
      items: [
        { title: "Your voice is never saved", body: "We keep a written transcript so the conversation can continue. No audio is stored." },
        { title: "Your data is never sold", body: "We don't sell what you share, to anyone, ever." },
        { title: "Delete everything, anytime", body: "Delete your account in the app and your conversations go with it." },
      ],
      links: [
        { key: "howItWorks", label: "How Krishna AI works" },
        { key: "privacy", label: "Privacy policy" },
      ],
    },
    faq: { eyebrow: "Questions", title: "Before you begin", all: "All questions" },
    close: { title: "Your charioteer, always.", body: "Free on iPhone and Android, in English and Hindi." },
  },
  hi: {
    hero: {
      eyebrow: "कृष्ण AI · iPhone और Android पर मुफ़्त",
      title: "मन में जो भी हो, कृष्ण से बात कीजिए।",
      lede: "DivineSarathi एक मुफ़्त ऐप है जहाँ आप कृष्ण AI से आवाज़ या टेक्स्ट में, हिंदी या अंग्रेज़ी में बात करते हैं। वे सुनते हैं, और भगवद गीता की सीख से जवाब देते हैं।",
      screenFront: "/images/app/krishna-greet-hi.webp",
      screenBack: "/images/app/krishna-chat-exams.webp",
      altFront: "DivineSarathi ऐप में कृष्ण AI की स्क्रीन, जहाँ कृष्ण हिंदी में नमस्ते कहकर पूछते हैं कि आप कहानी सुनना चाहेंगे, कोई सीख या बस बात करना",
      altBack: "ऐप में एक बातचीत: कोई बताता है कि अगले हफ़्ते परीक्षा है, और कृष्ण गीता की एक पंक्ति से जवाब देते हैं",
    },
    why: {
      title: "बात करने से मन हल्का होता है। यह हम हमेशा से जानते हैं।",
      body: [
        "हज़ारों सालों से हमारी कथाओं, श्लोकों और प्रार्थनाओं ने लोगों को मुश्किल समय में संभाला है, और रोज़ के आम दिनों में भी।",
        "DivineSarathi उसी आस्था को एक आवाज़ देता है जिससे आप बात कर सकें। न उपदेश, न कोई राय। बस कृष्ण, जब भी आपको उनकी ज़रूरत हो।",
      ],
    },
    inside: {
      eyebrow: "ऐप के अंदर",
      title: "कुछ शांत मिनट बिताने के चार तरीक़े",
      items: [
        {
          key: "krishnaAi",
          eyebrow: "कृष्ण AI",
          title: "कुछ भी पूछिए। वे सुनते हैं, फिर जवाब देते हैं।",
          body: "बोलिए या लिखिए, हिंदी या अंग्रेज़ी में। कृष्ण किसी कथा या गीता के श्लोक से जवाब देते हैं, और पूछते हैं कि आपके मन में असल में क्या है।",
          screen: "/images/app/krishna-greet-hi.webp",
          alt: "कृष्ण AI की स्क्रीन, जहाँ कृष्ण हिंदी में बात शुरू करते हैं",
        },
        {
          key: "dailyPuja",
          eyebrow: "दैनिक पूजा",
          title: "हर सुबह एक पावन कथा",
          body: "इतिहास और पुराणों की कथाएँ, कुछ ही मिनटों में। फिर दैनिक साधना: पूजा, गीता, कृष्ण और ध्यान, हर दिन माला का एक मनका।",
          screen: "/images/app/home.webp",
          alt: "ऐप की होम स्क्रीन, आज की कथा और उसके नीचे आज की साधना",
        },
        {
          key: "gita",
          eyebrow: "भगवद गीता",
          title: "गीता, श्लोक-दर-श्लोक",
          body: "सभी 18 अध्याय और 700 श्लोक। हर श्लोक संस्कृत में सुनिए, फिर कृष्ण समझाते हैं कि आज आपकी ज़िंदगी में उसका क्या अर्थ है।",
          screen: "/images/app/gita-verse.webp",
          alt: "गीता स्क्रीन पर देवनागरी में श्लोक 2.47, और कृष्ण उसका अर्थ समझाते हुए",
        },
        {
          key: "dhyana",
          eyebrow: "ध्यान",
          title: "इरादे के साथ साँस लीजिए",
          body: "मन को शांत करने, फिर से संभलने और एकाग्र होने के लिए निर्देशित श्वास ध्यान, कुछ मिनट रोज़।",
          screen: "/images/app/dhyana-breath.webp",
          alt: "ध्यान स्क्रीन, जो साँस छोड़ने में मार्गदर्शन कर रही है",
        },
      ],
    },
    reviews: { eyebrow: "App Store और Google Play से", title: "भक्त क्या कहते हैं" },
    privacy: {
      eyebrow: "गोपनीयता पहले से",
      title: "आप जो कहते हैं, वह आपके और कृष्ण के बीच रहता है",
      items: [
        { title: "आपकी आवाज़ कभी सेव नहीं होती", body: "बातचीत आगे बढ़ सके, इसलिए हम लिखित रूप रखते हैं। कोई ऑडियो नहीं रखा जाता।" },
        { title: "आपका डेटा कभी बेचा नहीं जाता", body: "आप जो साझा करते हैं, हम उसे कभी किसी को नहीं बेचते।" },
        { title: "जब चाहें, सब कुछ डिलीट करें", body: "ऐप में अकाउंट डिलीट करें, आपकी बातचीत भी साथ में मिट जाती है।" },
      ],
      links: [
        { key: "howItWorks", label: "कृष्ण AI कैसे काम करता है" },
        { key: "privacy", label: "गोपनीयता नीति" },
      ],
    },
    faq: { eyebrow: "सवाल", title: "शुरू करने से पहले", all: "सभी सवाल" },
    close: { title: "सदा आपका सारथी।", body: "iPhone और Android पर मुफ़्त, हिंदी और अंग्रेज़ी में।" },
  },
};

/** Real reviews, quoted word for word from the stores. Play shows full names, so first name and initial. */
export const REVIEWS = [
  { quote: "I just felt peace, happy and calm. … Talking with Krishna even though it is AI I felt that I was really talking to Krishna ji.", name: "Ganga P.", store: "Google Play", date: "Oct 2026" },
  { quote: "This Krishna AI is just perfect for me to speak about my day, my fears and learn about Bhagavad Gita.", name: "mac chavan", store: "App Store", date: "Jun 2026" },
  { quote: "The stories, Gita learnings, and Krishna AI conversations feel very very simple, soothing, and meaningful.", name: "Naman G.", store: "Google Play", date: "May 2026" },
  { quote: "The best app to explore spirituality. I never realised Gita can be taught like this.", name: "Anitamanish92", store: "App Store", date: "Apr 2026" },
  { quote: "Sarathi Krishna AI is truly a beautiful support. It gives me peace, guidance and positive energy whenever I need it.", name: "Sakshi K.", store: "Google Play", date: "Aug 2026" },
  { quote: "it's wonderful application for current generation to connect in divine serenity and be closer to Lord Krishna I really recommend this app to be with all.", name: "Vijaykumar G.", store: "Google Play", date: "May 2026" },
] as const;
