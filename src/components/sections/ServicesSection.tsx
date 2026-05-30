"use client";

import { motion } from "framer-motion";
import { Network, LineChart, FileSearch, TrendingUp, Zap, Server, Shield, Globe } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Political Strategy & Campaign Planning",
      description: "End-to-end campaign architecture, resource allocation, and strategic timeline management for high-stakes elections.",
    },
    {
      title: "Field Operations Design",
      description: "Structured booth-level and ward-level mobilization strategies to turn passive supporters into active voters.",
    },
    {
      title: "Narrative & Message Architecture",
      description: "Development of disciplined, resonant political messaging that cuts through noise and defines the public discourse.",
    },
    {
      title: "Public Sentiment Research",
      description: "Advanced polling, issue mapping, and demographic analytics to track shifting loyalties and voter concerns in real-time.",
    },
    {
      title: "Governance Advisory",
      description: "Strategic policy framing and leadership positioning for elected officials transitioning from campaigning to governing.",
    },
    {
      title: "Crisis & Reputation Management",
      description: "Rapid-response communication protocols and war-room defense strategies to protect political capital during high-pressure events.",
    },
    {
      title: "Digital Outreach Strategy",
      description: "Precision-targeted digital campaign ecosystems designed for voter segmentation, engagement, and narrative dominance.",
    },
    {
      title: "Opposition Intelligence",
      description: "Deep investigative research and vulnerability mapping to anticipate opponent strategies and maintain the upper hand.",
    },
  ];

  return (
    <section id="services" className="py-32 surface-1 relative border-y border-pit-dark">
      {/* Background motif for the section */}
      <div className="absolute inset-0 bg-grid-pit opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-pit-white/5 border border-pit-white/10 rounded-full mb-6">
            <Shield className="w-3 h-3 text-pit-cyan" />
            <span className="text-[10px] font-bold text-pit-cyan uppercase tracking-widest">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-pit-white mb-6">
            Consultancy Capabilities
          </h2>
          <p className="text-lg text-pit-offwhite opacity-70 font-light">
            We provide specialized advisory services across the entire political lifecycle—from initial constituency research to final-hour field mobilization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="relative group h-full cursor-pointer"
            >
              {/* Depth & Background Layer */}
              <div className="absolute inset-0 bg-pit-charcoal rounded-sm border border-pit-white/5 shadow-pit-subtle transition-all duration-500 group-hover:shadow-pit-elevated group-hover:border-pit-white/10"></div>
              
              {/* Accent Illumination Layer (Glow) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm bg-gradient-to-br from-pit-cyan/10 to-transparent pointer-events-none"></div>
              
              {/* Glass Edge Layer (Top border highlight) */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pit-cyan/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_1px_10px_rgba(0,166,200,0.5)]"></div>
              
              {/* Content Layer */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-mono text-pit-cyan font-bold tracking-widest opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    CAP-{String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Status Node */}
                  <div className="w-1.5 h-1.5 rounded-full bg-pit-white/10 group-hover:bg-pit-cyan group-hover:glow-cyan transition-all duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold text-pit-white mb-4 leading-tight group-hover:text-pit-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm text-pit-offwhite opacity-60 leading-relaxed font-light mt-auto group-hover:opacity-90 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
