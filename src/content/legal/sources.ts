import type { Locale } from "@/lib/routes";
import type { LongDoc } from "@/content/types";

/**
 * /sources and /hi/sources. Says what the texts are, not how the system is built.
 * No scholar review exists yet: do not name one here until it does.
 */
export const DOC: Record<Locale, LongDoc> = {
  en: {
    eyebrow: "Trust",
    title: "Where our Gita comes from",
    lede: "DivineSarathi is built on the Bhagavad Gita first, with stories from the Itihasas and Puranas alongside it. Here is what each verse in the app is made of, who prepares it, and how to tell us when we get something wrong.",
    summary: {
      title: "In short",
      items: [
        "The Gita in the app covers all 18 chapters, 700 shlokas, verse by verse.",
        "Each verse has five parts: the Sanskrit, a transliteration, a literal meaning, its context, and an insight for daily life.",
        "Our small team prepares the meanings with care. They have not yet been reviewed by a Sanskrit scholar, and we are adding that review.",
        "The voice that recites and explains each verse is Krishna AI, an AI voice reading from the text we prepared.",
        "If a meaning feels wrong, tell us. We check it and fix it.",
      ],
    },
    blocks: [
      { h2: "The texts we draw on", id: "texts" },
      {
        ul: [
          "**The Bhagavad Gita.** The 700 verse conversation between Krishna and Arjuna from the Mahabharata. It is the heart of the app: the Gita section, Gita for Daily Life, and most of what Krishna AI says.",
          "**The Itihasas.** The Mahabharata and the Ramayana, for stories like Arjuna on the battlefield or Hanuman's devotion.",
          "**The Puranas.** Especially the Bhagavata Purana, for stories of Krishna's life, Sudama, Dhruva and others.",
          "**Devotional tales.** A few stories are tales that have been told and retold across India for generations, rather than passages from one book.",
        ],
      },
      {
        p: "In open conversation, Krishna AI also draws on the wider scriptures, including the Vedas and the Dharma Sutras. How that works, and where it can go wrong, is explained on [How Krishna AI works](/how-krishna-ai-works).",
      },

      { h2: "What each verse contains", id: "verse-parts" },
      {
        table: {
          head: ["Part", "What it is"],
          rows: [
            ["Sanskrit", "The verse in Devanagari, as it appears in the Gita."],
            ["Transliteration", "The same verse in Roman letters (IAST), so you can follow the sounds even if you do not read Devanagari."],
            ["Literal meaning", "What the words say, kept as close to the Sanskrit as we can."],
            ["Context", "Who is speaking, to whom, and what is happening at that moment in the conversation."],
            ["Insight", "A short reflection on what the verse can mean in everyday life."],
          ],
        },
      },
      {
        p: "On the verse screen you see the Sanskrit. Krishna AI then recites the verse and explains it using the other four parts. The chapters are split into short sections so you can go one verse at a time.",
      },
      {
        p: "The literal meaning tries to stay with the words. The context and the insight are our reading. Many traditions read the Gita in different ways, and our insight is one plain reading meant for daily life, not the final word. If your teacher or tradition reads a verse another way, that is welcome.",
      },

      { h2: "Who writes the meanings", id: "who-writes" },
      {
        p: "DivineSarathi is made by a small team. We prepare the literal meanings, context and insights ourselves, with care and respect for the text. We want to be honest: they have not yet been reviewed by a Sanskrit scholar or a teacher of the Gita. We are adding a review by people who know the text well, and we will say so on this page once it is in place.",
      },
      {
        p: "The stories work the same way. We prepare a written version of each one from its source, and Krishna AI tells it from that text. A retelling has to shorten and simplify, and some stories are told differently in different regions, so details may not match the version you grew up with.",
      },

      { h2: "The voice and the Hindi", id: "voice-and-hindi" },
      {
        p: "The recitation and explanation you hear are spoken by Krishna AI, an AI voice. It is not a recording of a priest or a scholar. It reads from the verse text described above.",
      },
      {
        p: "When you use the app in Hindi, the explanation is spoken in Hindi and the Sanskrit stays in Sanskrit. If the Hindi of a verse sounds off, please tell us.",
      },

      { h2: "When we get it wrong", id: "mistakes" },
      {
        p: "We will get things wrong sometimes. One person told us in a Google Play review that a verse meaning did not feel true to the text. That is exactly the kind of note we want, and we would rather hear it than not.",
      },
      {
        ol: [
          "In the app, open **Profile > Give Feedback**, or email [founders@divinesarathi.in](mailto:founders@divinesarathi.in).",
          "Tell us the chapter and verse number, or the name of the story, and what feels wrong. If you know a source that reads it differently, mention it.",
          "We look at the verse again and correct the entry if we got it wrong. The app then reads from the corrected text, and we write back to tell you.",
        ],
      },
      {
        p: "You do not need to be a scholar to tell us something feels off. Many of the best corrections come from people who simply know the Gita well.",
      },
    ],
  },

  hi: {
    eyebrow: "भरोसा",
    title: "हमारी गीता कहाँ से आती है",
    lede: "DivineSarathi सबसे पहले भगवद गीता पर आधारित है, और साथ में इतिहास व पुराणों की कथाएँ हैं। यहाँ बताया गया है कि ऐप में हर श्लोक किन हिस्सों से बना है, उसे कौन तैयार करता है, और कोई ग़लती दिखे तो हमें कैसे बताएँ।",
    summary: {
      title: "संक्षेप में",
      items: [
        "ऐप में गीता के सभी 18 अध्याय और 700 श्लोक हैं, श्लोक-दर-श्लोक।",
        "हर श्लोक के पाँच हिस्से हैं: संस्कृत, लिप्यंतरण, शाब्दिक अर्थ, संदर्भ, और रोज़ के जीवन के लिए एक सीख।",
        "हमारी छोटी-सी टीम ये अर्थ ध्यान से तैयार करती है। अभी किसी संस्कृत विद्वान ने इनकी समीक्षा नहीं की है, और हम यह समीक्षा जोड़ रहे हैं।",
        "हर श्लोक का पाठ और व्याख्या करने वाली आवाज़ कृष्ण AI की है, एक AI आवाज़ जो हमारे तैयार किए पाठ से पढ़ती है।",
        "कोई अर्थ ग़लत लगे तो बताइए। हम उसे जाँचते हैं और ठीक करते हैं।",
      ],
    },
    blocks: [
      { h2: "हम किन ग्रंथों से लेते हैं", id: "texts" },
      {
        ul: [
          "**भगवद गीता।** महाभारत में कृष्ण और अर्जुन का 700 श्लोकों का संवाद। यही ऐप का केंद्र है: गीता वाला हिस्सा, Gita for Daily Life, और कृष्ण AI की ज़्यादातर बातें।",
          "**इतिहास।** महाभारत और रामायण, युद्धभूमि में अर्जुन या हनुमान की भक्ति जैसी कथाओं के लिए।",
          "**पुराण।** ख़ासकर भागवत पुराण, कृष्ण के जीवन, सुदामा, ध्रुव और दूसरों की कथाओं के लिए।",
          "**भक्ति कथाएँ।** कुछ कथाएँ किसी एक ग्रंथ से नहीं, बल्कि पीढ़ियों से पूरे भारत में कही-सुनी जाती रही हैं।",
        ],
      },
      {
        p: "खुली बातचीत में कृष्ण AI इन्हीं और दूसरे शास्त्रों से भी सीख लेता है, जिनमें वेद और धर्मसूत्र भी हैं। यह कैसे काम करता है और कहाँ ग़लती हो सकती है, यह [कृष्ण AI कैसे काम करता है](/hi/how-krishna-ai-works) पर बताया गया है।",
      },

      { h2: "हर श्लोक में क्या होता है", id: "verse-parts" },
      {
        table: {
          head: ["हिस्सा", "यह क्या है"],
          rows: [
            ["संस्कृत", "श्लोक देवनागरी में, जैसा गीता में है।"],
            ["लिप्यंतरण", "वही श्लोक रोमन अक्षरों (IAST) में, ताकि देवनागरी न पढ़ पाने पर भी आप उच्चारण समझ सकें।"],
            ["शाब्दिक अर्थ", "शब्द क्या कहते हैं, जितना हो सके संस्कृत के क़रीब रहकर।"],
            ["संदर्भ", "कौन बोल रहा है, किससे, और संवाद में उस समय क्या हो रहा है।"],
            ["सीख", "रोज़ के जीवन में इस श्लोक का क्या अर्थ हो सकता है, इस पर एक छोटा विचार।"],
          ],
        },
      },
      {
        p: "श्लोक वाली स्क्रीन पर आपको संस्कृत दिखती है। फिर कृष्ण AI बाक़ी चार हिस्सों की मदद से श्लोक का पाठ करता है और उसे समझाता है। अध्यायों को छोटे-छोटे भागों में बाँटा गया है, ताकि आप एक-एक श्लोक करके आगे बढ़ सकें।",
      },
      {
        p: "शाब्दिक अर्थ शब्दों के साथ रहने की कोशिश करता है। संदर्भ और सीख हमारी समझ है। अलग-अलग परंपराएँ गीता को अलग ढंग से पढ़ती हैं, और हमारी सीख रोज़ के जीवन के लिए एक सीधी-सादी समझ है, आख़िरी शब्द नहीं। अगर आपके गुरु या आपकी परंपरा किसी श्लोक को दूसरे ढंग से समझती है, तो उसका भी पूरा सम्मान है।",
      },

      { h2: "अर्थ कौन लिखता है", id: "who-writes" },
      {
        p: "DivineSarathi एक छोटी-सी टीम बनाती है। शाब्दिक अर्थ, संदर्भ और सीख हम ख़ुद, ध्यान और ग्रंथ के प्रति आदर के साथ तैयार करते हैं। हम साफ़ कहना चाहते हैं: अभी किसी संस्कृत विद्वान या गीता के शिक्षक ने इनकी समीक्षा नहीं की है। हम ग्रंथ को अच्छी तरह जानने वाले लोगों से समीक्षा जोड़ रहे हैं, और जब यह हो जाएगा तो इसी पेज पर बताएँगे।",
      },
      {
        p: "कथाओं के साथ भी ऐसा ही है। हम हर कथा का उसके स्रोत से एक लिखित रूप तैयार करते हैं, और कृष्ण AI उसी पाठ से कथा सुनाता है। दोबारा कहने में कथा छोटी और सरल करनी पड़ती है, और कुछ कथाएँ अलग-अलग इलाक़ों में अलग ढंग से कही जाती हैं, इसलिए हो सकता है कुछ बातें उस रूप से न मिलें जो आपने बचपन से सुना है।",
      },

      { h2: "आवाज़ और हिंदी", id: "voice-and-hindi" },
      {
        p: "आप जो पाठ और व्याख्या सुनते हैं, वह कृष्ण AI बोलता है, जो एक AI आवाज़ है। यह किसी पुजारी या विद्वान की रिकॉर्डिंग नहीं है। यह ऊपर बताए गए श्लोक के पाठ से पढ़ती है।",
      },
      {
        p: "जब आप ऐप हिंदी में इस्तेमाल करते हैं, तो अर्थ हिंदी में बोला जाता है और संस्कृत संस्कृत में ही रहती है। अगर किसी श्लोक की हिंदी ठीक न लगे, तो हमें ज़रूर बताइए।",
      },

      { h2: "जब हमसे ग़लती हो", id: "mistakes" },
      {
        p: "कभी-कभी हमसे ग़लती होगी। एक व्यक्ति ने Google Play पर रिव्यू में बताया कि एक श्लोक का अर्थ ग्रंथ के प्रति सच्चा नहीं लगा। हमें ठीक ऐसी ही बातें सुननी हैं, और हम चुप रहने के बजाय इन्हें सुनना पसंद करेंगे।",
      },
      {
        ol: [
          "ऐप में **Profile > Give Feedback** खोलें, या [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर ईमेल करें।",
          "अध्याय और श्लोक संख्या, या कथा का नाम बताइए, और यह कि क्या ग़लत लगा। अगर आप कोई ऐसा स्रोत जानते हैं जो इसे अलग ढंग से पढ़ता है, तो उसका भी ज़िक्र करें।",
          "हम श्लोक को फिर से देखते हैं और अगर ग़लती हमारी है तो उसे ठीक करते हैं। इसके बाद ऐप सुधरे हुए पाठ से पढ़ता है, और हम आपको जवाब लिखकर बताते हैं।",
        ],
      },
      {
        p: "कुछ ठीक नहीं लग रहा, यह बताने के लिए विद्वान होना ज़रूरी नहीं। कई सबसे अच्छे सुधार उन लोगों से आते हैं जो बस गीता को अच्छी तरह जानते हैं।",
      },
    ],
  },
};
