import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import MalaDivider from "@/components/MalaDivider";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us: The Founders and Mission Behind DivineSarathi",
  description:
    "DivineSarathi is built by Mohith Mahadevan and Aryan Agarwal, friends for over a decade who grew up with the Bhagavad Gita. Learn why we built a voice-first spiritual companion.",
  pageKey: "about",
  keywords: ["DivineSarathi founders", "about DivineSarathi", "who built DivineSarathi"],
});

const founders = [
  {
    name: "Mohith Mahadevan",
    image: "/images/about/mohith_mahadevan.png",
    bio: "Mohith studied engineering at BITS Pilani and later completed his MBA at London Business School as a BK Birla Scholar. He previously worked in the CEO's office at Navi, where he worked closely with Sachin Bansal and helped scale the lending business from zero to over one billion dollars in assets under management.",
  },
  {
    name: "Aryan Agarwal",
    image: "/images/about/aryan_agarwal.png",
    bio: "Aryan studied engineering at BITS Pilani and is the co-founder and CTO of Yenmo, a Y Combinator backed fintech startup. He has spent years building technology products and leading teams from zero to scale.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* hero */}
      <section className="ds-section text-center">
        <div className="ds-container">
          <p className="eyebrow">Our story</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] text-indigo">
            We grew up with these teachings. Now we are building a new way to
            experience them.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.08rem] text-ink-soft">
            DivineSarathi brings the wisdom of the Bhagavad Gita and other
            sacred texts into everyday life through conversation, stories, and
            reflection.
          </p>
        </div>
      </section>

      <MalaDivider />

      {/* mission */}
      <section className="ds-section">
        <div className="ds-container grid items-center gap-10 lg:grid-cols-[1fr_400px]">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">Our mission</h2>
            <p className="mt-5 max-w-prose text-[1rem] leading-relaxed text-ink-soft">
              For thousands of years, people have turned to the Bhagavad Gita,
              the Mahabharata, the Ramayana, the Puranas, and other sacred
              texts for guidance on life, duty, relationships, and purpose.
              These teachings have shaped how generations understand
              responsibility, courage, and inner clarity. Yet today, many
              people feel distant from these sources of wisdom. The teachings
              remain powerful, but the ways in which we engage with them have
              not always kept pace with modern life. DivineSarathi exists to
              help people reconnect with these teachings in a way that feels
              natural in the present day.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/mission.webp"
              alt="A diya being lit at dusk"
              loading="lazy"
              className="arch w-full object-cover shadow-[var(--ds-shadow-1)]"
              style={{ maxHeight: 440 }}
            />
          </Reveal>
        </div>
      </section>

      {/* why we built it */}
      <section className="ds-section">
        <div className="ds-container grid items-center gap-10 lg:grid-cols-[380px_1fr]">
          <Reveal className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/why_built.webp"
              alt="Hands turning the pages of a scripture"
              loading="lazy"
              className="arch w-full object-cover shadow-[var(--ds-shadow-1)]"
              style={{ maxHeight: 440 }}
            />
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">
              Why we built DivineSarathi
            </h2>
            <p className="mt-5 max-w-prose text-[1rem] leading-relaxed text-ink-soft">
              We are not outsiders trying to build a product around a market
              opportunity. We grew up with these teachings. Many of these
              stories and ideas were part of our homes, our families, and our
              everyday lives. As we grew older, we often found ourselves
              returning to them when thinking about difficult decisions,
              personal growth, and the deeper questions of life. DivineSarathi
              grew from this experience. It is our attempt to bring these
              teachings into a form that fits naturally into the modern world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* what it is */}
      <section className="ds-section">
        <div className="ds-container grid items-center gap-10 lg:grid-cols-[1fr_340px]">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)] text-indigo">
              What DivineSarathi is
            </h2>
            <p className="mt-5 max-w-prose text-[1rem] leading-relaxed text-ink-soft">
              We have built a voice based AI companion inspired by the
              teachings of Lord Krishna and the wisdom found in the Bhagavad
              Gita and other sacred texts. Through stories, conversations, and
              reflections, it invites people to explore questions about life,
              purpose, relationships, and inner clarity. DivineSarathi does
              not claim to provide final answers. It presents perspectives
              rooted in timeless teachings and encourages each person to
              reflect and decide what resonates with them.
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/phone.webp"
              alt="The DivineSarathi app on a phone"
              loading="lazy"
              className="mx-auto w-full max-w-[300px] object-contain"
            />
          </Reveal>
        </div>
      </section>

      <MalaDivider />

      {/* founders */}
      <section className="ds-section">
        <div className="ds-container text-center">
          <Reveal>
            <p className="eyebrow">Built by seekers</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">
              The two of us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1rem] text-ink-soft">
              DivineSarathi is built by Mohith Mahadevan and Aryan Agarwal,
              friends and collaborators for over a decade.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 text-left md:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <article className="dcard h-full px-7 py-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.image}
                    alt={f.name}
                    width={110}
                    height={110}
                    loading="lazy"
                    className="rounded-full object-cover"
                    style={{ width: 110, height: 110 }}
                  />
                  <h3 className="mt-5 text-[1.4rem] text-indigo">{f.name}</h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-soft">{f.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mx-auto mt-12 max-w-3xl text-[1rem] leading-relaxed text-ink-soft">
              Both of us have spent years engaging with these teachings in our
              personal lives. DivineSarathi is not only a technology product.
              It is an offering, created by people who are themselves seekers,
              bringing together cultural depth, spiritual curiosity, and
              modern technology so that timeless wisdom can be experienced in
              everyday life.
            </p>
          </Reveal>
        </div>
      </section>

      <MalaDivider />

      {/* contact */}
      <section id="contact" className="ds-section">
        <div className="ds-container">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Write to us</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">Contact us</h2>
            <p className="mt-4 text-[1rem] text-ink-soft">
              Questions, feedback, or just a thought you want to share. We
              read everything.
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-9 max-w-xl">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
