import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from './firestore';
import type { PropertyRecord } from './firestore';

export async function getPublishedProperties(): Promise<PropertyRecord[]> {
  const propertiesRef = collection(db, 'properties');
  const snapshot = await getDocs(
    query(
      propertiesRef,
      where('status', '==', 'published'),
      orderBy('updatedAt', 'desc'),
    ),
  );

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as PropertyRecord));
}
