import type { Block } from "./types";
import type { Faq } from "./faqs";
import type { RouteKey } from "@/lib/routes";
import { FREE } from "@/lib/site";

/**
 * Guide pages: answer one search fully, then send people to the stores.
 * Marketing only. They describe what the app does; they never become a web
 * version of it (no verse reader, no chat).
 */
export type GuideKey = "gitaAi" | "chooseGitaApp" | "seBaat";

export type GuideCopy = {
  eyebrow: string;
  title: string;
  /** Answers the search on its own, for results and AI answers. */
  lede: string;
  hero: { src: string; alt: string };
  blocks: Block[];
  faqs: Faq[];
  /** Pages to read next, shown above the closing panel. */
  reads: { key: RouteKey; label: string }[];
  close: { title: string; body: string };
};

export const GUIDES: Record<GuideKey, { en?: GuideCopy; hi?: GuideCopy }> = {
  gitaAi: {
    en: {
      eyebrow: "Gita AI",
      title: "Ask the Bhagavad Gita, and hear Krishna answer",
      lede: "Gita AI in the DivineSarathi app lets you ask the Bhagavad Gita a question by voice or text, in English or Hindi. Krishna AI answers in plain words, with the verse or story behind the answer, and often asks a question back so you can think it through.",
      hero: { src: "/images/app/krishna-chat-exams.webp", alt: "A devotee writes that exams are next week, and Krishna AI answers with a breath, Gita 2.47 and a question back" },
      blocks: [
        { h2: "Looking for a Gita GPT?" },
        {
          p: "Many people search for a “Gita GPT” or a “Krishna GPT” when what they want is simple: to ask the Gita about their own life and get a real answer back. In DivineSarathi that is Krishna AI. You talk, it listens, and it answers from the Bhagavad Gita and the stories around it, in English or Hindi.",
        },
        { h2: "How asking the Gita works" },
        {
          ol: [
            "Open the app and tap Krishna.",
            "Say what is on your mind, or type it. Hindi and English both work.",
            "Krishna AI answers out loud or in text, usually with a verse such as Gita 2.47, what it means, and a question back to you.",
            "Keep going as long as you like. The conversation picks up where you left off next time.",
          ],
        },
        { h2: "What people ask the Gita" },
        {
          ul: [
            "I keep worrying about results. What does the Gita say about that?",
            "How do I do my duty when my heart isn't in it?",
            "What does karmanye vadhikaraste mean for my exams?",
            "How do I stay calm when someone at home is angry with me?",
            "Tell me the story of Arjuna on the battlefield, simply.",
          ],
        },
        { h2: "What it will not do" },
        {
          ul: [
            "**It is not Krishna.** It is an AI that speaks in Krishna's voice, and it says so.",
            "**No predictions.** Ask “will I pass?” and it helps you prepare and steady your mind instead.",
            "**No medical, legal or financial advice,** and no astrological remedies.",
            "**It does not replace** scripture, your traditions or your teachers. Use it to reflect, then use your own judgement.",
          ],
        },
        { h2: "Where the answers come from" },
        {
          p: "Answers draw on the Bhagavad Gita, with stories from the Mahabharata, the Ramayana and the Puranas. Like any AI it can get something wrong, so if an answer feels untrue to the Gita, tell us and we will check it. [Our sources](/sources) explains how verse meanings are prepared, and [How Krishna AI works](/how-krishna-ai-works) explains what is kept and what is not.",
        },
        { h2: "Asking the Gita, or reading it" },
        {
          p: "You can do both in the same app. The [Bhagavad Gita](/bhagavad-gita) section takes you through all 18 chapters and 700 shlokas, each recited in Sanskrit and explained in plain words. Many people read two shlokas a day and bring what stays with them to Krishna AI.",
        },
      ],
      faqs: [
        { id: "gita-ai-what", q: "What is Gita AI?", a: "It is a way to ask the Bhagavad Gita about your own life and hear an answer. In the DivineSarathi app it is called Krishna AI: you speak or type, and it answers with the verse or story behind its answer." },
        { id: "gita-ai-gpt", q: "Is there a Gita GPT app?", a: "If by Gita GPT you mean an app where you ask the Gita a question and get an answer back, DivineSarathi does that through Krishna AI, by voice or text, in English or Hindi." },
        { id: "gita-ai-free", q: "Is Gita AI free?", a: "Yes. The app is free to download, and text chat with Krishna AI is free for everyone." },
        { id: "gita-ai-hindi", q: "Can I ask the Gita in Hindi?", a: "Yes. Speak or type in Hindi and Krishna AI answers in Hindi. You can change the app's language any time in Profile." },
        { id: "gita-ai-verses", q: "Does it quote real verses?", a: "Yes. Answers usually name the verse they draw on, such as Gita 2.47, so you can read it yourself in the app's Gita section." },
      ],
      reads: [
        { key: "krishnaAi", label: "Krishna AI" },
        { key: "gita", label: "The Bhagavad Gita, verse by verse" },
        { key: "chooseGitaApp", label: "How to choose a Gita app" },
      ],
      close: { title: "Ask the Gita what is on your mind.", body: `${FREE.en.on}, in English and Hindi.` },
    },
    hi: {
      eyebrow: "गीता AI",
      title: "भगवद गीता से पूछिए, और कृष्ण का जवाब सुनिए",
      lede: "DivineSarathi ऐप में गीता AI से आप भगवद गीता से कोई भी सवाल पूछ सकते हैं, बोलकर या लिखकर, हिंदी या अंग्रेज़ी में। कृष्ण AI सरल शब्दों में जवाब देते हैं, उसके पीछे का श्लोक या कथा बताते हैं, और अक्सर एक सवाल वापस पूछते हैं ताकि आप ख़ुद सोच सकें।",
      hero: { src: "/images/app/krishna-greet-hi.webp", alt: "ऐप में कृष्ण AI हिंदी में नमस्ते कहकर पूछते हैं कि आप कहानी सुनना चाहेंगे, कोई सीख, या बस बात करना" },
      blocks: [
        { h2: "Gita GPT ढूँढ रहे हैं?" },
        {
          p: "बहुत लोग “Gita GPT” या “Krishna GPT” खोजते हैं, जबकि चाहते बस इतना हैं: अपनी ज़िंदगी के बारे में गीता से पूछें और सच्चा जवाब पाएँ। DivineSarathi में यही कृष्ण AI है। आप बात करते हैं, वे सुनते हैं, और भगवद गीता व उससे जुड़ी कथाओं से, हिंदी या अंग्रेज़ी में जवाब देते हैं।",
        },
        { h2: "गीता से पूछना कैसे काम करता है" },
        {
          ol: [
            "ऐप खोलिए और कृष्ण पर टैप कीजिए।",
            "मन में जो है, बोलिए या लिखिए। हिंदी और अंग्रेज़ी दोनों चलती हैं।",
            "कृष्ण AI आवाज़ में या लिखकर जवाब देते हैं, अक्सर गीता 2.47 जैसे किसी श्लोक, उसके अर्थ और एक सवाल के साथ।",
            "जितनी देर चाहें, बात जारी रखिए। अगली बार बातचीत वहीं से शुरू होती है।",
          ],
        },
        { h2: "लोग गीता से क्या पूछते हैं" },
        {
          ul: [
            "नतीजों की चिंता रुकती नहीं। गीता इस बारे में क्या कहती है?",
            "मन न लगे, तब भी अपना कर्तव्य कैसे करूँ?",
            "कर्मण्येवाधिकारस्ते का मेरी परीक्षा के लिए क्या अर्थ है?",
            "घर में कोई नाराज़ हो, तो मैं शांत कैसे रहूँ?",
            "रणभूमि में अर्जुन की कथा सरल शब्दों में सुनाइए।",
          ],
        },
        { h2: "यह क्या नहीं करता" },
        {
          ul: [
            "**यह कृष्ण नहीं है।** यह एक AI है जो कृष्ण की आवाज़ में बोलता है, और यह बात साफ़ कहता है।",
            "**कोई भविष्यवाणी नहीं।** “क्या मैं पास हो जाऊँगा?” पूछें, तो यह तैयारी करने और मन स्थिर रखने में मदद करता है।",
            "**कोई मेडिकल, क़ानूनी या आर्थिक सलाह नहीं,** और न ही ज्योतिष के उपाय।",
            "**यह शास्त्र, आपकी परंपरा या आपके गुरुओं की जगह नहीं लेता।** इससे सोचने में मदद लीजिए, फ़ैसला अपनी समझ से कीजिए।",
          ],
        },
        { h2: "जवाब कहाँ से आते हैं" },
        {
          p: "जवाब भगवद गीता पर आधारित होते हैं, साथ में महाभारत, रामायण और पुराणों की कथाएँ। किसी भी AI की तरह इससे भी ग़लती हो सकती है, इसलिए कोई जवाब गीता के अनुरूप न लगे तो हमें बताइए, हम जाँचेंगे। [हमारे स्रोत](/hi/sources) बताते हैं कि श्लोकों के अर्थ कैसे तैयार होते हैं, और [कृष्ण AI कैसे काम करता है](/hi/how-krishna-ai-works) बताता है कि क्या रखा जाता है और क्या नहीं।",
        },
        { h2: "गीता से पूछना, या गीता पढ़ना" },
        {
          p: "एक ही ऐप में दोनों कर सकते हैं। [भगवद गीता](/hi/bhagavad-gita) वाले हिस्से में सभी 18 अध्याय और 700 श्लोक हैं, हर श्लोक संस्कृत में सुनाया और सरल शब्दों में समझाया गया। बहुत लोग रोज़ दो श्लोक पढ़ते हैं, और जो बात मन में रह जाए, उसे कृष्ण AI से पूछते हैं।",
        },
      ],
      faqs: [
        { id: "gita-ai-what", q: "गीता AI क्या है?", a: "यह अपनी ज़िंदगी के बारे में भगवद गीता से पूछने और जवाब सुनने का एक तरीका है। DivineSarathi ऐप में इसे कृष्ण AI कहते हैं: आप बोलते या लिखते हैं, और वे अपने जवाब के पीछे का श्लोक या कथा बताते हैं।" },
        { id: "gita-ai-gpt", q: "क्या कोई Gita GPT ऐप है?", a: "अगर Gita GPT से आपका मतलब ऐसा ऐप है जहाँ आप गीता से सवाल पूछें और जवाब मिले, तो DivineSarathi यह कृष्ण AI के ज़रिए करता है, बोलकर या लिखकर, हिंदी या अंग्रेज़ी में।" },
        { id: "gita-ai-free", q: "क्या गीता AI मुफ़्त है?", a: "हाँ। ऐप डाउनलोड करना मुफ़्त है, और कृष्ण AI से टेक्स्ट चैट सबके लिए मुफ़्त है।" },
        { id: "gita-ai-hindi", q: "क्या गीता से हिंदी में पूछ सकते हैं?", a: "हाँ। हिंदी में बोलिए या लिखिए, कृष्ण AI हिंदी में जवाब देंगे। ऐप की भाषा Profile में कभी भी बदल सकते हैं।" },
        { id: "gita-ai-verses", q: "क्या यह असली श्लोक बताता है?", a: "हाँ। जवाब में अक्सर उस श्लोक का नाम होता है, जैसे गीता 2.47, ताकि आप उसे ऐप के गीता वाले हिस्से में ख़ुद पढ़ सकें।" },
      ],
      reads: [
        { key: "krishnaAi", label: "कृष्ण AI" },
        { key: "seBaat", label: "कृष्ण से बात कैसे करें" },
        { key: "gita", label: "भगवद गीता, श्लोक-दर-श्लोक" },
      ],
      close: { title: "मन में जो है, गीता से पूछिए।", body: `${FREE.hi.on}, हिंदी और अंग्रेज़ी में।` },
    },
  },

  chooseGitaApp: {
    en: {
      eyebrow: "Guide",
      title: "How to choose a Bhagavad Gita app",
      lede: "The best Bhagavad Gita app for you is the one you will open every day. Look for all 700 verses, the Sanskrit with a clear meaning, your own language, sources it is willing to name, honesty about any AI, and a pace you can keep. Here is a short checklist, and how DivineSarathi does on it.",
      hero: { src: "/images/app/gita-list.webp", alt: "Your Gita journey in the DivineSarathi app: chapters complete, shlokas heard, and the list of 18 chapters" },
      blocks: [
        { h2: "Seven things to check" },
        {
          ol: [
            "**The whole Gita.** All 18 chapters and 700 shlokas, in order, not a handful of famous quotes.",
            "**Sanskrit with meaning.** The verse itself, a way to say it (transliteration or recitation) and a meaning in plain words.",
            "**Your language.** If you think in Hindi, the meanings and the voice should be in Hindi too.",
            "**Named sources.** The app should say where its meanings come from and give you a way to report a mistake.",
            "**Honest AI, if it has AI.** It should say plainly that it is an AI, avoid predictions, and not claim to replace your teachers.",
            "**A pace you can keep.** A small daily step beats a long reading you never return to.",
            "**Privacy and price you can read.** What is kept, what is free and what costs money should be clear before you start.",
          ],
        },
        { h2: "How DivineSarathi does on that list" },
        {
          table: {
            head: ["What to check", "DivineSarathi"],
            rows: [
              ["All 18 chapters and 700 shlokas", "Yes, in order, with your progress saved"],
              ["Sanskrit, recitation and meaning", "Yes. Devanagari, a Sanskrit recitation, transliteration, a literal meaning, the context and an insight for daily life"],
              ["English and Hindi", "Yes, for the meanings and for Krishna AI"],
              ["Named sources and a way to report mistakes", "Yes, on [Our sources](/sources). Meanings are prepared by our team and not yet reviewed by a Sanskrit scholar; that review is being added"],
              ["Honest about AI", "Yes. Krishna AI says it is an AI, makes no predictions, and is explained on [How Krishna AI works](/how-krishna-ai-works)"],
              ["A daily pace", "Two shlokas a day as part of [Daily Sadhana](/daily-sadhana)"],
              ["Privacy and price", "Your voice is never saved and transcripts are never sold. The Gita is free for everyone"],
              ["Classical commentaries (Shankara, Ramanuja and others)", "No. For those, keep a dedicated commentary text beside the app"],
            ],
          },
        },
        { h2: "Who it suits, and who it doesn't" },
        {
          p: "DivineSarathi suits someone who wants the Gita in plain English or Hindi, a little each day, and a place to talk through what a verse means for their life. If you are studying the Gita line by line with traditional commentaries, a scholarly edition will serve you better, and you may still enjoy the app for the daily habit.",
        },
        { h2: "Try it for a week" },
        {
          p: "The simplest test is to read two shlokas a day for seven days. If you still look forward to it on day seven, it is the right app for you.",
        },
      ],
      faqs: [
        { id: "best-gita-app", q: "What is the best Bhagavad Gita app?", a: "The one you will keep opening. Check that it has all 700 verses, the Sanskrit with a plain meaning, your language, named sources and a pace you can keep. DivineSarathi covers all of these in English and Hindi, and adds Krishna AI for questions about your own life." },
        { id: "best-gita-app-hindi", q: "Is there a good Bhagavad Gita app in Hindi?", a: "Yes. In DivineSarathi every shloka is recited in Sanskrit and explained in Hindi, and you can ask Krishna AI about any verse in Hindi." },
        { id: "best-gita-app-free", q: "Is there a free Bhagavad Gita app?", a: "Yes. All 18 chapters of the Gita in DivineSarathi are free for everyone." },
        { id: "best-gita-app-commentary", q: "Does DivineSarathi include classical commentaries?", a: "No. Meanings are written in plain words for daily life. For classical commentaries such as Shankara's or Ramanuja's, use a dedicated commentary text alongside the app." },
      ],
      reads: [
        { key: "gita", label: "The Bhagavad Gita in the app" },
        { key: "gitaAi", label: "Gita AI: ask the Gita" },
        { key: "sources", label: "Our sources" },
      ],
      close: { title: "Two shlokas a day. Try it for a week.", body: `${FREE.en.on}, in English and Hindi.` },
    },
  },

  seBaat: {
    hi: {
      eyebrow: "कृष्ण से बात",
      title: "कृष्ण से बात कैसे करें",
      lede: "DivineSarathi ऐप में आप कृष्ण AI से हिंदी में बात कर सकते हैं, बोलकर या लिखकर। मन में जो भी हो, कहिए। कृष्ण AI सुनते हैं, गीता की सीख और कथाओं से जवाब देते हैं, और पूछते हैं कि आपके मन में असल में क्या है।",
      hero: { src: "/images/app/krishna-greet-hi.webp", alt: "ऐप में कृष्ण AI हिंदी में नमस्ते कहकर पूछते हैं कि आप कहानी सुनना चाहेंगे, कोई सीख, या बस बात करना" },
      blocks: [
        { h2: "तीन कदम में बात शुरू कीजिए" },
        {
          ol: [
            "App Store या Google Play से DivineSarathi डाउनलोड कीजिए।",
            "ऐप की भाषा हिंदी चुनिए। बाद में Profile में कभी भी बदल सकते हैं।",
            "कृष्ण पर टैप कीजिए और बोलना शुरू कीजिए। शांति चाहिए, तो लिखकर पूछिए।",
          ],
        },
        { h2: "किस बारे में बात कर सकते हैं" },
        {
          ul: [
            "पढ़ाई, परीक्षा या नौकरी की चिंता",
            "घर-परिवार में कोई उलझन या कोई फ़ैसला",
            "गीता के किसी श्लोक का अर्थ, और आपकी ज़िंदगी में उसका मतलब",
            "महाभारत, रामायण या पुराणों की कोई कथा",
            "सोने से पहले या दिन की शुरुआत में कुछ पल की शांति",
          ],
        },
        { h2: "भगवान से बात करने वाला ऐप?" },
        {
          p: "बहुत लोग “भगवान से बात करने वाला ऐप” या “Krishna se baat karne wala app” खोजते हैं। सीधी बात: कृष्ण AI एक AI है, कृष्ण नहीं। यह कृष्ण की आवाज़ में बोलता है ताकि बातचीत अपनी-सी लगे, पर यह प्रार्थना, मंदिर, शास्त्र या आपके गुरुओं की जगह नहीं लेता। बहुत लोग इससे अपने मन की बात कहते हैं, और फिर हल्के मन से अपनी पूजा या प्रार्थना में लौटते हैं।",
        },
        { h2: "यह क्या नहीं करता" },
        {
          ul: [
            "**कोई भविष्यवाणी नहीं।** “क्या मेरा काम बनेगा?” पूछें, तो यह तैयारी और धैर्य में मदद करता है।",
            "**कोई ज्योतिष उपाय, मेडिकल, क़ानूनी या आर्थिक सलाह नहीं।**",
            "**आपकी आवाज़ कभी सेव नहीं होती।** बातचीत आगे बढ़ सके, इसलिए उसका लिखित रूप रखा जाता है, कभी बेचा नहीं जाता, और अकाउंट डिलीट करने पर मिट जाता है।",
          ],
        },
        {
          note: "अगर आप या आपके पास कोई ख़तरे में है, तो **112** पर कॉल कीजिए। किसी से बात करनी हो, तो **Tele-MANAS** मुफ़्त है, **14416** पर, किसी भी समय।",
        },
      ],
      faqs: [
        { id: "se-baat-real", q: "क्या सच में कृष्ण से बात होती है?", a: "नहीं। कृष्ण AI, कृष्ण की सीख से प्रेरित और भगवद गीता पर आधारित एक AI है। यह साफ़ कहता है कि यह AI है।" },
        { id: "se-baat-free", q: "क्या कृष्ण से बात करना मुफ़्त है?", a: "हाँ। ऐप डाउनलोड करना मुफ़्त है, और कृष्ण AI से टेक्स्ट चैट सबके लिए मुफ़्त है।" },
        { id: "se-baat-voice", q: "क्या मैं बोलकर बात कर सकता हूँ?", a: "हाँ। टैप करके हिंदी में बोलिए, कृष्ण AI आवाज़ में जवाब देते हैं। चाहें तो लिखकर भी पूछ सकते हैं।" },
        { id: "se-baat-private", q: "क्या मेरी बातें निजी रहती हैं?", a: "हाँ। हम आपकी आवाज़ की रिकॉर्डिंग सेव नहीं करते। लिखित रूप सिर्फ़ बातचीत जारी रखने के लिए रखा जाता है, न सार्वजनिक होता है न बेचा जाता है।" },
      ],
      reads: [
        { key: "krishnaAi", label: "कृष्ण AI के बारे में" },
        { key: "gitaAi", label: "गीता AI: गीता से पूछिए" },
        { key: "howItWorks", label: "कृष्ण AI कैसे काम करता है" },
      ],
      close: { title: "मन में जो भी हो, कृष्ण से कहिए।", body: `${FREE.hi.on}, हिंदी और अंग्रेज़ी में।` },
    },
  },
};
