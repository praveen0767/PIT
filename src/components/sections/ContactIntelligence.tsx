"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function ContactIntelligence() {
  return (
    <section className="py-24 surface-3 relative overflow-hidden">
      
      {/* Clean Background */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center bg-[rgba(0,0,0,0.2)]">
                <Lock className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Initiate Operational Brief
            </h2>
            <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed max-w-2xl mx-auto">
              Communications submitted through this portal are secured under executive non-disclosure protocols. Provide preliminary structural parameters. We will initiate contact within 12 hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="surface-1 border-2 border-pit-dark shadow-[12px_12px_0px_rgba(10,10,10,1)] p-8 md:p-12 relative"
          >
            <form className="space-y-6" suppressHydrationWarning>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/70">Principal Identity</label>
                  <input suppressHydrationWarning type="text" className="w-full bg-[var(--color-white-off)] border border-white/5 p-4 focus:outline-none focus:border-[var(--color-navy-deep)] text-pit-white font-medium" placeholder="Name or Organization" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/70">Secure Channel</label>
                  <input suppressHydrationWarning type="email" className="w-full bg-[var(--color-white-off)] border border-white/5 p-4 focus:outline-none focus:border-[var(--color-navy-deep)] text-pit-white font-medium" placeholder="Email Address" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/70">Operational Objective</label>
                <select suppressHydrationWarning className="w-full bg-[var(--color-white-off)] border border-white/5 p-4 focus:outline-none focus:border-[var(--color-navy-deep)] text-pit-white font-medium appearance-none">
                  <option>Select Objective</option>
                  <option>Electoral Campaign Structuring</option>
                  <option>Narrative Crisis Containment</option>
                  <option>Legislative Policy Rollout</option>
                  <option>Longitudinal Intelligence Mapping</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/70">Structural Vulnerabilities</label>
                <textarea suppressHydrationWarning rows={4} className="w-full bg-[var(--color-white-off)] border border-white/5 p-4 focus:outline-none focus:border-[var(--color-navy-deep)] text-pit-white font-medium resize-none" placeholder="Briefly outline the demographic or narrative deficit..."></textarea>
              </div>

              <button suppressHydrationWarning type="button" className="w-full btn-gold justify-center mt-4 border-2 border-pit-dark">
                Submit Classified Brief
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

