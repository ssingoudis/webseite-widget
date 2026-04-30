import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary-light px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-primary mb-6">
            <span className="w-[7px] h-[7px] rounded-full bg-primary inline-block animate-pulse" />
            Für Handwerksbetriebe
          </div>

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

          <p className="text-[18px] leading-[1.6] text-fg-3 max-w-[460px] mb-8">
            Verwandle Website-Besucher in qualifizierte Leads — mit
            interaktiven Formularen, die in 5 Minuten eingerichtet sind.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#3538b8] text-white px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline transition-colors duration-150"
          >
            Jetzt kostenlos starten
            <ArrowRight size={18} />
          </a>

          <div className="flex flex-wrap items-center gap-4 mt-7 text-[13px] text-fg-3">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-[#22c55e]" />
              100% DSGVO-konform
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-[#22c55e]" />
              Keine Programmierkenntnisse
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={16} className="text-[#22c55e]" />
              In 5 Min. eingerichtet
            </span>
          </div>
        </div>

        {/* Right column — iframe placeholder */}
        <div className="flex justify-center">
          <div
            className="bg-white rounded-2xl overflow-hidden w-full max-w-140 min-[900px]:max-w-100 border border-border"
            style={{
              boxShadow:
                "0 4px 24px rgba(70,72,212,0.12), 0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f8f9fb] border-b border-[#eee]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[11px] text-fg-4 font-medium tracking-[0.05em]">
                Live-Demo
              </span>
            </div>
            {/* Placeholder content */}
            <div className="p-8 flex flex-col items-center justify-center min-h-[320px] text-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-primary opacity-60" />
              </div>
              <p className="text-[13px] text-fg-4 max-w-[200px] leading-relaxed">
                Live-Demo Widget wird hier eingebettet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
