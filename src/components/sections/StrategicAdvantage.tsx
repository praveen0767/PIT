"use client";

import { motion } from "framer-motion";
import { Shield, BrainCircuit, Lock } from "lucide-react";

export function StrategicAdvantage() {
  const points = [
    {
      title: "Absolute Compartmentalization",
      icon: Lock,
      desc: "Client vulnerabilities are secured under strict non-disclosure firewalls. We do not leak strategy. Our intelligence architecture operates strictly behind the scenes."
    },
    {
      title: "Quantitative Supremacy",
      icon: BrainCircuit,
      desc: "Political instinct fails in volatile environments. We deploy proprietary algorithmic models to generate empirical blueprints that override conventional guesswork."
    },
    {
      title: "Structural Dominance",
      icon: Shield,
      desc: "We engineer narrative resilience. By isolating and controlling the specific informational cohorts that dictate outcomes, we make campaigns mathematically impervious."
    }
  ];

  return (
    <section className="section-padding surface-charcoal relative border-b border-white/5 overflow-hidden">
      
      {/* Clean Premium Solid Background */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-[2px] bg-[var(--color-gold)]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            The Structural Advantage
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
            In high-stakes environments, the margin for error is absolute zero. We provide the mathematical intelligence necessary to mitigate risk and guarantee operational dominance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Structural Offset Layer */}
                <div className="absolute inset-0 border border-[rgba(255,255,255,0.05)] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <div className="surface-charcoal border border-[rgba(255,255,255,0.1)] p-10 h-full relative z-10 group-hover:surface-3 transition-all duration-500 overflow-hidden cursor-default">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[rgba(255,255,255,0.02)] rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-[var(--color-gold)] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-white mb-4 relative z-10">
                    {point.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.6)] group-hover:text-[rgba(255,255,255,0.9)] text-sm leading-relaxed transition-colors relative z-10">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

