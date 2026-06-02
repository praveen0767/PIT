"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function InsightsSection() {
  const insights = [
    {
      category: "Demographic Strategy",
      date: "October 2025",
      title: "Navigating the 2026 Voter Demographic Shift",
      excerpt: "An analysis of the accelerating migration patterns affecting suburban voting blocs and how traditional campaign narratives must adapt.",
    },
    {
      category: "Digital Field Operations",
      date: "September 2025",
      title: "The Architecture of a Modern Ground Game",
      excerpt: "Why legacy door-to-door canvassing fails without real-time data integration, and how to build a responsive digital volunteer network.",
    },
    {
      category: "Crisis Management",
      date: "August 2025",
      title: "Narrative Deficits in the 48-Hour News Cycle",
      excerpt: "Examining three recent institutional crises and the strategic missteps that led to irreversible reputational damage.",
    },
  ];

  return (
    <section id="insights" className="py-24 surface-1 border-y border-pit-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-pit-dark pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white mb-4">
              Intelligence Briefings
            </h2>
            <p className="text-lg text-pit-offwhite opacity-70 font-light max-w-2xl">
              Strategic notes, campaign learnings, and governance observations from the PIT advisory team.
            </p>
          </div>
          <Link href="#insights" className="text-sm font-bold text-secondary uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all group">
            View All Briefings <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pit-card-interactive flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] uppercase tracking-widest text-pit-cyan font-bold">
                  {item.category}
                </span>
                <span className="text-xs text-pit-offwhite opacity-50 font-mono">
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-pit-white mb-4 leading-tight group-hover:text-pit-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-pit-offwhite opacity-70 text-sm leading-relaxed font-light mb-8 flex-1">
                {item.excerpt}
              </p>
              <div className="pt-6 border-t border-pit-dark mt-auto">
                <Link href="#insights" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-pit-white group-hover:text-pit-cyan transition-colors">
                  Read Analysis <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

