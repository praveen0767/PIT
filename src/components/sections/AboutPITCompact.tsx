"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPITCompact() {
  return (
    <section className="py-20 bg-pit-black border-y border-border-default">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-body uppercase">
                About PIT
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6 leading-tight">
              Bridging Strategy and Execution.
            </h2>
            
            <p className="text-body text-base leading-relaxed mb-8 max-w-2xl">
              The Political Intelligence Team (PIT) is a premier advisory firm specializing in high-stakes political strategy and public affairs. We partner with national leaders to navigate complex legislative and electoral landscapes with absolute discretion and analytical rigor.
            </p>
            
            <Link href="/about" className="inline-flex items-center text-sm font-bold text-burgundy hover:text-deep-burgundy transition-colors group uppercase tracking-widest">
              Read Our Story
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-warm-taupe p-10 border border-border-premium/20 text-center"
          >
            <span className="block font-serif text-5xl text-burgundy mb-2">15+</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-body">Years of Experience</span>
            
            <div className="w-12 h-[1px] bg-border-premium/50 mx-auto my-6"></div>
            
            <span className="block font-serif text-5xl text-burgundy mb-2">200</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-body">Strategic Engagements</span>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

