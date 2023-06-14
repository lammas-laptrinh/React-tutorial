// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDYFbIYvEFuW3IeA2pZBtTly6sFSTVLRfg",
//   authDomain: "react-tutorial-c569e.firebaseapp.com",
//   projectId: "react-tutorial-c569e",
//   storageBucket: "react-tutorial-c569e.appspot.com",
//   messagingSenderId: "191975451781",
//   appId: "1:191975451781:web:4305bf7b0f94da1c330dec",
//   measurementId: "G-ET0BVW2B9L",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDHvO2LJl6yIw6E1Z7uJ_4D08dO4rziwd8",
  authDomain: "hotel-92287.firebaseapp.com",
  projectId: "hotel-92287",
  storageBucket: "hotel-92287.appspot.com",
  messagingSenderId: "307628341429",
  appId: "1:307628341429:web:784c7382410c557408a6fc",
  measurementId: "G-2KVGGZS28T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestoreDB = getFirestore(app);
const db = firestoreDB;
export { app, analytics, firestoreDB, db, auth };
