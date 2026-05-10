import Logo from "@/components/Logo";

export default function ComparisonSection() {
  return (
    <section className="py-32 px-6 text-slate-900">
      <div className="container mx-auto max-w-5xl">

        {/* Headline */}
        <div className="text-center mb-24">
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">Zahlen lügen nicht</p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Bis zu 377% mehr Leads <br className="hidden md:block" />
            für deinen Betrieb
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Die Mathematik spricht für sich. Analysen von{" "}
            <span className="font-bold text-slate-800">HubSpot</span> und{" "}
            <span className="font-bold text-slate-800">Venture Harbour</span>{" "}
            beweisen: Während klassische Formulare im Schnitt bei 9% abbrechen,
            erreichen interaktive Multi-Step-Funnel bis zu 43%. Das ist eine
            reale Steigerung von 377% aus demselben Website-Traffic.
          </p>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-24 md:gap-16 max-w-4xl mx-auto items-center">

          {/* Chart 1: Standard Formular (9%) */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-slate-500 mb-12">Standard Formular</h3>

            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] flex items-center justify-center mx-auto group cursor-default transition-all duration-500 ease-out hover:scale-105">

              <div className="absolute inset-[10%] bg-linear-to-br from-white to-slate-50 rounded-full border border-slate-100 transition-all duration-500 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]" />

              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]" viewBox="0 0 300 300">
                <path d="M 150 150 L 150 20 A 130 130 0 0 1 219.65 40.24 Z" fill="#64748b" />
              </svg>

              <div className="absolute w-[50%] h-[50%] bg-white rounded-full shadow-[0_15px_35px_-5px_rgba(0,0,0,0.25)] flex items-center justify-center z-20 border border-slate-50">
                <div className="w-[55%] h-[70%] bg-slate-50 border border-slate-200 rounded-lg p-2 md:p-2.5 flex flex-col gap-1.5 shadow-sm transform -rotate-2">
                  <div className="w-2/3 h-1.5 md:h-2 bg-slate-300 rounded-xs mb-1" />
                  <div className="w-full h-2.5 md:h-3 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-2.5 md:h-3 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-2.5 md:h-3 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-6 md:h-8 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-3 md:h-4 bg-slate-400 rounded-[3px] mt-auto" />
                </div>
              </div>

              <div className="absolute top-[8%] right-[-2%] md:top-[12%] md:right-[-5%] bg-white border border-slate-100 rounded-2xl shadow-xl z-30 px-5 py-2.5 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-slate-600 font-black text-2xl md:text-3xl tracking-tight">9%</span>
              </div>

            </div>
          </div>

          {/* Chart 2: LeadPlug Funnel (43%) */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-primary mb-12">LeadPlug Funnel</h3>

            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] flex items-center justify-center mx-auto group cursor-default transition-all duration-500 ease-out hover:scale-105">

              <div className="absolute inset-[10%] bg-primary rounded-full blur-[60px] opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-700" />

              <div className="absolute inset-[10%] bg-linear-to-br from-white to-slate-50 rounded-full border border-primary-light transition-all duration-500 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)]" />

              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_12px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 300 300">
                <path className="fill-primary" d="M 150 150 L 150 20 A 130 130 0 0 1 205.3 267.6 Z" />
              </svg>

              <div className="absolute w-[50%] h-[50%] bg-white rounded-full shadow-[0_20px_40px_-5px_rgba(0,0,0,0.35)] flex items-center justify-center z-20 border border-slate-50">
                <div className="w-[60%] h-[60%] bg-linear-to-br from-primary to-primary-dark rounded-2xl md:rounded-3xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)] flex items-center justify-center text-white transform rotate-3">
                  <Logo className="w-14 h-14 md:w-16 md:h-16" />
                </div>
              </div>

              <div className="absolute top-[8%] right-[-2%] md:top-[12%] md:right-[-5%] bg-white border border-primary-light rounded-2xl shadow-2xl z-30 px-6 py-3 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-primary font-black text-3xl md:text-4xl tracking-tight">43%</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-28 relative z-20">
          <button className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-white bg-primary rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 group">
            Jetzt Leads verdreifachen
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <p className="mt-6 text-sm font-semibold text-slate-500">Kostenloses Erstgespräch. 100% unverbindlich.</p>
        </div>

      </div>
    </section>
  );
}
