"use client";

import { useState } from "react";

type FormState = { name: string; email: string; message: string };
type FormStatus = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = { name: "", email: "", message: "" };

const STRINGS = {
  en: {
    name: "Name", email: "Email", message: "Your message", send: "Send message", sending: "Sending…",
    missing: "Please fill in all three fields.", failed: "That did not go through. Please try once more.",
    sentTitle: "Message sent", sentBody: "Thank you for writing to us. We read every message and will reply soon.", another: "Send another message",
  },
  hi: {
    name: "नाम", email: "ईमेल", message: "आपका संदेश", send: "संदेश भेजें", sending: "भेज रहे हैं…",
    missing: "कृपया तीनों जगह भरें।", failed: "संदेश नहीं जा सका। कृपया एक बार फिर कोशिश करें।",
    sentTitle: "संदेश चला गया", sentBody: "लिखने के लिए धन्यवाद। हम हर संदेश पढ़ते हैं और जल्द जवाब देंगे।", another: "एक और संदेश भेजें",
  },
};

const inputClass =
  "w-full rounded-[var(--ds-radius-m)] border bg-surface px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors duration-150 focus:border-saffron disabled:opacity-60";

export default function ContactForm({ locale = "en" }: { locale?: "en" | "hi" }) {
  const s = STRINGS[locale];
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage(s.missing);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(s.failed);
      }

      setForm(initialForm);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : s.failed);
    }
  };

  if (status === "success") {
    return (
      <div className="dcard px-8 py-12 text-center">
        <p className="font-serif text-[1.6rem] font-semibold text-indigo">{s.sentTitle}</p>
        <p className="mx-auto mt-3 max-w-sm text-[0.95rem] text-ink-soft">
          {s.sentBody}
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
          }}
          className="mt-6 text-[0.95rem] font-medium text-indigo-bright underline underline-offset-4"
        >
          {s.another}
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 sm:flex-row">
        <label className="flex-1">
          <span className="mb-1.5 block text-left text-[0.85rem] font-semibold text-ink-soft">
            {s.name}
          </span>
          <input
            className={inputClass}
            style={{ borderColor: "var(--ds-line)" }}
            autoComplete="name"
            value={form.name}
            disabled={status === "submitting"}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          />
        </label>
        <label className="flex-1">
          <span className="mb-1.5 block text-left text-[0.85rem] font-semibold text-ink-soft">
            {s.email}
          </span>
          <input
            className={inputClass}
            style={{ borderColor: "var(--ds-line)" }}
            type="email"
            autoComplete="email"
            value={form.email}
            disabled={status === "submitting"}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />
        </label>
      </div>

      <label>
        <span className="mb-1.5 block text-left text-[0.85rem] font-semibold text-ink-soft">
          {s.message}
        </span>
        <textarea
          className={`${inputClass} resize-none`}
          style={{ borderColor: "var(--ds-line)" }}
          rows={5}
          value={form.message}
          disabled={status === "submitting"}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
        />
      </label>

      {status === "error" && errorMessage && (
        <p className="text-center text-[0.9rem] text-error" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-2 flex justify-center">
        <button type="submit" disabled={status === "submitting"} className="btn btn-primary btn-lg min-w-[200px]">
          {status === "submitting" ? s.sending : s.send}
        </button>
      </div>
    </form>
  );
}
