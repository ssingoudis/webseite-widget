"use client";

import { useEffect, useRef } from "react";

export default function HeroWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (!e.data || e.data.type !== "funnel-resize") return;
      if (e.source !== iframeRef.current?.contentWindow) return;
      const h = parseInt(e.data.height, 10);
      if (h > 0 && iframeRef.current) {
        iframeRef.current.style.height = (h + 36) + "px";
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://solar-widget-two.vercel.app/singotec-demo"
      style={{ width: "100%", border: "none", display: "block", height: "500px", overflow: "hidden" }}
      loading="lazy"
      title="SingoTec Demo-Widget"
    />
  );
}
