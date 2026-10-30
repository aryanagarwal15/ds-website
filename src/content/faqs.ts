import type { Locale } from "@/lib/routes";
import { FREE, PLUS, PLUS_PUBLIC } from "@/lib/site";

export type Faq = { id: string; q: string; a: string };
export type FaqGroup = { title: string; items: Faq[] };

/**
 * One answer per question, first sentence answers it. Used by /faqs, the home
 * preview, FAQPage structured data and llms-full.txt.
 */
export const FAQS: Record<Locale, FaqGroup[]> = {
  en: [
    {
      title: "The app",
      items: [
        {
          id: "what-is-divinesarathi",
          q: "What is DivineSarathi?",
          a: `DivineSarathi is ${FREE.en.app} for iPhone and Android where you talk with Krishna AI by voice or text, in English or Hindi. It also has a sacred story every morning, the Bhagavad Gita verse by verse, Daily Sadhana and guided breath meditation.`,
        },
        {
          id: "is-it-free",
          q: "Is DivineSarathi free?",
          a: PLUS_PUBLIC
            ? `It is free to start. Downloading the app is free, and text chat with Krishna, the daily story, the Gita and meditation are free for everyone. Sarathi Plus, from ${PLUS.firstMonth} for the first month, adds more time talking with Krishna by voice.`
            : "Yes. Downloading the app is free, and text chat with Krishna, the daily story, the Gita and meditation are free for everyone.",
        },
        {
          id: "languages",
          q: "Which languages does it speak?",
          a: "English and Hindi. You can speak to Krishna in either, and change the app's language at any time in Profile.",
        },
        {
          id: "who-is-it-for",
          q: "Who is DivineSarathi for?",
          a: "Anyone who wants to talk something through, or is curious about the Bhagavad Gita. Some people know the Gita well; others are opening it for the first time. Both are welcome.",
        },
        {
          id: "where-to-get-it",
          q: "Where can I get the app?",
          a: "On the App Store for iPhone and iPad, and on Google Play for Android phones and tablets. Search for DivineSarathi or open divinesarathi.in/download on your phone.",
        },
      ],
    },
    {
      title: "Krishna AI",
      items: [
        {
          id: "what-is-krishna-ai",
          q: "What is Krishna AI?",
          a: "Krishna AI is an AI voice inspired by Lord Krishna and grounded in the Bhagavad Gita. You can tell him about your day, ask about a verse, or ask for a story, and he answers with perspectives from the Gita and other sacred texts.",
        },
        {
          id: "is-it-really-krishna",
          q: "Is it really Krishna?",
          a: "No. Krishna AI is an AI that speaks in Krishna's voice, which is why it is called Krishna AI. Before your first conversation, the app explains that it gives no medical advice, predictions or astrological readings, and that your voice is never recorded. It is inspired by Krishna's teachings in the Gita and does not claim to replace scripture, tradition or your teachers.",
        },
        {
          id: "what-can-i-ask",
          q: "What can I ask Krishna AI?",
          a: "Anything on your mind: work, family, exams, decisions, fear, purpose, or what a verse means. He often answers with a story or a shloka and asks a question back, so you can think it through.",
        },
        {
          id: "what-it-does-not-do",
          q: "What does Krishna AI not do?",
          a: "It is not meant for medical, legal or financial advice, predictions or astrological remedies, and like any AI it can get things wrong. In an emergency, call 112. For someone to talk to, Tele-MANAS is free on 14416.",
        },
        {
          id: "do-i-have-to-follow",
          q: "Do I have to follow what Krishna AI says?",
          a: "No. It offers perspectives from sacred teachings, not instructions. Take what resonates with you and leave the rest.",
        },
      ],
    },
    {
      title: "Privacy and your account",
      items: [
        {
          id: "is-it-private",
          q: "Is my conversation private?",
          a: "Yes. We don't save audio of your voice. We keep a written transcript of each conversation so the app can work and get better, and it is never shared publicly or sold. Deleting your account deletes your conversations and their transcripts.",
        },
        {
          id: "delete-account",
          q: "How do I delete my account?",
          a: "In the app, open Profile, then Account details, then Delete account. You can also ask us on the account deletion page. Your conversations, transcripts and profile are deleted.",
        },
        {
          id: "contact",
          q: "How do I reach the team?",
          a: "Write to founders@divinesarathi.in or use the form on our support page. We reply to every message.",
        },
      ],
    },
  ],
  hi: [
    {
      title: "ऐप",
      items: [
        {
          id: "what-is-divinesarathi",
          q: "DivineSarathi क्या है?",
          a: `DivineSarathi iPhone और Android के लिए ${FREE.hi.app} है जहाँ आप कृष्ण AI से आवाज़ या टेक्स्ट में, हिंदी या अंग्रेज़ी में बात करते हैं। इसमें हर सुबह एक पावन कथा, श्लोक-दर-श्लोक भगवद गीता, दैनिक साधना और निर्देशित श्वास ध्यान भी है।`,
        },
        {
          id: "is-it-free",
          q: "क्या DivineSarathi मुफ़्त है?",
          a: PLUS_PUBLIC
            ? `शुरुआत मुफ़्त है। ऐप डाउनलोड करना मुफ़्त है, और कृष्ण से टेक्स्ट चैट, रोज़ की कथा, गीता और ध्यान सबके लिए मुफ़्त हैं। Sarathi Plus, पहला महीना ${PLUS.firstMonth}, में कृष्ण से आवाज़ में बात करने का और समय मिलता है।`
            : "हाँ। ऐप डाउनलोड करना मुफ़्त है, और कृष्ण से टेक्स्ट चैट, रोज़ की कथा, गीता और ध्यान सबके लिए मुफ़्त हैं।",
        },
        {
          id: "languages",
          q: "ऐप किन भाषाओं में है?",
          a: "हिंदी और अंग्रेज़ी। आप दोनों में से किसी भी भाषा में कृष्ण से बात कर सकते हैं, और Profile में जाकर कभी भी ऐप की भाषा बदल सकते हैं।",
        },
        {
          id: "who-is-it-for",
          q: "DivineSarathi किसके लिए है?",
          a: "हर उस इंसान के लिए जो किसी बात पर मन खोलकर बात करना चाहता है, या भगवद गीता के बारे में जानना चाहता है। कुछ लोग गीता को अच्छी तरह जानते हैं, कुछ पहली बार खोल रहे हैं। सबका स्वागत है।",
        },
        {
          id: "where-to-get-it",
          q: "ऐप कहाँ मिलेगा?",
          a: "iPhone और iPad के लिए App Store पर, और Android फ़ोन व टैबलेट के लिए Google Play पर। DivineSarathi खोजें या अपने फ़ोन पर divinesarathi.in/download खोलें।",
        },
      ],
    },
    {
      title: "कृष्ण AI",
      items: [
        {
          id: "what-is-krishna-ai",
          q: "कृष्ण AI क्या है?",
          a: "कृष्ण AI भगवान कृष्ण से प्रेरित और भगवद गीता पर आधारित एक AI आवाज़ है। आप उन्हें अपने दिन के बारे में बता सकते हैं, किसी श्लोक का अर्थ पूछ सकते हैं, या कहानी सुन सकते हैं, और वे गीता व दूसरे पावन ग्रंथों की सीख से जवाब देते हैं।",
        },
        {
          id: "is-it-really-krishna",
          q: "क्या ये सच में कृष्ण हैं?",
          a: "नहीं। कृष्ण AI एक AI है जो कृष्ण की आवाज़ में बात करता है, इसीलिए इसका नाम कृष्ण AI है। पहली बातचीत से पहले ऐप बताता है कि यह न मेडिकल सलाह देता है, न भविष्यवाणी या ज्योतिष उपाय, और आपकी आवाज़ कभी रिकॉर्ड नहीं होती। यह गीता में कृष्ण की सीख से प्रेरित है और शास्त्र, परंपरा या आपके गुरुओं की जगह लेने का दावा नहीं करता।",
        },
        {
          id: "what-can-i-ask",
          q: "कृष्ण AI से क्या पूछ सकते हैं?",
          a: "मन में जो भी हो: काम, परिवार, परीक्षा, फ़ैसले, डर, जीवन का उद्देश्य, या किसी श्लोक का अर्थ। वे अक्सर किसी कथा या श्लोक से जवाब देते हैं और आपसे भी सवाल पूछते हैं, ताकि आप ख़ुद सोच सकें।",
        },
        {
          id: "what-it-does-not-do",
          q: "कृष्ण AI क्या नहीं करता?",
          a: "यह इलाज, क़ानूनी या पैसों से जुड़ी सलाह, भविष्यवाणी या ज्योतिषीय उपायों के लिए नहीं बना है, और किसी भी AI की तरह इससे भी ग़लती हो सकती है। आपात स्थिति में 112 पर कॉल करें। किसी से बात करनी हो तो Tele-MANAS पर 14416 मुफ़्त है।",
        },
        {
          id: "do-i-have-to-follow",
          q: "क्या कृष्ण AI की बात माननी ज़रूरी है?",
          a: "नहीं। यह पावन शिक्षाओं से दृष्टिकोण देता है, आदेश नहीं। जो बात मन को छुए, उसे अपनाइए, बाक़ी छोड़ दीजिए।",
        },
      ],
    },
    {
      title: "गोपनीयता और आपका अकाउंट",
      items: [
        {
          id: "is-it-private",
          q: "क्या मेरी बातचीत निजी रहती है?",
          a: "हाँ। हम आपकी आवाज़ की रिकॉर्डिंग सेव नहीं करते। ऐप ठीक से चले और बेहतर हो, इसके लिए हर बातचीत का लिखित रूप रखा जाता है। यह न सार्वजनिक रूप से साझा होता है, न बेचा जाता है। अकाउंट डिलीट करने पर आपकी बातचीत और उसका लिखित रूप भी मिट जाता है।",
        },
        {
          id: "delete-account",
          q: "अकाउंट कैसे डिलीट करें?",
          a: "ऐप में Profile खोलें, फिर Account details, फिर Delete account। आप अकाउंट डिलीट करने वाले पेज से हमसे अनुरोध भी कर सकते हैं। आपकी बातचीत, उसका लिखित रूप और प्रोफ़ाइल मिटा दिए जाते हैं।",
        },
        {
          id: "contact",
          q: "टीम से कैसे संपर्क करें?",
          a: "founders@divinesarathi.in पर लिखें या हमारे सहायता पेज का फ़ॉर्म भरें। हम हर संदेश का जवाब देते हैं।",
        },
      ],
    },
  ],
};

export const allFaqs = (locale: Locale) => FAQS[locale].flatMap((g) => g.items);

const HOME_IDS = ["what-is-divinesarathi", "is-it-free", "is-it-really-krishna", "is-it-private", "languages"];
export const homeFaqs = (locale: Locale) => allFaqs(locale).filter((f) => HOME_IDS.includes(f.id));
