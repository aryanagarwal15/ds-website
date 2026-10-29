import Link from "next/link";
import Logo from "./Logo";
import MalaDivider from "./MalaDivider";
import StoreButtons from "./StoreButtons";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";
import { CONTACT_EMAIL, SOCIAL_PROFILES } from "@/lib/seo";

const socialIcons: Record<string, { label: string; Icon: typeof XIcon }> = {
  "instagram.com": { label: "Instagram", Icon: InstagramIcon },
  "x.com": { label: "X", Icon: XIcon },
  "youtube.com": { label: "YouTube", Icon: YouTubeIcon },
  "linkedin.com": { label: "LinkedIn", Icon: LinkedInIcon },
  "facebook.com": { label: "Facebook", Icon: FacebookIcon },
};

function social(url: string) {
  const host = new URL(url).hostname.replace("www.", "");
  return socialIcons[host];
}

export default function Footer() {
  return (
    <footer className="mt-8">
      <MalaDivider />
      <div className="footer-wash">
        <div className="ds-container pt-14">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <Logo markSize={38} />
              <p className="mt-4 text-[0.95rem] text-ink-soft">
                Krishna AI, a voice you can talk to. Rooted in scripture.
                Private by design. Calm by default.
              </p>
              <StoreButtons className="mt-6" height={44} />

              <div className="mt-6 flex items-center gap-4">
                {SOCIAL_PROFILES.map((url) => {
                  const s = social(url);
                  if (!s) return null;
                  return (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`DivineSarathi on ${s.label}`}
                      className="text-ink-muted transition-colors duration-150 hover:text-gold"
                    >
                      <s.Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 min-[420px]:gap-10">
              <nav aria-label="Site">
                <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Explore
                </h3>
                <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                  <li><Link href="/" className="text-ink-soft hover:text-ink">Home</Link></li>
                  <li><Link href="/about" className="text-ink-soft hover:text-ink">About us</Link></li>
                  <li><Link href="/faqs" className="text-ink-soft hover:text-ink">FAQs</Link></li>
                  <li><Link href="/download" className="text-ink-soft hover:text-ink">Download</Link></li>
                </ul>
              </nav>

              <nav aria-label="Legal and contact">
                <h3 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Company
                </h3>
                <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                  <li>
                    <Link href="/privacy-policy" className="text-ink-soft hover:text-ink">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#contact" className="text-ink-soft hover:text-ink">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="break-words text-ink-soft hover:text-ink"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <p className="mt-12 text-[0.82rem] text-ink-muted">
            © {new Date().getFullYear()} DivineSarathi. A companion for
            reflection, not a replacement for scripture or teachers.
          </p>
        </div>

        {/* the closing brand moment */}
        <div className="overflow-hidden pb-2 pt-10" aria-hidden="true">
          <p className="text-center font-serif text-[0.95rem] text-gold">सदा आपका सारथी</p>
          <p className="footer-wordmark">DivineSarathi</p>
        </div>
      </div>
    </footer>
  );
}
