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
    <section id="features" className="pt-16 pb-24 px-6">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-14">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            VORTEILE
          </span>
          <h2
            className="font-display font-semibold leading-[1.15] tracking-[-0.02em] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Warum LeadPlug?
          </h2>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl border border-border bg-white transition-all duration-250 hover:shadow-[0_4px_24px_rgba(70,72,212,0.1)] hover:border-[#c8c8ff]"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h4 className="text-[17px] font-semibold text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-[1.55] text-fg-3 m-0">
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
