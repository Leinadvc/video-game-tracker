const API_URL = "http://localhost:3000/api";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

const response = await fetch(`${API_URL}/register`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
username,
password
})

});

const data = await response.json();

if(response.ok){

alert("Account created!");

window.location="index.html";

}else{

alert(data.message);

}

});