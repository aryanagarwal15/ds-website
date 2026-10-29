import type { Locale } from "@/lib/routes";
import type { LongDoc } from "@/content/types";

export const DOC: Record<Locale, LongDoc> = {
  en: {
    eyebrow: "Help",
    title: "Cancel and Refunds",
    lede: "Cancel Sarathi Plus in the App Store or Google Play, wherever you bought it, and it stays on until the end of the period you paid for. Refunds are decided by Apple or Google, because they take the payment.",
    summary: {
      title: "In short",
      items: [
        "Cancel in the store you bought Plus from. Uninstalling the app does not cancel it, and neither does deleting your account.",
        "To avoid the next charge, cancel at least 24 hours before your current period ends.",
        "After you cancel, Plus stays on until the end of the period you paid for. Then you go back to the free voice allowance.",
        "Refunds for iPhone purchases are decided by Apple, at reportaproblem.apple.com. Refunds for Android purchases are decided by Google, through your Google Play order history.",
        "Stuck? Write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in).",
      ],
    },
    blocks: [
      { h2: "Cancel on iPhone or iPad", id: "cancel-iphone" },
      {
        ol: [
          "Open **Settings**.",
          "Tap **your name** at the top.",
          "Tap **Subscriptions**.",
          "Tap **DivineSarathi**.",
          "Tap **Cancel Subscription** and confirm.",
        ],
      },
      {
        p: "You can also open the App Store app, tap your picture at the top, then tap Subscriptions. If DivineSarathi is not in the list, you may have subscribed with a different Apple ID, or through Google Play.",
      },

      { h2: "Cancel on Android", id: "cancel-android" },
      {
        ol: [
          "Open the **Google Play Store** app.",
          "Tap your **profile picture** at the top right.",
          "Tap **Payments & subscriptions**, then **Subscriptions**.",
          "Tap **DivineSarathi**.",
          "Tap **Cancel subscription** and follow the steps.",
        ],
      },
      {
        p: "You can also go to [play.google.com/store/account/subscriptions](https://play.google.com/store/account/subscriptions), signed in with the Google account you used to subscribe.",
      },

      { h2: "What happens after you cancel", id: "after-cancel" },
      {
        ul: [
          "Plus stays on until the end of the period you have already paid for, and you are not charged again.",
          "When the period ends, voice goes back to the free allowance. Text chat, daily stories, the Gita and meditation stay free as before.",
          "You can subscribe again at any time from the app. The ₹99 first month is an introductory offer from the store, and is usually given only once per account.",
        ],
      },

      { h2: "Refunds", id: "refunds" },
      {
        p: "Sarathi Plus is bought through Apple or Google, so refunds follow their policies and they decide each request. We cannot issue refunds for store purchases ourselves.",
      },
      { h3: "Bought on iPhone or iPad (App Store)" },
      {
        ol: [
          "Go to [reportaproblem.apple.com](https://reportaproblem.apple.com) and sign in with your Apple ID.",
          "Choose **Request a refund** and pick a reason.",
          "Select your DivineSarathi purchase and submit.",
        ],
      },
      { h3: "Bought on Android (Google Play)" },
      {
        ol: [
          "Go to [play.google.com/store/account/orderhistory](https://play.google.com/store/account/orderhistory), signed in with the Google account you used.",
          "Find your DivineSarathi purchase.",
          "Choose **Request a refund** or **Report a problem**, and follow the steps.",
        ],
      },
      {
        p: "Google's [Play refund policy](https://support.google.com/googleplay/answer/2479637) explains when it can give a refund. If Google asks you to contact the developer, write to us with the order number from your Google Play receipt and we will look at it.",
      },
      { p: "If a refund is approved, Plus may end straight away." },

      { h2: "Deleting your account does not cancel Plus", id: "delete-account" },
      {
        p: "Your subscription is billed by Apple or Google, not by us, so deleting your DivineSarathi account does not stop it. Cancel in the store first, then delete your account in the app or on our [account deletion page](/delete-account).",
      },

      { h2: "Plus as a gift", id: "gifts" },
      {
        p: "If we gave you Plus for free, there is nothing to cancel. A gift ends on the date we show and never turns into a paid subscription.",
      },

      { h2: "Need help?", id: "help" },
      {
        p: "Write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in) with the email or phone number you sign in with, which store you bought from, and what happened. The full subscription terms are in our [Terms of Use](/terms).",
      },
    ],
  },

  hi: {
    eyebrow: "मदद",
    title: "सब्सक्रिप्शन रद्द करना और रिफ़ंड",
    translationNote: "यह हिंदी अनुवाद आपकी सुविधा के लिए है। किसी भी अंतर की स्थिति में अंग्रेज़ी संस्करण मान्य होगा।",
    lede: "Sarathi Plus को उसी स्टोर में रद्द करें जहाँ से लिया था, App Store या Google Play, और यह उस अवधि के आख़िर तक चालू रहेगा जिसका आपने भुगतान किया है। रिफ़ंड का फ़ैसला Apple या Google करते हैं, क्योंकि भुगतान वही लेते हैं।",
    summary: {
      title: "संक्षेप में",
      items: [
        "Plus उसी स्टोर में रद्द करें जहाँ से लिया था। ऐप अनइंस्टॉल करने से यह रद्द नहीं होता, और अकाउंट डिलीट करने से भी नहीं।",
        "अगला पैसा न कटे, इसके लिए मौजूदा अवधि ख़त्म होने से कम से कम 24 घंटे पहले रद्द करें।",
        "रद्द करने के बाद Plus आपकी भुगतान की हुई अवधि के आख़िर तक चालू रहता है। उसके बाद मुफ़्त वॉइस समय फिर से लागू हो जाता है।",
        "iPhone पर हुई ख़रीद के रिफ़ंड का फ़ैसला Apple reportaproblem.apple.com पर करता है। Android पर हुई ख़रीद के रिफ़ंड का फ़ैसला Google, आपकी Google Play order history के ज़रिए करता है।",
        "कहीं अटक गए? [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर लिखें।",
      ],
    },
    blocks: [
      { h2: "iPhone या iPad पर रद्द करें", id: "cancel-iphone" },
      {
        ol: [
          "**Settings** खोलें।",
          "सबसे ऊपर **अपने नाम** पर टैप करें।",
          "**Subscriptions** पर टैप करें।",
          "**DivineSarathi** पर टैप करें।",
          "**Cancel Subscription** पर टैप करके पुष्टि करें।",
        ],
      },
      {
        p: "आप App Store ऐप खोलकर, ऊपर अपनी फ़ोटो पर टैप करके, फिर Subscriptions पर टैप करके भी यह कर सकते हैं। अगर लिस्ट में DivineSarathi नहीं दिखता, तो हो सकता है आपने किसी दूसरे Apple ID से, या Google Play से सब्सक्राइब किया हो।",
      },

      { h2: "Android पर रद्द करें", id: "cancel-android" },
      {
        ol: [
          "**Google Play Store** ऐप खोलें।",
          "ऊपर दाईं ओर अपनी **प्रोफ़ाइल फ़ोटो** पर टैप करें।",
          "**Payments & subscriptions** पर, फिर **Subscriptions** पर टैप करें।",
          "**DivineSarathi** पर टैप करें।",
          "**Cancel subscription** पर टैप करें और आगे के क़दम पूरे करें।",
        ],
      },
      {
        p: "आप उसी Google अकाउंट से साइन इन करके, जिससे सब्सक्राइब किया था, [play.google.com/store/account/subscriptions](https://play.google.com/store/account/subscriptions) पर भी जा सकते हैं।",
      },

      { h2: "रद्द करने के बाद क्या होता है", id: "after-cancel" },
      {
        ul: [
          "Plus उस अवधि के आख़िर तक चालू रहता है जिसका आप भुगतान कर चुके हैं, और आगे कोई पैसा नहीं कटता।",
          "अवधि ख़त्म होने पर वॉइस का मुफ़्त समय फिर से लागू हो जाता है। टेक्स्ट चैट, रोज़ की कथाएँ, गीता और ध्यान पहले की तरह मुफ़्त रहते हैं।",
          "आप जब चाहें ऐप से दोबारा सब्सक्राइब कर सकते हैं। ₹99 वाला पहला महीना स्टोर का शुरुआती ऑफ़र है, और आमतौर पर हर अकाउंट को एक ही बार मिलता है।",
        ],
      },

      { h2: "रिफ़ंड", id: "refunds" },
      {
        p: "Sarathi Plus, Apple या Google के ज़रिए ख़रीदा जाता है, इसलिए रिफ़ंड उनकी नीतियों के हिसाब से होते हैं और हर अनुरोध पर फ़ैसला वही करते हैं। स्टोर से हुई ख़रीद का रिफ़ंड हम ख़ुद नहीं दे सकते।",
      },
      { h3: "iPhone या iPad पर ख़रीदा (App Store)" },
      {
        ol: [
          "[reportaproblem.apple.com](https://reportaproblem.apple.com) पर जाएँ और अपने Apple ID से साइन इन करें।",
          "**Request a refund** चुनें और कारण बताएँ।",
          "अपनी DivineSarathi ख़रीद चुनें और भेज दें।",
        ],
      },
      { h3: "Android पर ख़रीदा (Google Play)" },
      {
        ol: [
          "जिस Google अकाउंट से ख़रीदा था, उससे साइन इन करके [play.google.com/store/account/orderhistory](https://play.google.com/store/account/orderhistory) पर जाएँ।",
          "अपनी DivineSarathi ख़रीद ढूँढें।",
          "**Request a refund** या **Report a problem** चुनें और आगे के क़दम पूरे करें।",
        ],
      },
      {
        p: "Google किन हालात में रिफ़ंड देता है, यह उसकी [Play refund policy](https://support.google.com/googleplay/answer/2479637) में लिखा है। अगर Google आपसे डेवलपर से संपर्क करने को कहे, तो अपनी Google Play रसीद का order number लिखकर हमें भेजें, हम उसे देखेंगे।",
      },
      { p: "रिफ़ंड मंज़ूर होने पर Plus तुरंत बंद हो सकता है।" },

      { h2: "अकाउंट डिलीट करने से Plus रद्द नहीं होता", id: "delete-account" },
      {
        p: "आपके सब्सक्रिप्शन का बिल Apple या Google लेते हैं, हम नहीं, इसलिए DivineSarathi अकाउंट डिलीट करने से वह नहीं रुकता। पहले स्टोर में रद्द करें, फिर ऐप में या हमारे [अकाउंट डिलीट करने वाले पेज](/hi/delete-account) पर अपना अकाउंट डिलीट करें।",
      },

      { h2: "उपहार में मिला Plus", id: "gifts" },
      {
        p: "अगर हमने आपको Plus मुफ़्त दिया है, तो रद्द करने को कुछ नहीं है। उपहार हमारी बताई तारीख़ पर ख़त्म हो जाता है और कभी पेड सब्सक्रिप्शन में नहीं बदलता।",
      },

      { h2: "मदद चाहिए?", id: "help" },
      {
        p: "[founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर लिखें। साथ में वह ईमेल या फ़ोन नंबर बताएँ जिससे आप साइन इन करते हैं, किस स्टोर से ख़रीदा था, और क्या हुआ। सब्सक्रिप्शन की पूरी शर्तें हमारी [उपयोग की शर्तें](/hi/terms) में हैं।",
      },
    ],
  },
};
