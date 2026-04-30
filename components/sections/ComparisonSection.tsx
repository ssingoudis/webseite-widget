import { Home, Building2, MoreHorizontal, Square } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-display font-semibold leading-[1.15] tracking-[-0.02em] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Welches Formular würdest du ausfüllen?
          </h2>
        </div>

        <div className="flex gap-7 flex-wrap items-stretch">
          {/* Boring contact form */}
          <div
            className="flex-1 basis-[300px] rounded-2xl overflow-hidden border border-[#e8e8e8] bg-[#f6f6f6] flex flex-col"
            style={{ opacity: 0.7 }}
          >
            <div className="p-6 flex-1 flex flex-col gap-2.5">
              {["Name *", "E-Mail *", "Telefon", "Betreff"].map((f) => (
                <div key={f}>
                  <div className="text-[10px] text-[#aaa] mb-1">{f}</div>
                  <div className="h-[30px] bg-white rounded-[5px] border border-[#ddd]" />
                </div>
              ))}
              <div>
                <div className="text-[10px] text-[#aaa] mb-1">
                  Ihre Nachricht...
                </div>
                <div className="h-14 bg-white rounded-[5px] border border-[#ddd]" />
              </div>
              <div className="h-[34px] bg-[#bbb] rounded-[6px] mt-2 flex items-center justify-center text-[11px] text-white font-semibold">
                Absenden
              </div>
            </div>
            <div className="py-3 text-center text-[13px] font-semibold text-[#999] border-t border-[#e8e8e8] bg-[#f0f0f0]">
              Kontaktformular
            </div>
          </div>

          {/* Interactive funnel */}
          <div
            className="flex-1 basis-[300px] rounded-2xl overflow-hidden border-2 border-primary bg-[#fafaff] flex flex-col"
            style={{ boxShadow: "0 4px 24px rgba(70,72,212,0.12)" }}
          >
            <div className="p-6 flex-1">
              <div className="text-[14px] font-semibold text-center mb-4 text-black">
                Welches Dach haben Sie?
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Satteldach", Icon: Home, active: true },
                  { label: "Flachdach", Icon: Square, active: false },
                  { label: "Pultdach", Icon: Building2, active: false },
                  { label: "Sonstiges", Icon: MoreHorizontal, active: false },
                ].map(({ label, Icon, active }) => (
                  <div
                    key={label}
                    className="py-3.5 px-2 rounded-[10px] text-center flex flex-col items-center gap-1"
                    style={{
                      border: active ? "2px solid #4648d4" : "1px solid #dde",
                      background: active ? "#eeeeff" : "#fff",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: active ? "#4648d4" : "#888" }}
                    />
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: active ? "#4648d4" : "#666" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-[5px] bg-[#e8e8f0] rounded mt-4 overflow-hidden">
                <div
                  className="h-full bg-[#f59e0b] rounded"
                  style={{ width: "33%" }}
                />
              </div>
            </div>
            <div className="py-3 text-center text-[13px] font-semibold text-primary border-t border-[#e0e4ff] bg-primary-light">
              Interaktiver Funnel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
