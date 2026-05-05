"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";
import Logo from "./Logo";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-surface border-t border-border px-6 py-10">
        <div className="max-w-300 mx-auto flex flex-wrap items-center justify-center min-[400px]:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="w-9 h-9" />
            <span className="font-semibold text-lg text-black">LeadPlug</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-fg-3">
            <Link
              href="/datenschutz"
              className="text-fg-3 no-underline hover:text-black transition-colors duration-150"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-fg-3 no-underline hover:text-black transition-colors duration-150"
            >
              Impressum
            </Link>
            <Link
              href="/avv"
              className="text-fg-3 no-underline hover:text-black transition-colors duration-150"
            >
              AVV
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="text-fg-3 hover:text-black transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer text-[13px]"
            >
              Kontakt
            </button>
          </div>

          <span className="hidden min-[550px]:block text-[12px] text-fg-4">© 2025 LeadPlug</span>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
