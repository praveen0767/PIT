"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Capabilities", href: "/services" },
    { name: "Methodology", href: "/services#methodology" },
    { name: "Impact", href: "/proof" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-pit-black/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-4 border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand Logo Lockup */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="relative flex items-center justify-center p-1 rounded-sm border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/main_logo.png" alt="PIT Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-2xl tracking-tight text-white leading-none">
              PIT
            </span>
            <span className="text-[10px] font-sans font-bold text-pit-cyan uppercase tracking-widest mt-1 hidden sm:block">
              Political Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-sans font-bold text-white uppercase tracking-widest hover:text-pit-cyan transition-colors py-2 flex items-center gap-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:inline-flex items-center justify-center font-bold tracking-wide text-white rounded-sm transition-all duration-300 px-6 py-3 uppercase text-[11px] shadow-[0_0_15px_rgba(0,166,200,0.4)] hover:shadow-[0_0_25px_rgba(0,166,200,0.6)] hover:-translate-y-px bg-gradient-to-r from-pit-cyan to-pit-blue border-none"
          >
            Strategic Consultation
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-pit-white hover:text-pit-cyan transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[rgba(10,25,47,0.4)] backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] sm:w-[400px] surface-1 border-l-4 border-pit-dark shadow-2xl flex flex-col lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-[rgba(23,54,93,0.1)]">
                <span className="font-serif font-bold text-xl text-pit-white">Menu</span>
                <button
                  className="text-white/70 hover:text-pit-cyan transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col flex-1 px-6 py-6 gap-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col border-b border-[rgba(23,54,93,0.05)] pb-4 mb-2">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif font-bold text-lg text-pit-white hover:text-pit-blue transition-colors mb-2"
                    >
                      {link.name}
                    </Link>
                    {link.sublinks && (
                      <ul className="flex flex-col gap-3 pl-4 border-l-2 border-pit-dark mt-2">
                        {link.sublinks.map((sub) => (
                          <li key={sub.name}>
                            <Link 
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-sans font-bold text-white/70 hover:text-pit-blue transition-colors uppercase tracking-widest block"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

