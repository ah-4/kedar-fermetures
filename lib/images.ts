/**
 * Configuration centralisée des images de stores
 * 7 images de stores différentes à ajouter dans /public/assets/img/
 */

export const storeImages = {
  // Services - 4 images
  service1: "/assets/img/store-1.jpg", // Stores Intérieurs
  service2: "/assets/img/store-2.jpg", // Stores Extérieurs
  service3: "/assets/img/store-3.jpg", // Films Solaires
  service4: "/assets/img/store-4.jpg", // Protection & Sécurité

  // Portfolio - 3 images
  portfolio1: "/assets/img/store-5.jpg", // Appartement Haussmannien
  portfolio2: "/assets/img/store-6.jpg", // Bureaux La Défense
  portfolio3: "/assets/img/store-7.jpg", // Villa Contemporaine

  // About
  about: "/assets/img/store-4.jpg", // Image About (partage avec service4)
} as const;

/**
 * Helper pour obtenir une image avec fallback
 */
export const getStoreImage = (key: keyof typeof storeImages): string => {
  return storeImages[key];
};
