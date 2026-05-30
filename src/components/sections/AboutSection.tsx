"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const principles = [
    "Data meets ground reality",
    "Disciplined strategic execution",
    "Absolute narrative control",
    "Citizen-centric outcome orientation",
  ];

  return (
    <section id="about" className="py-24 surface-1 relative border-b border-pit-dark overflow-hidden">
      {/* Map/Grid Motif */}
      <div className="absolute inset-0 bg-grid-pit opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white mb-4">
                Strategic clarity in complex political environments.
              </h2>
              <div className="w-12 h-1 bg-pit-cyan rounded-full glow-cyan"></div>
            </div>
            
            <div className="space-y-6 text-pit-offwhite opacity-70 text-lg leading-relaxed font-light">
              <p>
                The Political Intelligence Team (PIT) was founded on a singular premise: modern political campaigns and public institutions fail not from a lack of vision, but from a lack of structured execution.
              </p>
              <p>
                We bridge the gap between high-level leadership goals and ground-level voter realities. By combining sophisticated data modeling with deep field intelligence, we help leaders, candidates, and institutions navigate volatile public sentiment, manage crises, and deliver decisive electoral and governance outcomes.
              </p>
            </div>
            
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pit-cyan shrink-0 drop-shadow-[0_0_8px_rgba(0,166,200,0.5)]" />
                  <span className="text-pit-white font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="pit-glass-panel group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pit-cyan rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-pit-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pit-cyan glow-cyan"></span>
                  Our Operating Philosophy
                </h3>
                
                <div className="space-y-8 text-sm text-pit-offwhite opacity-70 font-light leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-pit-white opacity-100 mb-2 uppercase tracking-wider text-[10px]">The Problem We Solve</h4>
                    <p>Too many campaigns rely on outdated assumptions and fragmented communication. We eliminate the guesswork by providing a central command structure for political strategy, ensuring every resource deployed has a measurable impact on public perception and voter turnout.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pit-white opacity-100 mb-2 uppercase tracking-wider text-[10px]">Our Core Distinction</h4>
                    <p>We do not just provide polling data; we provide the strategic roadmap to act on it. Our advisory approach is highly confidential, intensely rigorous, and built strictly for leaders who demand execution over rhetoric.</p>
                  </div>
                </div>
              </div>
              
              {/* Left Accent */}
              <div className="absolute left-0 top-0 w-1 h-full bg-pit-white/10 group-hover:bg-pit-cyan group-hover:glow-cyan transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
