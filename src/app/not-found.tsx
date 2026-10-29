import Link from "next/link";
import Mark from "@/components/Mark";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <Mark size={56} />
      <h1 className="mt-8 text-[clamp(2rem,4.5vw,3rem)] text-indigo">
        This path leads nowhere
      </h1>
      <p className="mt-4 max-w-sm text-[1rem] text-ink-soft">
        The page you were looking for is not here. The way home always is.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Return home
      </Link>
    </div>
  );
}
