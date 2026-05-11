"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function FunnelModal({
  isOpen,
  onClose,
  src = "https://app.leadplug.de/leadplug",
}: {
  isOpen: boolean;
  onClose: () => void;
  src?: string;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (!e.data || e.data.type !== "funnel-resize") return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      const h = parseInt(e.data.height, 10);
      if (h > 0 && iframeRef.current) {
        iframeRef.current.style.height = h + "px";
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    window.history.pushState({ modal: true }, "");
    const onPop = () => onClose();
    window.addEventListener("popstate", onPop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("popstate", onPop);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
        aria-label="Schließen"
      >
        <X size={18} className="text-white" />
      </button>

      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          ref={iframeRef}
          src={src}
          scrolling="no"
          style={{ width: "100%", border: "none", display: "block", height: "500px", overflow: "hidden" }}
          loading="lazy"
          title="LeadPlug Demo"
        />
      </div>
    </div>,
    document.body
  );
}
