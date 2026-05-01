"use client";

import Logo from "./Logo";
import FunnelCTAButton from "./FunnelCTAButton";

const navLinks = [
  { label: "Features", href: "features" },
  { label: "Branchen", href: "branchen" },
  { label: "So funktionierts", href: "schritte" },
  { label: "FAQ", href: "faq" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/85 backdrop-blur-md overflow-hidden">
      <div className="max-w-300 mx-auto px-2 md:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 bg-transparent border-0 p-0"
        >
          <Logo className="w-10 h-10" />
          <span className="font-bold text-base min-[350px]:text-xl text-black tracking-[-0.02em]">
            SingoTec
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-fg-3 text-sm font-medium hover:text-black transition-colors duration-150 bg-transparent border-0 p-0"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden min-[330px]:block">
          <FunnelCTAButton
            label="Kostenlos einrichten lassen"
            className="bg-primary hover:bg-[#3538b8] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150"
          />
        </div>
      </div>
    </nav>
  );
}
