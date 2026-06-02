"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaseStudiesPreview() {
  return (
    <section className="py-24 surface-3 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-[var(--color-gold)]"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-[var(--color-gold)] uppercase">
                Visual Evidence
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
              Proof of Work.
            </h2>
            <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-10">
              We do not deal in theory. Explore the real-world field operations, public outreach, and structured ground engagements that translate our algorithmic blueprints into structural reality.
            </p>
            <Link href="/proof" className="btn-gold group w-full lg:w-auto">
              View Proof Gallery
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:w-2/3 relative w-full">
            {/* Structural Accent Layer */}
            <div className="absolute inset-0 border-2 border-[rgba(255,255,255,0.1)] translate-x-4 translate-y-4"></div>
            
            <div className="surface-charcoal border-2 border-pit-dark shadow-[12px_12px_0px_rgba(10,10,10,1)] p-10 md:p-14 relative z-10 group cursor-pointer" onClick={() => window.location.href='/proof'}>
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-pit-black group-hover:text-pit-white transition-colors">
                  <ArrowRight className="w-5 h-5 text-[rgba(255,255,255,0.5)] group-hover:text-pit-white" />
                </div>
              </div>

              <span className="text-[10px] font-sans font-bold tracking-widest text-[var(--color-gold)] uppercase block mb-4">
                Field Operations
              </span>
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-6 pr-12">
                Ground-Level Constituency Engagement
              </h3>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed max-w-2xl mb-8">
                Deploying verified field forces across high-priority districts. Managing physical mobilization, community interactions, and institutional narrative defense through localized structural deployment.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-[rgba(255,255,255,0.1)] pt-8">
                <div>
                  <span className="block font-serif text-3xl text-white mb-1">16+</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[rgba(255,255,255,0.5)]">Archived Operations</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-white mb-1">Verified</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[rgba(255,255,255,0.5)]">Ground Intelligence</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

