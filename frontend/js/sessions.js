const token = localStorage.getItem("token");

if(!token){
window.location="index.html";
}

const API_URL="http://localhost:3000/api";

async function fetchSessions(){

const response=await fetch(`${API_URL}/sessions`,{

headers:{
Authorization:`Bearer ${token}`
}

});

const sessions=await response.json();

const container=document.getElementById("sessionList");

container.innerHTML="";

sessions.forEach(s=>{

const div=document.createElement("div");

div.className="card";

div.innerHTML=`
<p><strong>Game ID:</strong> ${s.gameId}</p>
<p><strong>Hours:</strong> ${s.hoursPlayed}</p>
<p><strong>Notes:</strong> ${s.notes || "No notes"}</p>
`;

container.appendChild(div);

});

}

fetchSessions();

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

localStorage.removeItem("token");

window.location="index.html";

});

}