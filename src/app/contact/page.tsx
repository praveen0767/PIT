"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactIntelligence } from "@/components/sections/ContactIntelligence";
import { ArrowRight, Globe, Users, Briefcase } from "lucide-react";

export default function ContactPage() {
  const vectors = [
    {
      id: "network",
      icon: Globe,
      title: "Join the Network",
      desc: "For local influencers, regional strategists, and field operatives seeking to integrate into the PIT structural network. We are continuously expanding our on-ground intelligence nodes.",
      action: "Apply for Network Integration"
    },
    {
      id: "careers",
      icon: Briefcase,
      title: "Careers & Intelligence",
      desc: "For data scientists, quantitative pollsters, and narrative architects. PIT recruits exclusively from top-tier academic institutions and elite strategic backgrounds.",
      action: "View Open Directives"
    },
    {
      id: "partnerships",
      icon: Users,
      title: "Partnership Inquiry",
      desc: "For media syndicates, technological platforms, and allied consultancies seeking structural alliances.",
      action: "Submit Alliance Proposal"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-pit-black">
      <Header />
      <main className="flex-1 relative z-10 w-full pt-32 pb-24">
        
        {/* The Confidential Inquiry Form (Reused Component) */}
        <div id="inquiry" className="scroll-mt-32">
          <ContactIntelligence />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-5xl mt-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-pit-charcoal"></div>
            <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
              Alternative Vectors
            </span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-pit-white mb-12">
            Other Intake Channels
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {vectors.map((vector) => {
              const Icon = vector.icon;
              return (
                <section key={vector.id} id={vector.id} className="scroll-mt-32">
                  <div className="pit-card h-full flex flex-col group cursor-pointer">
                    <div className="mb-6">
                      <div className="w-10 h-10 surface-2 flex items-center justify-center border border-[rgba(0,0,0,0.1)] group-hover:surface-3 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 text-pit-white group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-serif font-bold text-pit-white mb-3">{vector.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                      {vector.desc}
                    </p>
                    
                    <div className="border-t border-white/5 pt-4 mt-auto">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-pit-blue flex items-center group-hover:text-pit-white transition-colors">
                        {vector.action} <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
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

