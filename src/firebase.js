// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFey9M3UNzqKEk5190WydMz-ttMoiW6jU",
  authDomain: "portfolio1-eddb9.firebaseapp.com",
  projectId: "portfolio1-eddb9",
  storageBucket: "portfolio1-eddb9.appspot.com",
  messagingSenderId: "579034394595",
  appId: "1:579034394595:web:90009f223432be6fb7fad6",
  measurementId: "G-YK4YDN5E1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

// Export the db instance
export { db };
