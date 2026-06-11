"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lisa Jansen",
    company: "Jansen Interieur",
    avatar: "L",
    text: "Wavizo heeft onze oude website getransformeerd naar een moderne en gebruiksvriendelijke website. Onze klanten kunnen nu gemakkelijk onze portfolio bekijken en contact met ons opnemen."
  },
  {
    name: "Peter Bakker",
    company: "Bakker Elektronica",
    avatar: "P",
    text: "De e-commerce website die Wavizo voor ons heeft gebouwd heeft onze online verkoop met 40% verhoogd. De website is snel, gebruiksvriendelijk en ziet er fantastisch uit."
  },
  {
    name: "Maria van der Berg",
    company: "Restaurant De Smaak",
    avatar: "M",
    text: "Professioneel team dat echt luistert naar je wensen. Ze hebben een prachtige website voor ons restaurant gemaakt die perfect onze sfeer weergeeft."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="safe-container relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-outfit font-bold mb-6"
          >
            Wat Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Klanten</span> Zeggen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Lees de ervaringen van onze tevreden klanten. Wij zijn pas tevreden als u dat bent.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 relative group hover:border-brand-blue/30 transition-colors duration-500 flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-brand-blue/10 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                ))}
              </div>
              
              <p className="text-gray-300 italic leading-relaxed mb-8 flex-1 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-outfit font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
