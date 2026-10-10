import type { Metadata } from "next";
import { DM_Sans, Italiana } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-italiana", display: "swap" });

export const metadata: Metadata = {
  title: "Veloura Beauty — Chinese beauty, curated for Australia",
  description: "Discover Flower Knows, FLORTTE, JOOCYEE, Judydoll, INTO YOU and RED CHAMBER in Veloura's Australian C-beauty edit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${italiana.variable}`}>{children}</body>
    </html>
  );
}
