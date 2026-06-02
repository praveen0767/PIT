"use client";

import { motion } from "framer-motion";

export function InstitutionalAuthority() {
  return (
    <section className="py-24 surface-charcoal relative overflow-hidden border-b border-white/5">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[var(--color-gold)]"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-[var(--color-gold)] uppercase">
                Methodological Edge
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              We do not guess. We map the exact mechanics of narrative resonance.
            </h2>
            
            <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed mb-8 max-w-xl">
              PIT is not a standard political consultancy. We operate as a high-level strategic intelligence unit. While others rely on intuition and historical precedent, we utilize strict, data-driven demographic polling to isolate vulnerabilities and dictate operational reality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Deep Blue Overlay Blocks */}
              <div className="surface-3 p-10 border-2 border-white text-center shadow-[8px_8px_0px_rgba(255,255,255,0.1)] relative z-10">
                <span className="block font-serif text-5xl font-bold text-white mb-2">15+</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-gold)]">Years Active</span>
              </div>
              <div className="surface-3 p-10 border-2 border-white text-center shadow-[8px_8px_0px_rgba(255,255,255,0.1)] relative top-12 z-10">
                <span className="block font-serif text-5xl font-bold text-white mb-2">200</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[var(--color-gold)]">Engagements</span>
              </div>
              
              {/* Structural Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-[rgba(255,255,255,0.1)] -z-0"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

