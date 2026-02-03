import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-gray-200">
      <Navbar />
      <section className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-gray-600">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Édition du site</h2>
            <p>
              Le présent site, accessible à l’URL https://kedar-fermetures.fr (le « Site »), est édité par :
            </p>
            <p className="mt-2">
              L&apos;entreprise <strong>Kedar Fermetures</strong>, située au 9 RUE PARROT 75012 PARIS, France.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Hébergement</h2>
            <p>
              Le Site est hébergé par Vercel Inc., situé 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Directeur de publication</h2>
            <p>
              Le Directeur de la publication du Site est l&apos;entreprise Kedar Fermetures.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Nous contacter</h2>
            <p>
              Par téléphone : 06 60 73 29 31<br/>
              Par email : innocent.gagnon@gmail.com<br/>
              Par courrier : 9 RUE PARROT 75012 PARIS
            </p>
          </div>
          
          <div>
             <h2 className="text-xl font-bold text-gray-900 mb-2">5. Propriété intellectuelle</h2>
             <p>
               L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
             </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
