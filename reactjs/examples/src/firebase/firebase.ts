// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore"
// import {getApp} from "firebase/app"
// import {getStorage} from "firebase/storage"
// import {getFunctions} from "firebase/functions"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC4M4wvVP3vFwUFx7C3DsQaSJ_RtRdeO4Y",
//   authDomain: "fir-a9535.firebaseapp.com",
//   projectId: "fir-a9535",
//   storageBucket: "fir-a9535.appspot.com",
//   messagingSenderId: "551599272072",
//   appId: "1:551599272072:web:c431df139ce8f3b5a56f3d",
//   measurementId: "G-4HB8JJM2SJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db=getFirestore(app);
// const firebase=getAnalytics(app);

// const storage=getStorage(app);


// const functions=getFunctions(app,"asia-nortgeast1");


// export {app,analytics,db,firebase,storage,functions}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4M4wvVP3vFwUFx7C3DsQaSJ_RtRdeO4Y",
  authDomain: "fir-a9535.firebaseapp.com",
  projectId: "fir-a9535",
  storageBucket: "fir-a9535.appspot.com",
  messagingSenderId: "551599272072",
  appId: "1:551599272072:web:c431df139ce8f3b5a56f3d",
  measurementId: "G-4HB8JJM2SJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
