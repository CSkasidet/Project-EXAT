import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getAuth,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
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
   const auth = getAuth();
   const database = getDatabase(app);

   const email = document.getElementById('email');
   const password = document.getElementById('password');

   // Retrieve the user data
    var userId = "user.uid"; // Replace with the ID of the user whose data you want to retrieve
    var userDataRef = database.ref("users/" + userId);
    userDataRef.on("value", function(snapshot) {
    var userData = snapshot.val();

  // Display the data on the profile page
  document.getElementById("employeeID").textContent = userData.employeeID;
  document.getElementById("name").textContent = userData.name;
  document.getElementById("surname").textContent = userData.surname;
  document.getElementById("department").textContent = userData.department;
  document.getElementById("branch").textContent = userData.branch;
  document.getElementById("tel").textContent = userData.tel;
});