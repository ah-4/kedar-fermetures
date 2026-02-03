import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-xl tracking-tighter">
              KEDAR<span className="text-gray-500 font-light">FERMETURES</span>
            </span>
            <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} Kedar Fermetures. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/mentions-legales" className="text-gray-500 hover:text-black transition-colors text-sm">Mentions Légales</Link>
            <Link href="/politique-de-confidentialite" className="text-gray-500 hover:text-black transition-colors text-sm">Politique de confidentialité</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex justify-center">
            <p className="text-xs text-gray-400">
              Site réalisé par <a href="https://www.bamana-solutions.com/fr/accueil" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">BAMANA Solutions</a> & <a href="https://ah4.fr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">AH4</a>
            </p>
        </div>
      </div>
    </footer>
  );
}
