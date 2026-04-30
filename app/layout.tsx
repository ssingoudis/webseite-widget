import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SingoTec — Mehr Anfragen für Handwerksbetriebe",
  description:
    "Individuelle Lead-Widgets für Handwerksbetriebe — DSGVO-konform, einsatzbereit in unter 48h, kostenlos eingerichtet.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${lora.variable} ${plusJakartaSans.variable}`}>
      <body className="font-ui">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
