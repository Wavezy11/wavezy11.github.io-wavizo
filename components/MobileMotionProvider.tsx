"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function MobileMotionProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check immediately
    checkMobile();
    
    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
