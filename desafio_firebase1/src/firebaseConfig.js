// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3NwiEFBP-LATXV7dePwNFNKZTE10RKrA",
    authDomain: "desafio1-5e6ca.firebaseapp.com",
    projectId: "desafio1-5e6ca",
    storageBucket: "desafio1-5e6ca.firebasestorage.app",
    messagingSenderId: "395612931519",
    appId: "1:395612931519:web:e9723e466eb82d31b84d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, deleteDoc, doc };