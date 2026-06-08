import Footer from "@/app/newComponents/Footer";

const features = [
  {
    title: "Krishna AI",
    desc: "जो मन में है उस पर बात करें और स्पष्ट, स्थिर मार्गदर्शन पाएँ।",
  },
  {
    title: "भगवद गीता",
    desc: "गीता को श्लोक-दर-श्लोक सीखें — अर्थ आज की ज़िंदगी के लिए समझाया गया।",
  },
  {
    title: "गीता फॉर डेली लाइफ",
    desc: "अपनी दैनिक स्थिति चुनें और देखें कि गीता का कौन-सा श्लोक मार्गदर्शन देता है।",
  },
  {
    title: "दैनिक कथाएँ",
    desc: "3–4 मिनट की छोटी कथाएँ और चिंतन, जो शाश्वत बुद्धि को रोज़मर्रा में लाती हैं।",
  },
];

export default function HiHomePage() {
  return (
    <main className="min-h-screen bg-ds-cream">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero/bg_desktop.webp)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" aria-hidden />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 font-inter text-sm tracking-widest text-ds-accent uppercase">
            DivineSarathi
          </p>
          <h1
            className="mb-6 font-semibold leading-tight text-ds-navy"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            जब ज़िंदगी अस्पष्ट लगे, आपको और शोर नहीं — स्पष्टता चाहिए।
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl font-inter leading-relaxed text-ds-text"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            रोज़मर्रा के जीवन के लिए मार्गदर्शन। गीता में निहित। आज के लिए बनाया गया।
            Krishna AI से बात करें, भगवद गीता सीखें, और दैनिक भक्ति कथाएँ सुनें।
          </p>
          <a
            href="/download"
            className="inline-flex h-14 items-center justify-center rounded-full bg-ds-navy px-8 font-inter text-lg font-medium text-white no-underline transition-opacity hover:opacity-90"
          >
            Krishna AI से बात करें
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-4 text-center font-semibold text-ds-navy"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            DivineSarathi में क्या है
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center font-inter text-ds-text">
            भगवद गीता और पवित्र हिंदू ग्रंथों की बुद्धि — आवाज़, कथाओं और चिंतन के माध्यम से।
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-[20px] bg-[#fbf7ef] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold text-ds-navy">
                  {f.title}
                </h3>
                <p className="font-inter leading-relaxed text-ds-text">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ds-navy px-6 py-20 text-center text-white">
        <h2
          className="mb-4 font-semibold"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          आज ही शुरू करें
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-inter text-white/80">
          DivineSarathi मुफ़्त में App Store पर उपलब्ध है। Google Play जल्द आ रहा है।
        </p>
        <a
          href="/download"
          className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-inter text-lg font-medium text-ds-navy no-underline transition-opacity hover:opacity-90"
        >
          ऐप डाउनलोड करें
        </a>
      </section>

      <Footer />
    </main>
  );
}
