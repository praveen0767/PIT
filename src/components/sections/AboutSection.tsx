"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-soft-bg border-y border-border-default">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-body uppercase">
                What We Do
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-burgundy mb-8 leading-tight">
              Bridging Strategy and Execution.
            </h2>
            
            <div className="space-y-6 text-body text-sm md:text-base leading-relaxed">
              <p>
                The Political Intelligence Team (PIT) is a premier advisory firm specializing in high-stakes political strategy, public affairs, and institutional consulting. We partner with national leaders, political organizations, and corporate entities to navigate complex legislative and electoral landscapes.
              </p>
              <p>
                Our methodology is rooted in absolute discretion and analytical rigor. By combining advanced demographic research with seasoned political acumen, we provide our clients with a distinct structural advantage.
              </p>
              <p>
                We do not simply offer advice; we engineer comprehensive operational blueprints designed for decisive outcomes.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="gold-divider-left"></div>
              <p className="font-serif italic text-lg text-charcoal">
                "Clarity of intelligence dictates certainty of execution."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full bg-pit-black border border-border-premium/30 p-2 shadow-sm"
          >
            <div className="w-full h-full bg-warm-taupe flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              <div className="text-center z-10 p-10 bg-pit-black border border-border-premium/20 shadow-sm max-w-sm">
                <span className="block font-serif text-5xl text-burgundy mb-2">15+</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-body">Years of Institutional Experience</span>
                
                <div className="w-full h-[1px] bg-border-premium/30 my-6"></div>
                
                <span className="block font-serif text-5xl text-burgundy mb-2">200</span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-body">Strategic Engagements</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

