// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZbvJeVv_Whg-ZGRpB3y6pIVq4rtLJtCE",
  authDomain: "inventory-management-3c2e3.firebaseapp.com",
  projectId: "inventory-management-3c2e3",
  storageBucket: "inventory-management-3c2e3.appspot.com",
  messagingSenderId: "1090901780114",
  appId: "1:1090901780114:web:24806980f4617cffb8a84b",
  measurementId: "G-VW94GRV71M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}