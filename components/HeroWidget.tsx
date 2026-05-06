"use client";

import { useEffect, useRef, useState } from "react";

const DEMOS = [
  { label: "Solar", src: "https://solar-widget-two.vercel.app/demo-solar" },
  { label: "Wärmepumpe", src: "https://solar-widget-two.vercel.app/demo-waermepumpe" },
];

export default function HeroWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [active, setActive] = useState(0);

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

  function switchDemo(index: number) {
    setActive(index);
    if (iframeRef.current) {
      iframeRef.current.style.height = "500px";
    }
  }

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        src={DEMOS[active].src}
        style={{ width: "100%", border: "none", display: "block", height: "500px", overflow: "hidden", transition: "height 0.3s ease" }}
        title="LeadPlug Demo-Widget"
      />
      <div className="flex items-center gap-3 mt-3 justify-center">
        {DEMOS.map((demo, i) => (
          <button
            key={demo.label}
            onClick={() => switchDemo(i)}
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors duration-150"
            style={{
              background: active === i ? "#4648d4" : "#f0f0ff",
              color: active === i ? "#fff" : "#4648d4",
            }}
          >
            {demo.label}
          </button>
        ))}
      </div>
    </div>
  );
}
