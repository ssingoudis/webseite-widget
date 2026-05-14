"use client";

import { useState } from "react";

const items = [
  {
    q: "Brauche ich Programmierkenntnisse?",
    a: "Nein. Die komplette Einrichtung ist inklusive — du musst nur kurz Zugang zu deiner Website bereitstellen, den Rest erledigen wir.",
  },
  {
    q: "Was kostet LeadPlug?",
    a: "Das erste Widget wird derzeit kostenlos eingerichtet. Wie es danach weitergeht, besprechen wir gemeinsam im Erstgespräch.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ja. Hosting in Deutschland, keine Cookies, kein externes Tracking. Fonts werden selbst gehostet. Datenschutz ist Standard, kein Addon.",
  },
  {
    q: "Funktioniert das mit meiner Website?",
    a: "Ja — das Widget wird als iFrame eingebunden und funktioniert mit jeder Website: WordPress, Wix, Jimdo, Squarespace, Typo3 oder einer individuellen Lösung.",
  },
  {
    q: "Wie erhalte ich die Anfragen?",
    a: "Jede Anfrage wird dir sofort per E-Mail zugestellt — strukturiert mit allen Antworten des Besuchers auf einen Blick.",
  },
  {
    q: "Kann ich das Widget an mein Design anpassen?",
    a: "Ja. Farben, Logo, Texte — das Widget fügt sich nahtlos in deine Website ein.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section id="faq" className="py-14 md:py-24 px-6 bg-slate-50">
      <div className="max-w-180 mx-auto">
        <div className="text-center mb-12">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            FAQ
          </span>
          <h2
            className="font-extrabold tracking-tight leading-[1.15] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Häufige Fragen
          </h2>
        </div>

        <div>
          {items.map((item, i) => {
            const isOpen = openItems.has(i);
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 md:px-8 mb-4 transition-all duration-300 ${
                  isOpen
                    ? "shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                    : "shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center bg-transparent border-0 text-left gap-4"
                >
                  <span className="text-lg font-bold text-slate-900 min-w-0 wrap-break-word">
                    {item.q}
                  </span>

                  <div className="relative w-5 h-5 shrink-0">
                    {/* Plus */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                        isOpen
                          ? "opacity-0 rotate-90 scale-75 text-slate-900"
                          : "opacity-100 rotate-0 scale-100 text-slate-400"
                      }`}
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    {/* Minus */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`absolute inset-0 w-full h-full transition-all duration-300 text-slate-900 ${
                        isOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 -rotate-90 scale-75"
                      }`}
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0" }}
                >
                  <p className="text-[15px] leading-[1.6] text-slate-600 mt-4 m-0">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
