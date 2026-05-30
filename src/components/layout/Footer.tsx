import Image from "next/image";
import Link from "next/link";
import { Shield, MapPin, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-pit-black pt-24 pb-12 relative overflow-hidden text-pit-offwhite border-t border-pit-cyan/20 shadow-[0_-10px_40px_rgba(0,166,200,0.05)]">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-grid-pit opacity-[0.03] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-pit-cyan opacity-10 blur-[120px] pointer-events-none rounded-t-full"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Brand & Intelligence Statement */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="flex items-center gap-5 group mb-10 inline-flex">
              <div className="relative w-14 h-14 overflow-hidden rounded-sm bg-pit-white/5 border border-pit-white/10 p-1.5 group-hover:border-pit-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,166,200,0.3)] transition-all duration-300">
                <Image
                  src="/main_logo.png"
                  alt="PIT Logo"
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col border-l-2 border-pit-dark pl-5 py-1 group-hover:border-pit-cyan/50 transition-colors duration-300">
                <span className="font-bold text-2xl tracking-tight text-pit-white leading-none">
                  PIT
                </span>
                <span className="text-[10px] font-bold text-pit-cyan uppercase tracking-[0.3em] mt-2 opacity-80">
                  Political Intelligence
                </span>
              </div>
            </Link>
            
            <div className="surface-2 border border-pit-white/5 p-6 rounded-sm relative overflow-hidden group max-w-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-pit-cyan"></div>
              <h4 className="flex items-center gap-2 text-[10px] font-bold text-pit-cyan uppercase tracking-widest mb-3">
                <Shield className="w-3 h-3" />
                Intelligence Protocol
              </h4>
              <p className="text-sm leading-relaxed text-pit-offwhite opacity-70 font-light">
                We synthesize fragmented demographic data, voter sentiment, and ground-level intelligence into structured, executable political power. Decisions driven by data, not intuition.
              </p>
            </div>
          </div>
          
          {/* Column 2: Capabilities */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="font-bold mb-6 text-pit-white text-[11px] uppercase tracking-[0.2em] border-b border-pit-white/10 pb-4">Capabilities</h4>
            <ul className="space-y-4">
              {['Strategy & Planning', 'Field Operations', 'Narrative Architecture', 'Sentiment Research'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-sm text-pit-offwhite opacity-70 hover:opacity-100 hover:text-pit-cyan transition-all flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-pit-dark group-hover:text-pit-cyan transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Insights */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-6 text-pit-white text-[11px] uppercase tracking-[0.2em] border-b border-pit-white/10 pb-4">Insights</h4>
            <ul className="space-y-4">
              {['Methodology', 'Representative Impact', 'Research Briefs', 'Confidential Briefings'].map((item) => (
                <li key={item}>
                  <Link href="#methodology" className="text-sm text-pit-offwhite opacity-70 hover:opacity-100 hover:text-pit-cyan transition-all flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-pit-dark group-hover:text-pit-cyan transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact & Regional Coverage */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-bold mb-6 text-pit-white text-[11px] uppercase tracking-[0.2em] border-b border-pit-white/10 pb-4">Command Centers</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-pit-cyan mt-1" />
                <div>
                  <span className="block text-[10px] font-bold text-pit-offwhite opacity-50 uppercase tracking-widest mb-1">Regional Coverage</span>
                  <p className="text-sm text-pit-white leading-relaxed">East Godavari<br/>West Godavari</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-pit-cyan mt-1" />
                <div>
                  <span className="block text-[10px] font-bold text-pit-offwhite opacity-50 uppercase tracking-widest mb-1">Secure Contact</span>
                  <a href="mailto:contact@politicalintelligence.team" className="text-sm text-pit-white hover:text-pit-cyan transition-colors">contact@politicalintelligence.team</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-pit-white/5 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-pit-offwhite opacity-50">
              Network Secure &bull; All Systems Nominal
            </p>
          </div>
          
          <p className="text-xs text-pit-offwhite opacity-40 order-3 md:order-2 text-center">
            &copy; {new Date().getFullYear()} Political Intelligence Team. All rights reserved. Strict Confidentiality Maintained.
          </p>

          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-pit-offwhite opacity-50 order-2 md:order-3">
            <Link href="#" className="hover:text-pit-cyan transition-colors">Privacy Protocol</Link>
            <Link href="#" className="hover:text-pit-cyan transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
