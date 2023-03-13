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
   

   //Login
   login.addEventListener('click', (e) => {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User logged in successfully, check their role
        const user = userCredential.user;

        // save log in details into real time database
        var lgDate = new Date();
        update(ref(database, 'users/' + user.uid), {
            last_login: lgDate,
        })
        .then(() => {
          // Data saved successfully!
          if (user.email === "admin@gmail.com") {
            // User is an admin, redirect them to the admin page
             window.location.href = "main-proto.html";
           } else {
             // User is a regular user, redirect them to the user page
             window.location.href = "main-user-proto.html";
           }
        })
        .catch((error) => {
          // The write failed...
          alert(error);
        });
        
      })
      .catch((error) => {
        // Login failed
        console.log("Invalid email or password");
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

});

//Auth
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      //bla bla bla
      // ...
    } else {
      // User is signed out
      // ...
      //bla bla bla
    }
  });

  //Log-OUT
  logout.addEventListener('click',(e)=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      alert('user loged-out');
      window.location="login-proto.html";
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
 
         alert(errorMessage);
    });
 
 });
