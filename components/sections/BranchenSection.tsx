"use client";

import { useState } from "react";
import { Sun, Thermometer, Wind, Droplets, Settings, DoorOpen, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FunnelModal from "@/components/FunnelModal";

type Status = "live" | "custom";

const branchen: {
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  label: string;
  desc: string;
  status: Status;
  demoUrl?: string;
  ctaLabel?: string;
}[] = [
  {
    Icon: Sun,
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    label: "Solaranlagen",
    desc: "Dachtyp, Ausrichtung, Stromverbrauch — sofort einsatzbereit.",
    status: "live",
    demoUrl: "https://app.leadplug.de/demo-solar",
  },
  {
    Icon: Thermometer,
    iconColor: "#3b82f6",
    iconBg: "#eff6ff",
    label: "Wärmepumpen",
    desc: "Heizlast, Gebäudeart, Förderung — gezielt qualifizieren.",
    status: "live",
    demoUrl: "https://app.leadplug.de/demo-waermepumpe",
  },
  {
    Icon: Wind,
    iconColor: "#10b981",
    iconBg: "#ecfdf5",
    label: "Klimaanlagen",
    desc: "Raumgröße, Nutzungsart, Bestandsanlage — qualifizierte Anfragen sofort.",
    status: "live",
    demoUrl: "https://app.leadplug.de/demo-klima",
  },
  {
    Icon: Droplets,
    iconColor: "#06b6d4",
    iconBg: "#ecfeff",
    label: "Sanitär & Bad",
    desc: "Badumbau, Notfall, Umfang — filtert ernsthafte Anfragen.",
    status: "live",
    demoUrl: "https://app.leadplug.de/demo-bad",
  },
  {
    Icon: DoorOpen,
    iconColor: "#0ea5e9",
    iconBg: "#f0f9ff",
    label: "Fenster & Türen",
    desc: "Maß, Material, Anlass — strukturierte Anfragen vom ersten Klick.",
    status: "live",
    demoUrl: "https://app.leadplug.de/demo-fenster",
  },
  {
    Icon: Settings,
    iconColor: "#64748b",
    iconBg: "#f8fafc",
    label: "Eigene Branche",
    desc: "Deine Fragen, dein Branding — vollständig anpassbar.",
    status: "custom",
    demoUrl: "https://app.leadplug.de/leadplug",
    ctaLabel: "Jetzt anfragen",
  },
];

export default function BranchenSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <section id="branchen" className="py-14 md:py-24 px-6">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-14">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            BRANCHEN
          </span>
          <h2
            className="font-extrabold tracking-tight leading-[1.15] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Für jedes Handwerk das passende Formular
          </h2>
          <p className="text-[16px] text-fg-3 mt-3 max-w-130 mx-auto">
            Branchenspezifische Fragen, bereits vorkonfiguriert — wir richten alles auf deinen Betrieb ein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {branchen.map(({ Icon, iconColor, iconBg, label, desc, demoUrl, ctaLabel }) => (
            <div
              key={label}
              onClick={() => demoUrl && setActiveDemo(demoUrl)}
              className={`group p-5 rounded-xl border border-slate-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] hover:border-slate-200 transition-all duration-200 select-none flex flex-col ${demoUrl ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: iconBg }}
                >
                  <Icon size={16} style={{ color: iconColor }} />
                </div>
                <h4 className="text-[14px] font-semibold text-slate-900">
                  {label}
                </h4>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-500 flex-1">
                {desc}
              </p>
              {demoUrl && (
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveDemo(demoUrl); }}
                  className="mt-3 self-start inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-700 border border-slate-200 group-hover:bg-primary-light group-hover:border-primary/20 group-hover:text-primary px-3.5 py-1.5 rounded-lg transition-all duration-150 cursor-pointer"
                >
                  {ctaLabel ?? "Jetzt testen"} <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <FunnelModal
        isOpen={!!activeDemo}
        onClose={() => setActiveDemo(null)}
        src={activeDemo ?? ""}
      />
    </section>
  );
}
