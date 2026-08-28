import type { SiteLayoutProps } from "~/types";
import Header from "../../components/Header/Header";
import Footer from "~/components/Footer/Footer";

export default function SiteLayout({
  children,
  showPortrait = false,
  noTopBottomPadding = false,
}: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header showPortrait={showPortrait} />

      <main
        className={`mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-10 ${
          noTopBottomPadding ? "py-0" : "py-10 md:px-4 md:py-20"
        }`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
