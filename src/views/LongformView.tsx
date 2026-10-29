import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import StoreButtons from "@/components/StoreButtons";
import type { Block, LongDoc } from "@/content/types";
import { UI, formatDate } from "@/content/ui";
import { ROUTES, type Locale, type RouteKey } from "@/lib/routes";
import { breadcrumbLd, webPageLd } from "@/lib/seo";

/** **bold** and [label](href) only; everything else is plain text. */
export function inline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={k++}>{m[1]}</strong>);
    else {
      const href = m[3];
      const external = /^https?:|^mailto:/.test(href);
      parts.push(
        external ? (
          <a key={k++} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{m[2]}</a>
        ) : (
          <Link key={k++} href={href}>{m[2]}</Link>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function renderBlock(b: Block, i: number) {
  if ("h2" in b) return <h2 key={i} id={b.id}>{b.h2}</h2>;
  if ("h3" in b) return <h3 key={i}>{b.h3}</h3>;
  if ("p" in b) return <p key={i}>{inline(b.p)}</p>;
  if ("ul" in b) return <ul key={i}>{b.ul.map((x, j) => <li key={j}>{inline(x)}</li>)}</ul>;
  if ("ol" in b) return <ol key={i}>{b.ol.map((x, j) => <li key={j}>{inline(x)}</li>)}</ol>;
  if ("table" in b)
    return (
      <div key={i} className="overflow-x-auto">
        <table>
          <thead><tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>{b.table.rows.map((r, j) => <tr key={j}>{r.map((c, n) => <td key={n}>{inline(c)}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  return <p key={i} className="rounded-xl bg-[var(--ds-gold-soft)] px-4 py-3 text-[0.95rem] text-ink">{inline(b.note)}</p>;
}

/** Legal, how-it-works and sources pages: answer first, then the full text, then a quiet way to the stores. */
export default function LongformView({ routeKey, locale, doc }: { routeKey: RouteKey; locale: Locale; doc: LongDoc }) {
  const t = UI[locale];
  return (
    <>
      <JsonLd data={[webPageLd(routeKey, locale), breadcrumbLd(routeKey, locale)]} />
      <article className="ds-container pb-8 pt-[clamp(2.5rem,6vh,4.5rem)]">
        <header className="max-w-3xl">
          <p className="eyebrow">{doc.eyebrow}</p>
          <h1 className="mt-4 text-[clamp(2.2rem,4.6vw,3.4rem)] text-indigo">{doc.title}</h1>
          {doc.translationNote && <p className="mt-3 text-[0.9rem] text-ink-muted">{doc.translationNote}</p>}
          <p className="mt-5 text-[1.12rem] leading-relaxed text-ink-soft">{inline(doc.lede)}</p>
          <p className="mt-4 text-[0.85rem] text-ink-muted">
            {t.updated}: <time dateTime={ROUTES[routeKey].updated}>{formatDate(ROUTES[routeKey].updated, locale)}</time>
          </p>
        </header>

        {doc.summary && (
          <aside className="dcard mt-10 max-w-3xl p-6 sm:p-8">
            <p className="font-serif text-[1.35rem] font-semibold text-indigo">{doc.summary.title}</p>
            <ul className="mt-4 space-y-2.5 text-[1rem] text-ink-soft">
              {doc.summary.items.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-[var(--ds-gold-raw)]" />
                  <span>{inline(s)}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="prose-ds mt-6">{doc.blocks.map((b, i) => <Fragment key={i}>{renderBlock(b, i)}</Fragment>)}</div>

        <div className="mt-16 max-w-3xl border-t border-[var(--ds-line-soft)] pt-8">
          <p className="text-[0.95rem] text-ink-soft">{t.free}</p>
          <StoreButtons locale={locale} page={routeKey} spot="end" height={42} className="mt-4" />
        </div>
      </article>
    </>
  );
}
