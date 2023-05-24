// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC5G8iBR-75CNivh9L0XSNQgbuW52ju_g",
  authDomain: "hotel-900c1.firebaseapp.com",
  projectId: "hotel-900c1",
  storageBucket: "hotel-900c1.appspot.com",
  messagingSenderId: "44802958248",
  appId: "1:44802958248:web:e9736966afc4f3290ff39d",
  measurementId: "G-X9TL4MD70S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);