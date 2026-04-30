import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Branchen", href: "#branchen" },
  { label: "So funktionierts", href: "#schritte" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/85 backdrop-blur-md overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-base font-display">
            S
          </div>
          <span className="font-bold text-lg text-black tracking-[-0.02em]">
            SingoTec
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-fg-3 text-sm font-medium no-underline hover:text-black transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="bg-primary hover:bg-[#3538b8] text-white px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-colors duration-150"
        >
          Kostenlos starten
        </a>
      </div>
    </nav>
  );
}
