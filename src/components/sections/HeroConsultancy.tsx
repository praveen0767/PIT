"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroConsultancy() {
  return (
    <section className="relative min-h-[85svh] flex flex-col justify-center bg-soft-bg overflow-hidden pt-20">
      {/* Soft blurred background element for a premium feel without aggressive visuals */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pit-black rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-warm-taupe rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-charcoal uppercase">
                Strategic Advisory
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-burgundy mb-8 leading-[1.1]">
              DATA-DRIVEN<br/>POLITICAL INTELLIGENCE.<br/>GLOBAL IMPACT.
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal font-serif mb-12 max-w-2xl leading-relaxed">
              Strategic Consulting and Analytical Services for Modern Campaigns, Leadership Advisory, and Public Affairs.
            </p>
            
            <Link 
              href="#contact" 
              className="btn-primary group"
            >
              Consult With Our Experts
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

