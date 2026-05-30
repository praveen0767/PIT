"use client";

import { motion } from "framer-motion";
import { Lock, MapPin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 surface-1 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-pit-white mb-4">
                Initiate a Confidential Discussion
              </h2>
              <div className="w-12 h-1 bg-pit-cyan rounded-full glow-cyan"></div>
            </div>
            
            <p className="text-lg text-pit-offwhite opacity-70 font-light mb-12 max-w-md leading-relaxed">
              Whether you are architecting a long-term campaign or managing an immediate crisis, our advisory team is prepared to engage. All inquiries are strictly confidential.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-sm bg-pit-white/5 flex items-center justify-center shrink-0 border border-pit-white/10 group-hover:bg-pit-cyan group-hover:border-pit-cyan group-hover:glow-cyan transition-all">
                  <Mail className="w-4 h-4 text-pit-cyan group-hover:text-pit-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-pit-white mb-1 text-sm uppercase tracking-widest">Confidential Advisory</h4>
                  <a href="mailto:contact@politicalintelligence.team" className="text-sm text-pit-offwhite opacity-70 hover:opacity-100 hover:text-pit-cyan transition-colors">contact@politicalintelligence.team</a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-sm bg-pit-white/5 flex items-center justify-center shrink-0 border border-pit-white/10 group-hover:bg-pit-cyan group-hover:border-pit-cyan group-hover:glow-cyan transition-all">
                  <MapPin className="w-4 h-4 text-pit-cyan group-hover:text-pit-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-sm uppercase tracking-widest">Strategy Headquarters</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">100 Capitol Hill, Suite 4500<br/>Washington, DC 20001</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-sm bg-pit-white/5 flex items-center justify-center shrink-0 border border-pit-white/10 group-hover:bg-pit-cyan group-hover:border-pit-cyan group-hover:glow-cyan transition-all">
                  <Lock className="w-4 h-4 text-pit-cyan group-hover:text-pit-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-pit-white mb-1 text-sm uppercase tracking-widest">Information Security</h4>
                  <p className="text-sm text-pit-offwhite opacity-70 leading-relaxed max-w-xs">All communications are encrypted and partitioned. We adhere to enterprise-grade data security.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="pit-glass-panel">
              <h3 className="text-xl font-bold text-pit-white mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pit-cyan glow-cyan"></span>
                Strategic Intake Form
              </h3>
              
              <form className="space-y-6" suppressHydrationWarning>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-70">Full Name</Label>
                    <Input suppressHydrationWarning id="fullName" placeholder="John Doe" className="h-12 bg-pit-black border-pit-dark text-pit-white focus-visible:ring-pit-cyan placeholder:text-pit-offwhite/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-70">Organization / Campaign</Label>
                    <Input suppressHydrationWarning id="organization" placeholder="e.g. Committee to Elect..." className="h-12 bg-pit-black border-pit-dark text-pit-white focus-visible:ring-pit-cyan placeholder:text-pit-offwhite/30" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-70">Email Address</Label>
                    <Input suppressHydrationWarning id="email" type="email" placeholder="john@example.com" className="h-12 bg-pit-black border-pit-dark text-pit-white focus-visible:ring-pit-cyan placeholder:text-pit-offwhite/30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region" className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-70">Constituency / Region</Label>
                    <Input suppressHydrationWarning id="region" placeholder="e.g. District 4, PA" className="h-12 bg-pit-black border-pit-dark text-pit-white focus-visible:ring-pit-cyan placeholder:text-pit-offwhite/30" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-pit-offwhite opacity-70">Strategic Requirements</Label>
                  <Textarea 
                    suppressHydrationWarning
                    id="message" 
                    className="min-h-[140px] resize-none bg-pit-black border-pit-dark text-pit-white focus-visible:ring-pit-cyan py-4 placeholder:text-pit-offwhite/30" 
                    placeholder="Outline your campaign focus, immediate challenges, or advisory needs..." 
                  />
                </div>

                <Button suppressHydrationWarning className="w-full h-14 text-base pit-button-primary group">
                  Submit Inquiry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest mt-4">
                  A senior advisor will respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
