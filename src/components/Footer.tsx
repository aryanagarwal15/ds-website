import Link from "next/link";
import Logo from "./Logo";
import MalaDivider from "./MalaDivider";
import StoreButtons from "./StoreButtons";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "./icons";
import { UI } from "@/content/ui";
import { FOOTER_GROUPS, ROUTES, pathFor, routesInGroup, type Locale } from "@/lib/routes";
import { CONTACT_EMAIL, SITE_TAGLINE, SOCIAL } from "@/lib/site";

const SOCIALS = [
  { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL.youtube, label: "YouTube", Icon: YouTubeIcon },
  { href: SOCIAL.x, label: "X", Icon: XIcon },
  { href: SOCIAL.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SOCIAL.facebook, label: "Facebook", Icon: FacebookIcon },
];

/** Every public page is linked from here, so every page is one click from every other. */
export default function Footer({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <footer className="mt-10">
      <MalaDivider />
      <div className="footer-wash">
        <div className="ds-container pt-14">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            <div className="max-w-sm">
              <Logo locale={locale} markSize={34} />
              <p className="mt-4 text-[0.95rem] text-ink-soft">{t.footerBlurb}</p>
              <StoreButtons locale={locale} page="footer" spot="footer" height={42} className="mt-6" />
              <ul className="mt-6 flex items-center gap-4">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`DivineSarathi on ${label}`} className="text-ink-muted transition-colors duration-150 hover:text-gold">
                      <Icon size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {FOOTER_GROUPS.map(({ group, label }) => (
                <nav key={group} aria-label={label[locale]}>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">{label[locale]}</p>
                  <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                    {routesInGroup(group).map((k) => (
                      <li key={k}>
                        <Link href={pathFor(k, locale)} className="text-ink-soft hover:text-ink">
                          {ROUTES[k].name[locale]}
                        </Link>
                      </li>
                    ))}
                    {group === "company" && (
                      <li>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-ink-soft hover:text-ink">
                          {CONTACT_EMAIL}
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <p className="mt-12 text-[0.82rem] text-ink-muted">
            © {new Date().getFullYear()} {t.footerRights}
          </p>
        </div>

        <div className="overflow-hidden pb-2 pt-10" aria-hidden="true">
          <p className="text-center font-serif text-[1rem] text-gold">{SITE_TAGLINE.hi}</p>
          <p className="footer-wordmark">DivineSarathi</p>
        </div>
      </div>
    </footer>
  );
}
