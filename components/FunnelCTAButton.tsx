"use client";

import { useState } from "react";
import FunnelModal from "./FunnelModal";

export default function FunnelCTAButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)} className={className}>
        {label}
      </button>
      <FunnelModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
