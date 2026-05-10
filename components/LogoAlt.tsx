export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="20 -10 140 140"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path
        d="M30 20 C70 0, 110 0, 130 22 C150 46, 120 60, 90 66 C60 72, 40 86, 42 104 C44 122, 84 124, 116 108"
        fill="var(--color-primary)"
        filter="url(#logo-glow)"
      />
      <circle cx="48" cy="28" r="4" fill="#ffffff" />
      <circle cx="84" cy="60" r="4" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}
