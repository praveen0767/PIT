"use client";

import { motion } from "framer-motion";
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

export function TeamSection() {
  const founders = [
    {
      name: "Pavan",
      role: "Founder & Chief Strategist",
      image: "/photos/pavan.jpeg",
      social: {
        linkedin: "#",
        instagram: "#",
      },
      quote: "\"Hope is not a strategy. We engineer absolute certainty.\"",
      description: "The primary architect behind PIT's macro-electoral models. Pavan specializes in deploying rapid-response containment strategies and structural blueprints during periods of critical institutional vulnerability. He oversees all top-level strategic architecture and intelligence integration."
    },
    {
      name: "Praveen Srinivasan",
      role: "Co-Founder & Director of Intelligence",
      image: "/photos/praveen.jpeg",
      social: {
        linkedin: "#",
        instagram: "#",
      },
      quote: "\"If we cannot map the data, the battlefield does not exist.\"",
      description: "The mind behind PIT's algorithmic targeting engine. Praveen leads the quantitative division, fracturing broad demographics into exploitable micro-cohorts. He directs field mobilization strategies, transforming digital sentiment models into definitive physical voter turnout."
    }
  ];

  return (
    <section id="team" className="py-24 surface-1 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-6xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-pit-charcoal"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-white/70 uppercase">
                Executive Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-pit-white">
              The Minds Behind PIT.
            </h2>
          </div>
          <div className="max-w-md">
             <p className="text-white/70 leading-relaxed">
               Operating strictly in the background, our core architects engineer the structures that turn public sentiment into definitive political power.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="pit-card h-full group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-bold text-3xl text-pit-white">
                      {founder.name}
                    </h3>
                    <div className="flex gap-3 text-white/70">
                      <a href={founder.social.linkedin} aria-label={`${founder.name} LinkedIn`} className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-pit-blue hover:text-white transition-all">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a href={founder.social.instagram} aria-label={`${founder.name} Instagram`} className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:bg-pit-blue hover:text-white transition-all">
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-pit-blue mb-6">
                    {founder.role}
                  </p>
                  <p className="text-white/70 leading-relaxed font-serif italic text-lg mb-6 border-l-2 border-[var(--color-navy-deep)] pl-4">
                    {founder.quote}
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {founder.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pit-white group-hover:text-pit-cyan transition-colors flex items-center">
                    Direct Contact <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <a href="/contact" className="w-8 h-8 surface-2 flex items-center justify-center border border-[rgba(0,0,0,0.1)] group-hover:surface-3 group-hover:text-white transition-colors cursor-pointer">
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

