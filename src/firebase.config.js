// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVbehIIt3xKSuLkc44kkN2cpyy6u3k344",
  authDomain: "splash-coder-4c1ac.firebaseapp.com",
  projectId: "splash-coder-4c1ac",
  storageBucket: "splash-coder-4c1ac.appspot.com",
  messagingSenderId: "363632376186",
  appId: "1:363632376186:web:078e1a920144c9764c7ec3",
  measurementId: "G-MLD4RQSYZD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
