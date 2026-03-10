"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { storeImages } from "@/lib/images";
import { Sun, Shield, Eye, Zap } from "lucide-react";

const solarFilmTypes = [
  {
    id: 1,
    title: "Anti-Chaleur",
    icon: <Sun className="w-6 h-6" />,
    description: "Réduisez la température intérieure jusqu'à 8°C en été. Économisez sur votre climatisation.",
    image: storeImages.solarFilm1,
  },
  {
    id: 2,
    title: "Protection UV",
    icon: <Shield className="w-6 h-6" />,
    description: "Bloquez 99% des rayons UV pour protéger vos meubles, tapis et œuvres d'art de la décoloration.",
    image: storeImages.solarFilm2,
  },
  {
    id: 3,
    title: "Intimité",
    icon: <Eye className="w-6 h-6" />,
    description: "Films opaques ou semi-transparents pour préserver votre intimité sans perdre la luminosité.",
    image: storeImages.solarFilm3,
  },
  {
    id: 4,
    title: "Sécurité",
    icon: <Zap className="w-6 h-6" />,
    description: "Renforcez vos vitrages contre les bris de verre et améliorez la sécurité de vos locaux.",
    image: storeImages.solarFilm4,
  },
];

export default function SolarFilms() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Films Solaires
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Nos solutions de films solaires offrent protection, confort et économies d'énergie. 
            Invisibles mais efficaces, ils transforment votre vitrage en barrière thermique et lumineuse.
          </motion.p>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solarFilmTypes.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl mb-4 bg-gray-100">
                <Image
                  src={film.image}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {film.icon}
                  </div>
                  <h3 className="text-lg font-bold">{film.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {film.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Intéressé par une solution sur mesure ?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Demander une consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
