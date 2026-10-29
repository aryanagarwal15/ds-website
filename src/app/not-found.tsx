import Link from "next/link";
import Mark from "@/components/Mark";

/** A calm 404 that offers the three places most people want. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <Mark size={56} />
      <h1 className="mt-8 text-[clamp(2rem,4.5vw,3rem)] text-indigo">This path leads nowhere</h1>
      <p className="mt-4 max-w-sm text-[1rem] text-ink-soft">The page you were looking for is not here. These are:</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/krishna-ai" className="btn btn-secondary">Krishna AI</Link>
        <Link href="/bhagavad-gita" className="btn btn-secondary">Bhagavad Gita</Link>
        <a href="/download?utm_source=website&utm_medium=404&utm_content=404" className="btn btn-primary">Get the app</a>
      </div>
      <Link href="/" className="mt-6 text-[0.95rem] font-semibold text-indigo underline underline-offset-4">Return home</Link>
    </main>
  );
}
