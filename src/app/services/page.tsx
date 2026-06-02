import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { AndhraMap3D } from "@/components/sections/AndhraMap3D";

export default function ServicesPage() {
  const pillars = [
    {
      id: "analysis",
      title: "Political Analysis",
      desc: "Rigorous quantitative and qualitative assessment of political landscapes. We map regional vulnerabilities, institutional trust deficits, and key influencer networks to establish a baseline of operational reality.",
      details: ["Vulnerability Mapping", "Competitor Threat Assessment", "Ecosystem Power Dynamics"]
    },
    {
      id: "research",
      title: "Public Opinion Research",
      desc: "Advanced polling, continuous sentiment tracking, and focus group methodologies to measure narrative resonance. We do not rely on generalized data; we target hyper-specific demographic cohorts.",
      details: ["Algorithmic Sentiment Tracking", "Longitudinal Polling", "Micro-Cohort Profiling"]
    },
    {
      id: "strategy",
      title: "Campaign Strategy",
      desc: "End-to-end architectural planning for high-stakes electoral and public affairs campaigns. We define the narrative, establish the timeline, and direct the execution framework from day zero to victory.",
      details: ["Architectural Blueprinting", "Resource Allocation Models", "Crisis Scenario Planning"]
    },
    {
      id: "narrative",
      title: "Narrative Architecture",
      desc: "The construction of highly resilient public narratives designed to withstand algorithmic suppression and opponent counter-attacks. We build stories that alter political behavior.",
      details: ["Message Engineering", "Counter-Narrative Deployment", "Linguistic Resonance Testing"]
    },
    {
      id: "field",
      title: "Field Operations",
      desc: "Translating digital and quantitative intelligence into physical mobilization. We structure localized ground games, volunteer hierarchies, and get-out-the-vote (GOTV) mechanisms with military precision.",
      details: ["Targeted Mobilization", "Ground-Game Structuring", "Voter Turnout Mechanics"]
    },
    {
      id: "digital",
      title: "Digital Communication",
      desc: "Strategic narrative engineering designed to penetrate divided informational ecosystems. We manage algorithmic targeting, content syndication, and digital crisis response to dominate the online battlefield.",
      details: ["Algorithmic Syndication", "Digital Crisis Containment", "Echo-Chamber Penetration"]
    },
    {
      id: "governance",
      title: "Governance Advisory",
      desc: "Post-election structural intelligence. We guide incoming administrations on policy rollout timing, public sentiment stabilization, and bureaucratic maneuvering to ensure campaign promises translate into actionable governance.",
      details: ["Policy Rollout Stabilization", "Approval Rating Maintenance", "Legislative Defense Modeling"]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Operational Methodologies
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-12">
            Services
          </h1>
          
          <div className="mb-24">
            <AndhraMap3D />
          </div>
          
          <div className="space-y-12 max-w-5xl">
            {pillars.map((pillar, index) => (
              <section key={pillar.id} id={pillar.id} className="scroll-mt-32">
                <div className="pit-card relative overflow-hidden group">
                  {/* Decorative Number */}
                  <div className="absolute top-6 right-8 text-7xl font-serif font-bold text-[rgba(10,10,10,0.03)] pointer-events-none transition-transform duration-500 group-hover:scale-110">
                    0{index + 1}
                  </div>
                  
                  <div className="relative z-10 grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8">
                      <h2 className="text-3xl font-serif font-bold text-pit-white mb-6">{pillar.title}</h2>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        {pillar.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {pillar.details.map((detail, idx) => (
                          <span key={idx} className="surface-2 border border-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-pit-cyan">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

