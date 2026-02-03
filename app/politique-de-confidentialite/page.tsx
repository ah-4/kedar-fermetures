import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-gray-200">
       <Navbar />
       <section className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-gray-600">
          <p>
            La présente politique de confidentialité définit et vous informe de la manière dont Kedar Fermetures utilise et protège les informations que vous nous transmettez.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Données collectées</h2>
            <p>
              Nous pouvons collecter les données suivantes lorsque vous nous contactez par email ou téléphone :
              Nom, Prénom, Adresse email, Numéro de téléphone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées uniquement pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Répondre à vos demandes de devis et informations.</li>
                <li>Exécuter les prestations de services commandées.</li>
                <li>Améliorer nos services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Transmission aux tiers</h2>
            <p>
              Kedar Fermetures est le seul destinataire de vos informations personnelles. Celles-ci ne sont jamais transmises à un tiers à des fins commerciales. Seuls nos sous-traitants techniques (hébergement) peuvent y avoir accès dans le cadre strict de leur mission de maintenance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Droits informatique et libertés</h2>
             <p>
            Conformément à la réglementation européenne en vigueur, vous disposez des droits suivants concernant vos Informations Personnelles : droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition. Vous pouvez exercer ces droits en nous écrivant à l’adresse email : innocent.gagnon@gmail.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
