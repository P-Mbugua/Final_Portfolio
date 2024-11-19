import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDpQLVFYyNKXAPuwjl-Ow2aWx3Q2DPVKnw",
  authDomain: "mbuguapeter.firebaseapp.com",
  projectId: "mbuguapeter",
  storageBucket: "mbuguapeter.firebasestorage.app",
  messagingSenderId: "1001716752670",
  appId: "1:1001716752670:web:f5338a2a120982af3ee90f",
  measurementId: "G-3179M3GSVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export services for use in other parts of the app
export { app, db, analytics };
