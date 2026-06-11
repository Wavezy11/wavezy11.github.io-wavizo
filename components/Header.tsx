"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Diensten", href: "#diensten" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Prijzen", href: "#prijzen" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="safe-container">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="Wavizo Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-outfit font-bold tracking-tight text-white">Wavizo</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-cyan group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-semibold text-white transition-all backdrop-blur-md"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0A0A0B] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="font-outfit font-bold text-2xl text-white">Wavizo</span>
              <button 
                className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-outfit font-semibold text-gray-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto p-8">
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl font-semibold text-white"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
