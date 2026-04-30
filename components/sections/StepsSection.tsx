"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, Code2, MailCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { num: string; icon: LucideIcon; title: string; desc: string }[] =
  [
    {
      num: "01",
      icon: SlidersHorizontal,
      title: "Funnel konfigurieren",
      desc: "Wähle eine Branchenvorlage, passe Farben und Fragen an — fertig in Minuten.",
    },
    {
      num: "02",
      icon: Code2,
      title: "Auf der Website einbinden",
      desc: "Kopiere ein Code-Snippet und füge es in deine Website ein. WordPress, Wix, Typo3 — egal.",
    },
    {
      num: "03",
      icon: MailCheck,
      title: "Anfragen empfangen",
      desc: "Qualifizierte Leads landen direkt in deinem E-Mail-Postfach — strukturiert und sofort.",
    },
  ];

export default function StepsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="schritte" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            SO FUNKTIONIERT'S
          </span>
          <h2
            className="font-display font-semibold leading-[1.15] tracking-[-0.02em] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            In 3 Schritten zu mehr Anfragen
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-12 min-[900px]:gap-8">
          {steps.map((step, i) => {
            const isActive = i === active;
            const Icon = step.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-center cursor-pointer bg-transparent border-0 p-0 transition-all duration-[400ms]"
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                <div
                  className="w-[72px] h-[72px] rounded-[18px] mx-auto mb-5 flex items-center justify-center transition-all duration-[400ms]"
                  style={{
                    background: isActive ? "#4648d4" : "#fff",
                    border: isActive ? "2px solid #4648d4" : "1px solid #e7e7ee",
                    boxShadow: isActive
                      ? "0 4px 24px rgba(70,72,212,0.25)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <Icon
                    size={32}
                    style={{
                      color: isActive ? "#fff" : "#4648d4",
                      transition: "color 400ms",
                    }}
                  />
                </div>

                <span
                  className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded mb-3 transition-all duration-[400ms]"
                  style={{
                    background: isActive ? "#4648d4" : "#f0f0ff",
                    color: isActive ? "#fff" : "#4648d4",
                  }}
                >
                  {step.num}
                </span>

                <h4 className="text-[18px] font-semibold text-black mb-2">
                  {step.title}
                </h4>
                <p className="text-[14px] leading-[1.55] text-fg-3 max-w-[320px] mx-auto">
                  {step.desc}
                </p>

                <div
                  className="w-10 h-[3px] rounded-sm mx-auto mt-4 transition-colors duration-[400ms]"
                  style={{ background: isActive ? "#4648d4" : "transparent" }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
