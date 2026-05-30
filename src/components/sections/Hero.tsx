"use client";

import { motion } from "framer-motion";
import { ArrowRight, Map, LineChart, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-pit-black">
      {/* Subtle, elegant background lighting (Shared) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pit-cyan/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pit-blue/5 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/4"></div>
      </div>

      {/* =========================================
          DESKTOP EXPERIENCE
          ========================================= */}
      <div className="hidden lg:flex min-h-[100svh] flex-col justify-center pt-24 pb-8 container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Executive Consultancy Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-6 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pit-white/5 border border-pit-white/10 text-pit-cyan text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              Political Intelligence Team
            </div>
            
            <h1 className="text-7xl font-bold tracking-tight text-pit-white mb-4 leading-[1.1] drop-shadow-2xl">
              Political intelligence built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pit-cyan to-pit-blue">real-world strategy.</span>
            </h1>
            
            <p className="text-lg text-pit-offwhite opacity-80 mb-6 leading-relaxed max-w-xl font-light">
              We transform granular constituency understanding and public sentiment into disciplined campaign architecture and governance advisory for modern leadership.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <Button size="lg" className="text-sm h-12 px-6 pit-button-primary group shadow-pit-subtle hover:shadow-pit-elevated transition-all" asChild>
                <Link href="#contact">
                  Strategic Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" className="text-sm h-12 px-6 bg-transparent border border-pit-white/20 text-pit-white hover:bg-pit-white/5 hover:border-pit-cyan/50 transition-all" asChild>
                <Link href="#methodology">View Our Methodology</Link>
              </Button>
            </div>

            {/* Credibility Row */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-2xl border-t border-pit-white/10 pt-6">
              <div className="flex flex-col gap-2">
                <Map className="w-4 h-4 text-pit-cyan opacity-80" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite">Constituency<br/>Insight</span>
              </div>
              <div className="flex flex-col gap-2">
                <LineChart className="w-4 h-4 text-pit-cyan opacity-80" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite">Campaign<br/>Strategy</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="w-4 h-4 text-pit-cyan opacity-80" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite">Public<br/>Engagement</span>
              </div>
              <div className="flex flex-col gap-2">
                <Building2 className="w-4 h-4 text-pit-cyan opacity-80" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite">Governance<br/>Advisory</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Layered Constituency Abstraction Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="col-span-6 relative w-full aspect-square flex items-center justify-center"
          >
            {/* The Floating Brand Artifacts */}
            <div className="relative w-[70%] h-[70%] max-w-[380px] max-h-[380px]">
              {/* Base Ambient Glow */}
              <div className="absolute inset-0 bg-pit-cyan/10 blur-[100px] rounded-full"></div>

              {/* Layer 1: Foundational Territory */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-pit-charcoal border border-pit-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-pit opacity-10"></div>
              </motion.div>

              {/* Layer 2: Demographic Analytics */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 bg-pit-dark/80 backdrop-blur-md border border-pit-cyan/20 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] translate-y-[-20px] translate-x-[20px] flex items-center justify-center overflow-hidden"
              >
                <div className="w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, #00A6C8 49%, #00A6C8 51%, transparent 52%)', backgroundSize: '30px 30px' }}></div>
              </motion.div>

              {/* Layer 3: The PIT Brand Emblem */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 surface-4 backdrop-blur-xl border-t border-l border-pit-white/30 bg-gradient-to-br from-pit-cyan/10 to-transparent rounded-3xl shadow-[0_30px_60px_rgba(0,166,200,0.15)] translate-y-[-40px] translate-x-[40px] flex items-center justify-center"
              >
                <div className="w-32 h-32 relative opacity-100 drop-shadow-[0_0_20px_rgba(0,166,200,0.4)]">
                  <Image src="/main_logo.png" alt="PIT Political Intelligence" fill className="object-contain" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* =========================================
          MOBILE EXPERIENCE
          ========================================= */}
      <div className="flex lg:hidden flex-col pt-32 pb-16 container mx-auto px-5 relative z-10 min-h-[100svh] justify-between">
        
        {/* Top: Simplified Mobile Brand Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10 relative"
        >
          <div className="absolute inset-0 bg-pit-cyan/20 blur-[50px] rounded-full w-32 h-32 mx-auto"></div>
          <div className="w-24 h-24 surface-4 border border-pit-white/10 rounded-2xl flex items-center justify-center relative z-10 shadow-pit-elevated backdrop-blur-md">
             <div className="w-16 h-16 relative">
                <Image src="/main_logo.png" alt="PIT" fill className="object-contain" />
             </div>
          </div>
        </motion.div>

        {/* Middle: Focused Mobile Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-pit-white/5 border border-pit-white/10 text-pit-cyan text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
            Political Intelligence Team
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-pit-white mb-5 leading-[1.15] drop-shadow-xl">
            Intelligence built for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pit-cyan to-pit-blue">real-world strategy.</span>
          </h1>
          
          <p className="text-base text-pit-offwhite opacity-80 leading-relaxed font-light px-2">
            Transforming granular constituency data into disciplined campaign architecture for modern leadership.
          </p>
        </motion.div>

        {/* Bottom: Touch-Optimized CTAs & Trust Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-col gap-8 mt-auto"
        >
          <div className="flex flex-col gap-3 w-full">
            <Button size="lg" className="w-full h-14 pit-button-primary shadow-pit-subtle text-base font-semibold" asChild>
              <Link href="#contact">Strategic Consultation</Link>
            </Button>
            <Button size="lg" className="w-full h-14 bg-transparent border border-pit-white/20 text-pit-white hover:bg-pit-white/5 text-base font-medium" asChild>
              <Link href="#methodology">View Methodology</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-pit-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pit-white/5 flex items-center justify-center shrink-0">
                <Map className="w-3.5 h-3.5 text-pit-cyan" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite leading-tight">Constituency<br/>Insight</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pit-white/5 flex items-center justify-center shrink-0">
                <LineChart className="w-3.5 h-3.5 text-pit-cyan" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite leading-tight">Campaign<br/>Strategy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pit-white/5 flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 text-pit-cyan" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite leading-tight">Public<br/>Engagement</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pit-white/5 flex items-center justify-center shrink-0">
                <Building2 className="w-3.5 h-3.5 text-pit-cyan" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-pit-offwhite leading-tight">Governance<br/>Advisory</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
