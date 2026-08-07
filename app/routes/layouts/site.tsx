import type { ReactNode } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SocialLinks from "../../components/social/SocialLinks";

type SiteLayoutProps = {
  children: ReactNode;
  showPortrait?: boolean;
};

export default function SiteLayout({
  children,
  showPortrait = false,
}: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header showPortrait={showPortrait} />

      <main className="mx-auto w-full p-4 md:max-w-5xl">
        {children}
      </main>

      <Navbar />
      <SocialLinks />
    </div>
  );
}