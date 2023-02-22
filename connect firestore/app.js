  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getFirestore , collection, getDocs, addDoc , deleteDoc,doc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
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
  const db = getFirestore(app);
  const table = document.getElementById("table")
  const form = document.getElementById("addform")

  async function getEmployees(db) {
    const empCol = collection(db,'employees')
    const empSnapshot = await getDocs(empCol)
    return empSnapshot
  }
  function showData(employee) {
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
      deleteDoc(doc(db,'employees',id))
    })
  }
/*function showData(employee) {
    console.log(employee.data().name)
    console.log(employee.data().age)
  } */


  //ดึงข้อมูลใน document
  const data = await getEmployees(db)
  data.forEach(employee => {
      showData(employee) 
  })

//ดึงข้อมูลจากform
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addDoc(collection(db,'employees'),{
    name:form.name.value,
    age:form.age.value
  })
  form.name.value=""
  form.name.value=""
  alert("บันทึกเสร็จสิ้น")
})
