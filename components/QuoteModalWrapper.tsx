"use client";

import { useState, useEffect } from "react";
import QuoteModal from "./QuoteModal";

export default function QuoteModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [packageType, setPackageType] = useState("");

  useEffect(() => {
    const handleOpenModal = (e: CustomEvent<{ packageType?: string }>) => {
      setPackageType(e.detail?.packageType || "");
      setIsOpen(true);
    };

    // Add event listener for our custom event
    window.addEventListener("openQuoteModal", handleOpenModal as EventListener);

    return () => {
      window.removeEventListener("openQuoteModal", handleOpenModal as EventListener);
    };
  }, []);

  return (
    <QuoteModal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
      preselectedPackage={packageType} 
    />
  );
}

// Helper function to be used in other components to open the modal
export const openQuoteModal = (packageType?: string) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("openQuoteModal", { 
      detail: { packageType } 
    });
    window.dispatchEvent(event);
  }
};
