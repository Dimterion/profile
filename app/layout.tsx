import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dmitrii | Developer",
  description:
    "Personal website of Dmitrii, a developer and technical consultant building web applications with React, TypeScript, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <SiteHeader />

        <main id="top" className="mx-auto max-w-3xl px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}