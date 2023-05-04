

import {
    
    collection,
   
  
    getFirestore,
   
} from "firebase/firestore";

import { app } from './firebase'

export const firebase = getFirestore(app);

export const listbookingController = collection(firebase, 'Dashboard')