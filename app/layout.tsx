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
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10">{children}</main>
        <footer className="mt-12 space-y-1.5 border-t border-white/10 px-4 py-6 text-center text-xs text-zinc-500 sm:mt-20 sm:px-6">
          <p>
            AP2 Lernhub · Inhalte basieren auf IHK-Prüfungskatalog (Okt. 2024) und Auswertung der letzten 12 Prüfungen.
          </p>
          <p className="mx-auto max-w-prose text-zinc-600">
            Diese Seite wurde mit KI-Unterstützung (Claude Opus 4.7) erstellt; Inhalte wurden mit KI recherchiert und zusammengestellt. Ohne Gewähr – vor der Prüfung bitte mit offiziellen Quellen abgleichen.
          </p>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
