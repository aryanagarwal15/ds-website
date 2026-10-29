import type { Locale, RouteKey } from "@/lib/routes";

export const ABOUT: Record<Locale, {
  eyebrow: string;
  title: string;
  lede: string;
  story: { title: string; body: string[] };
  principles: { title: string; items: { title: string; body: string }[] };
  founders: { title: string; lede: string; people: { name: string; role: string; bio: string; linkedin?: string }[] };
  contact: { title: string; body: string; cta: string };
}> = {
  en: {
    eyebrow: "About us",
    title: "We built the companion we wished we had",
    lede: "DivineSarathi is a free app where people talk with Krishna AI and live the Bhagavad Gita a few minutes a day. It is built in India by two friends who grew up with these teachings.",
    story: {
      title: "Why DivineSarathi",
      body: [
        "Many of us want to look inward but don't know where to begin, or whom to trust. In India, faith has always been where people turned when life got heavy, long before anyone had a word for it.",
        "We wanted that faith to be close at hand: a voice you can talk to at night when something is on your mind, a story in the morning, a verse that meets the day you are actually having.",
        "So we built a sarathi, a charioteer, the role Krishna played for Arjuna. Not a guru and not a replacement for scripture, but a companion that walks beside you and points back to the Gita.",
      ],
    },
    principles: {
      title: "What we hold to",
      items: [
        { title: "Rooted in scripture", body: "Answers come from the Gita and our sacred texts, and we correct mistakes when you point them out." },
        { title: "Private by design", body: "No audio is saved, nothing is sold, and you can delete everything." },
        { title: "Calm by default", body: "No countdowns, no guilt, no noise. A few quiet minutes is the whole idea." },
        { title: "Honest about AI", body: "Krishna AI is an AI, and we say so plainly." },
      ],
    },
    founders: {
      title: "The founders",
      lede: "Mohith and Aryan have been friends for more than a decade. Both studied engineering at BITS Pilani.",
      people: [
        {
          name: "Mohith Mahadevan",
          role: "Co-founder",
          bio: "Mohith studied engineering at BITS Pilani and completed his MBA at London Business School as a BK Birla Scholar. Before DivineSarathi he worked in the CEO's office at Navi, helping scale its lending business from zero to over a billion dollars in assets.",
        },
        {
          name: "Aryan Agarwal",
          role: "Co-founder",
          bio: "Aryan studied engineering at BITS Pilani and is co-founder and CTO of Yenmo, a Y Combinator backed fintech company. He has spent years building technology products and teams from zero to scale.",
        },
      ],
    },
    contact: { title: "Say hello", body: "We read every message, from feedback on a verse to an idea for the app.", cta: "Write to us" },
  },
  hi: {
    eyebrow: "हमारे बारे में",
    title: "हमने वह साथी बनाया जिसकी हमें ख़ुद तलाश थी",
    lede: "DivineSarathi एक मुफ़्त ऐप है जहाँ लोग कृष्ण AI से बात करते हैं और रोज़ कुछ मिनट भगवद गीता को जीते हैं। इसे भारत में दो दोस्तों ने बनाया है, जो इन्हीं शिक्षाओं के साथ बड़े हुए।",
    story: {
      title: "DivineSarathi क्यों",
      body: [
        "हम में से बहुत लोग अपने भीतर झाँकना चाहते हैं, पर समझ नहीं आता कहाँ से शुरू करें, किस पर भरोसा करें। भारत में जब भी ज़िंदगी भारी हुई, लोग आस्था की ओर ही मुड़े, उसके लिए कोई शब्द बनने से बहुत पहले।",
        "हम चाहते थे कि वह आस्था हमेशा पास रहे: रात को जब मन में कुछ हो तो बात करने के लिए एक आवाज़, सुबह एक कथा, और एक ऐसा श्लोक जो आपके आज के दिन से मेल खाए।",
        "इसलिए हमने एक सारथी बनाया, वही भूमिका जो कृष्ण ने अर्जुन के लिए निभाई। कोई गुरु नहीं, न शास्त्र की जगह, बल्कि एक साथी जो आपके साथ चलता है और बार-बार गीता की ओर इशारा करता है।",
      ],
    },
    principles: {
      title: "हम किन बातों पर टिके हैं",
      items: [
        { title: "शास्त्र पर आधारित", body: "जवाब गीता और हमारे पावन ग्रंथों से आते हैं, और आप ग़लती बताएँ तो हम उसे सुधारते हैं।" },
        { title: "गोपनीयता पहले से", body: "कोई ऑडियो सेव नहीं होता, कुछ भी बेचा नहीं जाता, और आप सब कुछ डिलीट कर सकते हैं।" },
        { title: "स्वभाव से शांत", body: "न उल्टी गिनती, न अपराध-बोध, न शोर। कुछ शांत मिनट, बस यही मक़सद है।" },
        { title: "AI के बारे में ईमानदार", body: "कृष्ण AI एक AI है, और हम यह साफ़ कहते हैं।" },
      ],
    },
    founders: {
      title: "संस्थापक",
      lede: "मोहित और आर्यन दस साल से ज़्यादा समय से दोस्त हैं। दोनों ने BITS पिलानी से इंजीनियरिंग की।",
      people: [
        {
          name: "मोहित महादेवन",
          role: "सह-संस्थापक",
          bio: "मोहित ने BITS पिलानी से इंजीनियरिंग की और BK बिड़ला स्कॉलर के रूप में लंदन बिज़नेस स्कूल से MBA किया। DivineSarathi से पहले उन्होंने Navi में CEO ऑफ़िस में काम किया, जहाँ लेंडिंग बिज़नेस को शून्य से एक अरब डॉलर से ज़्यादा की संपत्ति तक पहुँचाने में मदद की।",
        },
        {
          name: "आर्यन अग्रवाल",
          role: "सह-संस्थापक",
          bio: "आर्यन ने BITS पिलानी से इंजीनियरिंग की और Yenmo के सह-संस्थापक और CTO हैं, जो Y Combinator समर्थित फ़िनटेक कंपनी है। उन्होंने कई साल तकनीकी प्रोडक्ट और टीमें शून्य से बड़ी बनाने में लगाए हैं।",
        },
      ],
    },
    contact: { title: "हमसे बात करें", body: "किसी श्लोक पर राय हो या ऐप के लिए कोई सुझाव, हम हर संदेश पढ़ते हैं।", cta: "हमें लिखें" },
  },
};

export const SUPPORT: Record<Locale, {
  eyebrow: string;
  title: string;
  lede: string;
  help: { title: string; items: { key: RouteKey; title: string; body: string }[] };
  stores: { title: string; body: string; apple: string; google: string };
  form: { title: string; body: string };
}> = {
  en: {
    eyebrow: "Support",
    title: "How can we help?",
    lede: "Write to us at founders@divinesarathi.in or use the form below, and we will reply by email. Most answers are also one tap away here.",
    help: {
      title: "Quick answers",
      items: [
        { key: "faqs", title: "Common questions", body: "What is free, languages, what Krishna AI does and does not do." },
        { key: "refunds", title: "Cancel or get a refund", body: "Subscriptions are managed by Apple and Google. Here is how." },
        { key: "deleteAccount", title: "Delete your account", body: "In the app or by asking us, and what we delete." },
        { key: "privacy", title: "Your privacy", body: "What we keep, why, and your rights." },
      ],
    },
    stores: {
      title: "Payment questions",
      body: "Apple and Google handle all payments, so billing questions go to them.",
      apple: "Apple purchase help",
      google: "Google Play purchase help",
    },
    form: { title: "Write to us", body: "Tell us what happened, and which phone you use if something isn't working." },
  },
  hi: {
    eyebrow: "सहायता",
    title: "हम आपकी कैसे मदद करें?",
    lede: "founders@divinesarathi.in पर लिखें या नीचे का फ़ॉर्म भरें, हम ईमेल से जवाब देंगे। ज़्यादातर जवाब यहीं एक टैप पर भी मिल जाते हैं।",
    help: {
      title: "झटपट जवाब",
      items: [
        { key: "faqs", title: "आम सवाल", body: "क्या मुफ़्त है, भाषाएँ, कृष्ण AI क्या करता है और क्या नहीं।" },
        { key: "refunds", title: "सब्सक्रिप्शन रद्द करें या रिफ़ंड लें", body: "सब्सक्रिप्शन Apple और Google संभालते हैं। ऐसे करें।" },
        { key: "deleteAccount", title: "अकाउंट डिलीट करें", body: "ऐप में या हमसे कहकर, और हम क्या मिटाते हैं।" },
        { key: "privacy", title: "आपकी गोपनीयता", body: "हम क्या रखते हैं, क्यों, और आपके अधिकार।" },
      ],
    },
    stores: {
      title: "पेमेंट से जुड़े सवाल",
      body: "सारे पेमेंट Apple और Google संभालते हैं, इसलिए बिलिंग के सवाल उन्हीं के पास जाते हैं।",
      apple: "Apple पर ख़रीदारी में मदद",
      google: "Google Play पर ख़रीदारी में मदद",
    },
    form: { title: "हमें लिखें", body: "बताइए क्या हुआ, और अगर कुछ काम नहीं कर रहा तो आप कौन-सा फ़ोन इस्तेमाल करते हैं।" },
  },
};
