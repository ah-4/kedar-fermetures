"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Contactez-nous
            </motion.h2>
            <p className="text-gray-500">
              Parlons de votre projet. Nous sommes là pour vous conseiller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p className="text-gray-500">06 60 73 29 31</p>
                    <p className="text-sm text-gray-400 mt-1">Du Lundi au Vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-500">innocent.gagnon@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Zone d'intervention</h4>
                    <p className="text-gray-500">Paris et ses environs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center bg-gray-50 p-8 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
              <p className="text-gray-600 mb-8 max-w-md">
                Contactez-nous directement par email pour une réponse rapide et un devis personnalisé.
              </p>
              
              <a 
                href="mailto:innocent.gagnon@gmail.com"
                className="w-full md:w-auto px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Envoyer un email</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="mt-6 flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Réponse sous 24h garantie</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
