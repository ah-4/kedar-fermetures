"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const features = [
    "Expertise reconnue depuis 15 ans",
    "Installation sur mesure",
    "Devis gratuit et personnalisé",
    "Service après-vente réactif"
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gray-800 rounded-2xl overflow-hidden relative">
                 {/* Placeholder styled to look like an architectural photo */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 font-bold text-9xl opacity-10 select-none">
                   KEDAR
                 </div>
                 
                 {/* Decorative elements representing blinds/lines */}
                 <div className="absolute top-10 left-10 right-10 h-0.5 bg-white/20"></div>
                 <div className="absolute top-20 left-10 right-10 h-0.5 bg-white/20"></div>
                 <div className="absolute top-30 left-10 right-10 h-0.5 bg-white/20"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-8 rounded-xl shadow-xl hidden md:block">
                <p className="font-bold text-4xl mb-1">100%</p>
                <p className="text-sm font-medium uppercase tracking-wider">Satisfaction <br/>Client</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">À propos de nous</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Kedar Fermetures, <br/>
              votre partenaire rénovation.
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Spécialiste de la fermeture du bâtiment, nous mettons notre savoir-faire au service de votre confort.
              Que ce soit pour l'isolation thermique, la gestion de la luminosité ou la sécurité, nos
              solutions sont pensées pour s'intégrer parfaitement à votre architecture.
            </p>

            <ul className="space-y-4">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <div className="p-1 rounded-full bg-white/10">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
