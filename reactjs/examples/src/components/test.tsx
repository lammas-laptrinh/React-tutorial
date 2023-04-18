import { doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireStore } from "../firebase";
import { getFirestore } from "firebase/firestore";
import {
    CollectionReference,
    collection,
    limit,
    onSnapshot,
    query,
    where,
  } from "firebase/firestore";


const [data,setData] =useState([])
