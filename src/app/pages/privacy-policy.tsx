"use client";

export default function PrivacyPolicy() {
    return (
        <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: 28 October 2026</p>
            
            <p><strong>DivineSarathi</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides a voice‑first companion that shares scripture‑based stories and reflections. This Privacy Policy explains what data we collect, how we use it, and the choices you have.</p>
            
            <p><em>Plain‑English summary: We collect only what we need to run the app, keep it safe, improve experiences, and comply with the law. We do not sell personal data.</em></p>

            <section>
                <h2>1. What we collect</h2>
                <ul>
                    <li><strong>Account data:</strong> name, email, country/region, profile photo (optional), settings.</li>
                    <li><strong>Voice & conversation data:</strong> audio streams, transcriptions, conversation history, prompts, feedback.</li>
                    <li><strong>Usage & device data:</strong> app version, device type, IP address, language, crash logs, diagnostics.</li>
                    <li><strong>Purchase data:</strong> if you buy Sarathi Plus, the plan, its status, renewal dates and store transaction identifiers. Payment itself is handled by Apple or Google; we never see your card or bank details.</li>
                    <li><strong>Usage of voice time:</strong> how long each voice conversation lasts, so we can show your free allowance or Plus time.</li>
                    <li><strong>Communications:</strong> emails, messages, survey responses, beta feedback.</li>
                    <li><strong>Inferred preferences:</strong> themes/topics, usage patterns, feature adoption.</li>
                </ul>
            </section>

            <section>
                <h2>2. How we use data</h2>
                <ul>
                    <li>Provide the Services and maintain accounts</li>
                    <li>Personalize & improve experiences</li>
                    <li>Train & enhance AI models</li>
                    <li>Safety & fraud detection</li>
                    <li>Legal compliance</li>
                </ul>
            </section>

            <section>
                <h2>3. Children & teens</h2>
                <p>Default audience: 9+. Users under 18 may use the Services only with verifiable parental consent where local law allows.</p>
            </section>

            <section>
                <h2>4. Cookies & similar technologies</h2>
                <p>We use cookies to maintain sessions, security, preferences, and measure usage. You can control cookies via browser settings.</p>
            </section>

            <section>
                <h2>5. Sharing your information</h2>
                <p>We do not sell personal data. We may share with service providers, affiliates, and for legal/safety compliance.</p>
            </section>

            <section>
                <h2>6. Subscriptions</h2>
                <p>Sarathi Plus is sold through the App Store and Google Play. We use RevenueCat, a subscription service, to confirm purchases and renewals with the stores. RevenueCat receives your DivineSarathi user ID, basic device details and the store&apos;s purchase records, not your name, email or payment details. See our <a href="/terms">Terms of Use</a> for how the subscription works.</p>
            </section>

            <section>
                <h2>7. Security</h2>
                <p>We employ encryption, access controls, and audit logs. No system is 100% secure; please use strong passwords.</p>
            </section>

            <section>
                <h2>8. Data retention</h2>
                <p>We retain data only as long as necessary to provide Services and comply with legal obligations.</p>
                <p>You can delete your account and its data at any time, in the app (Profile, Account details, Delete account) or on our <a href="/delete-account">account deletion page</a>.</p>
            </section>

            <section>
                <h2>9. Contact</h2>
                <p>Grievance Contact: <a href="mailto:founders@divinesarathi.in">founders@divinesarathi.in</a></p>
            </section>

            <style jsx>{`
                .privacy-policy-container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    line-height: 1.6;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                h1 { margin-bottom: 10px; }
                .last-updated { color: #666; font-size: 0.95em; margin-bottom: 20px; }
                h2 { margin-top: 25px; margin-bottom: 12px; }
                section { margin-bottom: 20px; }
                ul { margin-left: 20px; }
                li { margin-bottom: 8px; }
                a { color: #0066cc; text-decoration: none; }
                a:hover { text-decoration: underline; }
            `}</style>
        </div>
    );
}
