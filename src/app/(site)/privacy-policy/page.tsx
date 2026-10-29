import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How DivineSarathi handles your data: what we collect, how we use it, and the choices you have. We do not sell personal data.",
  pageKey: "privacy",
});

const sectionTitle = "mt-10 text-[1.45rem] text-indigo";
const listClass = "mt-3 list-disc space-y-2 pl-5 text-[0.97rem] leading-relaxed text-ink-soft";
const paraClass = "mt-3 text-[0.97rem] leading-relaxed text-ink-soft";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />

      <section className="ds-section">
        <article className="ds-container max-w-3xl">
          <h1 className="text-[clamp(2rem,4.5vw,3rem)] text-indigo">Privacy Policy</h1>
          <p className="mt-2 text-[0.9rem] text-ink-muted">Last updated: 10 September 2025</p>

          <p className={paraClass}>
            <strong>DivineSarathi</strong> (&quot;we&quot;, &quot;us&quot;,
            &quot;our&quot;) provides a voice-first companion that shares
            scripture-based stories and reflections. This Privacy Policy
            explains what data we collect, how we use it, and the choices you
            have.
          </p>

          <p className={`${paraClass} italic`}>
            Plain-English summary: We collect only what we need to run the
            app, keep it safe, improve experiences, and comply with the law.
            We do not sell personal data.
          </p>

          <h2 className={sectionTitle}>1. What we collect</h2>
          <ul className={listClass}>
            <li>
              <strong>Account data:</strong> name, email, country/region,
              profile photo (optional), settings.
            </li>
            <li>
              <strong>Voice &amp; conversation data:</strong> audio streams,
              transcriptions, conversation history, prompts, feedback.
            </li>
            <li>
              <strong>Usage &amp; device data:</strong> app version, device
              type, IP address, language, crash logs, diagnostics.
            </li>
            <li>
              <strong>Payment data:</strong> transaction identifiers, payment
              method (processed by payment processor).
            </li>
            <li>
              <strong>Communications:</strong> emails, messages, survey
              responses, beta feedback.
            </li>
            <li>
              <strong>Inferred preferences:</strong> themes/topics, usage
              patterns, feature adoption.
            </li>
          </ul>

          <h2 className={sectionTitle}>2. How we use data</h2>
          <ul className={listClass}>
            <li>Provide the Services and maintain accounts</li>
            <li>Personalize &amp; improve experiences</li>
            <li>Train &amp; enhance AI models</li>
            <li>Safety &amp; fraud detection</li>
            <li>Legal compliance</li>
          </ul>

          <h2 className={sectionTitle}>3. Children &amp; teens</h2>
          <p className={paraClass}>
            Default audience: 9+. Users under 18 may use the Services only
            with verifiable parental consent where local law allows.
          </p>

          <h2 className={sectionTitle}>4. Cookies &amp; similar technologies</h2>
          <p className={paraClass}>
            We use cookies to maintain sessions, security, preferences, and
            measure usage. You can control cookies via browser settings.
          </p>

          <h2 className={sectionTitle}>5. Sharing your information</h2>
          <p className={paraClass}>
            We do not sell personal data. We may share with service
            providers, affiliates, and for legal/safety compliance.
          </p>

          <h2 className={sectionTitle}>6. Security</h2>
          <p className={paraClass}>
            We employ encryption, access controls, and audit logs. No system
            is 100% secure; please use strong passwords.
          </p>

          <h2 className={sectionTitle}>7. Data retention</h2>
          <p className={paraClass}>
            We retain data only as long as necessary to provide Services and
            comply with legal obligations.
          </p>

          <h2 className={sectionTitle}>8. Contact</h2>
          <p className={paraClass}>
            Grievance Contact:{" "}
            <a href="mailto:founders@divinesarathi.in" className="text-indigo-bright hover:underline">
              founders@divinesarathi.in
            </a>
          </p>
        </article>
      </section>
    </>
  );
}
