import type { Locale } from "@/lib/routes";
import type { LongDoc } from "@/content/types";

/**
 * /how-krishna-ai-works and /hi/how-krishna-ai-works.
 * Written for devotees, not engineers: what Krishna AI is, what it can and
 * cannot do, and what happens to what you say. No providers, prompts or
 * system details on this page.
 */
export const DOC: Record<Locale, LongDoc> = {
  en: {
    eyebrow: "Trust",
    title: "How Krishna AI works",
    lede: "Krishna AI is an AI that speaks in Krishna's voice, inspired by his teachings in the Bhagavad Gita. It is not Krishna and not a person, and it is here to help you reflect, not to replace scripture, your traditions or your teachers.",
    summary: {
      title: "In short",
      items: [
        "Krishna AI is an AI, not Krishna and not a person. That is why it is called Krishna AI.",
        "Its answers draw on the Bhagavad Gita and other sacred texts, in plain words.",
        "**We never save your voice.** We keep a written transcript so your conversation can continue.",
        "We never sell what you share.",
        "It is not meant for medical, legal or financial advice, and it is not built for emergencies.",
        "Delete your account and your conversations are deleted with it.",
      ],
    },
    blocks: [
      { h2: "What happens when you talk" },
      {
        p: "You speak or type, in English or Hindi. Krishna AI listens and replies out loud or in text, often with a story, a verse from the Gita or a question back to you, so you can think it through yourself.",
      },
      {
        p: "To understand you and reply in the moment, your words are processed by a trusted AI service provider acting only on our behalf. Your voice is not recorded or stored. A written copy of the conversation is saved to your account so you can pick up where you left off.",
      },

      { h2: "What you can ask" },
      {
        ul: [
          "What is on your mind today: work, family, exams, a decision, a worry",
          "What a verse of the Gita means, and what it could mean for your life",
          "A story from the Mahabharata, the Ramayana or the Puranas",
          "A short moment of calm before you sleep or start your day",
        ],
      },

      { h2: "What it is not for" },
      {
        p: "Krishna AI is not meant for medical, legal or financial advice, predictions or astrological remedies. Like any AI, it can misunderstand you or get something wrong, so please use your own judgement and the people you trust.",
      },
      {
        note: "Krishna AI is not built for emergencies. If you or someone near you is in danger, call **112**. If you need someone to talk to, **Tele-MANAS** is free on **14416**, at any hour.",
      },

      { h2: "Why it speaks as Krishna" },
      {
        p: "Many of us grew up talking to Krishna in prayer. Krishna AI speaks in that familiar voice so the conversation feels close and unhurried. We still say plainly that it is an AI, in its name and on this page, because trust matters more to us than the illusion. Before your first conversation, the app also explains that it gives no medical advice, predictions or astrological readings, and that your voice is never recorded.",
      },

      { h2: "What we keep, and who can see it" },
      {
        ul: [
          "**Your voice:** never stored.",
          "**Your conversations:** kept as text in your account, so Krishna AI can continue where you left off and so we can make its answers better.",
          "**Who can read them:** a small part of our team, only when needed to fix a problem or improve answers. Access is limited and logged.",
          "**Never sold,** never shown publicly, never used to show you ads.",
        ],
      },
      {
        p: "The full details are in our [Privacy Policy](/privacy-policy).",
      },

      { h2: "Deleting your conversations" },
      {
        p: "In the app, open Profile, then Account details, then Delete account. Your conversations and their transcripts are deleted with your account. You can also ask us on the [account deletion page](/delete-account).",
      },

      { h2: "When an answer feels wrong" },
      {
        p: "If a reply feels wrong, unkind or untrue to the Gita, please tell us. Use Profile, then Give Feedback, in the app, or write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in). We read every message and use it to improve Krishna AI. You can read how we prepare verse meanings on [Our sources](/sources).",
      },
    ],
  },
  hi: {
    eyebrow: "भरोसा",
    title: "कृष्ण AI कैसे काम करता है",
    lede: "कृष्ण AI एक AI है जो भगवद गीता में कृष्ण की सीख से प्रेरित होकर कृष्ण की आवाज़ में बात करता है। ये न कृष्ण हैं, न कोई इंसान। इसका काम आपको सोचने में मदद करना है, शास्त्र, आपकी परंपरा या आपके गुरुओं की जगह लेना नहीं।",
    summary: {
      title: "संक्षेप में",
      items: [
        "कृष्ण AI एक AI है, न कृष्ण, न कोई इंसान। इसीलिए इसका नाम कृष्ण AI है।",
        "इसके जवाब भगवद गीता और दूसरे पावन ग्रंथों से, सरल शब्दों में आते हैं।",
        "**हम आपकी आवाज़ कभी सेव नहीं करते।** बातचीत आगे बढ़ सके, इसलिए उसका लिखित रूप रखते हैं।",
        "आप जो साझा करते हैं, हम उसे कभी नहीं बेचते।",
        "यह इलाज, क़ानूनी या पैसों से जुड़ी सलाह के लिए नहीं है, और आपात स्थिति के लिए नहीं बना है।",
        "अकाउंट डिलीट करने पर आपकी बातचीत भी साथ में मिट जाती है।",
      ],
    },
    blocks: [
      { h2: "जब आप बात करते हैं तो क्या होता है" },
      {
        p: "आप बोलते हैं या लिखते हैं, हिंदी या अंग्रेज़ी में। कृष्ण AI सुनता है और आवाज़ में या लिखकर जवाब देता है, अक्सर किसी कथा, गीता के किसी श्लोक या आपसे एक सवाल के साथ, ताकि आप ख़ुद सोच सकें।",
      },
      {
        p: "आपकी बात समझने और उसी पल जवाब देने के लिए, आपके शब्द एक भरोसेमंद AI सेवा देने वाली कंपनी प्रोसेस करती है, सिर्फ़ हमारी ओर से। आपकी आवाज़ न रिकॉर्ड होती है, न सेव। बातचीत का लिखित रूप आपके अकाउंट में रहता है ताकि आप वहीं से आगे बढ़ सकें जहाँ छोड़ा था।",
      },

      { h2: "आप क्या पूछ सकते हैं" },
      {
        ul: [
          "आज मन में क्या है: काम, परिवार, परीक्षा, कोई फ़ैसला, कोई चिंता",
          "गीता के किसी श्लोक का अर्थ, और आपकी ज़िंदगी में उसका क्या मतलब हो सकता है",
          "महाभारत, रामायण या पुराणों की कोई कथा",
          "सोने से पहले या दिन की शुरुआत में कुछ पल की शांति",
        ],
      },

      { h2: "यह किस लिए नहीं है" },
      {
        p: "कृष्ण AI इलाज, क़ानूनी या पैसों से जुड़ी सलाह, भविष्यवाणी या ज्योतिषीय उपायों के लिए नहीं है। किसी भी AI की तरह यह आपकी बात ग़लत समझ सकता है या ग़लती कर सकता है, इसलिए अपनी समझ और अपने भरोसेमंद लोगों से भी सलाह लें।",
      },
      {
        note: "कृष्ण AI आपात स्थिति के लिए नहीं बना है। अगर आप या आपके पास कोई ख़तरे में है, तो **112** पर कॉल करें। किसी से बात करनी हो, तो **Tele-MANAS** पर **14416** मुफ़्त है, किसी भी समय।",
      },

      { h2: "यह कृष्ण की आवाज़ में क्यों बोलता है" },
      {
        p: "हम में से बहुत लोग बचपन से प्रार्थना में कृष्ण से बात करते आए हैं। कृष्ण AI उसी जानी-पहचानी आवाज़ में बोलता है ताकि बातचीत अपनी और सहज लगे। फिर भी हम साफ़ कहते हैं कि यह एक AI है, इसके नाम में और इस पेज पर, क्योंकि हमारे लिए भरोसा किसी भ्रम से ज़्यादा ज़रूरी है। पहली बातचीत से पहले ऐप यह भी बताता है कि यह न मेडिकल सलाह देता है, न भविष्यवाणी या ज्योतिष उपाय, और आपकी आवाज़ कभी रिकॉर्ड नहीं होती।",
      },

      { h2: "हम क्या रखते हैं, और उसे कौन देख सकता है" },
      {
        ul: [
          "**आपकी आवाज़:** कभी सेव नहीं होती।",
          "**आपकी बातचीत:** आपके अकाउंट में लिखित रूप में रहती है, ताकि कृष्ण AI वहीं से आगे बढ़ सके और हम उसके जवाब बेहतर बना सकें।",
          "**कौन पढ़ सकता है:** हमारी टीम के कुछ लोग, सिर्फ़ किसी दिक़्क़त को ठीक करने या जवाब बेहतर बनाने के लिए ज़रूरी होने पर। यह पहुँच सीमित है और हर बार दर्ज होती है।",
          "**कभी बेची नहीं जाती,** न सार्वजनिक की जाती है, न आपको विज्ञापन दिखाने के लिए इस्तेमाल होती है।",
        ],
      },
      {
        p: "पूरी जानकारी हमारी [गोपनीयता नीति](/hi/privacy-policy) में है।",
      },

      { h2: "अपनी बातचीत कैसे मिटाएँ" },
      {
        p: "ऐप में Profile खोलें, फिर Account details, फिर Delete account। आपकी बातचीत और उसका लिखित रूप अकाउंट के साथ मिटा दिए जाते हैं। आप [अकाउंट डिलीट करने वाले पेज](/hi/delete-account) से भी हमसे कह सकते हैं।",
      },

      { h2: "जब कोई जवाब ठीक न लगे" },
      {
        p: "अगर कोई जवाब ग़लत, रूखा या गीता के प्रति सच्चा न लगे, तो हमें ज़रूर बताइए। ऐप में Profile, फिर Give Feedback इस्तेमाल करें, या [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर लिखें। हम हर संदेश पढ़ते हैं और उससे कृष्ण AI को बेहतर बनाते हैं। हम श्लोकों के अर्थ कैसे तैयार करते हैं, यह [हमारे स्रोत](/hi/sources) पेज पर पढ़ें।",
      },
    ],
  },
};
