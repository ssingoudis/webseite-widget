import type { Metadata } from "next";
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
    "Einbettbare Sales-Funnels für Handwerksbetriebe. In 5 Minuten eingerichtet, DSGVO-konform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-ui">{children}</body>
    </html>
  );
}
