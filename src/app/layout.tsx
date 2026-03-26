import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Deep Kotecha — Full Stack Engineer",
  description:
    "Graduate MS.CSE Student at Penn State. Full Stack Software Engineer specializing in React, Next.js, Node.js, and scalable systems.",
  keywords: ["Deep Kotecha", "Full Stack Engineer", "Penn State", "React", "Next.js"],
  authors: [{ name: "Deep Hiren Kotecha" }],
  openGraph: {
    title: "Deep Kotecha — Full Stack Engineer",
    description: "Graduate MS.CSE Student at Penn State with 2+ years of full-stack engineering experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
