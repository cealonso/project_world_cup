let btnAdd=document.getElementById('btn-team');
btnAdd.addEventListener("click",addTeam);
let btnList=document.getElementById('btn-list');
btnList.addEventListener("click",listTeams);

var teams=[];


function addTeam(){
    const equipo=prompt("indique cuál es el equipo?");
    teams.push(equipo);

}
function listTeams(){
   // alert(teams);
   teams.forEach(addItem);
  
}

function addItem(){

}

