import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAeweqZHaJICeCnHIJrfQ9-n0DOYdpwUuk",
  authDomain: "ta-seguro-site.firebaseapp.com",
  projectId: "ta-seguro-site",
  storageBucket: "ta-seguro-site.firebasestorage.app",
  messagingSenderId: "45224502893",
  appId: "1:45224502893:web:af0cbb85fcfe2895518164",
  measurementId: "G-R7XZ76WWF3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();