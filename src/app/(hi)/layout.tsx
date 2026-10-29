import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/** Hindi pages: the whole page is marked lang="hi" so browsers, screen readers and search read it as Hindi. */
export default function HindiLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="hi">
      <Navbar locale="hi" />
      <main id="main">{children}</main>
      <Footer locale="hi" />
    </div>
  );
}
