import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, FileText, BarChart2, Map, Users, TrendingUp, ShieldAlert } from "lucide-react";

export default function InsightsPage() {
  const indexes = [
    {
      id: "briefings",
      title: "Executive Briefings",
      icon: ShieldAlert,
      desc: "High-priority, time-sensitive tactical assessments regarding immediate political and legislative developments.",
      items: ["Flash: Legislative Backlash in Sector 4", "Flash: Opposition Coalition Fractures"]
    },
    {
      id: "reports",
      title: "Comprehensive Reports",
      icon: FileText,
      desc: "Post-mortem analyses of major electoral cycles, mapping the exact mechanics of victory or failure.",
      items: ["Post-Mortem: The Northern Reversal (Q2)", "Analysis: Why the Infrastructure Bill Failed"]
    },
    {
      id: "analysis",
      title: "Structural Analysis",
      icon: BarChart2,
      desc: "Deep-dive intelligence focusing on the underlying economic, social, and technological forces driving voter sentiment.",
      items: ["The Economics of Trust Deficits", "Algorithmic Polarization in Tier-2 Cities"]
    },
    {
      id: "trends",
      title: "Macro Trends",
      icon: TrendingUp,
      desc: "Longitudinal data tracking multi-year shifts in ideological alignment and institutional trust.",
      items: ["5-Year Trend: Urban Youth Disengagement", "The Rising Demand for Technocratic Leadership"]
    },
    {
      id: "notes",
      title: "State Notes",
      icon: Map,
      desc: "Highly localized geopolitical and demographic assessments for individual states and sub-regions.",
      items: ["State Profile: The Southern Corridor", "State Profile: Western Industrial Zones"]
    },
    {
      id: "constituency",
      title: "Constituency Intelligence",
      icon: Users,
      desc: "Hyper-local data isolating specific demographic swing-factors down to the district level.",
      items: ["District 14: Agrarian Vulnerability", "District 09: The Swing-Voter Myth"]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Intellectual Capital
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-pit-white mb-12">
            Intelligence Index
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {indexes.map((indexData) => {
              const Icon = indexData.icon;
              return (
                <section key={indexData.id} id={indexData.id} className="scroll-mt-32">
                  <div className="pit-card h-full flex flex-col group cursor-pointer">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 surface-3 text-white flex items-center justify-center border border-pit-dark shadow-[4px_4px_0px_rgba(10,10,10,1)]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-serif font-bold text-pit-white mb-4">{indexData.title}</h2>
                    <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                      {indexData.desc}
                    </p>
                    
                    <div className="space-y-3 border-t border-white/5 pt-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-pit-blue mb-2 block">Recent Entries</span>
                      {indexData.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between group/link">
                          <span className="text-sm font-serif font-bold text-pit-white group-hover/link:text-pit-blue transition-colors">{item}</span>
                          <ArrowRight className="w-3 h-3 text-white/50 group-hover/link:translate-x-1 group-hover/link:text-pit-blue transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

