"use client";

import { motion } from "framer-motion";

export function WhyPIT() {
  const points = [
    {
      title: "Absolute Discretion",
      desc: "We operate with the highest level of confidentiality. Our clients trust us with their most sensitive strategic vulnerabilities."
    },
    {
      title: "Empirical Precision",
      desc: "Our methodologies are strictly data-driven. We do not rely on political intuition; we rely on quantitative certainty."
    },
    {
      title: "Decisive Impact",
      desc: "We design blueprints for execution. Our advisory services are engineered to produce measurable, decisive outcomes."
    }
  ];

  return (
    <section className="py-24 bg-pit-black border-b border-border-default">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-[1px] bg-border-premium"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
            Why Leaders Choose PIT
          </h2>
          <p className="text-body text-sm md:text-base leading-relaxed">
            In high-stakes environments, the margin for error is zero. We provide the structural intelligence necessary to mitigate risk and guarantee operational dominance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8"
            >
              <h3 className="font-serif font-bold text-xl text-burgundy mb-4">
                {point.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

