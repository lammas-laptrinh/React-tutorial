// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrr_jqu35xLFbXfLer-t7EONOqbdQ1fAQ",
  authDomain: "buoi-2-42663.firebaseapp.com",
  projectId: "buoi-2-42663",
  storageBucket: "buoi-2-42663.appspot.com",
  messagingSenderId: "293584308837",
  appId: "1:293584308837:web:0c6b3f621f042e4ee7548c",
  measurementId: "G-QF7KD2BD69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
