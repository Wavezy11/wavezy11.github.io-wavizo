"use client";

import { motion } from "framer-motion";
import { Search, Laptop, Smartphone, LayoutDashboard, ShoppingCart, Rocket } from "lucide-react";
import RevealText from "./RevealText";

const services = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Maatwerk Websites",
    description: "Snel, veilig en volledig afgestemd op jouw unieke merkidentiteit. Wij bouwen met de nieuwste technologieën."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce",
    description: "Webshops die niet alleen mooi zijn, maar vooral gebouwd zijn om maximaal te converteren en verkopen."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    description: "Een feilloze ervaring op elk apparaat. Jouw platform werkt net zo goed op mobiel als op een grote desktop."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Optimalisatie",
    description: "Word beter gevonden in Google. Wij bouwen onze websites volgens de strengste technische SEO richtlijnen."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Web Applicaties",
    description: "Complexe bedrijfsprocessen versimpeld via krachtige, op maat gemaakte web applicaties."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Snelheid & Performance",
    description: "Bliksemsnelle laadtijden die zorgen voor een hogere Google ranking en een veel betere gebruikerservaring."
  }
];

export default function ServicesGrid() {
  return (
    <section id="diensten" className="py-24 relative z-10 bg-[#0A0A0B]">
      <div className="safe-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-4 tracking-tight flex flex-col gap-1 items-center justify-center">
            <RevealText>Onze Diensten</RevealText>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Alles wat jouw bedrijf nodig heeft om digitaal te domineren. Van design tot development en optimalisatie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 bg-white/[0.02] flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center text-brand-cyan mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
