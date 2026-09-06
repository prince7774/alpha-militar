import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAOfWfcnyS6jdISj6QEIp3yXkIrppqrxE",
  authDomain: "projeto-militar-6d2cc.firebaseapp.com",
  projectId: "projeto-militar-6d2cc",
  storageBucket: "projeto-militar-6d2cc.firebasestorage.app",
  messagingSenderId: "954807787945",
  appId: "1:954807787945:web:1ae929a592e111a8c3a4b8",
  measurementId: "G-CB61XCMF7R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
