import type { Locale } from "@/lib/routes";
import type { LongDoc } from "@/content/types";

/**
 * /how-krishna-ai-works and /hi/how-krishna-ai-works.
 * Every claim here was checked against god-server main (prompts/krishna.js,
 * controllers/session.controller.js, controllers/chat.controller.js,
 * sockets/openAISessionSocket.js, utils/continuity.js,
 * controllers/adminDeletion.controller.js) and the app (Profile menu,
 * Account Details, Give Feedback). Change the page when those change.
 */
export const DOC: Record<Locale, LongDoc> = {
  en: {
    eyebrow: "Trust",
    title: "How Krishna AI works",
    lede: "Krishna AI is an AI that speaks in a voice inspired by Lord Krishna and draws on the Bhagavad Gita and other sacred texts. It is not Krishna, and it is not a person.",
    summary: {
      title: "In short",
      items: [
        "Krishna AI is an AI. It is not Krishna and not a person, and the app names it Krishna AI.",
        "Your voice goes from your phone to Azure OpenAI, Microsoft's AI service, which writes the answer. We do not save audio of your voice.",
        "We keep a written transcript of each conversation. We never sell it or make it public.",
        "It is not built for emergencies, and it is not meant for medical, legal or financial advice.",
        "Delete your account and your conversations and their transcripts are erased.",
        "If an answer is wrong or hurtful, tell us in **Profile > Give Feedback** or at [founders@divinesarathi.in](mailto:founders@divinesarathi.in).",
      ],
    },
    blocks: [
      { h2: "What happens when you speak", id: "when-you-speak" },
      {
        ol: [
          "Before the conversation starts, our server gives the AI its instructions: speak as Krishna, stay close to the Bhagavad Gita and the scriptures, use your first name and the language you chose. If you came from a verse or a story, the text of that verse or story is included.",
          "When you talk, your voice streams live from your phone to **Azure OpenAI**, an AI service run by Microsoft. It turns what you said into text and speaks its answer back to you. We do not record or save the audio.",
          "If you type instead, your message goes to a text model on the same service, and the answer comes back as text.",
          "The words of both sides, what you said and what Krishna AI said, are saved to your account as a written transcript.",
        ],
      },
      {
        p: "In an open conversation, the AI answers from what it learned when it was trained, guided by our instructions to anchor its answers in a verse, a teaching or a story. It does not look each verse up in a checked library while it talks, so it can misquote a verse or get a detail wrong. When you start from a verse or a story in the app, it is given that exact text and stays close to it. You can read how we prepare those texts on [Our sources](/sources).",
      },
      { h3: "Does it remember me?" },
      {
        p: "Not in the way a friend would. It knows your first name and your language. Within one conversation it follows what you have said. If you carry the same conversation on, for example from a call into typing, it can be shown the last part of that conversation so you do not have to repeat yourself. It does not build a running memory of your life from your older conversations.",
      },

      { h2: "What it can help with", id: "what-it-helps-with" },
      {
        ul: [
          "Talking through what is on your mind: work, family, exams, a decision, a fear, a question about purpose.",
          "Asking what a verse of the Gita means, or how it might apply to your day.",
          "Hearing a story from the Itihasas and Puranas, and talking about it after.",
          "Thinking a question through. It often answers with a story or a shloka and asks you a question back.",
        ],
      },
      {
        p: "It speaks English and Hindi. You can change the app's language at any time in **Profile > Language**.",
      },

      { h2: "What it will not do", id: "what-it-will-not-do" },
      {
        ul: [
          "It will not claim to be a person. It speaks as Krishna, in the first person, as a way of sharing his teachings. That is a way of speaking, not a claim.",
          "It is not meant for medical, legal or financial advice. It does not predict the future or offer astrological remedies.",
          "It does not replace scripture, tradition or your teachers.",
          "It steers away from requests that have nothing to do with its purpose, like recipes or random facts, and brings the conversation back.",
          "It does not share its instructions.",
        ],
      },
      {
        note: "Krishna AI is an AI, and it can get things wrong, including how it handles the limits above. Please do not rely on it for decisions about your health, money or legal matters. Take what helps you and leave the rest.",
      },

      { h2: "Hard moments", id: "hard-moments" },
      {
        p: "Krishna AI is told never to encourage anything that could hurt you or anyone else. It is also told to suggest getting help from outside the app when there are clear signs that someone is in serious trouble or may be in danger.",
      },
      {
        p: "That is the extent of it, and we want to be plain about the limits. It has no helpline numbers built in. It cannot call anyone or send help. No person watches conversations as they happen. **Krishna AI is not built for emergencies.**",
      },
      {
        note: "If you or someone near you is in danger, call your local emergency number now. In India, dial **112**. You can also call **Tele-MANAS** on **14416**, a free national helpline run by the Government of India that you can call at any hour.",
      },

      { h2: "What we keep and why", id: "what-we-keep" },
      {
        ul: [
          "**A written transcript** of each conversation: what you said and what Krishna AI said, as text.",
          "**Details about the conversation**: when it happened, how long it lasted, and which story or verse it was about, if any.",
          "**No audio.** We do not save recordings of your voice.",
        ],
      },
      {
        p: "We keep transcripts so the app can work, for example to show your past conversations and to carry a conversation on, and so we can fix problems and make the answers better. In our internal tools, reading a transcript needs a special permission and a stated reason, and every read is logged. We never sell transcripts or make them public. The full details are in our [Privacy Policy](/privacy-policy).",
      },

      { h2: "How to delete it", id: "delete" },
      {
        p: "In the app, open **Profile**, tap your name to open **Account Details**, then tap **Delete Account**. You can also ask on our [account deletion page](/delete-account).",
      },
      {
        p: "We hold the account for 30 days in case you change your mind, then erase your conversations and their transcripts along with your name and contact details. If you want it done sooner, say so and we will do it earlier. We keep only counts that do not say who you are or what you said.",
      },
      {
        p: "There is no button yet to delete a single conversation. If you want one removed without deleting your account, write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in) and we will remove it.",
      },

      { h2: "Why we say \"AI\" openly", id: "why-ai" },
      {
        p: "Because it is one. Krishna AI speaks in Krishna's voice and in the first person, which can feel very real. We never want anyone to mistake it for Krishna himself, or for a person on the other end. That is why it is called Krishna AI in the app and on this site.",
      },
      {
        p: "We built it to help people open the Gita and think things through. It offers perspectives from sacred teachings, not instructions, and it does not claim to be the final word on any of them.",
      },

      { h2: "Report a wrong or hurtful answer", id: "report" },
      {
        p: "If Krishna AI said something wrong, misquoted a verse, or said something that hurt, please tell us. In the app, open **Profile > Give Feedback** and write what happened. You can also email [founders@divinesarathi.in](mailto:founders@divinesarathi.in).",
      },
      {
        p: "It helps to include roughly when the conversation happened and what was said. We read every report, look at what went wrong, and use it to fix the instructions or the content behind the answer.",
      },
    ],
  },

  hi: {
    eyebrow: "भरोसा",
    title: "कृष्ण AI कैसे काम करता है",
    lede: "कृष्ण AI एक AI है, जो भगवान कृष्ण से प्रेरित आवाज़ में बात करता है और भगवद गीता व दूसरे पावन ग्रंथों से सीख लेता है। यह कृष्ण नहीं है, और न ही कोई इंसान।",
    summary: {
      title: "संक्षेप में",
      items: [
        "कृष्ण AI एक AI है। यह कृष्ण नहीं है, न कोई इंसान, और ऐप में इसका नाम कृष्ण AI ही है।",
        "आपकी आवाज़ आपके फ़ोन से सीधे Azure OpenAI तक जाती है, जो Microsoft की AI सेवा है, और वही जवाब तैयार करती है। हम आपकी आवाज़ की रिकॉर्डिंग नहीं रखते।",
        "हम हर बातचीत का लिखित ट्रांसक्रिप्ट रखते हैं। इसे न कभी बेचते हैं, न सार्वजनिक करते हैं।",
        "यह आपातकाल के लिए नहीं बना है, और इलाज, क़ानून या पैसों की सलाह के लिए नहीं है।",
        "अकाउंट डिलीट करने पर आपकी बातचीत और उनके ट्रांसक्रिप्ट मिटा दिए जाते हैं।",
        "कोई जवाब ग़लत लगे या चोट पहुँचाए, तो **Profile > Give Feedback** में या [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर बताइए।",
      ],
    },
    blocks: [
      { h2: "जब आप बोलते हैं, तब क्या होता है", id: "when-you-speak" },
      {
        ol: [
          "बातचीत शुरू होने से पहले हमारा सर्वर AI को निर्देश देता है: कृष्ण की तरह बोलो, भगवद गीता और शास्त्रों के क़रीब रहो, उपयोगकर्ता का पहला नाम और उनकी चुनी हुई भाषा इस्तेमाल करो। अगर आप किसी श्लोक या कथा से आए हैं, तो उस श्लोक या कथा का पाठ भी साथ दिया जाता है।",
          "जब आप बोलते हैं, आपकी आवाज़ लाइव आपके फ़ोन से **Azure OpenAI** तक जाती है, जो Microsoft की चलाई AI सेवा है। यह आपकी बात को टेक्स्ट में बदलती है और जवाब बोलकर सुनाती है। हम ऑडियो रिकॉर्ड या सेव नहीं करते।",
          "अगर आप टाइप करते हैं, तो आपका मैसेज उसी सेवा के एक टेक्स्ट मॉडल तक जाता है और जवाब टेक्स्ट में आता है।",
          "दोनों तरफ़ की बातें, आपने जो कहा और कृष्ण AI ने जो कहा, आपके अकाउंट में लिखित ट्रांसक्रिप्ट के रूप में सेव होती हैं।",
        ],
      },
      {
        p: "खुली बातचीत में AI वही जानकारी इस्तेमाल करता है जो उसने ट्रेनिंग के दौरान सीखी, और हमारे निर्देश उसे जवाब किसी श्लोक, शिक्षा या कथा से जोड़ने को कहते हैं। बात करते समय यह हर श्लोक किसी जाँची हुई लाइब्रेरी में नहीं देखता, इसलिए कभी श्लोक ग़लत बोल सकता है या कोई बात ग़लत बता सकता है। जब आप ऐप में किसी श्लोक या कथा से शुरू करते हैं, तो उसे वही पाठ दिया जाता है और वह उसी के क़रीब रहता है। ये पाठ हम कैसे तैयार करते हैं, यह [हमारे स्रोत](/hi/sources) पर पढ़ें।",
      },
      { h3: "क्या यह मुझे याद रखता है?" },
      {
        p: "उस तरह नहीं जैसे कोई दोस्त रखता है। इसे आपका पहला नाम और आपकी भाषा पता होती है। एक बातचीत के अंदर यह आपकी कही बातों को साथ लेकर चलता है। अगर आप वही बातचीत आगे बढ़ाते हैं, जैसे कॉल के बाद टाइप करके, तो इसे उस बातचीत का आख़िरी हिस्सा दिखाया जा सकता है ताकि आपको बात दोहरानी न पड़े। यह आपकी पुरानी बातचीतों से आपकी ज़िंदगी की कोई लगातार याद नहीं बनाता।",
      },

      { h2: "यह किन बातों में साथ दे सकता है", id: "what-it-helps-with" },
      {
        ul: [
          "मन में जो चल रहा है, उस पर बात करना: काम, परिवार, परीक्षा, कोई फ़ैसला, कोई डर, जीवन के उद्देश्य का सवाल।",
          "गीता के किसी श्लोक का अर्थ पूछना, या यह कि वह आपके दिन पर कैसे लागू हो सकता है।",
          "इतिहास और पुराणों की कोई कथा सुनना, और फिर उस पर बात करना।",
          "किसी सवाल को सोच-समझकर सुलझाना। यह अक्सर किसी कथा या श्लोक से जवाब देता है और आपसे भी सवाल पूछता है।",
        ],
      },
      {
        p: "यह हिंदी और अंग्रेज़ी बोलता है। ऐप की भाषा आप कभी भी **Profile > Language** में बदल सकते हैं।",
      },

      { h2: "यह क्या नहीं करेगा", id: "what-it-will-not-do" },
      {
        ul: [
          "यह इंसान होने का दावा नहीं करता। यह कृष्ण की शिक्षाएँ बताने के लिए पहले पुरुष में, कृष्ण की तरह बोलता है। यह बोलने का एक ढंग है, कोई दावा नहीं।",
          "यह इलाज, क़ानून या पैसों की सलाह के लिए नहीं है। यह भविष्य नहीं बताता और ज्योतिषीय उपाय नहीं सुझाता।",
          "यह शास्त्र, परंपरा या आपके गुरुओं की जगह नहीं लेता।",
          "जिन बातों का इसके उद्देश्य से कोई लेना-देना नहीं, जैसे रेसिपी या कोई भी फ़ुटकर जानकारी, उनसे यह बात को वापस मोड़ देता है।",
          "यह अपने निर्देश किसी को नहीं बताता।",
        ],
      },
      {
        note: "कृष्ण AI एक AI है, और इससे ग़लती हो सकती है, ऊपर लिखी सीमाओं को निभाने में भी। सेहत, पैसे या क़ानून से जुड़े फ़ैसलों के लिए कृपया इस पर निर्भर न रहें। जो बात काम आए उसे अपनाइए, बाक़ी छोड़ दीजिए।",
      },

      { h2: "कठिन पल", id: "hard-moments" },
      {
        p: "कृष्ण AI को निर्देश है कि वह कभी ऐसी किसी बात को बढ़ावा न दे जिससे आपको या किसी और को नुक़सान हो। उसे यह भी निर्देश है कि जब साफ़ लगे कि कोई गंभीर मुश्किल में है या ख़तरे में हो सकता है, तो वह ऐप के बाहर से मदद लेने की सलाह दे।",
      },
      {
        p: "बस इतना ही, और हम इसकी सीमाएँ साफ़ बताना चाहते हैं। इसमें कोई हेल्पलाइन नंबर पहले से नहीं डाला गया है। यह किसी को कॉल नहीं कर सकता, न मदद भेज सकता है। कोई इंसान बातचीत को उसी समय नहीं देखता। **कृष्ण AI आपातकाल के लिए नहीं बना है।**",
      },
      {
        note: "अगर आप या आपके पास कोई ख़तरे में है, तो अभी अपने इलाक़े का आपातकालीन नंबर मिलाइए। भारत में **112** डायल करें। आप **Tele-MANAS** को **14416** पर भी कॉल कर सकते हैं। यह भारत सरकार की मुफ़्त राष्ट्रीय हेल्पलाइन है, जिस पर किसी भी समय कॉल किया जा सकता है।",
      },

      { h2: "हम क्या रखते हैं और क्यों", id: "what-we-keep" },
      {
        ul: [
          "**लिखित ट्रांसक्रिप्ट**, हर बातचीत का: आपने क्या कहा और कृष्ण AI ने क्या कहा, टेक्स्ट में।",
          "**बातचीत की जानकारी**: कब हुई, कितनी देर चली, और अगर किसी कथा या श्लोक पर थी तो कौन-सी।",
          "**कोई ऑडियो नहीं।** हम आपकी आवाज़ की रिकॉर्डिंग नहीं रखते।",
        ],
      },
      {
        p: "हम ट्रांसक्रिप्ट इसलिए रखते हैं ताकि ऐप काम कर सके, जैसे आपकी पुरानी बातचीत दिखाना और किसी बातचीत को आगे बढ़ाना, और ताकि हम दिक़्क़तें ठीक कर सकें और जवाब बेहतर बना सकें। हमारे अंदरूनी टूल में किसी ट्रांसक्रिप्ट को पढ़ने के लिए ख़ास अनुमति और एक वजह बतानी पड़ती है, और हर बार पढ़ने का रिकॉर्ड रहता है। हम ट्रांसक्रिप्ट न कभी बेचते हैं, न सार्वजनिक करते हैं। पूरी जानकारी हमारी [गोपनीयता नीति](/hi/privacy-policy) में है।",
      },

      { h2: "इसे कैसे मिटाएँ", id: "delete" },
      {
        p: "ऐप में **Profile** खोलें, अपने नाम पर टैप करके **Account Details** खोलें, फिर **Delete Account** पर टैप करें। आप हमारे [अकाउंट डिलीट पेज](/hi/delete-account) पर भी कह सकते हैं।",
      },
      {
        p: "अगर आपका मन बदल जाए, इसलिए हम अकाउंट 30 दिन तक रोककर रखते हैं, फिर आपकी बातचीत, उनके ट्रांसक्रिप्ट, आपका नाम और संपर्क की जानकारी मिटा देते हैं। अगर आप जल्दी चाहते हैं, तो बता दीजिए, हम पहले कर देंगे। हम सिर्फ़ ऐसी गिनतियाँ रखते हैं जिनसे न यह पता चलता है कि आप कौन हैं, न यह कि आपने क्या कहा।",
      },
      {
        p: "अभी किसी एक बातचीत को मिटाने का बटन नहीं है। अगर आप अकाउंट डिलीट किए बिना कोई बातचीत हटवाना चाहते हैं, तो [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर लिखिए, हम उसे हटा देंगे।",
      },

      { h2: "हम \"AI\" खुलकर क्यों कहते हैं", id: "why-ai" },
      {
        p: "क्योंकि यह AI ही है। कृष्ण AI कृष्ण की आवाज़ में और पहले पुरुष में बोलता है, जो बहुत असली लग सकता है। हम नहीं चाहते कि कोई इसे स्वयं कृष्ण समझे, या यह सोचे कि दूसरी तरफ़ कोई इंसान है। इसीलिए ऐप में और इस वेबसाइट पर इसका नाम कृष्ण AI है।",
      },
      {
        p: "हमने इसे इसलिए बनाया ताकि लोग गीता खोल सकें और अपनी बातों पर सोच सकें। यह पावन शिक्षाओं से दृष्टिकोण देता है, आदेश नहीं, और किसी भी विषय पर आख़िरी शब्द होने का दावा नहीं करता।",
      },

      { h2: "ग़लत या चोट पहुँचाने वाले जवाब की शिकायत", id: "report" },
      {
        p: "अगर कृष्ण AI ने कुछ ग़लत कहा, कोई श्लोक ग़लत बोला, या कोई ऐसी बात कही जिससे चोट पहुँची, तो कृपया हमें बताइए। ऐप में **Profile > Give Feedback** खोलें और लिखें कि क्या हुआ। आप [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर ईमेल भी कर सकते हैं।",
      },
      {
        p: "अगर आप लगभग यह बता दें कि बातचीत कब हुई और क्या कहा गया, तो हमें आसानी होती है। हम हर शिकायत पढ़ते हैं, देखते हैं कि क्या ग़लत हुआ, और उस जवाब के पीछे के निर्देश या सामग्री को ठीक करते हैं।",
      },
    ],
  },
};
