// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM5161hZIJy0JouOq1JHjp9rnu2GCB1Os",
  authDomain: "vrm-1-c444d.firebaseapp.com",
  projectId: "vrm-1-c444d",
  storageBucket: "vrm-1-c444d.appspot.com",
  messagingSenderId: "319065175736",
  appId: "1:319065175736:web:9c9f0adc0cd96096a7264d",
  measurementId: "G-J1191NQCDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const goggleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, goggleAuthProvider, db };