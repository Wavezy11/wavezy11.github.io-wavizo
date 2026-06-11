"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";

const portfolioProjects = [
  {
    id: "01",
    title: "BarakahBoost",
    description: "Marketing platform met een energieke, moderne uitstraling. Ontworpen om conversies te stimuleren via een heldere propositie en sterke visual hierarchy.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://wavezy11-github-io-barakahboost.vercel.app/",
  },
  {
    id: "02",
    title: "Livzorg",
    description: "Professionele website voor de zorgsector. Gefocust op toegankelijkheid, vertrouwen en een naadloze gebruikerservaring voor zowel cliënten als zorgprofessionals.",
    tags: ["React", "Next.js", "Framer Motion"],
    liveUrl: "https://livzorg.nl/",
  },
  {
    id: "03",
    title: "Amaniazorg",
    description: "Zorgplatform met een sterke focus op conversie en leadgeneratie. Bevat geïntegreerde afspraken- en contactformulieren met een strak, modern design.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://wavezy11.github.io/wavezy11.github.io-amaniazorg-2/",
  }
];

export default function LivePreviewPortfolio() {
  return (
    <section id="portfolio" className="py-32 relative z-10 bg-[#0A0A0B]">
      <div className="safe-container">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold mb-6 tracking-tight flex items-center justify-center gap-3">
            <RevealText>Featured Projects</RevealText>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-400"
          >
            Verken onze meest impactvolle webdesign projecten direct via onderstaande live previews.
          </motion.p>
        </div>

        <div className="space-y-40">
          {portfolioProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center w-full`}>

                {/* Iframe Preview Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-3/5 relative group"
                >
                  {/* macOS Browser Mockup */}
                  <div className="relative rounded-2xl overflow-hidden glass border-white/10 bg-[#0A0A0B] flex flex-col h-[400px] md:h-[600px] transition-transform duration-700">
                    {/* Browser Header */}
                    <div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                      <div className="mx-auto px-4 py-1 rounded bg-black/20 text-xs text-gray-400 max-w-[300px] truncate">
                        {new URL(project.liveUrl).hostname}
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {/* Iframe Embed */}
                    <div className="flex-1 w-full bg-[#0A0A0B] relative group/iframe">
                      {/* Click to interact overlay */}
                      <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px] flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover/iframe:opacity-0 group-hover/iframe:pointer-events-none cursor-pointer">
                        <div className="px-6 py-3 rounded-full bg-[#0A0A0B]/80 border border-white/10 text-white font-medium shadow-2xl backdrop-blur-md">
                          Click to interact
                        </div>
                      </div>
                      <iframe
                        src={project.liveUrl}
                        className="w-full h-full border-none"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Section */}
                <div className="w-full lg:w-2/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 font-mono text-sm tracking-wider uppercase">
                      // FEATURED PROJECT • 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-outfit font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#111113] border border-white/5 text-brand-cyan tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <MagneticButton as={Link} href={project.liveUrl} target="_blank" className="group relative px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-medium text-white transition-all flex items-center gap-2">
                      <span className="relative z-10 text-xs tracking-wider uppercase">LIVE PREVIEW ↗</span>
                    </MagneticButton>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
