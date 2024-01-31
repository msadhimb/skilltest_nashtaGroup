// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJfuw7cyIEPk9RDRe6p7sZbtZEZDHrUeQ",
  authDomain: "nashtagroupinterview.firebaseapp.com",
  projectId: "nashtagroupinterview",
  storageBucket: "nashtagroupinterview.appspot.com",
  messagingSenderId: "322153656260",
  appId: "1:322153656260:web:b556f4e7774919684cbe91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
