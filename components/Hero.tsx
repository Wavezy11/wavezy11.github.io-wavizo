"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedHeroDashboard from "./AnimatedHeroDashboard";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Orbs focused behind the mockup */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-3/4 right-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="safe-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-extrabold leading-[1.1] tracking-tight flex flex-col">
              <RevealText>Professionele</RevealText>
              <RevealText delay={0.1} className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">
                Websites
              </RevealText>
              <RevealText delay={0.2}>Die Converteren</RevealText>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-inter"
            >
              Wij bouwen snelle, vindbare en resultaatgerichte websites voor ambitieuze ondernemers. Van uniek design tot naadloze development.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col sm:flex-row gap-5 sm:gap-4 pt-4 items-start sm:items-center"
            >
              <MagneticButton as={Link} href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl font-bold text-white shadow-lg shadow-brand-purple/25 hover:shadow-brand-purple/40 transition-all text-center">
                Start jouw project
              </MagneticButton>
              <MagneticButton as={Link} href="#portfolio" className="inline-block px-8 py-4 rounded-xl font-medium text-white bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all text-center">
                Bekijk ons werk
              </MagneticButton>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center gap-4 pt-6"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-gradient-to-br from-brand-purple to-brand-blue"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-gradient-to-br from-brand-blue to-brand-cyan"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-gradient-to-br from-brand-cyan to-brand-purple"></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0B] bg-white/10 backdrop-blur-sm flex items-center justify-center text-xs font-bold">+</div>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Vertrouwd door <span className="text-white font-bold">50+</span> ondernemers
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8"
            >
              <div>
                <div className="text-4xl font-outfit font-bold text-white mb-1">
                  <AnimatedCounter end={50} />+
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Websites</div>
              </div>
              <div>
                <div className="text-4xl font-outfit font-bold text-white mb-1">
                  <AnimatedCounter end={100} />%
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Tevreden Klanten</div>
              </div>
              <div>
                <div className="text-4xl font-outfit font-bold text-white mb-1">
                  <AnimatedCounter end={5} />+
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Jaar Ervaring</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Animated Dashboard Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="relative hidden lg:block"
          >
            <AnimatedHeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
