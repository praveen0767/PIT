"use client";

import { motion } from "framer-motion";
import { LineChart, Users, Target, MessageSquare } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Political Analysis",
      desc: "Rigorous quantitative and qualitative assessment of political landscapes, mapping regional vulnerabilities and institutional trust deficits.",
      icon: LineChart
    },
    {
      title: "Public Opinion Research",
      desc: "Advanced polling and continuous sentiment tracking to measure narrative resonance across specific demographic cohorts.",
      icon: Users
    },
    {
      title: "Campaign Strategy",
      desc: "End-to-end architectural planning for high-stakes electoral and public affairs campaigns, ensuring precise resource allocation.",
      icon: Target
    },
    {
      title: "Digital Communication",
      desc: "Strategic narrative engineering and platform management designed to penetrate divided informational ecosystems.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="services" className="section-padding bg-pit-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-[1px] bg-border-premium"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
            Core Capabilities
          </h2>
          <p className="text-body text-sm md:text-base leading-relaxed">
            We provide executive-level intelligence and operational blueprints for leaders navigating complex political and institutional environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="consultancy-card flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-soft-bg group-hover:bg-warm-taupe transition-colors border border-border-premium/20 group-hover:border-border-premium/50">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif font-bold text-lg text-burgundy mb-4">
                  {service.title}
                </h3>
                <p className="text-xs text-body leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

