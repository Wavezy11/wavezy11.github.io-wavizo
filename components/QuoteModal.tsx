"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedPackage = "" }: QuoteModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedPackage, setSelectedPackage] = useState(preselectedPackage);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedPackage(preselectedPackage);
    } else {
      document.body.style.overflow = "unset";
      // Reset after close animation
      setTimeout(() => setStatus("idle"), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, preselectedPackage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xeolpyal", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0A0B]/80 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#111113] border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
              <h2 className="text-2xl font-outfit font-semibold text-white">Vraag een Offerte Aan</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 md:p-8 flex-1 relative">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-outfit font-bold text-white mb-3">Bedankt voor uw aanvraag!</h3>
                  <p className="text-gray-400 mb-8 max-w-md">We hebben uw bericht goed ontvangen en nemen zo snel mogelijk contact met u op.</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setStatus("idle")}
                      className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-white font-medium transition-colors"
                    >
                      Nieuwe aanvraag
                    </button>
                    <button 
                      onClick={onClose}
                      className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl text-white font-medium shadow-lg transition-colors"
                    >
                      Sluiten
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="quoteName" className="text-sm font-medium text-gray-300 ml-1">Naam *</label>
                      <input 
                        type="text" 
                        id="quoteName" 
                        name="name" 
                        required 
                        disabled={status === "loading"}
                        className="w-full bg-[#1A1A1E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="quoteEmail" className="text-sm font-medium text-gray-300 ml-1">Email *</label>
                      <input 
                        type="email" 
                        id="quoteEmail" 
                        name="email" 
                        required 
                        disabled={status === "loading"}
                        className="w-full bg-[#1A1A1E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="quotePhone" className="text-sm font-medium text-gray-300 ml-1">Telefoon</label>
                      <input 
                        type="tel" 
                        id="quotePhone" 
                        name="phone" 
                        disabled={status === "loading"}
                        className="w-full bg-[#1A1A1E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="quotePackage" className="text-sm font-medium text-gray-300 ml-1">Gewenst Pakket</label>
                      <select 
                        id="quotePackage" 
                        name="package"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        disabled={status === "loading"}
                        className="w-full bg-[#1A1A1E] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none"
                      >
                        <option value="">Selecteer een pakket</option>
                        <option value="basis">Basis Website - €499</option>
                        <option value="premium">Premium Website - €699</option>
                        <option value="executive">Executive Website - €999</option>
                        <option value="custom">Op maat</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="quoteMessage" className="text-sm font-medium text-gray-300 ml-1">Projectomschrijving *</label>
                    <textarea 
                      id="quoteMessage" 
                      name="message" 
                      required 
                      rows={5}
                      disabled={status === "loading"}
                      className="w-full bg-[#1A1A1E] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                      placeholder="Beschrijf uw project en wensen..."
                    ></textarea>
                  </div>
                  
                  {status === "error" && (
                    <p className="text-red-400 text-sm">Er ging iets mis met het versturen. Probeer het later opnieuw.</p>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full py-4 mt-4 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-xl font-semibold text-white shadow-[0_4px_20px_rgba(0,217,255,0.2)] hover:shadow-[0_8px_30px_rgba(0,217,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Verstuur Aanvraag
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
