// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 
import { getAnalytics } from 'firebase/analytics';

// Use your existing Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFey9M3UNzqKEk5190WydMz-ttMoiW6jU",
  authDomain: "portfolio1-eddb9.firebaseapp.com",
  projectId: "portfolio1-eddb9",
  storageBucket: "portfolio1-eddb9.appspot.com",
  messagingSenderId: "579034394595",
  appId: "1:579034394595:web:90009f223432be6fb7fad6",
  measurementId: "G-YK4YDN5E1Z"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export { db, analytics };
