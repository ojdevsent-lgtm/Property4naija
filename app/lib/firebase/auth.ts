'use client';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from './config';

export const firebaseAuth = getAuth(firebaseApp);

export async function signInAdmin(email: string, password: string) {
  return signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
}

export async function createAdmin(email: string, password: string) {
  return createUserWithEmailAndPassword(firebaseAuth, email.trim(), password);
}

export function watchAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(firebaseAuth, callback);
}

export async function signOutAdmin() {
  await signOut(firebaseAuth);
}
