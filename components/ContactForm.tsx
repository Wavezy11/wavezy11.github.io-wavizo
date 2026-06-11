"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail, Phone, Share2 } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mqadgvpg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="safe-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-6"
          >
            Neem <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Contact</span> Op
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Klaar om uw project te bespreken? We horen graag van u!
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 flex gap-6 items-start border-white/10 hover:border-brand-purple/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center flex-shrink-0 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-outfit font-semibold text-white mb-1">Email Ons</h3>
                <p className="text-gray-300 mb-1">info@wavizo.nl</p>
                <p className="text-sm text-brand-cyan">We reageren binnen 24 uur</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 flex gap-6 items-start border-white/10 hover:border-brand-blue/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center flex-shrink-0 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-outfit font-semibold text-white mb-1">Bel Ons</h3>
                <p className="text-gray-300 mb-1">+31 6 84143386</p>
                <p className="text-sm text-brand-cyan">Ma-Vr 9:00-17:00</p>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 flex gap-6 items-start border-white/10 hover:border-brand-cyan/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center flex-shrink-0 text-white">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-outfit font-semibold text-white mb-1">Volg Ons</h3>
                <p className="text-sm text-gray-400 mb-4">Blijf op de hoogte van onze laatste projecten</p>
                <div className="flex gap-3">
                  <Link href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </Link>
                  <Link href="https://www.instagram.com/wavizo.nl/" target="_blank" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-brand-purple hover:to-orange-500 transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1DA1F2] transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 border-white/10 relative overflow-hidden">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0B]/95 backdrop-blur-md z-20 p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-outfit font-bold text-white mb-2">Bericht Verzonden!</h3>
                  <p className="text-gray-400 mb-8">Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-colors"
                  >
                    Nog een bericht versturen
                  </button>
                </motion.div>
              ) : null}
            
              <h3 className="text-2xl font-outfit font-semibold text-white mb-6">Stuur ons een bericht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Naam *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Telefoon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      disabled={status === "loading"}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Onderwerp *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required 
                      disabled={status === "loading"}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                      placeholder="Waar gaat het over?"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Bericht *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    disabled={status === "loading"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
                    placeholder="Vertel ons over uw project..."
                  ></textarea>
                </div>
                
                {status === "error" && (
                  <p className="text-red-400 text-sm">Er ging iets mis met het versturen. Probeer het later opnieuw.</p>
                )}
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 bg-gradient-to-r from-brand-purple to-brand-blue rounded-xl font-semibold text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Verstuur Bericht
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
