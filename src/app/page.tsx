import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroIntelligence } from "@/components/sections/HeroIntelligence";
import { InstitutionalAuthority } from "@/components/sections/InstitutionalAuthority";
import { CoreServicesRich } from "@/components/sections/CoreServicesRich";
import { StrategicAdvantage } from "@/components/sections/StrategicAdvantage";
import { FoundingMindsPreview } from "@/components/sections/FoundingMindsPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { ContactIntelligence } from "@/components/sections/ContactIntelligence";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full overflow-hidden">
        {/* 1. Hero */}
        <HeroIntelligence />
        
        {/* 2. Executive Overview / Institutional Authority */}
        <InstitutionalAuthority />
        
        {/* 3. Services snapshot */}
        <CoreServicesRich />
        
        {/* 4. Why PIT (Strategic Advantage) */}
        <StrategicAdvantage />

        {/* 5. Founding Minds preview */}
        <FoundingMindsPreview />

        {/* 6. Strategic Engagements preview */}
        <CaseStudiesPreview />

        {/* 7. Intelligence / Insights preview */}
        <InsightsPreview />
        
        {/* 8. Confidential briefing CTA */}
        <ContactIntelligence />
      </main>
      
      <Footer />
    </div>
  );
}

