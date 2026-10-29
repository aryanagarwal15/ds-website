/**
 * Long pages (legal, how it works, sources) are written as blocks, not JSX.
 * Inline text supports **bold** and [label](/path or https://...) only.
 */
export type Block =
  | { h2: string; id?: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { note: string };

export type LongDoc = {
  eyebrow: string;
  title: string;
  /** One or two sentences that answer the page's question on their own. */
  lede: string;
  /** Optional "in short" card above the full text. */
  summary?: { title: string; items: string[] };
  blocks: Block[];
  /** Shown under the Hindi title on translated legal pages. */
  translationNote?: string;
};
