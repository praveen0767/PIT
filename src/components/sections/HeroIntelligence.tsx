"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Target, Users, Building2 } from "lucide-react";

export function HeroIntelligence() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col pt-24 lg:pt-28 pb-8 overflow-hidden bg-[#070b10]">
      
      {/* Premium Background Layer (Dark Noise/Vignette) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a111a] via-[#05080c] to-black opacity-90 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-start w-full h-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 h-full">
          
          {/* LEFT: Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative z-20"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-4 py-2 mb-8 shadow-sm mt-8">
              <span className="text-[10px] font-sans font-bold tracking-widest text-pit-cyan uppercase">
                Political Intelligence Team
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-[1.1] mb-5 tracking-tight">
              Political intelligence <br />
              built for <span className="text-pit-cyan">real-world <br className="hidden md:block" /> strategy.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[rgba(255,255,255,0.6)] mb-8 max-w-2xl leading-relaxed font-light">
              We transform granular constituency understanding and public sentiment into disciplined campaign architecture and governance advisory for modern leadership.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center font-bold tracking-wide text-white rounded-sm transition-all duration-300 px-7 py-4 text-xs shadow-[0_4px_15px_rgba(0,166,200,0.3)] hover:shadow-[0_6px_25px_rgba(0,166,200,0.5)] hover:-translate-y-px bg-gradient-to-r from-pit-cyan to-pit-blue border-none group"
              >
                Strategic Consultation 
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services#methodology" 
                className="inline-flex items-center justify-center font-bold tracking-wide text-white rounded-sm transition-all duration-300 px-7 py-4 text-xs bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)]"
              >
                View Our Methodology
              </Link>
            </div>

            {/* Bottom Service Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[rgba(255,255,255,0.05)]">
              <div className="flex flex-col gap-2">
                <MapPin className="w-5 h-5 text-pit-cyan" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-white/70 leading-relaxed">Constituency <br/> Insight</span>
              </div>
              <div className="flex flex-col gap-2">
                <Target className="w-5 h-5 text-pit-cyan" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-white/70 leading-relaxed">Campaign <br/> Strategy</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="w-5 h-5 text-pit-cyan" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-white/70 leading-relaxed">Public <br/> Engagement</span>
              </div>
              <div className="flex flex-col gap-2">
                <Building2 className="w-5 h-5 text-pit-cyan" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-white/70 leading-relaxed">Governance <br/> Advisory</span>
              </div>
            </div>
          </motion.div>
          
          {/* RIGHT: Visual Layered Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000 h-full"
          >
            <div className="relative w-full max-w-[260px] lg:max-w-[300px] aspect-square">
              
              {/* Back Card (Layer 3) */}
              <div className="absolute inset-0 bg-[#0f141e] rounded-3xl border border-[rgba(255,255,255,0.02)] translate-x-8 translate-y-8 shadow-2xl">
                {/* Stripe pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03] rounded-3xl" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)" }}></div>
              </div>
              
              {/* Middle Card (Layer 2) */}
              <div className="absolute inset-0 bg-[#131924] rounded-3xl border border-[rgba(255,255,255,0.03)] translate-x-4 translate-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 opacity-[0.03] rounded-3xl" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)" }}></div>
              </div>
              
              {/* Front Card (Layer 1) */}
              <div className="absolute inset-0 bg-[#171d2b] rounded-3xl border border-[rgba(255,255,255,0.05)] shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden">
                
                {/* Cyan Glow behind logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pit-cyan/20 blur-[60px] rounded-full pointer-events-none"></div>

                {/* The Logo Container */}
                <div className="relative z-10 w-48 h-48 bg-[#0a0f16] rounded-xl flex items-center justify-center p-6 border border-white/5 shadow-2xl transform transition-transform hover:scale-105 duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/main_logo.png" alt="PIT Master Logo" className="w-full h-full object-contain" />
                </div>
                
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

