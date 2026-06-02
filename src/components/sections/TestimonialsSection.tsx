"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "PIT provided the analytical foundation that reshaped our entire national campaign strategy. Their demographic insights were unprecedented in accuracy.",
      author: "National Campaign Director",
      entity: "Major Political Party"
    },
    {
      quote: "When facing a severe legislative crisis, their rapid-response architecture and narrative framing stabilized public sentiment within 48 hours.",
      author: "Chief of Staff",
      entity: "Gubernatorial Office"
    },
    {
      quote: "They do not offer generic consulting. They provide highly specific, actionable blueprints that translate directly into operational success.",
      author: "Executive Director",
      entity: "Public Policy Institute"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-warm-taupe relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <Quote className="w-8 h-8 text-gold opacity-60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
            Client Testimonials
          </h2>
          <p className="text-body text-sm md:text-base leading-relaxed">
            We operate under strict confidentiality. The following statements reflect the outcomes of our strategic engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-pit-black p-10 border border-border-premium/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col"
            >
              <p className="font-serif text-charcoal text-lg leading-relaxed mb-8 flex-1 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="pt-6 border-t border-border-default">
                <span className="block font-bold text-xs text-charcoal uppercase tracking-widest mb-1">
                  {testimonial.author}
                </span>
                <span className="block text-[10px] text-gold uppercase tracking-widest font-bold">
                  {testimonial.entity}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

