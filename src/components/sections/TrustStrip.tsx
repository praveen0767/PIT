"use client";

import { motion } from "framer-motion";

export function TrustStrip() {
  const stats = [
    {
      value: "Decades",
      label: "Of combined field and advisory experience",
    },
    {
      value: "Multi-layer",
      label: "Political strategy and planning support",
    },
    {
      value: "Deep",
      label: "Constituency intelligence and voter mapping",
    },
    {
      value: "Executive",
      label: "Crisis management and leadership advisory",
    },
  ];

  return (
    <div className="surface-1 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-pit-dark border-y border-pit-dark">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 px-6 md:px-8 flex flex-col justify-center"
            >
              <span className="text-2xl md:text-3xl font-bold text-pit-white mb-2 tracking-tight group-hover:text-pit-cyan transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-pit-offwhite opacity-60 leading-relaxed max-w-[200px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

