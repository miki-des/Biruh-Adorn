import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingWhatsApp } from "../components/layout/FloatingWhatsApp";
import { FloatingTelegram } from "../components/layout/FloatingTelegram";
import { brandConfig } from "../config/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brandConfig.name} | ${brandConfig.tagline}`,
  description: brandConfig.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interDisplay.variable} ${inter.variable}`}>
        <Header />
        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingTelegram />
      </body>
    </html>
  );
}
