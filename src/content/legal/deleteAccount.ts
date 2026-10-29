import type { Locale } from "@/lib/routes";
import type { LongDoc } from "@/content/types";

export const DOC: Record<Locale, LongDoc> = {
  en: {
    eyebrow: "Help",
    title: "Delete Your DivineSarathi Account",
    lede: "You can delete your DivineSarathi account and the personal data linked to it at any time, in the app or by writing to us. You do not need to have the app installed to ask.",
    summary: {
      title: "In short",
      items: [
        "In the app: **Profile**, then **Account details**, then **Delete account**.",
        "Without the app: email [founders@divinesarathi.in](mailto:founders@divinesarathi.in?subject=Delete%20my%20account) from the address you sign in with.",
        "We hold the account for 30 days in case you change your mind, then erase it. Sooner if you ask.",
        "Your details, profile, conversations and device identifiers are erased. Anonymous usage counts stay.",
        "Deleting your account does not cancel Sarathi Plus. Cancel it in the App Store or Google Play first.",
      ],
    },
    blocks: [
      { h2: "1. From the app", id: "in-app" },
      {
        ol: [
          "Open DivineSarathi and go to the **Profile** tab.",
          "Tap **Account details** under your name.",
          "Tap **Delete account**, tell us why if you like, and confirm.",
        ],
      },
      { p: "You are signed out straight away, and we stop sending you notifications." },

      { h2: "2. Without the app", id: "by-email" },
      {
        p: "Write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in?subject=Delete%20my%20account) from the email address you signed in with, with the subject “Delete my account”. Please include:",
      },
      {
        ul: [
          "your name",
          "the email address or phone number you sign in with, if it is different from the one you are writing from. If you signed in with your phone number, include that number",
          "anything you would like to tell us, if you want to",
        ],
      },
      {
        p: "We may write back to confirm the account is yours before deleting it. Once we have your request, we will confirm by email and delete the account within 30 days.",
      },

      { h2: "3. What gets deleted", id: "deleted" },
      {
        p: "We keep your account on hold for 30 days in case you change your mind, then erase it. If you want it gone sooner, say so and we will do it earlier. We erase:",
      },
      {
        ul: [
          "your name, email, phone number and sign-in details, including your Google or Apple sign-in ID",
          "your profile details, such as age, gender, date of birth and language",
          "your conversations with Krishna AI and their transcripts",
          "device and network identifiers, including push notification tokens, your IP address and the city worked out from it",
          "feedback and messages you have sent us",
        ],
      },

      { h2: "4. What we keep", id: "kept" },
      {
        ul: [
          "Anonymous usage counts, such as how many minutes of meditation were done or how many stories were played, with nothing that identifies you.",
          "A record of any Sarathi Plus purchase, without your name or contact details, for accounting and tax.",
          "App activity already sent to Google Analytics, which is linked only to a number and stays there until the retention period we set ends.",
        ],
      },
      {
        p: "If you bought Sarathi Plus, Apple or Google keep their own purchase records. **Deleting your account does not cancel the subscription.** Cancel it in the App Store or Google Play, as shown on our [Cancel and refunds](/refunds) page.",
      },

      { h2: "5. Changed your mind?", id: "undo" },
      {
        p: "If you write to us within the 30 days, we can restore your account as it was.",
      },

      { h2: "6. Questions", id: "questions" },
      {
        p: "Write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in). See also our [Privacy Policy](/privacy-policy).",
      },
    ],
  },

  hi: {
    eyebrow: "मदद",
    title: "अपना DivineSarathi अकाउंट डिलीट करें",
    translationNote: "यह हिंदी अनुवाद आपकी सुविधा के लिए है। किसी भी अंतर की स्थिति में अंग्रेज़ी संस्करण मान्य होगा।",
    lede: "आप जब चाहें अपना DivineSarathi अकाउंट और उससे जुड़ा निजी डेटा डिलीट कर सकते हैं, ऐप में या हमें लिखकर। इसके लिए फ़ोन में ऐप होना ज़रूरी नहीं है।",
    summary: {
      title: "संक्षेप में",
      items: [
        "ऐप में: **Profile**, फिर **Account details**, फिर **Delete account**।",
        "ऐप के बिना: जिस ईमेल से साइन इन करते हैं, उससे [founders@divinesarathi.in](mailto:founders@divinesarathi.in?subject=Delete%20my%20account) पर लिखें।",
        "आपका मन बदल जाए, इसलिए हम अकाउंट 30 दिन रोककर रखते हैं, फिर मिटा देते हैं। आप कहें तो पहले भी।",
        "आपकी जानकारी, प्रोफ़ाइल, बातचीत और डिवाइस के पहचान नंबर मिटा दिए जाते हैं। बिना पहचान वाली गिनतियाँ रहती हैं।",
        "अकाउंट डिलीट करने से Sarathi Plus रद्द नहीं होता। पहले उसे App Store या Google Play में रद्द करें।",
      ],
    },
    blocks: [
      { h2: "1. ऐप से", id: "in-app" },
      {
        ol: [
          "DivineSarathi खोलें और **Profile** टैब पर जाएँ।",
          "अपने नाम के नीचे **Account details** पर टैप करें।",
          "**Delete account** पर टैप करें, चाहें तो कारण बताएँ, और पुष्टि करें।",
        ],
      },
      { p: "आप तुरंत साइन आउट हो जाते हैं, और हम आपको नोटिफ़िकेशन भेजना बंद कर देते हैं।" },

      { h2: "2. ऐप के बिना", id: "by-email" },
      {
        p: "जिस ईमेल से आपने साइन इन किया था, उससे [founders@divinesarathi.in](mailto:founders@divinesarathi.in?subject=Delete%20my%20account) पर “Delete my account” विषय के साथ लिखें। इसमें ये बताएँ:",
      },
      {
        ul: [
          "आपका नाम",
          "जिस ईमेल या फ़ोन नंबर से आप साइन इन करते हैं, अगर वह उस ईमेल से अलग है जिससे आप लिख रहे हैं। अगर आपने फ़ोन नंबर से साइन इन किया था, तो वह नंबर ज़रूर लिखें",
          "कुछ और बताना चाहें, तो वह भी",
        ],
      },
      {
        p: "डिलीट करने से पहले हम पुष्टि के लिए आपको जवाब लिख सकते हैं कि अकाउंट आपका ही है। आपका अनुरोध मिलने पर हम ईमेल से पुष्टि करेंगे और 30 दिन के भीतर अकाउंट डिलीट कर देंगे।",
      },

      { h2: "3. क्या मिटाया जाता है", id: "deleted" },
      {
        p: "आपका मन बदल जाए, इसलिए हम अकाउंट 30 दिन रोककर रखते हैं, फिर मिटा देते हैं। अगर आप इसे पहले हटवाना चाहें, तो बताएँ, हम पहले कर देंगे। हम ये मिटाते हैं:",
      },
      {
        ul: [
          "आपका नाम, ईमेल, फ़ोन नंबर और साइन इन की जानकारी, Google या Apple की साइन इन ID समेत",
          "आपकी प्रोफ़ाइल की जानकारी, जैसे उम्र, लिंग, जन्मतिथि और भाषा",
          "कृष्ण AI से आपकी बातचीत और उसके ट्रांसक्रिप्ट",
          "डिवाइस और नेटवर्क के पहचान नंबर, जिनमें नोटिफ़िकेशन टोकन, आपका IP पता और उससे पता चला शहर शामिल हैं",
          "आपका भेजा फ़ीडबैक और संदेश",
        ],
      },

      { h2: "4. हम क्या रखते हैं", id: "kept" },
      {
        ul: [
          "बिना पहचान वाली गिनतियाँ, जैसे कितने मिनट ध्यान हुआ या कितनी कथाएँ सुनी गईं, जिनसे आपकी पहचान नहीं होती।",
          "Sarathi Plus की किसी भी ख़रीद का रिकॉर्ड, आपके नाम या संपर्क की जानकारी के बिना, हिसाब-किताब और टैक्स के लिए।",
          "Google Analytics तक पहले से पहुँची ऐप गतिविधि, जो सिर्फ़ एक नंबर से जुड़ी है और वहाँ तय की गई अवधि ख़त्म होने तक रहती है।",
        ],
      },
      {
        p: "अगर आपने Sarathi Plus लिया था, तो Apple या Google अपना ख़रीद रिकॉर्ड अलग से रखते हैं। **अकाउंट डिलीट करने से सब्सक्रिप्शन रद्द नहीं होता।** उसे App Store या Google Play में रद्द करें, जैसा हमारे [रद्द करना और रिफ़ंड](/hi/refunds) पेज पर बताया है।",
      },

      { h2: "5. मन बदल गया?", id: "undo" },
      {
        p: "अगर आप 30 दिन के भीतर हमें लिखते हैं, तो हम आपका अकाउंट पहले जैसा वापस चालू कर सकते हैं।",
      },

      { h2: "6. सवाल", id: "questions" },
      {
        p: "[founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर लिखें। हमारी [गोपनीयता नीति](/hi/privacy-policy) भी देखें।",
      },
    ],
  },
};
