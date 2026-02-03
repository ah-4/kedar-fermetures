"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/thanh-nguyen-3dnh-IRbIZY-unsplash.jpg"
          alt="Intérieur minimaliste avec stores modernes"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl pt-32 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6 text-white/80 backdrop-blur-sm">
              Expert en protection solaire
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              L'élégance de la <br />
              <span className="text-gray-300 italic">protection solaire</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
              Fourniture et installation de stores haut de gamme et films solaires pour sublimer et protéger votre habitat à Paris.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all text-center"
              >
                Découvrir nos solutions
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border border-white/40 text-white rounded-full font-medium hover:bg-white/10 transition-all text-center backdrop-blur-sm"
              >
                Demander un devis
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
