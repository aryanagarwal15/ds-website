import Link from "next/link";
import Reveal from "@/components/Reveal";

const founders = [
  {
    name: "Mohith Mahadevan",
    image: "/images/about/mohith_mahadevan.png",
    line: "BITS Pilani, London Business School, and the CEO's office at Navi.",
  },
  {
    name: "Aryan Agarwal",
    image: "/images/about/aryan_agarwal.png",
    line: "BITS Pilani, co-founder and CTO of Yenmo, a Y Combinator startup.",
  },
];

export default function Founders() {
  return (
    <section className="ds-section" aria-labelledby="founders-heading">
      <div className="ds-container">
        <Reveal>
          <div className="dcard mx-auto max-w-3xl px-7 py-10 text-center sm:px-12">
            <p className="eyebrow">Built by seekers</p>
            <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)] text-indigo">
              We grew up with these teachings
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[0.98rem] text-ink-soft">
              It is fair to ask who is behind this. DivineSarathi is built by
              two friends of over a decade who kept coming back to the Gita
              in their own hard times, and decided to build the companion
              they wished they had.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
              {founders.map((f) => (
                <div key={f.name} className="flex max-w-[240px] flex-col items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.image}
                    alt={f.name}
                    width={84}
                    height={84}
                    loading="lazy"
                    className="h-21 w-21 rounded-full object-cover"
                    style={{ width: 84, height: 84 }}
                  />
                  <p className="mt-3 font-serif text-[1.15rem] font-semibold text-ink">
                    {f.name}
                  </p>
                  <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-muted">
                    {f.line}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block text-[0.95rem] font-medium text-indigo-bright hover:underline"
            >
              Read our story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
