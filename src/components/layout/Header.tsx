"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#services" },
  { name: "Methodology", href: "#methodology" },
  { name: "Impact", href: "#impact" },
  { name: "Insights", href: "#insights" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "surface-4 border-b border-pit-cyan/20 shadow-[0_4px_30px_rgba(0,166,200,0.1)] py-4 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-5 group">
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-pit-offwhite uppercase tracking-widest hover:text-pit-cyan transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-pit-cyan transition-all duration-300 group-hover:w-full glow-cyan"></span>
            </Link>
          ))}
          
          <div className="pl-8 ml-2 border-l border-pit-dark">
            <Button asChild className="pit-button-primary px-8 h-12 text-sm uppercase tracking-wider font-bold">
              <Link href="#contact">Strategic Consultation</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-sm bg-pit-white/5 border border-pit-white/10 text-pit-white hover:text-pit-cyan hover:border-pit-cyan transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-pit-black/80 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Executive Grade Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] sm:w-[400px] surface-2 border-l border-pit-dark shadow-2xl flex flex-col overflow-y-auto lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-pit-dark">
              <span className="text-[10px] font-bold text-pit-cyan uppercase tracking-[0.3em]">
                Command Navigation
              </span>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-sm bg-pit-white/5 border border-pit-white/10 text-pit-offwhite hover:text-pit-cyan hover:border-pit-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex flex-col flex-1 px-8 py-10 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-bold text-pit-white py-4 border-b border-pit-white/5 hover:text-pit-cyan hover:pl-4 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="p-8 border-t border-pit-dark bg-pit-black/50">
              <Button className="w-full text-sm h-14 uppercase tracking-widest font-bold pit-button-primary" asChild>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Strategic Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
