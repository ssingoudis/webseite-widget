import { ArrowRight, Home, Building2, Sun, LayoutDashboard, ChevronLeft } from "lucide-react";
import FunnelCTAButton from "@/components/FunnelCTAButton";

export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-[clamp(500px,70vh,820px)] flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-24 lg:pb-20">

      {/* Hintergrund: Grid-Pattern + Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary-light/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

          {/* Linke Spalte */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Für Handwerker &amp; Betriebe
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Verwandle Besucher in{" "}
              <span className="text-primary">qualifizierte Anfragen</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-fg-3 mb-10 leading-relaxed">
              Schluss mit starren Kontaktformularen. Wir bauen dir einen
              interaktiven Anfrage-Funnel, der perfekt zu deinem Betrieb passt
              und sofort mehr Aufträge generiert.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center lg:items-start">
              <FunnelCTAButton
                label="Jetzt anfragen"
                className="w-full lg:w-auto max-w-105 lg:max-w-none inline-flex justify-center items-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-primary hover:bg-[#3538b8] rounded-xl shadow-md transition-all"
              />
              <a
                href="#schritte"
                className="w-full lg:w-auto max-w-105 lg:max-w-none inline-flex justify-center items-center gap-2 px-8 py-3.5 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                So funktioniert&apos;s
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Trust-Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-fg-3 justify-center lg:justify-start">
              {["In 24h einsatzbereit", "Kein IT-Aufwand", "100% DSGVO-konform"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Rechte Spalte — statisches Funnel-Mockup */}
          <div className="mt-8 lg:mt-0">

            {/* Funnel-Karte (nicht klickbar) */}
            <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100/50 p-6 z-10 mx-auto max-w-125 select-none">

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 text-center">
                  Worauf soll die Anlage installiert werden?
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Schrägdach — aktiv */}
                <div className="flex flex-col items-center justify-center py-6 px-4 border-2 border-primary rounded-xl bg-primary-light/40 shadow-sm">
                  <Home size={36} className="text-primary mb-3" />
                  <span className="text-sm font-bold text-slate-900">Schrägdach</span>
                </div>
                {/* Flachdach */}
                <div className="flex flex-col items-center justify-center py-6 px-4 border-2 border-slate-100 hover:border-primary/40 hover:bg-primary-light/20 rounded-xl bg-white shadow-sm cursor-pointer transition-colors duration-150">
                  <Building2 size={36} className="text-slate-400 mb-3" />
                  <span className="text-sm font-semibold text-slate-700">Flachdach</span>
                </div>
                {/* Freifläche */}
                <div className="flex flex-col items-center justify-center py-6 px-4 border-2 border-slate-100 hover:border-primary/40 hover:bg-primary-light/20 rounded-xl bg-white shadow-sm cursor-pointer transition-colors duration-150">
                  <Sun size={36} className="text-slate-400 mb-3" />
                  <span className="text-sm font-semibold text-slate-700">Freifläche</span>
                </div>
                {/* Wandmontage */}
                <div className="flex flex-col items-center justify-center py-6 px-4 border-2 border-slate-100 hover:border-primary/40 hover:bg-primary-light/20 rounded-xl bg-white shadow-sm cursor-pointer transition-colors duration-150">
                  <LayoutDashboard size={36} className="text-slate-400 mb-3" />
                  <span className="text-sm font-semibold text-slate-700">Wandmontage</span>
                </div>
              </div>

              <hr className="border-slate-100 mb-6" />

              {/* Fortschrittsbalken */}
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-5">
                <div className="w-1/4 h-full bg-primary rounded-full" />
              </div>

              {/* Zurück-Link */}
              <div className="flex items-center text-slate-400 text-sm font-medium">
                <ChevronLeft size={16} className="mr-1" />
                zurück
              </div>

              {/* Schwebende Benachrichtigung — klebt an der Karte */}
              <div
                className="absolute -bottom-9 -left-5 z-20 bg-white px-5 py-4 rounded-xl shadow-2xl shadow-slate-200/60 border border-slate-100 flex items-center gap-4"
                style={{ animation: "float-badge 4s ease-in-out infinite" }}
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-lg border border-green-200">
                  💸
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Neue Anfrage
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    Fam. Müller • Solaranlage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
