import { ArrowRight, CheckCircle2 } from "lucide-react";
import FunnelCTAButton from "@/components/FunnelCTAButton";
import HeroWidget from "@/components/HeroWidget";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-10 px-6">
      <div className="max-w-300 mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="flex flex-col items-center min-[900px]:items-start text-center min-[900px]:text-left">
          <h1
            className="font-display font-semibold leading-[1.1] tracking-[-0.03em] text-black mb-10"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Mehr Anfragen.
            <br />
            Weniger Reibung.
            <br />
            <span className="text-primary">Direkt auf deiner Website.</span>
          </h1>

          <p className="text-[18px] leading-[1.6] text-fg-3 max-w-115 mb-8">
            Verwandle Website-Besucher in qualifizierte Leads — mit einem
            interaktiven Widget, individuell für deinen Betrieb eingerichtet.
          </p>

          <div className="flex flex-wrap justify-center min-[900px]:justify-start items-center gap-3">
            <FunnelCTAButton
              label="Kostenlos einrichten lassen"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#3538b8] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold transition-colors duration-150"
            />
            <a
              href="#schritte"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-fg-3 hover:text-black transition-colors duration-150 px-3 py-3.5"
            >
              So funktionierts
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center min-[900px]:justify-start items-center gap-4 mt-7 text-[13px] text-fg-3">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-[#22c55e]" />
              100% DSGVO-konform
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-[#22c55e]" />
              Keine Vertragsbindung
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-[#22c55e]" />
              Einsatzbereit in &lt;48h
            </span>
          </div>
        </div>

        {/* Right column — Widget */}
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-primary-light px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-primary">
            <span className="w-1.75 h-1.75 rounded-full bg-primary inline-block animate-pulse" />
            Live-Demo — jetzt ausprobieren
          </div>
          <div className="w-full min-[900px]:max-w-100 mx-3">
            <HeroWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
