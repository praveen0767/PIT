"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FoundingMinds() {
  const leaders = [
    {
      name: "Dr. Arvind Rao",
      title: "Chief Strategic Officer",
      role: "Electoral Architecture & Policy"
    },
    {
      name: "Meera Krishnan",
      title: "Director of Intelligence",
      role: "Demographic Analytics & Polling"
    }
  ];

  return (
    <section className="py-24 bg-soft-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-body uppercase">
                Leadership
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              The Founding Minds
            </h2>
            
            <p className="text-body text-sm leading-relaxed mb-8">
              PIT is directed by a core group of seasoned political strategists, data scientists, and former legislative directors. Our leadership team brings decades of combined experience from the highest levels of national campaigns and public administration.
            </p>
            
            <Link href="/about#team" className="inline-flex items-center text-sm font-bold text-burgundy hover:text-deep-burgundy transition-colors group uppercase tracking-widest">
              View Executive Profiles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pit-black border border-border-default p-8"
              >
                <div className="w-16 h-16 bg-warm-taupe rounded-full mb-6 flex items-center justify-center text-burgundy font-serif text-xl font-bold border border-border-premium/30">
                  {leader.name.charAt(0)}{leader.name.split(' ')[1].charAt(0)}
                </div>
                <h3 className="font-serif font-bold text-xl text-burgundy mb-1">
                  {leader.name}
                </h3>
                <p className="text-[11px] font-bold tracking-widest text-gold uppercase mb-4">
                  {leader.title}
                </p>
                <p className="text-body text-xs">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

