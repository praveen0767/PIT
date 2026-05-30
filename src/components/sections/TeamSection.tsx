"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Compass, EyeOff } from "lucide-react";

export function TeamSection() {
  const values = [
    {
      icon: Scale,
      title: "Integrity",
      desc: "We operate with strict ethical boundaries, ensuring our advisory protects the long-term institutional health of our clients.",
    },
    {
      icon: Compass,
      title: "Clarity",
      desc: "We do not dilute our advice with political flattery. We provide unvarnished, data-backed realities to leadership.",
    },
    {
      icon: ShieldCheck,
      title: "Discipline",
      desc: "Elections are won on margins. We enforce rigorous organizational discipline to eliminate strategic drift and wasted resources.",
    },
    {
      icon: EyeOff,
      title: "Confidentiality",
      desc: "Our work operates entirely in the background. The spotlight belongs to the leader and the policy, never the strategist.",
    },
  ];

  return (
    <section id="leadership" className="py-24 surface-1 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pit-cyan opacity-10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white mb-6">
              Advisory Philosophy
            </h2>
            <p className="text-lg text-pit-offwhite opacity-70 font-light leading-relaxed mb-8">
              PIT is composed of veterans from political intelligence, behavioral economics, and ground-level campaign management. We operate as a tightly structured unit dedicated to one goal: translating public sentiment into structural political power.
            </p>
            <div className="w-12 h-1 bg-pit-cyan rounded-full glow-cyan"></div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="w-12 h-12 bg-pit-white/5 border border-pit-white/10 rounded-sm flex items-center justify-center mb-6 text-pit-cyan group-hover:bg-pit-cyan group-hover:text-pit-white group-hover:glow-cyan transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-pit-white mb-3 group-hover:text-pit-cyan transition-colors">{val.title}</h3>
                    <p className="text-pit-offwhite opacity-70 text-sm leading-relaxed font-light">{val.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
