import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const moments = [
  {
    time: "7:00 am",
    title: "A story with your chai",
    body: "A three-minute story from our Puranas and our scriptures, with your morning chai.",
  },
  {
    time: "3:30 pm",
    title: "A verse when work gets heavy",
    body: "The meeting went badly. You pick that exact situation in the app, and Krishna ji answers: you have a right to your actions, never to their fruits.",
  },
  {
    time: "11:30 pm",
    title: "A talk before sleep",
    body: "The thing you could not tell anyone, you tell Krishna. He listens, then speaks. You sleep lighter.",
  },
];

export default function DayFlow() {
  return (
    <section className="ds-section" aria-labelledby="dayflow-heading">
      <div className="ds-container">
        <Reveal>
          <SectionHeader eyebrow="How it fits" title="A day with Krishna" align="left" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {moments.map((moment, i) => (
            <Reveal key={moment.time} delay={i * 100}>
              <article className="dayflow-item pl-6">
                <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-saffron">
                  {moment.time}
                </p>
                <h3 className="mt-2 text-[1.3rem] text-indigo">{moment.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  {moment.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
