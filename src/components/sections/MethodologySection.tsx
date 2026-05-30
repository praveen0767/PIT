"use client";

import { motion } from "framer-motion";

export function MethodologySection() {
  const steps = [
    {
      id: "01",
      title: "Diagnose",
      desc: "Deep-dive assessment of the current political baseline, public sentiment, and institutional vulnerabilities.",
    },
    {
      id: "02",
      title: "Map",
      desc: "Geospatial and demographic mapping of key constituencies to identify actionable voter blocks and influencers.",
    },
    {
      id: "03",
      title: "Strategize",
      desc: "Development of a unified campaign architecture, defining core messaging, resource allocation, and defensive protocols.",
    },
    {
      id: "04",
      title: "Activate",
      desc: "Deployment of field teams, digital assets, and communication frameworks to engage target demographics.",
    },
    {
      id: "05",
      title: "Measure",
      desc: "Real-time tracking of outreach efficacy, media penetration, and shifting voter sentiment through rapid polling.",
    },
    {
      id: "06",
      title: "Refine",
      desc: "Dynamic adjustment of ground tactics and narrative focus based on incoming intelligence and competitor maneuvers.",
    },
  ];

  return (
    <section id="methodology" className="py-24 surface-1 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-pit-dark pb-8 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white mb-4">
              The PIT Methodology
            </h2>
            <p className="text-lg text-pit-offwhite opacity-70 font-light">
              We approach political challenges with engineering precision. Our six-phase methodology ensures that every strategic decision is rooted in evidence and executed with discipline.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-6 md:pl-8 border-l border-pit-dark group"
            >
              <div className="absolute left-0 top-0 w-[2px] h-0 bg-pit-cyan transition-all duration-700 group-hover:h-full group-hover:glow-cyan"></div>
              
              {/* Glowing Node */}
              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-pit-white/20 rounded-full group-hover:bg-pit-cyan group-hover:glow-cyan transition-all duration-500"></div>

              <span className="block text-sm font-bold text-pit-cyan mb-2 tracking-widest uppercase">PHASE {step.id}</span>
              <h3 className="text-xl font-bold text-pit-white mb-3 group-hover:text-pit-cyan transition-colors">{step.title}</h3>
              <p className="text-pit-offwhite opacity-70 text-sm leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
