var tableau1= [];
var tableau2= [];
var tableau3= [];
var tableau4= [];
var tableau5= [];



let allButton = document.getElementsByClassName("addButton")
for (const button of allButton) {
    button.addEventListener("click", (e) => {
        let id = e.target.id.split("-")
        id[0] = 'grade'
        let inputGrade = parseFloat(document.getElementById(id.join("-")).value)
        id[0] = 'description'
        let inputDesc = document.getElementById(id.join("-")).value

        console.log(inputDesc);
        console.log(inputGrade);
        console.log(id);
      
    });
}
      

// let inputGrade = document.getElementById("grade-ecole_pro-semestre1")
// let inputDesc = document.getElementById("description-ecole_pro-semestre1")


        // savoir ou vous êtes (event target)

        // Remonter dans les éléments html (pour arriver au tableau) html parent

        // Ajouter des lignes dans le tableau (html table)





