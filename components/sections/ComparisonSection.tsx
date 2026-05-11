import Logo from "@/components/Logo";

export default function ComparisonSection() {
  return (
    <section className="py-14 md:py-32 px-6 text-slate-900">
      <div className="container mx-auto max-w-4xl">

        {/* Headline */}
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4">Zahlen lügen nicht</p>
          <h2
            className="font-extrabold tracking-tight leading-[1.15] text-black mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Dein Formular entscheidet.
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Ein normales Kontaktformular wird von den meisten Besuchern einfach übersprungen.
            Unser Widget führt sie Schritt für Schritt — und deutlich mehr hinterlassen am Ende ihre Daten.
          </p>
        </div>

        {/* Charts */}
        <div className="grid sm:grid-cols-2 gap-16 sm:gap-20 md:gap-24 max-w-3xl mx-auto items-start">

          {/* Chart 1: Standard Formular (9%) */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">Standard Formular</h3>

            <div className="relative w-52 h-52 md:w-60 md:h-60 flex items-center justify-center mx-auto group cursor-default transition-all duration-500 ease-out hover:scale-105">

              <div className="absolute inset-[10%] bg-linear-to-br from-white to-slate-50 rounded-full border border-slate-100 transition-all duration-500 shadow-[0_10px_25px_-8px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]" />

              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)]" viewBox="0 0 300 300">
                <path d="M 150 150 L 150 20 A 130 130 0 0 1 219.65 40.24 Z" fill="#64748b" />
              </svg>

              <div className="absolute w-[50%] h-[50%] bg-white rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] flex items-center justify-center z-20 border border-slate-50">
                <div className="w-[55%] h-[70%] bg-slate-50 border border-slate-200 rounded-lg p-2 flex flex-col gap-1.5 shadow-sm transform -rotate-2">
                  <div className="w-2/3 h-1.5 bg-slate-300 rounded-xs mb-1" />
                  <div className="w-full h-2.5 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-2.5 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-2.5 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-5 bg-white border border-slate-200 rounded-[3px]" />
                  <div className="w-full h-3 bg-slate-400 rounded-[3px] mt-auto" />
                </div>
              </div>

              <div className="absolute top-[6%] right-[-4%] md:top-[10%] md:right-[-6%] bg-white border border-slate-100 rounded-xl shadow-lg z-30 px-4 py-2 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-slate-600 font-black text-2xl tracking-tight">9%</span>
              </div>

            </div>

            <p className="mt-7 text-sm text-slate-400 text-center">
              <span className="font-bold text-slate-500">9 von 100 Besuchern</span> schicken eine Anfrage
            </p>
          </div>

          {/* Chart 2: LeadPlug (43%) */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-primary mb-8 uppercase tracking-widest">LeadPlug Widget</h3>

            <div className="relative w-52 h-52 md:w-60 md:h-60 flex items-center justify-center mx-auto group cursor-default transition-all duration-500 ease-out hover:scale-105">

              <div className="absolute inset-[10%] bg-primary rounded-full blur-[50px] opacity-25 -z-10 group-hover:opacity-40 transition-opacity duration-700" />

              <div className="absolute inset-[10%] bg-linear-to-br from-white to-slate-50 rounded-full border border-primary-light transition-all duration-500 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.12)] group-hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.2)]" />

              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_8px_12px_rgba(0,0,0,0.12)]" viewBox="0 0 300 300">
                <path className="fill-primary" d="M 150 150 L 150 20 A 130 130 0 0 1 205.3 267.6 Z" />
              </svg>

              <div className="absolute w-[50%] h-[50%] bg-white rounded-full shadow-[0_15px_30px_-5px_rgba(0,0,0,0.25)] flex items-center justify-center z-20 border border-slate-50">
                <div className="w-[60%] h-[60%] bg-linear-to-br from-primary to-primary-dark rounded-2xl shadow-[inset_0_2px_8px_rgba(255,255,255,0.3)] flex items-center justify-center text-white transform rotate-3">
                  <Logo className="w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>

              <div className="absolute top-[6%] right-[-4%] md:top-[10%] md:right-[-6%] bg-white border border-primary-light rounded-xl shadow-xl z-30 px-5 py-2.5 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="text-primary font-black text-2xl md:text-3xl tracking-tight">43%</span>
              </div>

            </div>

            <p className="mt-7 text-sm text-slate-400 text-center">
              <span className="font-bold text-primary">43 von 100 Besuchern</span> schicken eine Anfrage
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
