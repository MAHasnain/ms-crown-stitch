import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ContactStrip from "@/components/sections/ContactStrip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioPreview />
      <ContactStrip />
    </>
  );
}