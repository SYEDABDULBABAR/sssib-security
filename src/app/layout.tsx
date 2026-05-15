import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SSSIB | SHARK SECURITY SERVICE AND INTELLIGENCE BUREAU - Global Vigilance, Elite Intelligence",
  icons: { icon: '/logo-icon.svg', apple: '/logo-icon.svg' },
  description:
    "SSSIB - SHARK SECURITY SERVICE AND INTELLIGENCE BUREAU. Global Vigilance, Elite Intelligence. SIA licensed security services across the UK. 24/7 protection, CCTV monitoring, mobile patrols, event security.",
  keywords:
    "SSSIB, shark security, security services, UK security, SIA licensed, CCTV monitoring, security guards, event security, intelligence bureau",
  openGraph: {
    title: "SSSIB | SHARK SECURITY SERVICE AND INTELLIGENCE BUREAU",
    description:
      "SSSIB - Global Vigilance, Elite Intelligence. SIA licensed security services across the UK.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
