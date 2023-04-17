// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFireauth } from "firebase/firebase-auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkLMrIsSryxDErEI_mYh49NpqW7lZyT4U",
    authDomain: "baitaptrenlopbuoi2.firebaseapp.com",
    projectId: "baitaptrenlopbuoi2",
    storageBucket: "baitaptrenlopbuoi2.appspot.com",
    messagingSenderId: "56448179200",
    appId: "1:56448179200:web:e65452a466df4acf248ce5",
    measurementId: "G-G4FEV2GEGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getFireauth(app)

export {
    app, db, auth, analytics
}