 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
 import { getFirestore , collection, getDocs, addDoc , deleteDoc,doc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
 import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
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

 async function getEditDialog(database) {
   const empCol = collection(database,'EditDialog')
   const empSnapshot = await getDocs(empCol)
   return empSnapshot
 }
 /*function showData(employee) {
   const row = table.insertRow(-1)
   const nameCol = row.insertCell(0)
   const agecol = row.insertCell(1)
   const deletecol = row.insertCell(2)
   nameCol.innerHTML = employee.data().name
   agecol.innerHTML = employee.data().age

   let btn = document.createElement('button')
   btn.textContent = "ลบข้อมูล"
   btn.setAttribute('data-Id',employee.id)
   deletecol.appendChild(btn)
   btn.addEventListener('click',(event)=>{
     let id = event.target.getAttribute('data-id')
     deleteDoc(doc(database,'Employees',id))
   })
 }*/
/*function showData(employee) {
   console.log(employee.data().name)
   console.log(employee.data().age)
 } */


 //ดึงข้อมูลใน document
 /*const data = await getEmployees(database)
 data.forEach(employee => {
     showData(employee) 
 })*/

//ดึงข้อมูลจากform
form.addEventListener('submit', (event) => {
 event.preventDefault();
 addDoc(collection(database,'EditDialog'),{
    intent:form.intent.value,
    trainingphrases:form.trainingphrases.value,
    responses:form.responses.value
 })
 form.intent.value=""
 form.trainingphrases.value=""
 form.responses.value=""
 alert("บันทึกเสร็จสิ้น")
})
