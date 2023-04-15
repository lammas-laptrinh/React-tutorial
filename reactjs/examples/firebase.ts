// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFvEiLKSjnh_0iIjIP7ysQvcme8dtzQWQ",
    authDomain: "day2-60ced.firebaseapp.com",
    projectId: "day2-60ced",
    storageBucket: "day2-60ced.appspot.com",
    messagingSenderId: "536697354168",
    appId: "1:536697354168:web:a4991cb43ba13486ccc14d",
    measurementId: "G-3SM30R8J15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {
    db, app
}
