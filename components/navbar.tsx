"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isOnHomePage = pathname.split('#')[0] === '/';
  const shouldApplyScrollEffect = !isOnHomePage || (scrolled || isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Produits & Services", href: "/#products" },
    { name: "À propos", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        shouldApplyScrollEffect ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className={cn(
            "font-bold text-2xl tracking-tighter transition-colors",
            shouldApplyScrollEffect ? "text-black" : "text-white"
          )}
        >
          KEDAR
          <span className={cn(
            "font-light transition-colors",
            shouldApplyScrollEffect ? "text-gray-500" : "text-white/70"
          )}>
            FERMETURES
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                shouldApplyScrollEffect ? "text-gray-800 hover:text-black" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className={cn(
              "px-5 py-2.5 text-sm font-medium rounded-full transition-all hover:scale-105",
              shouldApplyScrollEffect 
                ? "bg-black text-white hover:bg-gray-800" 
                : "bg-white text-black hover:bg-gray-100"
            )}
          >
            Devis Gratuit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={cn(
              "p-2 transition-colors",
              shouldApplyScrollEffect ? "text-black" : "text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b absolute w-full overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-5 py-3 bg-black text-white text-center font-medium rounded-lg"
              >
                Demander un Devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
