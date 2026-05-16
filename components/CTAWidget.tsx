"use client";

import { useEffect, useRef } from "react";

export default function CTAWidget() {
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

  return (
    <iframe
      ref={iframeRef}
      src="https://app.leadplug.de/demo"
      style={{ width: "100%", border: "none", display: "block", height: "500px", overflow: "hidden" }}
      title="LeadPlug Demo-Widget"
    />
  );
}
