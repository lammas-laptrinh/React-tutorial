// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCYZlCXza3Q3dyH45-gBVHNoosujb2O08",
  authDomain: "react-tutorial-7bb02.firebaseapp.com",
  projectId: "react-tutorial-7bb02",
  storageBucket: "react-tutorial-7bb02.appspot.com",
  messagingSenderId: "611489557065",
  appId: "1:611489557065:web:66fe722438049823a36d98",
  measurementId: "G-9PS7NF57Z1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ath = getAuth(app);

const analytics = getAnalytics(app);

const db = getFirestore(app);
const firebase = getAnalytics(app);

const storage = getStorage(app);

const functions = getFunctions(app, "asia-northeast1");
export { app, analytics, firebase, storage, db, functions, ath };
