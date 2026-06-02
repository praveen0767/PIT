"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactConsultancy() {
  return (
    <section id="contact" className="section-padding bg-soft-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-[1px] bg-border-premium"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy mb-6">
              Executive Inquiries
            </h2>
            <p className="text-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Please provide your institutional affiliation and a brief overview of your strategic requirements. All communications are strictly confidential.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-pit-black p-8 md:p-12 border border-border-premium/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            <form className="space-y-8" suppressHydrationWarning>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-[10px] font-bold uppercase tracking-widest text-body">Full Name & Title</Label>
                  <Input 
                    suppressHydrationWarning 
                    id="fullName" 
                    placeholder="e.g. Director of Public Affairs" 
                    className="h-14 bg-pit-black border-border-default text-charcoal focus-visible:ring-burgundy placeholder:text-gray-400 font-sans text-sm rounded-none px-4" 
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="organization" className="text-[10px] font-bold uppercase tracking-widest text-body">Organization</Label>
                  <Input 
                    suppressHydrationWarning 
                    id="organization" 
                    placeholder="Institution or Campaign Name" 
                    className="h-14 bg-pit-black border-border-default text-charcoal focus-visible:ring-burgundy placeholder:text-gray-400 font-sans text-sm rounded-none px-4" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-body">Official Email</Label>
                  <Input 
                    suppressHydrationWarning 
                    id="email" 
                    type="email" 
                    placeholder="contact@organization.com" 
                    className="h-14 bg-pit-black border-border-default text-charcoal focus-visible:ring-burgundy placeholder:text-gray-400 font-sans text-sm rounded-none px-4" 
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-body">Direct Phone Line</Label>
                  <Input 
                    suppressHydrationWarning 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="h-14 bg-pit-black border-border-default text-charcoal focus-visible:ring-burgundy placeholder:text-gray-400 font-sans text-sm rounded-none px-4" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-body">Nature of Inquiry</Label>
                <Textarea 
                  suppressHydrationWarning
                  id="message" 
                  className="min-h-[160px] resize-none bg-pit-black border-border-default text-charcoal focus-visible:ring-burgundy py-5 px-4 placeholder:text-gray-400 font-sans text-sm rounded-none" 
                  placeholder="Outline the core objective or area of required advisory." 
                />
              </div>

              <div className="pt-6 text-center">
                <Button suppressHydrationWarning className="w-full md:w-auto btn-primary group rounded-none h-14 px-12">
                  Submit Inquiry <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

