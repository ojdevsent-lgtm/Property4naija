export type Property = {
  slug: string;
  title: string;
  location: string;
  price: string;
  type: 'For Sale' | 'For Rent' | 'Shortlet';
  propertyType: string;
  beds: number;
  baths: number;
  area: string;
  description: string;
  image: string;
  features: string[];
};

// Prototype inventory only. Replace with verified Property4Naija listings before launch.
export const properties: Property[] = [
  {
    slug: 'modern-4-bedroom-residence-lekki',
    title: 'Modern 4-Bedroom Residence',
    location: 'Lekki Phase 1, Lagos',
    price: '₦85,000,000',
    type: 'For Sale',
    propertyType: 'Detached House',
    beds: 4,
    baths: 5,
    area: '420 sqm',
    description: 'A spacious contemporary family residence presented as a prototype listing for the Property4Naija discovery experience.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    features: ['Modern kitchen', 'Private parking', 'Fitted wardrobes', 'Family lounge'],
  },
  {
    slug: 'contemporary-family-home-ikeja',
    title: 'Contemporary Family Home',
    location: 'Ikeja GRA, Lagos',
    price: '₦12,000,000 / year',
    type: 'For Rent',
    propertyType: 'Detached House',
    beds: 4,
    baths: 4,
    area: '360 sqm',
    description: 'A polished family-home concept for demonstrating rental discovery, inspection and enquiry flows.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85',
    features: ['Gated compound', 'Fitted kitchen', 'Parking', 'Servant quarters'],
  },
  {
    slug: 'elegant-city-apartment-victoria-island',
    title: 'Elegant City Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦9,500,000 / year',
    type: 'For Rent',
    propertyType: 'Apartment',
    beds: 3,
    baths: 3,
    area: '190 sqm',
    description: 'A refined city apartment concept showing how Property4Naija can present premium rental opportunities.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    features: ['Open-plan living', '24/7 security', 'Parking', 'City access'],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
