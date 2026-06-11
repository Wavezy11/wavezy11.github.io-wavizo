"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Basis Website",
    price: "€499",
    description: "Perfect voor startende ondernemers die online zichtbaar willen zijn.",
    features: [
      "Gratis domeinregistratie",
      "Email ontwerp inbegrepen",
      "Standaard ontwerp",
      "3 subpagina's",
      "Klantinteractie functionaliteit",
      "SSL-certificaat",
      "Mobielvriendelijk ontwerp",
      "Basis ondersteuning",
      "Groene en veilige webhosting"
    ],
    isPopular: false,
    buttonText: "Kies Basis Pakket",
    buttonType: "outline"
  },
  {
    name: "Premium Website",
    price: "€699",
    description: "Voor bedrijven die willen groeien met een professionele uitstraling.",
    features: [
      "Gratis domeinregistratie",
      "Email ontwerp inbegrepen",
      "Premium ontwerp",
      "6 subpagina's",
      "Diverse plug-ins inbegrepen",
      "Social media-integratie",
      "Uitgebreidere klantinteractie",
      "SSL-certificaat",
      "Premium ondersteuning",
      "Snelle laadtijd & levering"
    ],
    isPopular: true,
    buttonText: "Kies Premium",
    buttonType: "gradient"
  },
  {
    name: "Executive Website",
    price: "€999",
    description: "Het complete pakket voor maximale online impact en conversie.",
    features: [
      "Gratis domeinregistratie",
      "Email ontwerp inbegrepen",
      "Executive ontwerp",
      "Onbeperkte subpagina's",
      "Strategisch webdesignadvies",
      "Diverse plug-ins inbegrepen",
      "Social media-integratie",
      "Uitgebreidere klantinteractie",
      "Executive ondersteuning",
      "Optimale SEO-mogelijkheden"
    ],
    isPopular: false,
    buttonText: "Kies Executive",
    buttonType: "outline"
  }
];

export default function Pricing() {
  return (
    <section id="prijzen" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/10 via-background to-background -z-10"></div>
      
      <div className="safe-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-6"
          >
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">Pakketten</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Transparante prijzen voor elke behoefte. Alle pakketten bevatten gratis domeinregistratie, SSL-certificaat en mobielvriendelijk ontwerp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative glass rounded-3xl p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${
                tier.isPopular 
                  ? "border-2 border-brand-blue shadow-[0_0_40px_rgba(59,130,246,0.5)] md:-translate-y-4 md:hover:-translate-y-6 bg-gradient-to-b from-brand-blue/10 to-transparent" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan"></div>
              )}

              {tier.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan rounded-full text-sm font-extrabold text-white shadow-[0_4px_20px_rgba(59,130,246,0.6)] whitespace-nowrap tracking-wide uppercase">
                  Meest gekozen!
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-outfit font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-10">{tier.description}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-5xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{tier.price}</span>
                  <span className="text-gray-500 font-medium pb-2">/vanaf</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${tier.isPopular ? "bg-brand-blue/20 text-brand-blue" : "bg-white/5 text-gray-400"}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => {
                  import("@/components/QuoteModalWrapper").then(m => m.openQuoteModal(
                    tier.name.includes("Basis") ? "basis" : 
                    tier.name.includes("Premium") ? "premium" : "executive"
                  ));
                }}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  tier.isPopular 
                    ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] hover:scale-[1.02]" 
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
