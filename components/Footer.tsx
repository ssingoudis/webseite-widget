import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border px-6 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[7px] bg-primary flex items-center justify-center text-white font-bold text-sm font-display">
            S
          </div>
          <span className="font-semibold text-[15px] text-black">SingoTec</span>
        </div>

        <div className="flex gap-6 text-[13px] text-fg-3">
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
          <a
            href="#"
            className="text-fg-3 no-underline hover:text-black transition-colors duration-150"
          >
            Kontakt
          </a>
        </div>

        <span className="text-[12px] text-fg-4">© 2025 SingoTec</span>
      </div>
    </footer>
  );
}
