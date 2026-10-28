"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = { name: "", email: "", signIn: "", reason: "" };

export default function DeleteAccount() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const update = (key: keyof typeof initialForm) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setForm({ ...form, [key]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const message = [
            "Account deletion request (from divinesarathi.in/delete-account)",
            `Signed in with: ${form.signIn.trim() || form.email.trim()}`,
            `Reason: ${form.reason.trim() || "Not given"}`,
        ].join("\n");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: form.name, email: form.email, message }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                throw new Error(data.error || "Something went wrong. Please try again.");
            }
            setForm(initialForm);
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setErrorMessage(
                err instanceof Error ? err.message : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <div className="delete-account-container">
            <h1>Delete your DivineSarathi account</h1>
            <p className="last-updated">Last updated: 29 October 2026</p>

            <p>You can delete your <strong>DivineSarathi</strong> account and the personal data linked to it at any time, from the app or from this page. You do not need to have the app installed to ask.</p>

            <section>
                <h2>1. From the app</h2>
                <ol>
                    <li>Open DivineSarathi and go to the <strong>Profile</strong> tab.</li>
                    <li>Tap <strong>Account details</strong> under your name.</li>
                    <li>Tap <strong>Delete account</strong>, tell us why if you like, and confirm.</li>
                </ol>
                <p>You are signed out straight away and we stop sending you notifications.</p>
            </section>

            <section>
                <h2>2. Without the app</h2>
                <p>Fill in this form, or write to <a href="mailto:founders@divinesarathi.in?subject=Delete%20my%20account">founders@divinesarathi.in</a> from the email you signed in with. If you signed in with your phone number, include that number. We may write back to confirm the account is yours before deleting it.</p>

                {status === "success" ? (
                    <div className="notice success" role="status">
                        <p><strong>We have your request.</strong> We will confirm by email and delete the account within 30 days.</p>
                        <button type="button" onClick={() => setStatus("idle")}>Send another request</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="da-name">Your name</label>
                        <input id="da-name" type="text" required autoComplete="name"
                            value={form.name} onChange={update("name")} />

                        <label htmlFor="da-email">Email we can reply to</label>
                        <input id="da-email" type="email" required autoComplete="email"
                            value={form.email} onChange={update("email")} />

                        <label htmlFor="da-signin">Email or phone number you sign in with, if different</label>
                        <input id="da-signin" type="text" autoComplete="off"
                            value={form.signIn} onChange={update("signIn")} />

                        <label htmlFor="da-reason">Anything you would like to tell us (optional)</label>
                        <textarea id="da-reason" rows={3} maxLength={1000}
                            value={form.reason} onChange={update("reason")} />

                        {status === "error" && (
                            <p className="notice error" role="alert">{errorMessage}</p>
                        )}

                        <button type="submit" disabled={status === "submitting"}>
                            {status === "submitting" ? "Sending..." : "Request account deletion"}
                        </button>
                    </form>
                )}
            </section>

            <section>
                <h2>3. What gets deleted</h2>
                <p>We keep your account on hold for 30 days in case you change your mind, then erase it. If you want it gone sooner, say so and we will do it earlier. We erase:</p>
                <ul>
                    <li>Your name, email, phone number and sign‑in details</li>
                    <li>Your profile details such as age, gender, date of birth and language</li>
                    <li>Your conversations with Krishna AI and their transcripts</li>
                    <li>Device and network identifiers, including push notification tokens</li>
                    <li>Feedback and messages you have sent us</li>
                </ul>
            </section>

            <section>
                <h2>4. What we keep</h2>
                <p>We keep anonymous usage counts, such as how many minutes of meditation were done or how many stories were played, with nothing that identifies you. If you bought Sarathi Plus, Apple or Google keep their own purchase records, and cancelling the subscription is done in the App Store or Google Play. Deleting your account does not cancel it.</p>
            </section>

            <section>
                <h2>5. Questions</h2>
                <p>Write to <a href="mailto:founders@divinesarathi.in">founders@divinesarathi.in</a>. See also our <a href="/privacy-policy">Privacy Policy</a>.</p>
            </section>

            <style jsx>{`
                .delete-account-container {
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
                ul, ol { margin-left: 20px; }
                ul { list-style: disc; }
                ol { list-style: decimal; }
                li { margin-bottom: 8px; }
                a { color: #0066cc; text-decoration: none; }
                a:hover { text-decoration: underline; }
                form { display: flex; flex-direction: column; gap: 6px; margin-top: 16px; max-width: 480px; }
                label { font-weight: 600; font-size: 0.95em; margin-top: 8px; }
                input, textarea {
                    width: 100%;
                    padding: 10px 12px;
                    border: 1px solid #c9c9c9;
                    border-radius: 8px;
                    font: inherit;
                    background: #fff;
                    color: #222;
                }
                button {
                    margin-top: 14px;
                    align-self: flex-start;
                    padding: 10px 18px;
                    border: none;
                    border-radius: 8px;
                    background: #053466;
                    color: #fff;
                    font: inherit;
                    font-weight: 600;
                    cursor: pointer;
                }
                button:disabled { opacity: 0.6; cursor: default; }
                .notice { padding: 12px 14px; border-radius: 8px; margin-top: 12px; }
                .success { background: #eef6ee; }
                .error { background: #fdecec; color: #8a1c1c; }
            `}</style>
        </div>
    );
}
