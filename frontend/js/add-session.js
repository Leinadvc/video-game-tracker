const token = localStorage.getItem("token");

if(!token){
window.location="index.html";
}

const API_URL="http://localhost:3000/api";


document.getElementById("sessionForm").addEventListener("submit",async(e)=>{

e.preventDefault();

const gameId=document.getElementById("gameId").value;
const hoursPlayed=document.getElementById("hoursPlayed").value;
const notes=document.getElementById("notes").value;

await fetch(`${API_URL}/sessions`,{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},

body:JSON.stringify({
gameId,
hoursPlayed,
notes
})

});

alert("Session created");

});

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

localStorage.removeItem("token");

window.location="index.html";

});

}