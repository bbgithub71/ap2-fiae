import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AP2 Lernhub – Fachinformatiker Anwendungsentwicklung",
  description:
    "Prüfungsorientierte Lerninhalte mit Übungen für die schriftliche AP2 – priorisiert nach Häufigkeit und Punkten aus den letzten IHK-Prüfungen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
        <footer className="mt-20 border-t border-white/10 py-6 text-center text-xs text-zinc-500">
          AP2 Lernhub · Inhalte basieren auf IHK-Prüfungskatalog (Okt. 2024) und Auswertung der letzten 12 Prüfungen.
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
