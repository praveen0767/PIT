import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ProofOfWorkPage() {
  const galleries = [
    {
      category: "Public Outreach & Event Participation",
      description: "Direct engagement with local constituencies, ensuring narrative penetration through large-scale mobilization and public-facing interactions.",
      images: [
        { src: "/photos/group.jpeg", alt: "Leadership Assembly", caption: "Public outreach in action" },
        { src: "/photos/pavan.jpeg", alt: "Executive Address", caption: "Governance & policy communication" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.30 (2).jpeg", alt: "Event Coordination", caption: "Political participation and constituency visibility" }
      ]
    },
    {
      category: "Ground-Level Citizen Engagement",
      description: "Establishing deep institutional trust by organizing localized social support systems, community interaction camps, and structural aid programs.",
      images: [
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.30.jpeg", alt: "Community Outreach", caption: "Social support and community interaction" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.32.jpeg", alt: "Citizen Engagement", caption: "Ground-level engagement with citizens" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.34 (1).jpeg", alt: "Local Presence", caption: "Public-facing work and local outreach" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.34 (2).jpeg", alt: "Field Support", caption: "Field coordination and local presence" }
      ]
    },
    {
      category: "Field Operations & Strategy Execution",
      description: "Translating high-level tactical blueprints into actionable field operations. Briefings, structural deployments, and local coordinator assemblies.",
      images: [
        { src: "/photos/praveen.jpeg", alt: "Strategic Briefing", caption: "Field coordination and local presence" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.34.jpeg", alt: "Operational Sync", caption: "Campaign work and tactical execution" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.35 (1).jpeg", alt: "Field Deployment", caption: "Ground-level structural organization" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.35.jpeg", alt: "Network Briefing", caption: "Political ground presence" }
      ]
    },
    {
      category: "Constituency Visibility & Mobilization",
      description: "Sustaining continuous narrative dominance across critical districts through organized rallies, ground activations, and direct constituent access.",
      images: [
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.36 (1).jpeg", alt: "Constituency Rally", caption: "Political participation and constituency visibility" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.36 (2).jpeg", alt: "Public Mobilization", caption: "Public outreach in action" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.36.jpeg", alt: "Local Activation", caption: "Ground-level engagement with citizens" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.37.jpeg", alt: "Institutional Trust Building", caption: "Institutional trust and community interaction" },
        { src: "/photos/WhatsApp Image 2026-06-02 at 12.06.38.jpeg", alt: "Field Force Assembly", caption: "Field coordination and local presence" }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-7xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Visual Evidence
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-8">
            Proof of Work.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            We do not operate exclusively behind screens. Our algorithmic blueprints and narrative strategies are rigorously tested and executed on the ground. This curated archive documents PIT’s real-world field presence, public outreach, and structural engagement across multiple electoral environments.
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-7xl space-y-32">
          {galleries.map((gallery, index) => (
            <div key={index} className="relative">
              
              <div className="mb-12 border-b border-white/10 pb-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-pit-white mb-4">
                  {gallery.category}
                </h2>
                <p className="text-white/70 max-w-2xl text-sm leading-relaxed">
                  {gallery.description}
                </p>
              </div>

              {/* Masonry-style Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gallery.images.map((img, i) => (
                  <div key={i} className="group relative pit-card p-0 overflow-hidden bg-pit-charcoal border border-white/5 cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-pit-blue/20 mix-blend-multiply pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="p-6 bg-pit-black border-t border-white/5 relative z-20">
                      <h3 className="font-serif font-bold text-lg text-pit-white mb-1">{img.alt}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-pit-cyan">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}
