import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar locale="en" />
      <main id="main">{children}</main>
      <Footer locale="en" />
    </>
  );
}
