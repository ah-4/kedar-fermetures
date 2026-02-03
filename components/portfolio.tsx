"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Appartement Haussmannien",
    category: "Stores Intérieurs",
    description: "Installation de stores vénitiens en bois sur mesure pour préserver le cachet de l'ancien.",
    image: "/images/amel-majanovic-r8r2I7FsaIE-unsplash.jpg"
  },
  {
    id: 2,
    title: "Bureaux La Défense",
    category: "Films Solaires",
    description: "Pose de films anti-chaleur sur une surface vitrée de 400m² pour améliorer le confort thermique.",
    image: "/images/r-mo-w-_iZqdviAo-unsplash.jpg"
  },
  {
    id: 3,
    title: "Villa Contemporaine",
    category: "Protection Solaire Extérieure",
    description: "Intégration de brises-soleil orientables (BSO) motorisés et domotisés.",
    image: "/images/thanh-nguyen-3dnh-IRbIZY-unsplash.jpg"
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Nos Réalisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Découvrez comment nous transformons les espaces de vie et de travail grâce à nos solutions sur mesure. 
            Chaque projet est une nouvelle occasion de démontrer notre exigence et notre savoir-faire.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
