import ConceptDisclosure from "@/components/global/ConceptDisclosure";
import Header from "@/components/global/Header";
import Hero from "@/components/hero/Hero";
import IntroSection from "@/components/race/IntroSection";
import CurrentSeason from "@/components/race/CurrentSeason";
import WorldGateway from "@/components/race/WorldGateway";
import RaceSection from "@/components/race/RaceSection";
import ShanghaiSection from "@/components/race/ShanghaiSection";
import MontrealSection from "@/components/race/MontrealSection";
import SilverstoneSection from "@/components/race/SilverstoneSection";
import ZandvoortSection from "@/components/race/ZandvoortSection";
import HelmetSection from "@/components/helmet/HelmetSection";
import CareerSection from "@/components/career/CareerSection";
import WorldSection from "@/components/world/WorldSection";
import PerformanceSection from "@/components/performance/PerformanceSection";
import GirlSection from "@/components/girl/GirlSection";
import PressSection from "@/components/press/PressSection";
import PartnersSection from "@/components/partners/PartnersSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2]">
      {/* 1. Concept disclosure */}
      <ConceptDisclosure />

      {/* 2. Header */}
      <Header />

      {/* 3. Hero */}
      <Hero />

      <main className="flex-1">
        {/* 4. Introduction */}
        <IntroSection />

        {/* 5. Current season */}
        <CurrentSeason />

        {/* 6. Four-world gateway */}
        <WorldGateway />

        {/* 7. Race opening */}
        <RaceSection />

        {/* 8. Shanghai */}
        <ShanghaiSection />

        {/* 9. Montreal */}
        <MontrealSection />

        {/* 10. Silverstone */}
        <SilverstoneSection />

        {/* 11. Zandvoort and next race */}
        <ZandvoortSection />

        {/* 12. Helmet */}
        <HelmetSection />

        {/* 13. Career */}
        <CareerSection />

        {/* 14. World and editorial */}
        <WorldSection />

        {/* 15. Performance */}
        <PerformanceSection />

        {/* 16. G.I.R.L. */}
        <GirlSection />

        {/* 17. Press */}
        <PressSection />

        {/* 18. Partners */}
        <PartnersSection />

        {/* 19. Contact */}
        <ContactSection />
      </main>

      {/* 20. Footer */}
      <Footer />
    </div>
  );
}
