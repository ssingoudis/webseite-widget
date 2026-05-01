import HeroWidget from "@/components/HeroWidget";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 px-6">
      <div
        className="max-w-225 mx-auto rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #3234a8 0%, #5b5de8 100%)",
          padding: "clamp(48px, 6vw, 72px) clamp(24px, 4vw, 60px)",
        }}
      >
        <h2
          className="font-display font-semibold leading-[1.2] text-white text-center mb-8"
          style={{ fontSize: "clamp(24px, 3.5vw, 34px)" }}
        >
          Dein erstes Widget — kostenlos eingerichtet
        </h2>

        <div className="w-full">
          <HeroWidget />
        </div>
      </div>
    </section>
  );
}
