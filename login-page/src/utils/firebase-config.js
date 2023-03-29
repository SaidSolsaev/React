// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHk6LomG2OL4nkQg47XeAnsjEYFqNPQGM",
  authDomain: "tutorial-project-26ad7.firebaseapp.com",
  projectId: "tutorial-project-26ad7",
  storageBucket: "tutorial-project-26ad7.appspot.com",
  messagingSenderId: "889009822342",
  appId: "1:889009822342:web:f97b9dd789e8c9bcf14f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();