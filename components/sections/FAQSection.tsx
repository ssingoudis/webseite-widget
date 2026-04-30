"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "Brauche ich Programmierkenntnisse?",
    a: "Nein. Du wählst eine Vorlage, passt Texte und Farben an und kopierst ein iFrame-Snippet auf deine Seite. Das dauert weniger als 5 Minuten.",
  },
  {
    q: "Was kostet SingoTec?",
    a: "Du zahlst nur pro qualifiziertem Lead — keine monatliche Grundgebühr, kein Risiko. Die genauen Konditionen besprechen wir individuell.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ja. Hosting in Deutschland, keine Cookies, kein externes Tracking. Fonts werden selbst gehostet. Datenschutz ist bei uns Standard, nicht Addon.",
  },
  {
    q: "Funktioniert das mit meiner Website?",
    a: "Ja — das Widget wird als iFrame eingebunden und funktioniert mit jeder Website: WordPress, Wix, Jimdo, Squarespace, Typo3 oder individuell.",
  },
  {
    q: "Wie erhalte ich die Anfragen?",
    a: "Jede Anfrage wird dir sofort per E-Mail zugestellt — strukturiert mit allen Antworten. Eine CRM-Anbindung ist in Planung.",
  },
  {
    q: "Kann ich das Widget an mein Branding anpassen?",
    a: "Ja. Farben, Texte, Logo — alles ist konfigurierbar. Das Widget sieht aus, als gehöre es nativ zu deiner Seite.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-[720px] mx-auto">
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
