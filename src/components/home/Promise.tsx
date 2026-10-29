import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { BookIcon, ShieldIcon, SunriseIcon, WaveIcon } from "@/components/icons";

const promises = [
  {
    title: "Rooted in scripture",
    body: "Answers come from the Gita, the Mahabharata, and other sacred texts. Verses are cited. Nothing is made up in Krishna's name.",
    Icon: BookIcon,
  },
  {
    title: "Private by design",
    body: "Your voice is never stored. Transcripts stay in your History for you alone, and you can delete any conversation, anytime.",
    Icon: ShieldIcon,
  },
  {
    title: "Calm by default",
    body: "No streaks, no red badges, no guilt. If you step away for two weeks, you are welcomed back, not scolded.",
    Icon: WaveIcon,
  },
  {
    title: "Free to begin",
    body: "An hour with Krishna every day, plus the daily story, free. No card. No trial that flips on you.",
    Icon: SunriseIcon,
  },
];

export default function Promise() {
  return (
    <section className="ds-section" aria-labelledby="promise-heading">
      <div className="ds-container">
        <Reveal>
          <SectionHeader
            eyebrow="The DivineSarathi promise"
            title="What you can count on"
            lede="You tell Krishna things you tell no one else. So here is exactly where we stand."
          />
        </Reveal>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-9 sm:grid-cols-2">
          {promises.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="promise-icon mt-0.5 inline-flex flex-none text-indigo"
                  style={{ transitionDelay: `${i * 140}ms` }}
                >
                  <item.Icon size={26} />
                </span>
                <div>
                  <dt className="font-serif text-[1.25rem] font-semibold text-indigo">
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                    {item.body}
                  </dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
