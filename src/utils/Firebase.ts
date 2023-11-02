// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY ?? '',
  authDomain: FIREBASE_AUTH_DOMAIN ?? '',
  projectId: FIREBASE_PROJECT_ID ?? '',
  storageBucket: FIREBASE_STORAGE_BUCKET ?? '',
  messagingSenderId: FIREBASE_MESSAGING_ID ?? '',
  appId: FIREBASE_APP_ID ?? '',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);

export const table = 'weather';
