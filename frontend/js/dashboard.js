const token = localStorage.getItem("token");

if(!token){
window.location="index.html";
}

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

localStorage.removeItem("token");

window.location="index.html";

});

}
