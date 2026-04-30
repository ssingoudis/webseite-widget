import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum — SingoTec",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="font-display text-[32px] font-semibold tracking-[-0.02em] text-black mb-4">
            Impressum
          </h1>
          <p className="text-fg-3 text-[15px]">Angaben gem. § 5 TMG folgen.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
