"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

export default function AnimatedHeroDashboard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-[16/11] max-w-2xl mx-auto perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* Outer Glowing Shadow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-brand-blue/20 to-brand-cyan/20 rounded-2xl blur-2xl transform scale-95 opacity-50"></div>

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full glass rounded-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col bg-[#0A0A0B]/90 backdrop-blur-xl group hover:border-white/20 transition-colors overflow-hidden"
      >
        {/* macOS Browser Header */}
        <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5 shrink-0 z-20">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          <div className="mx-auto px-4 py-1 rounded bg-black/20 text-xs text-gray-400 font-mono">
            analytics.wavizo.nl
          </div>
          <div className="w-12"></div>
        </div>

        {/* Dashboard Layout */}
        <div className="flex-1 flex flex-col relative z-10 p-6" style={{ transform: "translateZ(20px)" }}>
          
          {/* Top Metrics Area */}
          <div className="flex justify-between items-end mb-8 z-10 relative">
            <div>
              <p className="text-gray-400 text-sm tracking-wider uppercase font-semibold mb-1">Totale Conversies</p>
              <div className="flex items-baseline gap-3">
                <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-white tracking-tight">12.450</h2>
                <span className="text-green-400 font-medium text-sm px-2 py-0.5 bg-green-400/10 rounded-md border border-green-400/20">
                  +15% deze maand
                </span>
              </div>
            </div>
            
            {/* Secondary Metric / Date picker skeleton */}
            <div className="hidden sm:flex px-4 py-2 bg-white/5 border border-white/10 rounded-lg items-center gap-2 text-sm text-gray-400">
              <span>Laatste 30 Dagen</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="flex-1 relative rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pt-4 pb-0 px-0 opacity-10 pointer-events-none">
              <div className="w-full h-px bg-white border-b border-dashed border-white/50"></div>
              <div className="w-full h-px bg-white border-b border-dashed border-white/50"></div>
              <div className="w-full h-px bg-white border-b border-dashed border-white/50"></div>
              <div className="w-full h-px bg-white border-b border-dashed border-white/50"></div>
              <div className="w-full h-px bg-white border-b border-solid"></div>
            </div>

            {/* SVG Curved Chart */}
            <svg viewBox="0 0 800 300" preserveAspectRatio="none" className="w-full h-full absolute inset-0 z-10 pt-4">
              <defs>
                <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#00D9FF" />
                </linearGradient>
                <linearGradient id="chartFillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Fill below line */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M0,250 C100,250 150,180 250,200 C350,220 450,100 550,150 C650,200 700,50 800,80 L800,300 L0,300 Z"
                fill="url(#chartFillGradient)"
              />
              
              {/* Animated Stroke Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                d="M0,250 C100,250 150,180 250,200 C350,220 450,100 550,150 C650,200 700,50 800,80"
                fill="none"
                stroke="url(#chartLineGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ filter: "drop-shadow(0px 10px 10px rgba(0, 217, 255, 0.3))" }}
              />
            </svg>
          </div>
        </div>
        
        {/* Subtle Overlay Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/5 via-transparent to-brand-cyan/5 pointer-events-none mix-blend-screen z-20"></div>
      </motion.div>

      {/* Floating Widget 1 (Top Right) */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 z-30 glass border border-white/10 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,1)] bg-[#0A0A0B]/80 backdrop-blur-xl"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
          <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Conversieratio</span>
        </div>
        <div className="text-3xl font-outfit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan drop-shadow-sm">
          +4.8%
        </div>
      </motion.div>

      {/* Floating Widget 2 (Bottom Left) */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-8 -left-8 z-30 glass border border-white/10 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,1)] bg-[#0A0A0B]/80 backdrop-blur-xl flex flex-col gap-3"
        style={{ transform: "translateZ(40px)" }}
      >
        <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Nieuwe Klanten</span>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0B] bg-gray-700 overflow-hidden relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-6 h-6 text-white opacity-50"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0B] bg-gray-600 overflow-hidden relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-6 h-6 text-white opacity-50"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0B] bg-brand-purple flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">+5</span>
            </div>
          </div>
          <div className="text-lg font-outfit font-bold text-white">
            +24 Deze Week
          </div>
        </div>
      </motion.div>

      {/* Sliding Toast (Widget 3) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="absolute top-1/2 -right-12 z-30 glass border border-brand-cyan/30 rounded-full px-4 py-2 shadow-2xl bg-brand-cyan/10 backdrop-blur-xl flex items-center gap-3"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center">
              <BarChart3 className="w-3.5 h-3.5 text-brand-cyan" />
            </div>
            <span className="text-sm font-semibold text-white whitespace-nowrap">Bezoekerspiek</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
