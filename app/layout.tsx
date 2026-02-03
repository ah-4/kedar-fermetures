import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kedar Fermetures | Stores Intérieurs, Extérieurs & Films Solaires Paris",
  description: "Expert en fourniture et installation de stores (vénitiens, enrouleurs, bannes) et films solaires (anti-chaleur, sécurité) à Paris et Île-de-France. Devis gratuit.",
  keywords: ["stores intérieurs", "stores extérieurs", "films solaires", "film anti-chaleur", "film sécurité", "installation stores paris", "kedar fermetures", "rénovation fenêtres"],
  openGraph: {
    title: "Kedar Fermetures - L'élégance de la protection solaire",
    description: "Sublimez votre habitat avec nos stores sur mesure et films solaires haute performance. Intervention rapide à Paris.",
    url: "https://kedar-fermetures.fr",
    siteName: "Kedar Fermetures",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Kedar Fermetures",
    "image": "https://kedar-fermetures.fr/logo.png",
    "description": "Fourniture et installation de stores intérieurs, extérieurs et films solaires.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 Rue Parrot",
      "addressLocality": "Paris",
      "postalCode": "75012",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8464, // Approximate coords for 9 Rue Parrot
      "longitude": 2.3744
    },
    "url": "https://kedar-fermetures.fr",
    "telephone": "+33660732931",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
