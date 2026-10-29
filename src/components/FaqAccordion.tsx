type Faq = { readonly q: string; readonly a: string };

type FaqAccordionProps = {
  faqs: ReadonlyArray<Faq>;
  className?: string;
};

/** Native details/summary accordion: keyboard and screen-reader friendly by default. */
export default function FaqAccordion({ faqs, className = "" }: FaqAccordionProps) {
  return (
    <div className={className}>
      {faqs.map((faq) => (
        <details key={faq.q} className="faq">
          <summary>{faq.q}</summary>
          <div>
            <p>{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
