"use client";

import { motion } from "framer-motion";
import { ArrowRight, Map, LineChart, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-pit-black">
      {/* Subtle, elegant background lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pit-cyan/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pit-blue/5 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Executive Consultancy Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pit-white/5 border border-pit-white/10 text-pit-cyan text-[11px] font-bold tracking-[0.2em] uppercase rounded-full mb-8">
              Political Intelligence Team
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-pit-white mb-6 leading-[1.05] drop-shadow-2xl">
              Political intelligence built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pit-cyan to-pit-blue">real-world strategy.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-pit-offwhite opacity-80 mb-10 leading-relaxed max-w-xl font-light">
              We transform granular constituency understanding and public sentiment into disciplined campaign architecture and governance advisory for modern leadership.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Button size="lg" className="text-base h-14 px-8 pit-button-primary group shadow-pit-subtle hover:shadow-pit-elevated transition-all" asChild>
                <Link href="#contact">
                  Strategic Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" className="text-base h-14 px-8 bg-transparent border border-pit-white/20 text-pit-white hover:bg-pit-white/5 hover:border-pit-cyan/50 transition-all" asChild>
                <Link href="#methodology">View Our Methodology</Link>
              </Button>
            </div>

            {/* Credibility Row (Replacing fake network metrics) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl border-t border-pit-white/10 pt-8">
              <div className="flex flex-col gap-2">
                <Map className="w-5 h-5 text-pit-cyan opacity-80" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-pit-offwhite">Constituency<br/>Insight</span>
              </div>
              <div className="flex flex-col gap-2">
                <LineChart className="w-5 h-5 text-pit-cyan opacity-80" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-pit-offwhite">Campaign<br/>Strategy</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="w-5 h-5 text-pit-cyan opacity-80" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-pit-offwhite">Public<br/>Engagement</span>
              </div>
              <div className="flex flex-col gap-2">
                <Building2 className="w-5 h-5 text-pit-cyan opacity-80" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-pit-offwhite">Governance<br/>Advisory</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Layered Constituency Abstraction Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-6 relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* The Floating Brand Artifacts */}
            <div className="relative w-[75%] h-[75%] max-w-[450px] max-h-[450px]">
              
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
                className="absolute inset-0 bg-pit-dark/80 backdrop-blur-md border border-pit-cyan/20 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] translate-y-[-24px] translate-x-[24px] flex items-center justify-center overflow-hidden"
              >
                {/* Abstract geometric lines representing structural insight */}
                <div className="w-full h-full opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, #00A6C8 49%, #00A6C8 51%, transparent 52%)', backgroundSize: '30px 30px' }}></div>
              </motion.div>

              {/* Layer 3: The PIT Brand Emblem */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 surface-4 backdrop-blur-xl border-t border-l border-pit-white/30 bg-gradient-to-br from-pit-cyan/10 to-transparent rounded-3xl shadow-[0_30px_60px_rgba(0,166,200,0.15)] translate-y-[-48px] translate-x-[48px] flex items-center justify-center"
              >
                <div className="w-36 h-36 relative opacity-100 drop-shadow-[0_0_20px_rgba(0,166,200,0.4)]">
                  <Image 
                    src="/main_logo.png"
                    alt="PIT Political Intelligence"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
