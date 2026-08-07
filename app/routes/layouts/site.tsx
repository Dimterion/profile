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

      <main className="mx-auto flex w-full max-w-5xl flex-col items-center p-4">
        {children}
      </main>

      <Navbar />
      <SocialLinks />
    </div>
  );
}
