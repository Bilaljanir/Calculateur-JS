// Je déclare mes tableaux
var tableau1= [];
var tableau2= [];
var tableau3= [];
var tableau4= [];
var tableau5= [];


// add semestre



// Je déclare une variable allButton qui va prendre tous mes boutton add de mon html

let allButton = document.getElementsByClassName("addButton")
for (const button of allButton) {
    button.addEventListener("click", (e) => {
        let id = e.target.id.split("-")
        id[0] = 'grade'
        let inputGrade = parseFloat(document.getElementById(id.join("-")).value)
        id[0] = 'description'
        let inputDesc = document.getElementById(id.join("-")).value
        id[0]= 'table'
        let tableID=document.getElementById(id.join("-"))
        let row = tableID.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.innerHTML =inputGrade;
        cell2.innerHTML =inputDesc;
        console.log(tableID);
        console.log(inputDesc);
        console.log(inputGrade);
        console.log(id);
        

    });
}

function addToList(){

  }
// let inputGrade = document.getElementById("grade-ecole_pro-semestre1")
// let inputDesc = document.getElementById("description-ecole_pro-semestre1")


        // savoir ou vous êtes (event target)

        // Remonter dans les éléments html (pour arriver au tableau) html parent

        // Ajouter des lignes dans le tableau (html table)





