import {  addDoc, collection,  deleteDoc,  doc,  getFirestore,setDoc,} from "firebase/firestore";

import {app} from './firebase'

export const firestore = getFirestore(app);


//HoTels Collection
export const dashboardCollection= collection(firestore,'Dashboard')