"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LineChart, Users, Target, MessageSquare, ArrowRight } from "lucide-react";

export function CoreServicesCompact() {
  const services = [
    { title: "Political Analysis", icon: LineChart, href: "/services#analysis" },
    { title: "Public Opinion Research", icon: Users, href: "/services#research" },
    { title: "Campaign Strategy", icon: Target, href: "/services#strategy" },
    { title: "Digital Communication", icon: MessageSquare, href: "/services#digital" }
  ];

  return (
    <section className="py-24 bg-soft-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gold"></div>
              <span className="text-[11px] font-sans font-bold tracking-widest text-body uppercase">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy">
              Executive-Level Intelligence.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center text-sm font-bold text-burgundy hover:text-deep-burgundy transition-colors group uppercase tracking-widest shrink-0">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block bg-pit-black p-8 border border-border-default hover:border-border-premium shadow-sm hover:shadow-md transition-all group h-full">
                  <Icon className="w-6 h-6 text-gold mb-6" />
                  <h3 className="font-serif font-bold text-lg text-burgundy mb-2 group-hover:text-deep-burgundy transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-border-default group-hover:bg-gold transition-colors mt-6"></div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

