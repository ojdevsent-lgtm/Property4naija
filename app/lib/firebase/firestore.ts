import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from './config';

export const db = getFirestore(firebaseApp);

export type PropertyRecord = {
  id?: string;
  slug: string;
  title: string;
  type: 'For Sale' | 'For Rent' | 'Shortlet';
  propertyType: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  description: string;
  features: string[];
  images: string[];
  status: 'draft' | 'published' | 'archived';
  createdAt?: unknown;
  updatedAt?: unknown;
};
