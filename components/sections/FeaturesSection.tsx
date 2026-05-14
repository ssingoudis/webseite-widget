import { Zap, Palette, Code2, Mail, Shield, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: "Mehr & bessere Anfragen",
    desc: "Besucher klicken sich Schritt für Schritt durch statt abzuspringen.",
  },
  {
    icon: Palette,
    title: "Dein Design",
    desc: "Farben, Logo, Texte — das Widget fügt sich nahtlos in deine Website ein.",
  },
  {
    icon: Code2,
    title: "Einfache Einbindung",
    desc: "Ein einzeiliger Code — funktioniert mit WordPress, Wix, Jimdo und allen anderen.",
  },
  {
    icon: Mail,
    title: "Sofort Anfragen erhalten",
    desc: "Jede Anfrage landet strukturiert in deinem Postfach — alle Antworten auf einen Blick.",
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    desc: "Hosting in Deutschland, keine Cookies, kein Tracking. Datenschutz ab Werk.",
  },
  {
    icon: SlidersHorizontal,
    title: "Branchenspezifisch",
    desc: "Vorkonfigurierte Fragen für deine Branche — wir richten alles ein.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-14 pb-14 md:pt-16 md:pb-24 px-6 bg-slate-50">
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
                className="p-5 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-200 cursor-default select-none"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <h4 className="text-[14px] font-semibold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-500">
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
