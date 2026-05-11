import { Zap, Palette, Code2, Mail, Shield, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: "Mehr Anfragen, bessere Qualität",
    desc: "Interaktive Formulare statt starren Kontaktformularen — Besucher klicken sich durch statt abzuspringen.",
  },
  {
    icon: Palette,
    title: "Dein Design",
    desc: "Farben, Logo, Texte — das Widget fügt sich nahtlos in deine Website ein.",
  },
  {
    icon: Code2,
    title: "Einfache Einbindung",
    desc: "Dein Widget wird als iFrame eingebunden — kompatibel mit WordPress, Wix, Jimdo, Squarespace und allem anderen.",
  },
  {
    icon: Mail,
    title: "Sofort Anfragen erhalten",
    desc: "Jede Anfrage landet strukturiert in deinem E-Mail-Postfach — mit allen Antworten auf einen Blick.",
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    desc: "Hosting in Deutschland, keine Cookies, kein Tracking. Datenschutz ab Werk.",
  },
  {
    icon: SlidersHorizontal,
    title: "Branchenspezifisch",
    desc: "Vorkonfigurierte Fragen für deine Branche — wir richten alles auf deinen Betrieb ein.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-14 pb-14 md:pt-16 md:pb-24 px-6">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-14">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            VORTEILE
          </span>
          <h2
            className="font-extrabold tracking-tight leading-[1.15] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Was LeadPlug anders macht.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-default select-none"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h4 className="text-[15px] font-semibold text-slate-900 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-slate-500 m-0">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
