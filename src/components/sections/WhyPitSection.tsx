"use client";

import { motion } from "framer-motion";

export function WhyPitSection() {
  const values = [
    {
      number: "01",
      title: "Local Political Understanding",
      desc: "We do not parachute generic solutions into complex local environments. Our strategies are built on deep, localized constituency mapping.",
    },
    {
      number: "02",
      title: "Data-to-Ground Translation",
      desc: "Polling is useless without action. We translate complex quantitative analytics into concrete daily directives for your field organizers.",
    },
    {
      number: "03",
      title: "Disciplined Execution",
      desc: "We enforce strict campaign discipline, ensuring your core narrative is maintained across all touchpoints, from digital ads to door-to-door canvassing.",
    },
    {
      number: "04",
      title: "Absolute Confidentiality",
      desc: "Political capital requires trust. Our advisory frameworks are strictly partitioned and operated with enterprise-grade information security protocols.",
    },
  ];

  return (
    <section id="why-pit" className="py-24 surface-1 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white">
            The PIT Advantage
          </h2>
          <div className="h-[1px] flex-1 bg-pit-dark max-w-md hidden md:block relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-[2px] bg-pit-cyan glow-cyan"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-6 border-l border-slate-800 group"
            >
              <span className="absolute -left-px top-0 w-[2px] h-0 bg-pit-cyan glow-cyan transition-all duration-500 group-hover:h-full"></span>
              <span className="block text-sm font-bold text-pit-cyan opacity-80 mb-4">{val.number}</span>
              <h3 className="text-xl font-bold mb-3 text-pit-white group-hover:text-pit-cyan transition-colors">{val.title}</h3>
              <p className="text-pit-offwhite opacity-70 text-sm leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
