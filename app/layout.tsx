import type { Metadata } from "next";
import { DM_Sans, Italiana } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const italiana = Italiana({ weight: "400", subsets: ["latin"], variable: "--font-italiana", display: "swap" });

export const metadata: Metadata = {
  title: "Veloura Beauty — Makeup, made personal",
  description: "Veloura Beauty — expressive colour, skin-loving formulas, and everyday makeup essentials.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${italiana.variable}`}>{children}</body>
    </html>
  );
}
