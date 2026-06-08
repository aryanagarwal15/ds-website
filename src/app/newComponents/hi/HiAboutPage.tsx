import Footer from "@/app/newComponents/Footer";

export default function HiAboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section
        className="relative w-full flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/about/about_us_bg.webp"
            alt=""
            className="hidden md:block w-full h-full object-cover object-center"
            aria-hidden
          />
          <img
            src="/images/about/about_us_bg_m.webp"
            alt=""
            className="md:hidden w-full h-full object-cover object-center"
            aria-hidden
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>
        <div className="relative z-10 px-6 py-32 max-w-[1260px] mx-auto">
          <h1
            className="font-semibold text-[#053466] leading-tight mb-8"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
          >
            हम इन शिक्षाओं के साथ बड़े हुए।
            <br />
            अब इन्हें अनुभव करने का एक नया तरीका बना रहे हैं।
          </h1>
          <p
            className="font-inter text-[#4c4a48] mx-auto"
            style={{ fontSize: "clamp(18px, 2vw, 24px)", maxWidth: 900 }}
          >
            DivineSarathi भगवद गीता और अन्य पवित्र ग्रंथों की बुद्धि को बातचीत, कथाओं और चिंतन के माध्यम से रोज़मर्रा की ज़िंदगी में लाता है।
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2
              className="font-semibold text-[#053466] mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              हमारा मिशन
            </h2>
            <p
              className="font-inter text-black leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
            >
              हज़ारों वर्षों से लोग भगवद गीता, महाभारत, रामायण और पुराणों जैसे पवित्र ग्रंथों से जीवन, कर्तव्य, रिश्तों और उद्देश्य पर मार्गदर्शन पाते रहे हैं। आज भी ये शिक्षाएँ शक्तिशाली हैं, लेकिन कई लोग इनसे दूर महसूस करते हैं। DivineSarathi का उद्देश्य इन शिक्षाओं से पुनः जुड़ने में मदद करना है — एक ऐसे तरीके से जो आज की ज़िंदगी में प्राकृतिक लगे।
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[420px] rounded-[24px] overflow-hidden">
            <img
              src="/images/about/mission.webp"
              alt="हमारा मिशन"
              className="w-full h-full object-cover"
              style={{ maxHeight: 460 }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-[1360px] mx-auto">
          <h2
            className="text-[#053466] mb-6"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
          >
            साधकों द्वारा निर्मित
          </h2>
          <p
            className="font-inter text-black mx-auto mb-12"
            style={{ fontSize: "clamp(16px, 1.6vw, 22px)", maxWidth: 900 }}
          >
            DivineSarathi मोहित महादेवन और आर्यन अग्रवाल द्वारा बनाया गया है — एक दशक से अधिक समय के मित्र और सहयोगी।
          </p>
          <div className="flex flex-col md:flex-row gap-12 justify-center text-left">
            {[
              {
                name: "मोहित महादेवन",
                image: "/images/about/mohith_mahadevan.png",
                bio: "मोहित ने BITS Pilani से इंजीनियरिंग की और London Business School से MBA पूर्ण किया। उन्होंने Navi में CEO के कार्यालय में काम किया।",
              },
              {
                name: "आर्यन अग्रवाल",
                image: "/images/about/aryan_agarwal.png",
                bio: "आर्यन ने BITS Pilani से इंजीनियरिंग की और Y Combinator समर्थित फ़िनटेक स्टार्टअप Yenmo के सह-संस्थापक और CTO हैं।",
              },
            ].map((f) => (
              <div
                key={f.name}
                className="flex-1 flex flex-col items-center md:items-start md:flex-row gap-5 max-w-[560px]"
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="rounded-full object-cover object-center flex-shrink-0"
                  style={{ width: 140, height: 140, backgroundColor: "#d9d9d9" }}
                />
                <div className="text-center md:text-left">
                  <h3
                    className="text-[#053466] mb-3"
                    style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                  >
                    {f.name}
                  </h3>
                  <p
                    className="font-inter text-black leading-relaxed"
                    style={{ fontSize: "clamp(15px, 1.2vw, 18px)" }}
                  >
                    {f.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 text-center bg-[#fbf7ef]">
        <h2
          className="text-[#053466] mb-6"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
        >
          संपर्क करें
        </h2>
        <p className="font-inter text-[#4c4a48] mb-4">
          हमें ईमेल करें:{" "}
          <a
            href="mailto:founders@divinesarathi.in"
            className="text-[#053466] underline underline-offset-4"
          >
            founders@divinesarathi.in
          </a>
        </p>
        <p className="font-inter text-[#4c4a48]">
          या{" "}
          <a href="/hi/about#contact" className="text-[#053466] underline underline-offset-4">
            संपर्क अनुभाग
          </a>{" "}
          का उपयोग करें।
        </p>
      </section>

      <Footer />
    </div>
  );
}
