import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
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
const auth = getAuth(app)
const database = getDatabase(app);

signup.addEventListener('click',(e)=>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var employeeID = document.getElementById('employeeID').value;
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var department = document.getElementById('department').value;
    var branch = document.getElementById('branch').value;
    var tel = document.getElementById('tel').value;

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
         // Signed in
         const user = userCredential.user;
         // ... user.uid
       // save data into real time database
        set(ref(database, 'users/' + user.uid), {
             email: email,
             password: encpass(),
             employeeID: employeeID,
             name: name,
             department: department,
             branch: branch,
             tel: tel

         })
             .then(() => {
                 // Data saved successfully!
                 alert('user created successfully');
                 window.location="login-proto.html";
 
             })
             .catch((error) => {
                 // The write failed...
                 alert(error);
             });
     })
     .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
         alert(errorMessage);
     });

});

//ENCRIPTION
    function encpass(){
        var pass12 = CryptoJS.AES.encrypt(password.value, password.value);
        return pass12.toString();
    }