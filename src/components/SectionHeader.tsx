type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`max-w-2xl ${alignClass} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-[clamp(1.9rem,3.6vw,2.7rem)] text-indigo">{title}</h2>
      {lede && <p className="mt-4 text-[1.08rem] text-ink-soft">{lede}</p>}
    </header>
  );
}
