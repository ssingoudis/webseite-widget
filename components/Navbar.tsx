"use client";

import Logo from "./Logo";
import FunnelCTAButton from "./FunnelCTAButton";

const navLinks = [
  { label: "Features", href: "features" },
  { label: "Branchen", href: "branchen" },
  { label: "So funktionierts", href: "schritte" },
  { label: "FAQ", href: "faq" },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

function handleNavClick(e: React.MouseEvent, id: string) {
  if (window.location.pathname === "/") {
    e.preventDefault();
    smoothScrollTo(id);
  }
}

function handleLogoClick(e: React.MouseEvent) {
  if (window.location.pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/85 backdrop-blur-md overflow-hidden">
      <div className="max-w-300 mx-auto px-2 md:px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
            <Logo className="w-7 h-7" />
          </div>
          <span className="font-bold text-base min-[350px]:text-xl text-black tracking-[-0.02em]">
            LeadPlug
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`/#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-fg-3 text-sm font-medium hover:text-black transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden min-[330px]:block">
          <FunnelCTAButton
            label="Jetzt anfragen"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150"
          />
        </div>
      </div>
    </nav>
  );
}
