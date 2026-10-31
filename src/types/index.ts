export type MenuCategory = 
  | 'All' 
  | 'Bengali' 
  | 'North Indian' 
  | 'Chinese' 
  | 'Biryani' 
  | 'Desserts' 
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  bengaliName?: string;
  description: string;
  category: Exclude<MenuCategory, 'All'>;
  price: number; // illustrative INR
  image: string;
  isVegetarian: boolean;
  isFeatured?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3; // 0=mild, 3=fiery
  chefSpecial?: boolean;
  tags?: string[];
}

export type GalleryCategory = 'All' | 'Food' | 'Interior' | 'Dining Experience';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  image: string;
  alt: string;
  description: string;
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor' | 'patio' | 'family-booth' | 'no-preference';
  specialRequests?: string;
}

export interface SiteConfig {
  restaurantName: string;
  tagline: string;
  subtitle: string;
  city: string;
  state: string;
  logoUrl: string;
  fullAddress: string;
  landmark: string;
  pincode: string;
  phone: string;
  placeholderPhone: string;
  whatsAppNumber: string;
  placeholderWhatsApp: string; // international digits for wa.me e.g. 918101451153
  email: string;
  placeholderEmail: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedQuery: string;
  openingHours: {
    everyday: string;
    schedule: string;
    weekdays: string;
    weekends: string;
    kitchenCloses: string;
  };
  disclaimerText: string;
  socials: {
    instagram: string;
    facebook: string;
    tripadvisor: string;
  };
}
