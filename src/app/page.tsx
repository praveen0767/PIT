import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MapSection } from "@/components/sections/MapSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { WhyPitSection } from "@/components/sections/WhyPitSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-secondary selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <MapSection />
        <MethodologySection />
        <WhyPitSection />
        <ImpactSection />
        <TeamSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
