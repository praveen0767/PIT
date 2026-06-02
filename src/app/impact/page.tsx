import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Map, Users, Target } from "lucide-react";

export default function ImpactPage() {
  const images = [
    "WhatsApp Image 2026-06-02 at 12.06.30 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.30.jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.32.jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.34 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.34 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.34.jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.35 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.35.jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.36 (1).jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.36 (2).jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.36.jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.37.jpeg",
    "WhatsApp Image 2026-06-02 at 12.06.38.jpeg"
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-6xl">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Operational Footprint
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-8">
            Field Operations & <br/>Public Engagement
          </h1>
          
          <div className="max-w-3xl mb-20">
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Our intelligence does not exist solely in executive briefings or data models. The ultimate test of any architectural strategy is its execution on the ground. 
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              We deploy rapid-response mobilization networks and community engagement teams to physically manifest algorithmic targeting into definitive real-world action.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="pit-card">
              <Map className="w-6 h-6 text-pit-cyan mb-4" />
              <h3 className="font-sans font-bold text-[11px] tracking-widest uppercase text-pit-white mb-2">Regional Mapping</h3>
              <p className="text-xs text-white/70 leading-relaxed">Isolating key districts for maximum resource efficiency.</p>
            </div>
            <div className="pit-card">
              <Users className="w-6 h-6 text-pit-cyan mb-4" />
              <h3 className="font-sans font-bold text-[11px] tracking-widest uppercase text-pit-white mb-2">Cohort Mobilization</h3>
              <p className="text-xs text-white/70 leading-relaxed">Activating specific demographic slices based on structural resonance.</p>
            </div>
            <div className="pit-card">
              <Target className="w-6 h-6 text-pit-cyan mb-4" />
              <h3 className="font-sans font-bold text-[11px] tracking-widest uppercase text-pit-white mb-2">Direct Engagement</h3>
              <p className="text-xs text-white/70 leading-relaxed">Establishing physical community touchpoints to override digital suppression.</p>
            </div>
            <div className="pit-card">
              <ShieldCheck className="w-6 h-6 text-pit-cyan mb-4" />
              <h3 className="font-sans font-bold text-[11px] tracking-widest uppercase text-pit-white mb-2">Operational Proof</h3>
              <p className="text-xs text-white/70 leading-relaxed">Documented structural footprints establishing narrative authority.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-pit-white mb-10 border-b-2 border-pit-dark pb-4">
            Declassified Field Assets
          </h2>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
              <div key={index} className="break-inside-avoid relative group border-4 border-white shadow-[8px_8px_0px_rgba(10,10,10,0.1)] hover:shadow-[12px_12px_0px_rgba(10,10,10,1)] transition-all duration-300 bg-pit-charcoal overflow-hidden">
                <div className="absolute inset-0 bg-pit-blue opacity-20 mix-blend-multiply pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                  src={`/photos/${img}`} 
                  alt={`PIT Field Operation ${index + 1}`} 
                  className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700 block"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-white uppercase">
                    Asset File {String(index + 1).padStart(3, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

