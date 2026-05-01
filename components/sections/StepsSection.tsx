"use client";

import { useState, useEffect, useRef } from "react";
import { CalendarCheck, SlidersHorizontal, MailCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { num: string; icon: LucideIcon; title: string; desc: string }[] =
  [
    {
      num: "01",
      icon: CalendarCheck,
      title: "Termin vereinbaren",
      desc: "Kurzes Einrichtungsgespräch — wir besprechen deine Branche, Zielgruppe und was du dir vorstellst.",
    },
    {
      num: "02",
      icon: SlidersHorizontal,
      title: "Einrichtung inklusive",
      desc: "Dein Lead-Funnel wird konfiguriert — Branding, Fragen, Logik. Du erhältst ein fertiges Widget, das nahtlos zu deiner Seite passt.",
    },
    {
      num: "03",
      icon: MailCheck,
      title: "Anfragen empfangen",
      desc: "Das Widget geht live. Qualifizierte Leads landen strukturiert in deinem Postfach — sofort und ohne weiteren Aufwand.",
    },
  ];

export default function StepsSection() {
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % 3), 4000);
    return () => clearInterval(timer);
  }, [started]);

  return (
    <section id="schritte" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-300 mx-auto">
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

        <div className="relative grid grid-cols-1 min-[900px]:grid-cols-3 gap-12 min-[900px]:gap-8">
          {/* Verbindungslinie zwischen Icons — nur auf Desktop */}
          <div className="hidden min-[900px]:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border z-0" />

          {steps.map((step, i) => {
            const isActive = i === active;
            const Icon = step.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative z-10 text-center cursor-pointer bg-transparent border-0 p-0 transition-all duration-400"
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-[400ms]"
                  style={{
                    background: isActive ? "#4648d4" : "#fff",
                    border: isActive ? "2px solid #4648d4" : "1px solid #e7e7ee",
                    boxShadow: isActive
                      ? "0 4px 24px rgba(70,72,212,0.25)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <Icon
                    size={36}
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
                <p className="text-[14px] leading-[1.55] text-fg-3 max-w-80 mx-auto">
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
