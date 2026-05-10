import CTAWidget from "@/components/CTAWidget";

export default function CTASection() {
  return (
    <section id="cta" className="relative pt-16 pb-12 md:py-32 bg-slate-900 border-t border-slate-800 overflow-hidden">

      {/* Blauer Glow hinter dem Widget */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 md:w-150 md:h-150 bg-primary rounded-full blur-[100px] md:blur-[140px] opacity-40 pointer-events-none" />

      {/* Feines Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Überzeug dich selbst.
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-12 md:mb-20 max-w-2xl mx-auto">
          Klick dich durch unseren interaktiven Demo-Funnel und erlebe, wie nahtlos
          und hochwertig sich echte Lead-Generierung anfühlt.
        </p>

        <div className="relative mx-auto rounded-2xl md:rounded-3xl overflow-hidden">
          <CTAWidget />
        </div>

      </div>
    </section>
  );
}
