import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvAz51OM4_FsjFMwVIxYisNFeoghnWW9U",
  authDomain: "app-futbolito.firebaseapp.com",
  projectId: "app-futbolito",
  storageBucket: "app-futbolito.appspot.com",
  messagingSenderId: "3168317404",
  appId: "1:3168317404:web:aba773a039e07dc3c66919"
};


export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore( initFirebase );