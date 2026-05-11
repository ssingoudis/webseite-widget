"use client";

import type { ReactNode } from "react";

interface Props {
  target: string;
  className?: string;
  children: ReactNode;
}

export default function SmoothScrollLink({ target, className, children }: Props) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a href={`#${target}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
