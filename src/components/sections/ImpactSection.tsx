"use client";

import { motion } from "framer-motion";

export function ImpactSection() {
  const impacts = [
    {
      context: "Tier-1 Municipal Election",
      challenge: "Incumbent facing a severe trust deficit due to fragmented public communication and uncoordinated local ward efforts.",
      strategy: "Deployed a centralized reporting framework mapping negative sentiment clusters, and restructured the candidate's core narrative to address localized economic anxieties.",
      result: "Reversed a 7-point deficit into a decisive 4-point victory through hyper-targeted digital outreach and disciplined message delivery.",
    },
    {
      context: "National Party Rebranding",
      challenge: "Historic political brand struggling to connect with a shifting demographic of younger, urban voters.",
      strategy: "Conducted exhaustive demographic modeling and developed a digital-first engagement architecture, bypassing traditional gatekeepers.",
      result: "Increased under-30 voter mobilization by 32% year-over-year, establishing a sustainable communication pipeline for future cycles.",
    },
    {
      context: "Legislative Crisis Mitigation",
      challenge: "High-profile leader facing coordinated opposition media attacks regarding a controversial policy rollout.",
      strategy: "Activated a rapid-response war room, injecting counter-narrative data points into friendly media channels within 4 hours of the initial crisis.",
      result: "Neutralized the primary opposition talking points and stabilized public sentiment within 48 hours, preventing lasting reputational damage.",
    },
  ];

  return (
    <section id="impact" className="py-24 surface-1 relative border-y border-pit-dark overflow-hidden">
      {/* Grid Pattern Motif */}
      <div className="absolute inset-0 bg-grid-pit opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white mb-4">
            Representative Engagements
          </h2>
          <p className="text-lg text-pit-offwhite opacity-70 font-light">
            We do not publish the names of our clients. We do, however, publish our outcomes. Below is a selection of strategic problems solved through disciplined advisory.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="relative group h-full cursor-pointer flex flex-col"
            >
              {/* Depth & Background Layer */}
              <div className="absolute inset-0 bg-pit-charcoal rounded-sm border border-pit-white/5 shadow-pit-subtle transition-all duration-500 group-hover:shadow-pit-elevated group-hover:border-pit-white/10"></div>
              
              {/* Accent Illumination Layer (Glow) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm bg-gradient-to-br from-pit-cyan/10 to-transparent pointer-events-none"></div>
              
              {/* Glass Edge Layer (Top border highlight) */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pit-cyan/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_1px_10px_rgba(0,166,200,0.5)]"></div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-pit-black/50 text-pit-white px-6 py-5 border-b border-pit-white/5 relative overflow-hidden rounded-t-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pit-cyan rounded-full blur-[50px] opacity-10 group-hover:opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-500"></div>
                  <span className="text-[10px] font-mono text-pit-cyan uppercase tracking-widest block mb-1">Context</span>
                  <h3 className="font-bold relative z-10">{item.context}</h3>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col gap-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-50 mb-2">The Challenge</h4>
                    <p className="text-sm text-pit-offwhite opacity-90 leading-relaxed font-medium">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-50 mb-2">The Strategy</h4>
                    <p className="text-sm text-pit-offwhite opacity-70 leading-relaxed font-light">{item.strategy}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-pit-white/5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-pit-cyan mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pit-cyan glow-cyan"></span>
                      The Result
                    </h4>
                    <p className="text-sm text-pit-white leading-relaxed font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{item.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

