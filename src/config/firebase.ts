import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCjWQlOuAfaH_8qxuk5mLieD6THKCSVXs4",
  authDomain: "e-commerce-73aee.firebaseapp.com",
  projectId: "e-commerce-73aee",
  storageBucket: "e-commerce-73aee.firebasestorage.app",
  messagingSenderId: "103728598963",
  appId: "1:103728598963:web:6451127bb533122a0705c6",
  measurementId: "G-W2BZE9HX58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
