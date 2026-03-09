const token = localStorage.getItem("token");

const API_URL = "http://localhost:3000/api";

document.getElementById("sessionForm").addEventListener("submit",async(e)=>{

e.preventDefault();

const gameId=document.getElementById("gameId").value;
const hoursPlayed=document.getElementById("hoursPlayed").value;

await fetch(`${API_URL}/sessions`,{

method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},

body:JSON.stringify({gameId,hoursPlayed})

});

alert("Session created");

});