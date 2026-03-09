const token = localStorage.getItem("token");

if(!token){
window.location="index.html";
}

const API_URL = "http://localhost:3000/api";

document.getElementById("gameForm").addEventListener("submit", async(e)=>{

e.preventDefault();

const title=document.getElementById("title").value;
const platform=document.getElementById("platform").value;
const genre=document.getElementById("genre").value;

await fetch(`${API_URL}/games`,{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},

body:JSON.stringify({title,platform,genre})

});

window.location="games.html";

});

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

localStorage.removeItem("token");

window.location="index.html";

});

}