"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-pit-black border-t border-border-default">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-[1px] bg-border-premium"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-burgundy mb-6">
          Secure Executive Advisory.
        </h2>
        
        <p className="text-body text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Contact our executive office to discuss strategic engagements. All communications are strictly confidential and subject to rigorous non-disclosure protocols.
        </p>
        
        <Link href="/contact" className="btn-primary group">
          Submit Confidential Inquiry
          <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

