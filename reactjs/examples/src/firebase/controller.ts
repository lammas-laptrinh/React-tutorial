import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { getStorage } from "firebase/storage";

export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const bookingCollection = collection(firestore, "BookingList");
