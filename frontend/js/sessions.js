const token = localStorage.getItem("token");

const API_URL="http://localhost:3000/api";

async function fetchSessions(){

const response=await fetch(`${API_URL}/sessions`,{

headers:{
Authorization:`Bearer ${token}`
}

});

const sessions=await response.json();

const container=document.getElementById("sessionList");

sessions.forEach(s=>{

const div=document.createElement("div");

div.innerHTML=`
<p>Game ID: ${s.gameId}</p>
<p>Hours: ${s.hoursPlayed}</p>
`;

container.appendChild(div);

});

}

fetchSessions();