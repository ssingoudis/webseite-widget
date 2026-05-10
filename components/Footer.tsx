"use client";

import { useState } from "react";
import Logo from "./Logo";
import ContactModal from "./ContactModal";
import LegalModal from "./LegalModal";

type LegalType = "impressum" | "datenschutz" | "avv";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalType | null>(null);


  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 px-6 py-10">
        <div className="max-w-300 mx-auto flex flex-col min-[550px]:flex-row items-center min-[550px]:justify-between gap-3 min-[550px]:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
              <Logo className="w-7 h-7" />
            </div>
            <span className="font-semibold text-lg text-white">LeadPlug</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px]">
            <button
              onClick={() => setLegalModal("datenschutz")}
              className="text-slate-400 hover:text-white transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer text-[13px]"
            >
              Datenschutz
            </button>
            <button
              onClick={() => setLegalModal("impressum")}
              className="text-slate-400 hover:text-white transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer text-[13px]"
            >
              Impressum
            </button>
            <button
              onClick={() => setLegalModal("avv")}
              className="text-slate-400 hover:text-white transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer text-[13px]"
            >
              AVV
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="text-slate-400 hover:text-white transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer text-[13px]"
            >
              Kontakt
            </button>
          </div>

          <span className="hidden min-[550px]:block text-[12px] text-slate-500">© 2025 LeadPlug</span>
        </div>
      </footer>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
