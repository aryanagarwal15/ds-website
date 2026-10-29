import QrCode from "./QrCode";
import StoreButtons from "./StoreButtons";
import { UI } from "@/content/ui";
import type { Locale } from "@/lib/routes";

/** The closing moment on every main page: one line, then the stores (and a QR on desktop). */
export default function ClosePanel({ locale, page, title, body }: { locale: Locale; page: string; title: string; body: string }) {
  const t = UI[locale];
  return (
    <section className="ds-section pt-4">
      <div className="ds-container">
        <div className="close-panel mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-14 text-center lg:flex-row lg:justify-between lg:px-14 lg:text-left">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-[#f5ead0]">{title}</h2>
            <p className="mt-3 text-[1.05rem] text-[#d8cdb4]">{body}</p>
            <StoreButtons locale={locale} page={page} spot="close" height={50} className="mt-7 justify-center lg:justify-start" />
          </div>
          <div className="hidden lg:block">
            <QrCode label={t.qr} size={140} onDark />
          </div>
        </div>
      </div>
    </section>
  );
}
