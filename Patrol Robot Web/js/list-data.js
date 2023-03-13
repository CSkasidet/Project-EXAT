// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getFirestore, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcYn7wr-Z9kR5YyrUZvuU3Irv3IIusjO0",
  authDomain: "project-exat.firebaseapp.com",
  databaseURL: "https://project-exat-default-rtdb.firebaseio.com",
  projectId: "project-exat",
  storageBucket: "project-exat.appspot.com",
  messagingSenderId: "595990368633",
  appId: "1:595990368633:web:fa9cc62471d30e9d36dfa8",
  measurementId: "G-6HS8XZ7BKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "EditDialog");
try {
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
        console.log(doc.data());
        console.log(doc.id);
    })
} catch (error) {
    console.log(error);
}
