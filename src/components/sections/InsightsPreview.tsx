"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, BarChart2 } from "lucide-react";

export function InsightsPreview() {
  const insights = [
    {
      type: "Research Report",
      icon: BarChart2,
      title: "Demographic Sentiment Shifts in Tier-2 Ecosystems",
      desc: "Quantitative mapping of shifting legislative behavior across emerging geographic zones.",
      link: "/insights#research"
    },
    {
      type: "Institutional Analysis",
      icon: FileText,
      title: "The Architecture of Algorithmic Campaigning",
      desc: "A deep-dive structural intelligence report on the technological forces driving voter sentiment.",
      link: "/insights#analysis"
    }
  ];

  return (
    <section className="section-padding surface-1 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-pit-charcoal"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
                Intellectual Capital
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pit-white">
              Intelligence & Insights.
            </h2>
          </div>
          <Link href="/insights" className="inline-flex items-center text-sm font-bold text-pit-white hover:text-pit-blue transition-colors group uppercase tracking-widest shrink-0">
            Access Full Library
            <div className="w-8 h-8 ml-4 rounded-full surface-2 flex items-center justify-center group-hover:bg-pit-blue group-hover:text-white transition-colors border border-[rgba(0,0,0,0.1)]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={insight.link} className="block pit-card group h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-sans font-bold tracking-widest text-pit-blue uppercase">
                        {insight.type}
                      </span>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-pit-cyan transition-colors" />
                    </div>
                    
                    <h3 className="font-serif font-bold text-2xl text-pit-white mb-4 leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      {insight.desc}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-pit-white group-hover:text-pit-cyan transition-colors">
                        Read Document
                      </span>
                      <ArrowRight className="w-4 h-4 text-pit-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

