"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Footer() {
  return (
    <footer className="surface-charcoal border-t-[4px] border-[var(--color-navy-deep)] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          <div className="md:col-span-5 lg:col-span-5">
            <Link href="/" className="flex items-center gap-4 mb-6 group shrink-0">
              <div className="relative flex items-center justify-center p-1 rounded-sm border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main_logo.png" alt="PIT Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight text-white leading-none">
                  PIT
                </span>
                <span className="text-[10px] font-sans font-bold text-pit-cyan uppercase tracking-widest mt-1">
                  Political Intelligence
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed pr-6 text-[rgba(255,255,255,0.7)] max-w-sm mb-6">
              The premier intelligence and strategic advisory institution. We engineer certainty in highly volatile political ecosystems through data-driven architectural execution.
            </p>
            <div className="flex items-center gap-4 text-[rgba(255,255,255,0.7)]">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors p-2 -ml-2 rounded-full hover:bg-[rgba(255,255,255,0.05)]">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors p-2 rounded-full hover:bg-[rgba(255,255,255,0.05)]">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-3 lg:col-start-7">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-[var(--color-gold)]"></div>
              Divisions
            </h4>
            <ul className="space-y-4">
              {['Political Analysis', 'Public Opinion Research', 'Campaign Strategy', 'Proof of Work'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Proof of Work' ? '/proof' : `/services#${item.toLowerCase().split(' ')[0]}`} className="text-sm text-[rgba(255,255,255,0.7)] hover:text-white transition-colors font-medium flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[var(--color-gold)]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-[var(--color-gold)]"></div>
              Headquarters
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-[rgba(255,255,255,0.7)]">
                <MapPin className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                <span>Executive Office,<br/>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.7)]">
                <Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <a href="mailto:contact@pit-consulting.com" className="hover:text-white transition-colors">contact@pit-consulting.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[rgba(255,255,255,0.7)]">
                <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.1)] text-xs text-[rgba(255,255,255,0.5)]">
          <p>&copy; {new Date().getFullYear()} Political Intelligence Team. Confidential and Proprietary.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Secure Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

