import type { Faq } from "./faqs";
import type { Locale, RouteKey } from "@/lib/routes";

export type FeatureKey = "krishnaAi" | "gita" | "dailyPuja" | "dhyana";

export type FeatureCopy = {
  eyebrow: string;
  title: string;
  /** Answers "what is this" on its own, for search and AI answers. */
  lede: string;
  hero: { src: string; alt: string };
  points: { title: string; body: string }[];
  detail: { title: string; body: string; list: string[]; listTitle: string; src: string; alt: string };
  note?: { text: string; link: { key: RouteKey; label: string } };
  faqs: Faq[];
  related: { title: string };
  close: { title: string; body: string };
};

export const FEATURE_ICONS: Record<FeatureKey, "feather" | "book" | "diya" | "lotus"> = {
  krishnaAi: "feather",
  gita: "book",
  dailyPuja: "diya",
  dhyana: "lotus",
};

export const FEATURES: Record<FeatureKey, Record<Locale, FeatureCopy>> = {
  krishnaAi: {
    en: {
      eyebrow: "Krishna AI",
      title: "Talk to Krishna about anything on your mind",
      lede: "Krishna AI is a voice in the DivineSarathi app that you can talk to like a wise friend, by voice or text, in English or Hindi. He listens, answers with stories and verses from the Bhagavad Gita, and asks what is really on your heart.",
      hero: { src: "/images/app/krishna-greet-en.webp", alt: "Krishna AI greeting you in the app: Namaste, would you like a story, a teaching, or just to talk?" },
      points: [
        { title: "Speak or type", body: "Tap and talk, and Krishna answers out loud. Somewhere quiet? Type instead." },
        { title: "English or Hindi", body: "Speak in the language you think in. Change it any time in Profile." },
        { title: "Answers from the Gita", body: "Krishna draws on the Gita and stories from the Mahabharata and Puranas, in plain words." },
        { title: "He asks back", body: "Instead of a lecture, a question, so you can think it through yourself." },
      ],
      detail: {
        title: "A real conversation, not a search box",
        body: "Say what happened today. Krishna might take a breath with you first, share a line Arjuna once heard on the battlefield, and then ask what feels heaviest. You stay in charge of what you take from it.",
        listTitle: "Things people ask Krishna",
        list: [
          "My exams are next week and I can't stop worrying.",
          "How do I stop comparing my life to everyone else's?",
          "What does it mean to work without attachment to results?",
          "Tell me a story about patience.",
          "What does Bhagavad Gita 2.47 mean for me?",
        ],
        src: "/images/app/krishna-chat-exams.webp",
        alt: "A devotee writes that exams are next week, and Krishna answers with a breath, Gita 2.47 and a question back",
      },
      note: {
        text: "Krishna AI is an AI inspired by Krishna's teachings. It is not Krishna, a guru or a doctor, and it says so.",
        link: { key: "howItWorks", label: "How Krishna AI works" },
      },
      faqs: [
        { id: "krishna-ai-free", q: "Is Krishna AI free?", a: "Yes. The app is free to download, and text chat with Krishna is free for everyone." },
        { id: "krishna-ai-hindi", q: "Can I talk to Krishna AI in Hindi?", a: "Yes. Krishna AI speaks English and Hindi. Choose your language in the app and change it any time in Profile." },
        { id: "krishna-ai-real", q: "Is Krishna AI really Krishna?", a: "No. It is an AI inspired by Krishna and grounded in the Bhagavad Gita. It does not replace scripture, tradition or your teachers." },
        { id: "krishna-ai-private", q: "Are my conversations with Krishna AI private?", a: "Yes. We don't save audio of your voice. We keep a written transcript so the conversation can continue, never share it publicly or sell it, and delete it when you delete your account." },
      ],
      related: { title: "More in the app" },
      close: { title: "Whatever is on your mind, Krishna is listening.", body: "Free on iPhone and Android, in English and Hindi." },
    },
    hi: {
      eyebrow: "कृष्ण AI",
      title: "मन में जो भी हो, कृष्ण से बात कीजिए",
      lede: "कृष्ण AI, DivineSarathi ऐप में एक आवाज़ है जिससे आप एक समझदार दोस्त की तरह बात कर सकते हैं, आवाज़ में या लिखकर, हिंदी या अंग्रेज़ी में। वे सुनते हैं, भगवद गीता की कथाओं और श्लोकों से जवाब देते हैं, और पूछते हैं कि आपके मन में असल में क्या है।",
      hero: { src: "/images/app/krishna-greet-hi.webp", alt: "ऐप में कृष्ण AI हिंदी में नमस्ते कहकर पूछते हैं कि आप कहानी सुनना चाहेंगे, कोई सीख, या बस बात करना" },
      points: [
        { title: "बोलिए या लिखिए", body: "टैप करके बोलिए, कृष्ण आवाज़ में जवाब देते हैं। कहीं शांति चाहिए? लिखकर पूछिए।" },
        { title: "हिंदी या अंग्रेज़ी", body: "जिस भाषा में आप सोचते हैं, उसी में बोलिए। Profile में कभी भी बदलिए।" },
        { title: "गीता से जवाब", body: "कृष्ण गीता और महाभारत व पुराणों की कथाओं से, सरल शब्दों में जवाब देते हैं।" },
        { title: "वे भी पूछते हैं", body: "उपदेश की जगह एक सवाल, ताकि आप ख़ुद सोच सकें।" },
      ],
      detail: {
        title: "सच्ची बातचीत, कोई सर्च बॉक्स नहीं",
        body: "बताइए आज क्या हुआ। कृष्ण शायद पहले आपके साथ एक गहरी साँस लें, फिर वह पंक्ति सुनाएँ जो कभी अर्जुन ने रणभूमि में सुनी थी, और फिर पूछें कि सबसे भारी क्या लग रहा है। आप उसमें से क्या लेते हैं, यह आप तय करते हैं।",
        listTitle: "लोग कृष्ण से क्या पूछते हैं",
        list: [
          "अगले हफ़्ते परीक्षा है और चिंता रुक नहीं रही।",
          "दूसरों से अपनी तुलना करना कैसे बंद करूँ?",
          "फल की चिंता किए बिना कर्म करने का क्या मतलब है?",
          "धैर्य पर कोई कहानी सुनाइए।",
          "भगवद गीता 2.47 का मेरे लिए क्या अर्थ है?",
        ],
        src: "/images/app/krishna-chat-exams.webp",
        alt: "कोई लिखता है कि अगले हफ़्ते परीक्षा है, और कृष्ण एक साँस, गीता 2.47 और एक सवाल के साथ जवाब देते हैं",
      },
      note: {
        text: "कृष्ण AI, कृष्ण की सीख से प्रेरित एक AI है। ये कृष्ण नहीं हैं, न कोई गुरु या डॉक्टर, और ऐप यह साफ़ बताता है।",
        link: { key: "howItWorks", label: "कृष्ण AI कैसे काम करता है" },
      },
      faqs: [
        { id: "krishna-ai-free", q: "क्या कृष्ण AI मुफ़्त है?", a: "हाँ। ऐप डाउनलोड करना मुफ़्त है, और कृष्ण से टेक्स्ट चैट सबके लिए मुफ़्त है।" },
        { id: "krishna-ai-hindi", q: "क्या कृष्ण AI से हिंदी में बात कर सकते हैं?", a: "हाँ। कृष्ण AI हिंदी और अंग्रेज़ी बोलते हैं। ऐप में अपनी भाषा चुनें और Profile में कभी भी बदलें।" },
        { id: "krishna-ai-real", q: "क्या कृष्ण AI सच में कृष्ण हैं?", a: "नहीं। यह कृष्ण से प्रेरित और भगवद गीता पर आधारित एक AI है। यह शास्त्र, परंपरा या आपके गुरुओं की जगह नहीं लेता।" },
        { id: "krishna-ai-private", q: "क्या कृष्ण AI से मेरी बातचीत निजी रहती है?", a: "हाँ। हम आपकी आवाज़ की रिकॉर्डिंग सेव नहीं करते। बातचीत आगे बढ़ सके, इसलिए लिखित रूप रखते हैं, उसे न सार्वजनिक करते हैं न बेचते हैं, और अकाउंट डिलीट करने पर मिटा देते हैं।" },
      ],
      related: { title: "ऐप में और भी" },
      close: { title: "मन में जो भी हो, कृष्ण सुन रहे हैं।", body: "iPhone और Android पर मुफ़्त, हिंदी और अंग्रेज़ी में।" },
    },
  },

  gita: {
    en: {
      eyebrow: "Bhagavad Gita",
      title: "The Bhagavad Gita, verse by verse, with meaning",
      lede: "The DivineSarathi app takes you through all 18 chapters and 700 shlokas of the Bhagavad Gita. Hear each verse recited in Sanskrit, read it in Devanagari, then Krishna explains what it means for your life today.",
      hero: { src: "/images/app/gita-verse.webp", alt: "Bhagavad Gita 2.47 on screen in Devanagari, with Krishna explaining it in plain words" },
      points: [
        { title: "All 700 shlokas", body: "Every chapter, from Arjuna Vishada Yoga to Moksha Sannyasa Yoga, in order." },
        { title: "Sanskrit, then meaning", body: "Each shloka recited and shown in Devanagari, then explained in plain words." },
        { title: "Two a day", body: "A gentle pace: two shlokas a day as part of your Daily Sadhana." },
        { title: "Gita for Daily Life", body: "Short lessons that take a teaching and set it beside an ordinary day." },
      ],
      detail: {
        title: "Pick up exactly where you left off",
        body: "Your journey shows how many chapters you have finished and how many shlokas you have heard. Open the Gita tab and the next verse is waiting.",
        listTitle: "What each verse gives you",
        list: [
          "The shloka in Devanagari, recited in Sanskrit",
          "Its plain meaning and the moment in the story",
          "What it can mean in your life today",
        ],
        src: "/images/app/gita-list.webp",
        alt: "Your Gita journey: chapters complete, shlokas heard, and the list of 18 chapters",
      },
      note: {
        text: "Found a meaning that feels wrong? Tell us and we will check it against the text.",
        link: { key: "sources", label: "Our sources" },
      },
      faqs: [
        { id: "gita-verses", q: "How many chapters and verses does the Bhagavad Gita have?", a: "The Bhagavad Gita has 18 chapters and 700 verses (shlokas). The DivineSarathi app covers all of them, one verse at a time." },
        { id: "gita-sanskrit", q: "Do I need to know Sanskrit?", a: "No. Each shloka is recited in Sanskrit and shown in Devanagari, then explained in plain English or Hindi." },
        { id: "gita-free", q: "Is the Bhagavad Gita in the app free?", a: "Yes. All 18 chapters are free for everyone." },
        { id: "gita-hindi", q: "Can I learn the Gita in Hindi?", a: "Yes. Set the app to Hindi and Krishna explains each verse in Hindi." },
      ],
      related: { title: "More in the app" },
      close: { title: "Two shlokas a day. All 700 in time.", body: "Free on iPhone and Android, in English and Hindi." },
    },
    hi: {
      eyebrow: "भगवद गीता",
      title: "भगवद गीता, श्लोक-दर-श्लोक, अर्थ के साथ",
      lede: "DivineSarathi ऐप आपको भगवद गीता के सभी 18 अध्याय और 700 श्लोकों से गुज़ारता है। हर श्लोक संस्कृत में सुनिए, देवनागरी में पढ़िए, फिर कृष्ण समझाते हैं कि आज आपकी ज़िंदगी में उसका क्या अर्थ है।",
      hero: { src: "/images/app/gita-verse.webp", alt: "स्क्रीन पर देवनागरी में भगवद गीता 2.47, और कृष्ण सरल शब्दों में अर्थ समझाते हुए" },
      points: [
        { title: "सभी 700 श्लोक", body: "हर अध्याय, अर्जुन विषाद योग से मोक्ष संन्यास योग तक, क्रम से।" },
        { title: "पहले संस्कृत, फिर अर्थ", body: "हर श्लोक का पाठ और देवनागरी में पाठ्य, फिर सरल शब्दों में अर्थ।" },
        { title: "रोज़ दो श्लोक", body: "धीमी, सहज गति: दैनिक साधना में रोज़ दो श्लोक।" },
        { title: "रोज़ की ज़िंदगी के लिए गीता", body: "छोटे पाठ जो गीता की एक सीख को आम दिन के साथ रखते हैं।" },
      ],
      detail: {
        title: "जहाँ छोड़ा था, वहीं से शुरू करें",
        body: "आपकी यात्रा दिखाती है कि कितने अध्याय पूरे हुए और कितने श्लोक सुने। गीता टैब खोलिए, अगला श्लोक आपका इंतज़ार कर रहा है।",
        listTitle: "हर श्लोक में आपको मिलता है",
        list: [
          "देवनागरी में श्लोक और उसका संस्कृत पाठ",
          "उसका सीधा अर्थ और कथा में वह पल",
          "आज आपकी ज़िंदगी में उसका क्या अर्थ हो सकता है",
        ],
        src: "/images/app/gita-list.webp",
        alt: "आपकी गीता यात्रा: पूरे हुए अध्याय, सुने गए श्लोक, और 18 अध्यायों की सूची",
      },
      note: {
        text: "किसी श्लोक का अर्थ ग़लत लगे? हमें बताइए, हम मूल पाठ से मिलाकर जाँचेंगे।",
        link: { key: "sources", label: "हमारे स्रोत" },
      },
      faqs: [
        { id: "gita-verses", q: "भगवद गीता में कितने अध्याय और श्लोक हैं?", a: "भगवद गीता में 18 अध्याय और 700 श्लोक हैं। DivineSarathi ऐप इन सबको एक-एक श्लोक करके सिखाता है।" },
        { id: "gita-sanskrit", q: "क्या संस्कृत आना ज़रूरी है?", a: "नहीं। हर श्लोक संस्कृत में सुनाया और देवनागरी में दिखाया जाता है, फिर सरल हिंदी या अंग्रेज़ी में समझाया जाता है।" },
        { id: "gita-free", q: "क्या ऐप में भगवद गीता मुफ़्त है?", a: "हाँ। सभी 18 अध्याय सबके लिए मुफ़्त हैं।" },
        { id: "gita-hindi", q: "क्या गीता हिंदी में सीख सकते हैं?", a: "हाँ। ऐप की भाषा हिंदी कीजिए, कृष्ण हर श्लोक हिंदी में समझाएँगे।" },
      ],
      related: { title: "ऐप में और भी" },
      close: { title: "रोज़ दो श्लोक। समय के साथ सभी 700।", body: "iPhone और Android पर मुफ़्त, हिंदी और अंग्रेज़ी में।" },
    },
  },

  dailyPuja: {
    en: {
      eyebrow: "Daily Puja",
      title: "A sacred story every morning, and a bead on your mala",
      lede: "Daily Puja in the DivineSarathi app is a short story from the Itihasas and Puranas each morning, told in a few minutes. Then Daily Sadhana: hear the story, two Gita shlokas, a minute with Krishna and a few minutes of stillness.",
      hero: { src: "/images/app/home.webp", alt: "The app's home screen: today's story, The Cobbler and the Brahmana, with a Play today's story button" },
      points: [
        { title: "A new story each day", body: "From the Mahabharata, the Ramayana and the Puranas, told simply." },
        { title: "A few minutes", body: "Short enough for your morning chai, deep enough to carry through the day." },
        { title: "Daily Sadhana", body: "Puja, Gita, Krishna and meditation. The story comes first." },
        { title: "Your mala", body: "Each day of sadhana threads a bead. The week shows as a string of beads, with no guilt." },
      ],
      detail: {
        title: "Four small practices that add up",
        body: "Today's Sadhana sits under the story on your home screen. Do them in any order through the day.",
        listTitle: "Today's Sadhana",
        list: [
          "Puja: listen to today's story",
          "Gita: two shlokas today",
          "Krishna: talk with Krishna for a minute",
          "Meditation: at least three minutes of stillness",
        ],
        src: "/images/app/sadhana.webp",
        alt: "Today's Sadhana: Puja, Gita, Krishna and Meditation, with a week of mala beads",
      },
      faqs: [
        { id: "puja-what", q: "What is Daily Puja in DivineSarathi?", a: "A short story from the Itihasas and Puranas each morning, told in a few minutes, followed by Daily Sadhana." },
        { id: "puja-sadhana", q: "What is Daily Sadhana?", a: "Four small practices for the day: listen to the story, hear two Gita shlokas, talk with Krishna for a minute and meditate for at least three minutes." },
        { id: "puja-free", q: "Is the daily story free?", a: "Yes. A new story is free for everyone every day." },
      ],
      related: { title: "More in the app" },
      close: { title: "Begin tomorrow with a story.", body: "Free on iPhone and Android, in English and Hindi." },
    },
    hi: {
      eyebrow: "दैनिक पूजा",
      title: "हर सुबह एक पावन कथा, और माला में एक मनका",
      lede: "DivineSarathi ऐप में दैनिक पूजा हर सुबह इतिहास और पुराणों की एक छोटी कथा है, कुछ ही मिनटों में। फिर दैनिक साधना: कथा सुनिए, गीता के दो श्लोक, कृष्ण के साथ एक मिनट और कुछ मिनट का ध्यान।",
      hero: { src: "/images/app/home.webp", alt: "ऐप की होम स्क्रीन: आज की कथा और कथा सुनने का बटन" },
      points: [
        { title: "रोज़ नई कथा", body: "महाभारत, रामायण और पुराणों से, सरल शब्दों में।" },
        { title: "कुछ ही मिनट", body: "सुबह की चाय जितनी छोटी, पूरे दिन साथ रहने जितनी गहरी।" },
        { title: "दैनिक साधना", body: "पूजा, गीता, कृष्ण और ध्यान। पहले कथा।" },
        { title: "आपकी माला", body: "साधना का हर दिन एक मनका पिरोता है। हफ़्ता मनकों की एक लड़ी की तरह दिखता है, बिना किसी अपराध-बोध के।" },
      ],
      detail: {
        title: "चार छोटे अभ्यास, जो मिलकर बड़े बनते हैं",
        body: "आज की साधना होम स्क्रीन पर कथा के ठीक नीचे है। दिन भर में किसी भी क्रम में कीजिए।",
        listTitle: "आज की साधना",
        list: [
          "पूजा: आज की कथा सुनिए",
          "गीता: आज दो श्लोक",
          "कृष्ण: एक मिनट कृष्ण से बात",
          "ध्यान: कम से कम तीन मिनट शांति",
        ],
        src: "/images/app/sadhana.webp",
        alt: "आज की साधना: पूजा, गीता, कृष्ण और ध्यान, साथ में हफ़्ते भर के माला के मनके",
      },
      faqs: [
        { id: "puja-what", q: "DivineSarathi में दैनिक पूजा क्या है?", a: "हर सुबह इतिहास और पुराणों की एक छोटी कथा, कुछ ही मिनटों में, और उसके बाद दैनिक साधना।" },
        { id: "puja-sadhana", q: "दैनिक साधना क्या है?", a: "दिन के लिए चार छोटे अभ्यास: कथा सुनना, गीता के दो श्लोक, एक मिनट कृष्ण से बात और कम से कम तीन मिनट ध्यान।" },
        { id: "puja-free", q: "क्या रोज़ की कथा मुफ़्त है?", a: "हाँ। हर दिन एक नई कथा सबके लिए मुफ़्त है।" },
      ],
      related: { title: "ऐप में और भी" },
      close: { title: "कल की शुरुआत एक कथा से कीजिए।", body: "iPhone और Android पर मुफ़्त, हिंदी और अंग्रेज़ी में।" },
    },
  },

  dhyana: {
    en: {
      eyebrow: "Dhyana",
      title: "Guided breath meditation, a few minutes at a time",
      lede: "Dhyana in the DivineSarathi app is guided breath meditation to calm, reset and focus the mind. Choose a practice and a length from 5 to 20 minutes, or keep it open, and follow the breath on screen.",
      hero: { src: "/images/app/dhyana-breath.webp", alt: "A Dhyana session guiding a long breath out, over a calm sea" },
      points: [
        { title: "Follow the breath", body: "A circle on screen guides each inhale and exhale, so you never have to count." },
        { title: "Choose your length", body: "5, 10, 15 or 20 minutes, or an open session that ends when you do." },
        { title: "Practices with a purpose", body: "Calm, reset or focus. Extended Exhale, for example, breathes in for four and out for six." },
        { title: "Part of your sadhana", body: "Three minutes counts toward today's bead on your mala." },
      ],
      detail: {
        title: "Start in one tap",
        body: "Pick a practice, read one line about what it does, set a length and begin. The screen stays calm and nothing asks for your attention.",
        listTitle: "Inside a practice",
        list: [
          "A short note on what the practice is for",
          "Inhale and exhale timings shown before you start",
          "A session length you choose",
          "A gentle guide on screen as you breathe",
        ],
        src: "/images/app/dhyana-setup.webp",
        alt: "Setting up the Extended Exhale practice: inhale 4 seconds, exhale 6 seconds, session length 10 minutes",
      },
      faqs: [
        { id: "dhyana-what", q: "What is Dhyana in DivineSarathi?", a: "Guided breath meditation in the app. Choose a practice and a length, then follow the breath on screen." },
        { id: "dhyana-length", q: "How long is a session?", a: "You choose 5, 10, 15 or 20 minutes, or an open session." },
        { id: "dhyana-free", q: "Is meditation free?", a: "Yes. Dhyana is free for everyone." },
      ],
      related: { title: "More in the app" },
      close: { title: "Three quiet minutes is enough to begin.", body: "Free on iPhone and Android, in English and Hindi." },
    },
    hi: {
      eyebrow: "ध्यान",
      title: "निर्देशित श्वास ध्यान, कुछ मिनट रोज़",
      lede: "DivineSarathi ऐप में ध्यान, मन को शांत करने, फिर से संभलने और एकाग्र होने के लिए निर्देशित श्वास ध्यान है। कोई अभ्यास चुनिए, 5 से 20 मिनट या खुला समय, और स्क्रीन पर साँस के साथ चलिए।",
      hero: { src: "/images/app/dhyana-breath.webp", alt: "ध्यान का एक सत्र, शांत समुद्र के ऊपर लंबी साँस छोड़ने का मार्गदर्शन" },
      points: [
        { title: "साँस के साथ चलिए", body: "स्क्रीन पर एक घेरा हर साँस लेने और छोड़ने में साथ देता है, गिनने की ज़रूरत नहीं।" },
        { title: "समय आप चुनिए", body: "5, 10, 15 या 20 मिनट, या खुला सत्र जो आपके रुकने पर ख़त्म हो।" },
        { title: "हर अभ्यास का एक मक़सद", body: "शांति, नई शुरुआत या एकाग्रता। जैसे Extended Exhale में चार तक साँस लें, छह तक छोड़ें।" },
        { title: "आपकी साधना का हिस्सा", body: "तीन मिनट का ध्यान आज की माला के मनके में गिना जाता है।" },
      ],
      detail: {
        title: "एक टैप में शुरू",
        body: "अभ्यास चुनिए, उसके बारे में एक पंक्ति पढ़िए, समय तय कीजिए और शुरू कीजिए। स्क्रीन शांत रहती है, कुछ भी आपका ध्यान नहीं खींचता।",
        listTitle: "एक अभ्यास के अंदर",
        list: [
          "अभ्यास किस लिए है, इस पर छोटी-सी बात",
          "शुरू करने से पहले साँस लेने और छोड़ने का समय",
          "आपका चुना हुआ सत्र का समय",
          "साँस लेते समय स्क्रीन पर कोमल मार्गदर्शन",
        ],
        src: "/images/app/dhyana-setup.webp",
        alt: "Extended Exhale अभ्यास की तैयारी: 4 सेकंड साँस लें, 6 सेकंड छोड़ें, सत्र 10 मिनट",
      },
      faqs: [
        { id: "dhyana-what", q: "DivineSarathi में ध्यान क्या है?", a: "ऐप में निर्देशित श्वास ध्यान। अभ्यास और समय चुनिए, फिर स्क्रीन पर साँस के साथ चलिए।" },
        { id: "dhyana-length", q: "एक सत्र कितना लंबा होता है?", a: "आप 5, 10, 15 या 20 मिनट चुन सकते हैं, या खुला सत्र।" },
        { id: "dhyana-free", q: "क्या ध्यान मुफ़्त है?", a: "हाँ। ध्यान सबके लिए मुफ़्त है।" },
      ],
      related: { title: "ऐप में और भी" },
      close: { title: "शुरू करने के लिए तीन शांत मिनट काफ़ी हैं।", body: "iPhone और Android पर मुफ़्त, हिंदी और अंग्रेज़ी में।" },
    },
  },
};
