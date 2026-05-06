"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-180 mx-auto">
        <div className="text-center mb-12">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            FAQ
          </span>
          <h2
            className="font-display font-semibold leading-[1.15] tracking-[-0.02em] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Häufige Fragen
          </h2>
        </div>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-5 bg-transparent border-0 cursor-pointer text-left gap-4"
              >
                <span className="text-[15px] font-semibold text-black">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className="text-[#999] shrink-0 transition-transform duration-200"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-250 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0" }}
              >
                <p className="text-[14px] leading-[1.6] text-fg-3 pb-5 m-0">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
