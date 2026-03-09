"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Blinds, Sun, ShieldCheck, Home } from "lucide-react";
import { storeImages } from "@/lib/images";

const services = [
  {
    icon: <Blinds className="w-8 h-8" />,
    title: "Stores Intérieurs",
    description: "Habillez vos fenêtres avec élégance. Vénitiens, enrouleurs, plissés ou bateaux, une gamme complète pour votre intérieur.",
    image: storeImages.service1,
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Stores Extérieurs",
    description: "Protégez-vous du soleil avant qu'il n'atteigne le vitrage. Stores bannes, brises-soleil orientables et moustiquaires.",
    image: storeImages.service2,
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Films Solaires",
    description: "Réduisez la chaleur et l'éblouissement tout en conservant la luminosité. Une solution invisible et efficace.",
    image: storeImages.service3,
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Protection & Sécurité",
    description: "Films anti-décoloration pour protéger vos meubles et films sécurité pour renforcer vos vitrages.",
    image: storeImages.service4,
  },
];

export default function Services() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Nos Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg"
            >
              Alliant esthétique et performance thermique pour votre confort.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-default"
            >
              {/* Image du service */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6 bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Contenu */}
              <div className="p-6 border border-gray-100 rounded-2xl group-hover:bg-gray-50 transition-colors">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm text-gray-800">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
