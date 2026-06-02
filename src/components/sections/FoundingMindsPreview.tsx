"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function FoundingMindsPreview() {
  return (
    <section className="section-padding surface-1 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-pit-charcoal"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
                Intelligence Directors
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pit-white">
              The Core Architects.
            </h2>
          </div>
          <Link href="/about#team" className="inline-flex items-center text-sm font-bold text-pit-white hover:text-pit-blue transition-colors group uppercase tracking-widest shrink-0">
            View Clearances
            <div className="w-8 h-8 ml-4 rounded-full surface-2 flex items-center justify-center group-hover:bg-pit-blue group-hover:text-white transition-colors border border-[rgba(0,0,0,0.1)]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="pit-card h-full group flex flex-col justify-between cursor-pointer" onClick={() => window.location.href='/about#team'}>
              <div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-3xl text-pit-white">
                    Pavan
                  </h3>
                  <div className="flex gap-3 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="hover:text-pit-cyan transition-colors" onClick={(e) => e.stopPropagation()} aria-label="LinkedIn">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-pit-cyan transition-colors" onClick={(e) => e.stopPropagation()} aria-label="Instagram">
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-pit-blue mb-6">
                  Founder & Chief Strategist
                </p>
                <p className="text-white/70 leading-relaxed font-serif italic text-lg mb-4 border-l-2 border-[var(--color-navy-deep)] pl-4">
                  "Hope is not a strategy. We engineer absolute certainty."
                </p>
                <p className="text-white/70 leading-relaxed text-sm">
                  The primary architect behind PIT's macro-electoral models. Pavan specializes in deploying rapid-response containment strategies and structural blueprints during periods of critical institutional vulnerability.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-xs font-bold uppercase tracking-widest text-pit-white group-hover:text-pit-cyan transition-colors flex items-center">
                  Review Methodology <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="pit-card h-full group flex flex-col justify-between cursor-pointer" onClick={() => window.location.href='/about#team'}>
              <div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif font-bold text-3xl text-pit-white">
                    Praveen Srinivasan
                  </h3>
                  <div className="flex gap-3 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="hover:text-pit-cyan transition-colors" onClick={(e) => e.stopPropagation()} aria-label="LinkedIn">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:text-pit-cyan transition-colors" onClick={(e) => e.stopPropagation()} aria-label="Instagram">
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-pit-blue mb-6">
                  Co-Founder & Director of Intelligence
                </p>
                <p className="text-white/70 leading-relaxed font-serif italic text-lg mb-4 border-l-2 border-[var(--color-navy-deep)] pl-4">
                  "If we cannot map the data, the battlefield does not exist."
                </p>
                <p className="text-white/70 leading-relaxed text-sm">
                  The mind behind PIT's algorithmic targeting engine. Praveen leads the quantitative division, fracturing broad demographics into exploitable micro-cohorts to drive exact narrative resonance and field execution.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <span className="text-xs font-bold uppercase tracking-widest text-pit-white group-hover:text-pit-cyan transition-colors flex items-center">
                  Review Methodology <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}

