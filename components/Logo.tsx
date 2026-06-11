"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" /> {/* brand-purple */}
          <stop offset="50%" stopColor="#3b82f6" /> {/* brand-blue */}
          <stop offset="100%" stopColor="#00D9FF" /> {/* brand-cyan */}
        </linearGradient>
      </defs>
      
      {/* Continuous smooth ribbon/wave W */}
      <path 
        d="M 15 25 C 20 50 30 85 35 85 C 40 85 45 60 50 45 C 55 60 60 85 65 85 C 70 85 80 50 85 25" 
        stroke="url(#brand-gradient)" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="drop-shadow-lg"
      />
    </svg>
  );
}
