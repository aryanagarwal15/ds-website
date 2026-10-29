type Faq = { readonly id?: string; readonly q: string; readonly a: string };

/** Native details/summary accordion: keyboard and screen-reader friendly, each question linkable by its id. */
export default function FaqAccordion({ faqs, className = "" }: { faqs: ReadonlyArray<Faq>; className?: string }) {
  return (
    <div className={className}>
      {faqs.map((faq) => (
        <details key={faq.q} id={faq.id} className="faq">
          <summary>{faq.q}</summary>
          <div>
            <p>{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
