const token = localStorage.getItem("token");

const API_URL = "http://localhost:3000/api";

async function fetchGames(){

const response = await fetch(`${API_URL}/games`,{
headers:{
Authorization:`Bearer ${token}`
}
});

const games = await response.json();

const gameList = document.getElementById("gameList");

gameList.innerHTML = "";

games.forEach(game => {

const card = document.createElement("div");

card.className="card";

card.innerHTML=`
<h3>${game.title}</h3>
<p>${game.platform}</p>
<p>${game.genre}</p>
`;

gameList.appendChild(card);

});

}

fetchGames();