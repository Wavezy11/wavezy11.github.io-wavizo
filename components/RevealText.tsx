"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function RevealText({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: ReactNode, 
  delay?: number, 
  className?: string 
}) {
  return (
    <div className="overflow-hidden relative inline-block">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.33, 1, 0.68, 1], // Custom bezier for snappy feeling
          delay: delay 
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
