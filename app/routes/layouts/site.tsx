import type { SiteLayoutProps } from "~/types";
import Header from "../../components/Header/Header";
import Footer from "~/components/footer/Footer";

export default function SiteLayout({
  children,
  showPortrait = false,
}: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header showPortrait={showPortrait} />

      <main className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-28 pb-16 md:pt-40 md:pb-36">
        {children}
      </main>

      <Footer />
    </div>
  );
}
