 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getFirestore , collection, getDocs, addDoc, arrayUnion, deleteDoc,doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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

 var acceptButton = document.getElementById("accept-dialog");
 var rejectButton = document.getElementById("reject-dialog");



 //Accept!!
 acceptButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // Get the comment from the comment textarea
  var comment = document.getElementById("comment").value;
  
  // Update the data in the Firestore database
  updateDoc(doc(database,'EditDialog' + docRef.id),{
    type: 1,
    comment: comment
  })
  .then(function() {
    console.log("Document successfully updated!");
    alert("Accepted!")
  })
  .catch(function(error) {
    console.error("Error updating document: ", error);
  });
});

 //Reject!!
 rejectButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // Get the comment from the comment textarea
  var comment = document.getElementById("comment").value;
  
  // Update the data in the Firestore database
  updateDoc(doc(database,'EditDialog' + docRef.id),{
    type: 2,
    comment: comment
  })
  .then(function() {
    console.log("Document successfully updated!");
    alert("Rejected!")
  })
  .catch(function(error) {
    console.error("Error updating document: ", error);
  });
});