import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteMode = process.env.NEXT_PUBLIC_SITE_MODE || "concept";
const isConcept = siteMode !== "official";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export const metadata: Metadata = {
  title: isConcept
    ? "Alba Larsen — Independent Website Concept"
    : "Alba Larsen — Racing Driver, Ferrari Driver Academy",
  description: isConcept
    ? "Independent digital concept for Danish racing driver Alba Larsen, connecting racing, performance, culture and G.I.R.L."
    : "Official home of Danish racing driver Alba Larsen. Racing, story, G.I.R.L., partnerships, press and life beyond the track.",
  robots: isConcept ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: isConcept
      ? "Alba Larsen — Independent Website Concept"
      : "Alba Larsen — Racing Driver, Ferrari Driver Academy",
    description: isConcept
      ? "Independent digital concept for Danish racing driver Alba Larsen, connecting racing, performance, culture and G.I.R.L."
      : "Official home of Danish racing driver Alba Larsen. Racing, story, G.I.R.L., partnerships, press and life beyond the track.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: isConcept
      ? "Alba Larsen — Independent Website Concept"
      : "Alba Larsen — Racing Driver, Ferrari Driver Academy",
    description: isConcept
      ? "Independent digital concept for Danish racing driver Alba Larsen"
      : "Official home of Danish racing driver Alba Larsen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#FAF8F2] text-[#101010]`}
      >
        {children}
      </body>
    </html>
  );
}
