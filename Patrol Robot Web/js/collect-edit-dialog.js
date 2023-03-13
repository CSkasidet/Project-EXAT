 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getFirestore , collection, getDocs, addDoc, arrayUnion, deleteDoc,doc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
 //import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDcYn7wr-Z9kR5YyrUZvuU3Irv3IIusjO0",
   authDomain: "project-exat.firebaseapp.com",
   projectId: "project-exat",
   storageBucket: "project-exat.appspot.com",
   messagingSenderId: "595990368633",
   appId: "1:595990368633:web:fa9cc62471d30e9d36dfa8",
   measurementId: "G-6HS8XZ7BKV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getFirestore(app);
 //const table = document.getElementById("table")
 const form = document.getElementById("intent-form")


form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Your code to save data to Firestore
  var intent = form.elements["intent"].value;
  var training = form.elements["trianing[]"];
  var trainingArray = [];
  for (var i = 0; i < training.length; i++) {
    trainingArray.push(training[i].value);
  }
  var responses = form.elements["responses"].value;

  addDoc(collection(database,'EditDialog'),{
    intent: intent,
    training: trainingArray,
    responses: responses,
    type: 0
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    alert("บันทึกเสร็จสิ้น")
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

});
