// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Zn8X7PtQxoWDAuVVEG1dNn6V5-20wgA",
  authDomain: "pc-store-ac22f.firebaseapp.com",
  projectId: "pc-store-ac22f",
  storageBucket: "pc-store-ac22f.appspot.com",
  messagingSenderId: "484941135439",
  appId: "1:484941135439:web:c02e7e1bafd0d10f04343a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);