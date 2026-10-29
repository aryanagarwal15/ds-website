import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  BansuriIcon,
  DiyaIcon,
  FeatherIcon,
  LotusIcon,
  MalaIcon,
} from "@/components/icons";

const pillars = [
  {
    title: "When you need to talk",
    body: "Ask Krishna anything, any time, in English or Hindi. The answers come from scripture, and he never judges.",
    Icon: FeatherIcon,
  },
  {
    title: "When work feels pointless",
    body: "Pick the situation you are in and get the Gita verse that speaks to it, explained in plain words.",
    Icon: LotusIcon,
  },
  {
    title: "When mornings need a start",
    body: "A three-minute story from the Gita with your morning chai. One story a day, easy to follow.",
    Icon: DiyaIcon,
  },
  {
    title: "When you want to learn the Gita",
    body: "All 18 chapters, verse by verse, at your own pace. You can see your progress.",
    Icon: MalaIcon,
  },
  {
    title: "When you need a quiet minute",
    body: "Simple breathing practices from our own tradition, guided by Krishna's voice.",
    Icon: BansuriIcon,
  },
];

export default function Pillars() {
  return (
    <section className="ds-section" aria-labelledby="pillars-heading">
      <div className="ds-container">
        <Reveal>
          <SectionHeader
            eyebrow="Inside the app"
            title="For every kind of day"
            lede="Not just the hard days. Krishna is there for the normal ones too."
          />
        </Reveal>

        {/* six tracks on lg so the trailing pair sits centered, not orphaned */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 70}
              className={
                i < 3 ? "lg:col-span-2" : i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"
              }
            >
              <article className="pillar pillar-card dcard arch h-full px-6 pb-7 pt-10 text-center">
                <span className="pillar-badge mx-auto text-indigo">
                  <pillar.Icon size={26} />
                </span>
                <h3 className="mt-4 text-[1.35rem] text-indigo">{pillar.title}</h3>
                <span className="pillar-rule" aria-hidden="true" />
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
