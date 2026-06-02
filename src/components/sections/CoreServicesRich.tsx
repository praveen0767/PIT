"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LineChart, Users, Target, MessageSquare, ArrowRight } from "lucide-react";

export function CoreServicesRich() {
  const services = [
    { title: "Protocol I: Vulnerability Mapping", icon: LineChart, href: "/services#analysis", desc: "Rigorous algorithmic assessment of structural political landscapes. We identify the exact fault lines in institutional trust and regional demographics." },
    { title: "Protocol II: Micro-Cohort Targeting", icon: Users, href: "/services#research", desc: "Broad-spectrum polling is dead. We deploy continuous sentiment tracking to measure narrative resonance across hyper-specific voter subsets." },
    { title: "Protocol III: Architectural Execution", icon: Target, href: "/services#strategy", desc: "End-to-end strategic deployment for high-stakes campaigns. We do not advise; we build the narrative, establish the timeline, and direct the execution." },
    { title: "Protocol IV: Information Containment", icon: MessageSquare, href: "/services#digital", desc: "Strategic narrative engineering designed to penetrate algorithmic suppression. We control the digital ecosystem before opposition forms." }
  ];

  return (
    <section className="section-padding surface-1 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-pit-charcoal"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pit-white">
              Tactical Deployments.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center text-sm font-bold text-pit-white hover:text-pit-blue transition-colors group uppercase tracking-widest shrink-0">
            View All Protocols
            <div className="w-8 h-8 ml-4 rounded-full surface-2 flex items-center justify-center group-hover:bg-pit-blue group-hover:text-white transition-colors border border-[rgba(0,0,0,0.1)]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {/* Deeper layered white surface using blue-tint and inset shadows */}
                <Link href={service.href} className="block pit-card bg-[var(--color-white-off)] group h-full">
                  <div className="flex flex-col h-full relative z-10">
                    <div className="w-14 h-14 bg-pit-black flex items-center justify-center mb-8 border-2 border-pit-dark shadow-[4px_4px_0px_rgba(10,10,10,1)] group-hover:bg-pit-blue transition-colors">
                      <Icon className="w-6 h-6 text-pit-white group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-pit-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    
                    <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-pit-cyan opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore Blueprint <ArrowRight className="w-4 h-4 ml-2" />
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

