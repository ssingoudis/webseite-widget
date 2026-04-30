import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StepsSection from "@/components/sections/StepsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import BranchenSection from "@/components/sections/BranchenSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <ComparisonSection />
        <BranchenSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
