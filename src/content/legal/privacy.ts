import type { Locale } from "@/lib/routes";
import type { LongDoc } from "@/content/types";

export const DOC: Record<Locale, LongDoc> = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    lede: "We collect what you give us when you sign up and talk with Krishna AI, plus basic details about how you use the app and the device you use it on. We use it to run DivineSarathi, keep your conversations going, fix problems, improve the app and measure our own ads, and we never sell it.",
    summary: {
      title: "In short",
      items: [
        "**We never save your voice.** It is streamed live to Microsoft's Azure OpenAI service so Krishna AI can reply, and we do not store the audio.",
        "**We keep text transcripts** of your conversations so Krishna AI can pick up where you left off, and so we can improve the app.",
        "**We never sell your personal data.**",
        "**We measure our own ads only.** App activity goes to Google Analytics for Firebase to see which of our Google ads work. There are no ads in the app, and we do not track you across other companies' apps or websites.",
        "**Payments for Sarathi Plus go through Apple or Google.** We never see your card or bank details.",
        "**You can delete your account and its data at any time**, in the app or on our [account deletion page](/delete-account).",
        "Questions or complaints go straight to the founders at [founders@divinesarathi.in](mailto:founders@divinesarathi.in).",
      ],
    },
    blocks: [
      { h2: "Who we are", id: "who-we-are" },
      {
        p: "DivineSarathi is run by **DivineSarathi Private Limited** in India (“we”, “us”, “our”). This policy covers the DivineSarathi app for iPhone and Android and our website, divinesarathi.in. Under India's Digital Personal Data Protection Act, 2023, we are responsible for your personal data as its Data Fiduciary.",
      },

      { h2: "What we collect", id: "what-we-collect" },
      {
        table: {
          head: ["Data", "Why we need it", "Kept until"],
          rows: [
            [
              "**Account details:** your name, your email address or phone number, and your Google or Apple sign-in ID if you use one",
              "To create your account, sign you in and greet you by name",
              "You delete your account",
            ],
            [
              "**Profile details you choose to add:** age, gender, date of birth and language",
              "To fit the app and Krishna AI's replies to you, for example in Hindi or English",
              "You delete your account",
            ],
            [
              "**Conversations with Krishna AI:** text transcripts of what you say and what Krishna AI replies, by voice or by text",
              "So a conversation can continue where it left off, and to improve how Krishna AI answers",
              "You delete your account",
            ],
            [
              "**Your voice:** the audio of a voice conversation while it is happening",
              "Streamed live to Azure OpenAI so Krishna AI can hear and answer you",
              "Never stored by us",
            ],
            [
              "**App activity:** the features you use, such as stories, Gita verses, Daily Sadhana, meditation and favourites, your sessions, and how long each voice conversation lasts",
              "To run features such as your free voice allowance or Plus time, to learn what people find useful, and to measure our own ads",
              "On our servers, until you delete your account, then kept with nothing that identifies you. In Google Analytics, for the retention period we set there",
            ],
            [
              "**Device details and identifiers:** your account ID, push notification tokens, the Firebase app instance ID, device model, app version and, on Android, the advertising ID",
              "To keep you signed in, send the notifications you allow, count installs and measure our own ads",
              "You delete your account, or the token stops working",
            ],
            [
              "**Approximate location:** city, state and country worked out from your IP address. We never use GPS",
              "To understand where people use DivineSarathi and to spot misuse",
              "We keep only the latest one, and erase it when you delete your account",
            ],
            [
              "**Diagnostics:** server logs, error reports and crash details",
              "To find and fix problems and keep the service safe",
              "As long as we need them to fix problems. Request details linked to you are erased when you delete your account",
            ],
            [
              "**Purchases:** if you buy Sarathi Plus, the plan, its status, renewal dates and store transaction IDs",
              "To turn Plus on, show your voice time and handle renewals",
              "As long as accounting and tax law need them. After you delete your account, they are kept without your name or contact details",
            ],
            [
              "**Feedback and messages:** what you send us through the app's feedback form, by email or through the website",
              "To answer you and improve DivineSarathi",
              "You delete your account, or sooner if you ask",
            ],
            [
              "**Consent records:** when you agreed to our terms and this policy",
              "To show we have your consent, as the law expects",
              "Kept, without your IP address once you delete your account",
            ],
            [
              "**On our website:** pages you visit, through Google Analytics cookies, and the link or ad that brought you when you tap a download button",
              "To understand how people find DivineSarathi and to measure our ads",
              "For the retention period we set in Google Analytics. Download taps are not linked to an account",
            ],
          ],
        },
      },
      {
        p: "Your name and profile details are optional. You need either an email address or a phone number to sign in, or a Google or Apple account. We do not collect your contacts, photos, files, precise location or health data, and we never see your card or bank details.",
      },
      {
        p: "**Cookies.** Our website uses cookies and similar technologies to keep it working and secure, remember preferences and measure how it is used, mainly through Google Analytics. You can block or delete cookies in your browser settings.",
      },

      { h2: "How we use it", id: "how-we-use-it" },
      {
        ul: [
          "**To run the app:** sign you in, keep your conversations going, show your voice allowance or Plus time, and send the reminders and notifications you allow.",
          "**To fit it to you:** use your language and what you have told us so that replies make sense for you.",
          "**To improve DivineSarathi:** including the instructions and AI models behind Krishna AI's replies. This can mean our team reading conversation transcripts.",
          "**To measure our own ads:** app events, such as starting a practice or coming back the next day, go to Google Analytics for Firebase and are used in Google Ads to see which of our ads bring people who use the app. We do not show ads in the app, and we do not track you across other companies' apps or websites. On iPhone we do not ask for or use the advertising identifier (IDFA).",
          "**To keep the service safe:** spot misuse, fraud and abuse.",
          "**To follow the law:** keep the records the law requires and answer lawful requests.",
          "**To write to you:** about your account and, if you allow notifications, about stories and your practice.",
        ],
      },
      { p: "We never sell your personal data." },
      {
        p: "On Android you can reset or delete your advertising ID in your phone's settings, usually under Google, then Ads, or under Privacy, then Ads. You can turn off notifications at any time in your phone's settings.",
      },

      { h2: "Who processes it", id: "who-processes-it" },
      {
        p: "We use a small number of services to run DivineSarathi. They handle data for us under their contracts with us, for the purpose shown here.",
      },
      {
        table: {
          head: ["Service", "What it does for us", "What it receives"],
          rows: [
            [
              "**Google Cloud**",
              "Hosts our servers and database in Mumbai, India",
              "The data we store, as listed above",
            ],
            [
              "**Microsoft Azure OpenAI**",
              "Powers Krishna AI's voice and text replies, and live narration",
              "Your voice while you talk, your messages, and the context Krishna AI needs to reply",
            ],
            [
              "**Google Analytics for Firebase**",
              "App analytics, and measuring our own ads with Google Ads",
              "App activity, your account ID, the Firebase app instance ID and, on Android, the advertising ID",
            ],
            [
              "**Google Analytics**",
              "Website analytics",
              "Pages visited, approximate location and device type, through cookies",
            ],
            [
              "**Apple Push Notification service** and **Firebase Cloud Messaging**",
              "Deliver notifications on iPhone and Android",
              "Your push token and the notification text",
            ],
            [
              "**OneSignal**",
              "Delivered notifications in app versions before 1.28. We are retiring it",
              "Your push token and basic device details",
            ],
            [
              "**RevenueCat**",
              "Confirms Sarathi Plus purchases and renewals with the stores",
              "Your DivineSarathi user ID, basic device details and the store's purchase records, not your name, email or payment details",
            ],
            [
              "**Apple App Store** and **Google Play**",
              "Sell and bill Sarathi Plus",
              "Your purchase, under Apple's and Google's own privacy policies",
            ],
            [
              "**Sign in with Apple** and **Google Sign-In**",
              "Let you sign in without a password",
              "What you agree to share with us, usually your name and email address",
            ],
            ["**MSG91**", "Sends sign-in codes by SMS", "Your phone number"],
            ["**Google (Gmail)**", "Sends sign-in codes by email", "Your email address"],
            [
              "**Sentry**",
              "Monitors our servers for errors",
              "Error details, which can include your IP address and account ID",
            ],
          ],
        },
      },
      {
        p: "Some of these services may process data outside India. When they do, we rely on their contracts and security commitments, and we follow Indian law on transfers.",
      },
      {
        p: "We may also share data with companies in our own group, if we ever have any, and where the law requires it or to protect someone's safety.",
      },

      { h2: "Sarathi Plus purchases", id: "sarathi-plus" },
      {
        p: "Sarathi Plus is sold through the App Store and Google Play. Apple or Google take the payment, and we never see your card or bank details. We use RevenueCat, a subscription service, to confirm purchases and renewals with the stores. RevenueCat receives your DivineSarathi user ID, basic device details and the store's purchase records, not your name, email or payment details.",
      },
      {
        p: "We record how long each voice conversation lasts so we can show your free allowance or your Plus time. See our [Terms of Use](/terms) for how the subscription works, and [Cancel and refunds](/refunds) for cancelling.",
      },

      { h2: "Children", id: "children" },
      {
        p: "DivineSarathi is meant for people aged 9 and over. If you are under 18, you may use it only with verifiable consent from a parent or guardian, where local law allows. If you are a parent and think your child is using DivineSarathi without your consent, write to us and we will delete the account.",
      },

      { h2: "How long we keep it", id: "retention" },
      {
        p: "We keep data only as long as we need it to run DivineSarathi and to meet our legal duties. The table above shows the period for each kind of data.",
      },
      {
        p: "You can delete your account and its data at any time, in the app (Profile, Account details, Delete account) or on our [account deletion page](/delete-account). We hold the account for 30 days in case you change your mind, then erase it. If you want it gone sooner, tell us.",
      },
      { p: "After an account is erased, we still keep:" },
      {
        ul: [
          "anonymous usage counts, such as minutes of meditation or stories played, with nothing that identifies you",
          "records of any Sarathi Plus purchase, without your name or contact details, for accounting and tax",
          "a record that you gave consent, without your IP address",
          "app activity already sent to Google Analytics, which is linked only to a number and stays until the retention period we set there ends",
        ],
      },
      {
        p: "Erased data can remain in our encrypted backups for a short time, until those backups are replaced.",
      },

      { h2: "Your rights", id: "your-rights" },
      {
        p: "Under India's Digital Personal Data Protection Act, 2023, and wherever else the law gives you these rights, you can:",
      },
      {
        ul: [
          "**Access:** ask for a summary of the personal data we hold about you, what we do with it, and who we have shared it with.",
          "**Correct:** correct, complete or update your data. You can change most of it yourself in Profile.",
          "**Erase:** delete your account and its data, as described above.",
          "**Withdraw consent:** at any time, as easily as you gave it. Some things the app cannot do without certain data, so withdrawing may mean closing your account.",
          "**Raise a grievance:** complain to us about how we handle your data, and if you are not satisfied with our answer, complain to the Data Protection Board of India.",
          "**Nominate:** name someone who can use these rights for you if you die or are unable to act.",
        ],
      },
      {
        p: "To use any of these rights, write to [founders@divinesarathi.in](mailto:founders@divinesarathi.in) from the email address or with the phone number linked to your account. We may ask you to confirm the account is yours. We reply within the time the law sets.",
      },

      { h2: "Security", id: "security" },
      {
        p: "We encrypt data in transit, limit who on our team can reach personal data, and keep logs of that access. No system is perfectly secure. Since you sign in with your email, phone, Google or Apple account, please keep those safe. If a breach affects your personal data, we will tell you and the Data Protection Board of India as the law requires.",
      },

      { h2: "Changes to this policy", id: "changes" },
      {
        p: "We may update this policy. The date at the top shows when it last changed. If a change is significant, we will tell you in the app or by email.",
      },

      { h2: "Contact and grievances", id: "contact" },
      {
        p: "DivineSarathi Private Limited, India. Email [founders@divinesarathi.in](mailto:founders@divinesarathi.in) with any question or complaint about your privacy.",
      },
      {
        p: "The founders of DivineSarathi handle privacy questions and grievances themselves. Please write to us first. If you are not satisfied with our answer, you can complain to the Data Protection Board of India.",
      },
    ],
  },

  hi: {
    eyebrow: "नियम",
    title: "गोपनीयता नीति",
    translationNote: "यह हिंदी अनुवाद आपकी सुविधा के लिए है। किसी भी अंतर की स्थिति में अंग्रेज़ी संस्करण मान्य होगा।",
    lede: "आप साइन अप करते समय और कृष्ण AI से बात करते समय जो जानकारी देते हैं, वह हम लेते हैं, साथ में यह भी कि आप ऐप कैसे इस्तेमाल करते हैं और किस डिवाइस पर। इसका उपयोग हम DivineSarathi चलाने, आपकी बातचीत आगे बढ़ाने, दिक़्क़तें ठीक करने, ऐप बेहतर बनाने और अपने विज्ञापनों को मापने के लिए करते हैं, और इसे कभी बेचते नहीं।",
    summary: {
      title: "संक्षेप में",
      items: [
        "**हम आपकी आवाज़ कभी सेव नहीं करते।** कृष्ण AI जवाब दे सके, इसके लिए आवाज़ उसी समय Microsoft की Azure OpenAI सेवा तक जाती है, और हम ऑडियो नहीं रखते।",
        "**हम आपकी बातचीत का लिखित रिकॉर्ड (ट्रांसक्रिप्ट) रखते हैं**, ताकि कृष्ण AI वहीं से बात आगे बढ़ा सके जहाँ आपने छोड़ी थी, और हम ऐप बेहतर बना सकें।",
        "**हम आपका निजी डेटा कभी नहीं बेचते।**",
        "**हम सिर्फ़ अपने विज्ञापन मापते हैं।** हमारे कौन से Google विज्ञापन काम कर रहे हैं, यह देखने के लिए ऐप की गतिविधि Google Analytics for Firebase तक जाती है। ऐप में कोई विज्ञापन नहीं है, और हम दूसरी कंपनियों के ऐप या वेबसाइटों पर आपको ट्रैक नहीं करते।",
        "**Sarathi Plus का भुगतान Apple या Google के ज़रिए होता है।** आपके कार्ड या बैंक की जानकारी हम कभी नहीं देखते।",
        "**आप जब चाहें अपना अकाउंट और उसका डेटा डिलीट कर सकते हैं**, ऐप में या हमारे [अकाउंट डिलीट करने वाले पेज](/hi/delete-account) पर।",
        "सवाल या शिकायत सीधे संस्थापकों को भेजें: [founders@divinesarathi.in](mailto:founders@divinesarathi.in)।",
      ],
    },
    blocks: [
      { h2: "हम कौन हैं", id: "who-we-are" },
      {
        p: "DivineSarathi को भारत की कंपनी **DivineSarathi Private Limited** चलाती है (“हम”)। यह नीति iPhone और Android के DivineSarathi ऐप और हमारी वेबसाइट divinesarathi.in पर लागू होती है। भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत आपके निजी डेटा की ज़िम्मेदारी डेटा फ़िड्यूशियरी के रूप में हमारी है।",
      },

      { h2: "हम क्या जानकारी लेते हैं", id: "what-we-collect" },
      {
        table: {
          head: ["जानकारी", "क्यों चाहिए", "कब तक रखते हैं"],
          rows: [
            [
              "**अकाउंट की जानकारी:** आपका नाम, ईमेल या फ़ोन नंबर, और अगर आप Google या Apple से साइन इन करते हैं तो उसकी ID",
              "अकाउंट बनाने, साइन इन कराने और आपको नाम से बुलाने के लिए",
              "जब तक आप अकाउंट डिलीट न करें",
            ],
            [
              "**प्रोफ़ाइल की जानकारी जो आप ख़ुद जोड़ें:** उम्र, लिंग, जन्मतिथि और भाषा",
              "ऐप और कृष्ण AI के जवाबों को आपके हिसाब से ढालने के लिए, जैसे हिंदी या अंग्रेज़ी में",
              "जब तक आप अकाउंट डिलीट न करें",
            ],
            [
              "**कृष्ण AI से बातचीत:** आपने क्या कहा और कृष्ण AI ने क्या जवाब दिया, इसका लिखित रिकॉर्ड, चाहे बात आवाज़ में हुई हो या टेक्स्ट में",
              "ताकि बातचीत वहीं से आगे बढ़ सके जहाँ छूटी थी, और कृष्ण AI के जवाब बेहतर हों",
              "जब तक आप अकाउंट डिलीट न करें",
            ],
            [
              "**आपकी आवाज़:** वॉइस बातचीत के दौरान का ऑडियो",
              "उसी समय Azure OpenAI तक जाती है ताकि कृष्ण AI आपको सुनकर जवाब दे सके",
              "हम इसे कभी सेव नहीं करते",
            ],
            [
              "**ऐप में गतिविधि:** आप कौन से फ़ीचर इस्तेमाल करते हैं, जैसे कथाएँ, गीता के श्लोक, Daily Sadhana, ध्यान और पसंदीदा, आपके सेशन, और हर वॉइस बातचीत कितनी देर चली",
              "मुफ़्त वॉइस समय या Plus का समय दिखाने जैसे फ़ीचर चलाने, यह समझने कि लोगों को क्या काम का लगता है, और अपने विज्ञापन मापने के लिए",
              "हमारे सर्वर पर, अकाउंट डिलीट होने तक, उसके बाद ऐसी जानकारी के बिना जिससे आपकी पहचान हो। Google Analytics में, उतने समय तक जितना हमने वहाँ तय किया है",
            ],
            [
              "**डिवाइस की जानकारी और पहचान नंबर:** आपकी अकाउंट ID, नोटिफ़िकेशन टोकन, Firebase app instance ID, डिवाइस मॉडल, ऐप वर्ज़न, और Android पर advertising ID",
              "आपको साइन इन रखने, आपकी इजाज़त वाले नोटिफ़िकेशन भेजने, इंस्टॉल गिनने और अपने विज्ञापन मापने के लिए",
              "जब तक आप अकाउंट डिलीट न करें या टोकन काम करना बंद न कर दे",
            ],
            [
              "**अंदाज़न लोकेशन:** आपके IP पते से पता चलने वाला शहर, राज्य और देश। हम GPS का कभी उपयोग नहीं करते",
              "यह समझने के लिए कि DivineSarathi कहाँ इस्तेमाल होता है, और ग़लत इस्तेमाल पकड़ने के लिए",
              "हम सिर्फ़ सबसे नई लोकेशन रखते हैं, और अकाउंट डिलीट होने पर उसे मिटा देते हैं",
            ],
            [
              "**तकनीकी जानकारी:** सर्वर लॉग, एरर रिपोर्ट और क्रैश की जानकारी",
              "दिक़्क़तें ढूँढकर ठीक करने और सेवा सुरक्षित रखने के लिए",
              "जब तक दिक़्क़तें ठीक करने के लिए ज़रूरी हो। आपसे जुड़ी रिक्वेस्ट की जानकारी अकाउंट डिलीट होने पर मिटा दी जाती है",
            ],
            [
              "**ख़रीदारी:** अगर आप Sarathi Plus लेते हैं, तो प्लान, उसकी स्थिति, रिन्यूअल की तारीख़ें और स्टोर की ट्रांज़ैक्शन ID",
              "Plus चालू करने, आपका वॉइस समय दिखाने और रिन्यूअल संभालने के लिए",
              "जब तक हिसाब-किताब और टैक्स के क़ानून के लिए ज़रूरी हो। अकाउंट डिलीट होने के बाद, आपके नाम या संपर्क की जानकारी के बिना",
            ],
            [
              "**फ़ीडबैक और संदेश:** जो आप ऐप के फ़ीडबैक फ़ॉर्म, ईमेल या वेबसाइट से हमें भेजते हैं",
              "आपको जवाब देने और DivineSarathi बेहतर बनाने के लिए",
              "जब तक आप अकाउंट डिलीट न करें, या आप कहें तो उससे पहले",
            ],
            [
              "**सहमति का रिकॉर्ड:** आपने हमारी शर्तों और इस नीति को कब स्वीकार किया",
              "यह दिखाने के लिए कि आपकी सहमति ली गई थी, जैसा क़ानून चाहता है",
              "रखा जाता है, अकाउंट डिलीट होने के बाद आपके IP पते के बिना",
            ],
            [
              "**हमारी वेबसाइट पर:** आप कौन से पेज देखते हैं, Google Analytics कुकीज़ के ज़रिए, और डाउनलोड बटन दबाने पर कौन सा लिंक या विज्ञापन आपको यहाँ लाया",
              "यह समझने के लिए कि लोग DivineSarathi तक कैसे पहुँचते हैं, और अपने विज्ञापन मापने के लिए",
              "उतने समय तक जितना हमने Google Analytics में तय किया है। डाउनलोड बटन के टैप किसी अकाउंट से नहीं जुड़ते",
            ],
          ],
        },
      },
      {
        p: "नाम और प्रोफ़ाइल की जानकारी देना आपकी मर्ज़ी है। साइन इन के लिए ईमेल या फ़ोन नंबर में से एक, या Google या Apple अकाउंट चाहिए। हम आपके कॉन्टैक्ट, फ़ोटो, फ़ाइलें, सटीक लोकेशन या सेहत से जुड़ी जानकारी नहीं लेते, और आपके कार्ड या बैंक की जानकारी कभी नहीं देखते।",
      },
      {
        p: "**कुकीज़।** हमारी वेबसाइट कुकीज़ और ऐसी ही तकनीकों का उपयोग करती है, ताकि वह ठीक और सुरक्षित चले, आपकी पसंद याद रखे और यह मापा जा सके कि उसे कैसे इस्तेमाल किया जाता है, ज़्यादातर Google Analytics के ज़रिए। आप अपने ब्राउज़र की सेटिंग में कुकीज़ रोक या मिटा सकते हैं।",
      },

      { h2: "हम इसका उपयोग कैसे करते हैं", id: "how-we-use-it" },
      {
        ul: [
          "**ऐप चलाने के लिए:** साइन इन कराना, बातचीत आगे बढ़ाना, आपका मुफ़्त वॉइस समय या Plus का समय दिखाना, और आपकी इजाज़त वाले रिमाइंडर और नोटिफ़िकेशन भेजना।",
          "**आपके हिसाब से ढालने के लिए:** आपकी भाषा और आपने जो बताया है, उसका ध्यान रखना ताकि जवाब आपके लिए मायने रखें।",
          "**DivineSarathi बेहतर बनाने के लिए:** इसमें कृष्ण AI के जवाबों के पीछे के निर्देश और AI मॉडल भी शामिल हैं। इसके लिए हमारी टीम बातचीत के ट्रांसक्रिप्ट पढ़ सकती है।",
          "**अपने विज्ञापन मापने के लिए:** ऐप की कुछ घटनाएँ, जैसे कोई अभ्यास शुरू करना या अगले दिन वापस आना, Google Analytics for Firebase तक जाती हैं, और Google Ads में यह देखने के लिए इस्तेमाल होती हैं कि हमारे कौन से विज्ञापन ऐसे लोगों को लाते हैं जो ऐप इस्तेमाल करते हैं। ऐप में हम कोई विज्ञापन नहीं दिखाते, और दूसरी कंपनियों के ऐप या वेबसाइटों पर आपको ट्रैक नहीं करते। iPhone पर हम advertising identifier (IDFA) न माँगते हैं, न उसका उपयोग करते हैं।",
          "**सेवा सुरक्षित रखने के लिए:** ग़लत इस्तेमाल, धोखाधड़ी और दुरुपयोग पकड़ना।",
          "**क़ानून का पालन करने के लिए:** क़ानून के मुताबिक़ ज़रूरी रिकॉर्ड रखना और वैध अनुरोधों का जवाब देना।",
          "**आपसे संपर्क करने के लिए:** आपके अकाउंट के बारे में, और अगर आपने नोटिफ़िकेशन की इजाज़त दी है तो कथाओं और आपके अभ्यास के बारे में।",
        ],
      },
      { p: "हम आपका निजी डेटा कभी नहीं बेचते।" },
      {
        p: "Android पर आप फ़ोन की सेटिंग में अपना advertising ID रीसेट या डिलीट कर सकते हैं, आमतौर पर Google, फिर Ads में, या Privacy, फिर Ads में। नोटिफ़िकेशन आप कभी भी फ़ोन की सेटिंग से बंद कर सकते हैं।",
      },

      { h2: "आपका डेटा कौन प्रोसेस करता है", id: "who-processes-it" },
      {
        p: "DivineSarathi चलाने के लिए हम कुछ सेवाओं की मदद लेते हैं। ये हमारे साथ हुए अनुबंध के तहत, नीचे लिखे काम के लिए ही, हमारी ओर से डेटा संभालती हैं।",
      },
      {
        table: {
          head: ["सेवा", "हमारे लिए क्या करती है", "उसे क्या मिलता है"],
          rows: [
            [
              "**Google Cloud**",
              "हमारे सर्वर और डेटाबेस मुंबई, भारत में चलाती है",
              "ऊपर लिखा वह डेटा जो हम रखते हैं",
            ],
            [
              "**Microsoft Azure OpenAI**",
              "कृष्ण AI के वॉइस और टेक्स्ट जवाब, और लाइव कथा-वाचन",
              "बात करते समय आपकी आवाज़, आपके संदेश, और जवाब देने के लिए ज़रूरी संदर्भ",
            ],
            [
              "**Google Analytics for Firebase**",
              "ऐप का एनालिटिक्स, और Google Ads के साथ अपने विज्ञापन मापना",
              "ऐप में गतिविधि, आपकी अकाउंट ID, Firebase app instance ID, और Android पर advertising ID",
            ],
            [
              "**Google Analytics**",
              "वेबसाइट का एनालिटिक्स",
              "देखे गए पेज, अंदाज़न लोकेशन और डिवाइस का प्रकार, कुकीज़ के ज़रिए",
            ],
            [
              "**Apple Push Notification service** और **Firebase Cloud Messaging**",
              "iPhone और Android पर नोटिफ़िकेशन पहुँचाती हैं",
              "आपका नोटिफ़िकेशन टोकन और नोटिफ़िकेशन का टेक्स्ट",
            ],
            [
              "**OneSignal**",
              "ऐप के 1.28 से पुराने वर्ज़न में नोटिफ़िकेशन पहुँचाती थी। हम इसे बंद कर रहे हैं",
              "आपका नोटिफ़िकेशन टोकन और डिवाइस की बुनियादी जानकारी",
            ],
            [
              "**RevenueCat**",
              "स्टोर से Sarathi Plus की ख़रीद और रिन्यूअल की पुष्टि करती है",
              "आपकी DivineSarathi यूज़र ID, डिवाइस की बुनियादी जानकारी और स्टोर का ख़रीद रिकॉर्ड, आपका नाम, ईमेल या भुगतान की जानकारी नहीं",
            ],
            [
              "**Apple App Store** और **Google Play**",
              "Sarathi Plus बेचते हैं और उसका बिल लेते हैं",
              "आपकी ख़रीद, Apple और Google की अपनी गोपनीयता नीतियों के तहत",
            ],
            [
              "**Sign in with Apple** और **Google Sign-In**",
              "बिना पासवर्ड साइन इन करने देती हैं",
              "जो आप हमारे साथ साझा करने को राज़ी हों, आमतौर पर नाम और ईमेल",
            ],
            ["**MSG91**", "SMS से साइन इन कोड भेजती है", "आपका फ़ोन नंबर"],
            ["**Google (Gmail)**", "ईमेल से साइन इन कोड भेजती है", "आपका ईमेल पता"],
            [
              "**Sentry**",
              "हमारे सर्वर पर एरर पर नज़र रखती है",
              "एरर की जानकारी, जिसमें आपका IP पता और अकाउंट ID हो सकते हैं",
            ],
          ],
        },
      },
      {
        p: "इनमें से कुछ सेवाएँ भारत के बाहर भी डेटा प्रोसेस कर सकती हैं। ऐसे में हम उनके अनुबंध और सुरक्षा के वादों पर भरोसा करते हैं, और डेटा बाहर भेजने से जुड़े भारतीय क़ानून का पालन करते हैं।",
      },
      {
        p: "हम अपने समूह की कंपनियों के साथ भी डेटा साझा कर सकते हैं, अगर कभी ऐसी कंपनियाँ हों, और तब भी जब क़ानून ऐसा माँगे या किसी की सुरक्षा के लिए ज़रूरी हो।",
      },

      { h2: "Sarathi Plus की ख़रीद", id: "sarathi-plus" },
      {
        p: "Sarathi Plus, App Store और Google Play के ज़रिए बिकता है। भुगतान Apple या Google लेते हैं, और आपके कार्ड या बैंक की जानकारी हम कभी नहीं देखते। स्टोर से ख़रीद और रिन्यूअल की पुष्टि के लिए हम RevenueCat नाम की सब्सक्रिप्शन सेवा का उपयोग करते हैं। RevenueCat को आपकी DivineSarathi यूज़र ID, डिवाइस की बुनियादी जानकारी और स्टोर का ख़रीद रिकॉर्ड मिलता है, आपका नाम, ईमेल या भुगतान की जानकारी नहीं।",
      },
      {
        p: "हर वॉइस बातचीत कितनी देर चली, यह हम दर्ज करते हैं ताकि आपका मुफ़्त वॉइस समय या Plus का समय दिखा सकें। सब्सक्रिप्शन कैसे काम करता है, यह हमारी [उपयोग की शर्तें](/hi/terms) में है, और रद्द करने का तरीक़ा [रद्द करना और रिफ़ंड](/hi/refunds) पेज पर।",
      },

      { h2: "बच्चे", id: "children" },
      {
        p: "DivineSarathi 9 साल और उससे बड़े लोगों के लिए है। अगर आपकी उम्र 18 से कम है, तो आप इसे सिर्फ़ माता-पिता या अभिभावक की सत्यापित सहमति से इस्तेमाल कर सकते हैं, जहाँ स्थानीय क़ानून इसकी अनुमति देता हो। अगर आप माता-पिता हैं और आपको लगता है कि आपका बच्चा आपकी सहमति के बिना DivineSarathi इस्तेमाल कर रहा है, तो हमें लिखें, हम वह अकाउंट डिलीट कर देंगे।",
      },

      { h2: "हम डेटा कितने समय रखते हैं", id: "retention" },
      {
        p: "हम डेटा सिर्फ़ तब तक रखते हैं जब तक DivineSarathi चलाने और क़ानूनी ज़िम्मेदारियाँ निभाने के लिए ज़रूरी हो। हर तरह के डेटा की अवधि ऊपर की तालिका में है।",
      },
      {
        p: "आप जब चाहें अपना अकाउंट और उसका डेटा डिलीट कर सकते हैं, ऐप में (Profile, Account details, Delete account) या हमारे [अकाउंट डिलीट करने वाले पेज](/hi/delete-account) पर। आपका मन बदल जाए, इसलिए हम अकाउंट 30 दिन रोककर रखते हैं, फिर मिटा देते हैं। अगर आप इसे पहले हटवाना चाहें, तो हमें बताएँ।",
      },
      { p: "अकाउंट मिटने के बाद भी हम ये चीज़ें रखते हैं:" },
      {
        ul: [
          "बिना पहचान वाली गिनतियाँ, जैसे ध्यान के मिनट या सुनी गई कथाओं की संख्या, जिनसे आपकी पहचान नहीं होती",
          "Sarathi Plus की किसी भी ख़रीद का रिकॉर्ड, आपके नाम या संपर्क की जानकारी के बिना, हिसाब-किताब और टैक्स के लिए",
          "यह रिकॉर्ड कि आपने सहमति दी थी, आपके IP पते के बिना",
          "Google Analytics तक पहले से पहुँची ऐप गतिविधि, जो सिर्फ़ एक नंबर से जुड़ी है और वहाँ तय की गई अवधि ख़त्म होने तक रहती है",
        ],
      },
      {
        p: "मिटाया गया डेटा कुछ समय तक हमारे एन्क्रिप्टेड बैकअप में रह सकता है, जब तक वे बैकअप बदल नहीं जाते।",
      },

      { h2: "आपके अधिकार", id: "your-rights" },
      {
        p: "भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत, और जहाँ भी क़ानून आपको ये अधिकार देता है, आप:",
      },
      {
        ul: [
          "**जानकारी पा सकते हैं:** हमारे पास आपका कौन सा निजी डेटा है, हम उसका क्या करते हैं और किसके साथ साझा किया है, इसका सार माँग सकते हैं।",
          "**सुधार करा सकते हैं:** अपना डेटा सुधार, पूरा या अपडेट करा सकते हैं। ज़्यादातर जानकारी आप Profile में ख़ुद बदल सकते हैं।",
          "**मिटवा सकते हैं:** अपना अकाउंट और उसका डेटा डिलीट करा सकते हैं, जैसा ऊपर बताया है।",
          "**सहमति वापस ले सकते हैं:** कभी भी, उतनी ही आसानी से जितनी आसानी से दी थी। कुछ चीज़ें ऐप कुछ डेटा के बिना नहीं कर सकता, इसलिए सहमति वापस लेने का मतलब अकाउंट बंद करना भी हो सकता है।",
          "**शिकायत कर सकते हैं:** हम आपका डेटा कैसे संभालते हैं, इस बारे में हमसे शिकायत कर सकते हैं, और अगर हमारे जवाब से संतुष्ट न हों तो डेटा प्रोटेक्शन बोर्ड ऑफ़ इंडिया से।",
          "**नामांकन कर सकते हैं:** किसी ऐसे व्यक्ति का नाम दे सकते हैं जो आपकी मृत्यु होने पर या आपके असमर्थ होने पर आपकी ओर से ये अधिकार इस्तेमाल कर सके।",
        ],
      },
      {
        p: "इनमें से किसी भी अधिकार के लिए, अपने अकाउंट से जुड़े ईमेल से, या अकाउंट से जुड़ा फ़ोन नंबर लिखकर, [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर लिखें। हम पुष्टि के लिए पूछ सकते हैं कि अकाउंट आपका ही है। हम क़ानून में तय समय के भीतर जवाब देते हैं।",
      },

      { h2: "सुरक्षा", id: "security" },
      {
        p: "डेटा भेजते समय हम उसे एन्क्रिप्ट करते हैं, टीम में निजी डेटा तक पहुँच सीमित रखते हैं, और उस पहुँच का लॉग रखते हैं। कोई भी सिस्टम पूरी तरह सुरक्षित नहीं होता। आप ईमेल, फ़ोन, Google या Apple अकाउंट से साइन इन करते हैं, इसलिए उन्हें सुरक्षित रखें। अगर किसी सुरक्षा चूक से आपका निजी डेटा प्रभावित होता है, तो हम क़ानून के मुताबिक़ आपको और डेटा प्रोटेक्शन बोर्ड ऑफ़ इंडिया को बताएँगे।",
      },

      { h2: "इस नीति में बदलाव", id: "changes" },
      {
        p: "हम इस नीति को अपडेट कर सकते हैं। ऊपर दी गई तारीख़ बताती है कि आख़िरी बार कब बदली गई। कोई बड़ा बदलाव होने पर हम ऐप में या ईमेल से बताएँगे।",
      },

      { h2: "संपर्क और शिकायत", id: "contact" },
      {
        p: "DivineSarathi Private Limited, भारत। अपनी गोपनीयता से जुड़ा कोई भी सवाल या शिकायत [founders@divinesarathi.in](mailto:founders@divinesarathi.in) पर भेजें।",
      },
      {
        p: "गोपनीयता से जुड़े सवाल और शिकायतें DivineSarathi के संस्थापक ख़ुद देखते हैं। कृपया पहले हमें लिखें। अगर हमारे जवाब से संतुष्ट न हों, तो आप डेटा प्रोटेक्शन बोर्ड ऑफ़ इंडिया से शिकायत कर सकते हैं।",
      },
    ],
  },
};
