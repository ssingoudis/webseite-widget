import CTAWidget from "@/components/CTAWidget";

export default function CTASection() {
  return (
    <section id="cta" className="pb-24 px-6">
      <div
        className="max-w-225 mx-auto rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #3234a8 0%, #5b5de8 100%)",
          padding: "clamp(20px, 5vw, 64px)",
        }}
      >
        <div className="w-full">
          <CTAWidget />
        </div>
      </div>
    </section>
  );
}
