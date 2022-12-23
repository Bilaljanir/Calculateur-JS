let gradesObject = {
    EcolePro: {
        semestre1: [],
    },
    ecoleinter: {
        semestre1: [],
    },
    compelargie: {
        branches: {
            math: {
                semestre1: [],
                semestre2: [],
                semestre3: [],
            },
            anglais: {
                semestre1: [],
                semestre2: [],
                semestre3: [],
                semestre4: [],
                semestre5: [],
            },
        },
    },
    cultureG: {
        semestres: {
            semestres: {

                semestre1: [],
                semestre2: [],
                semestre3: [],
                semestre4: [],
                semestre5: [],
                semestre6: [],
                semestre7: [],
                semestre8: [],
            }

        }
    },
    TPI: {
        semestre1: [],
    },
};

// add semestre

// let inputGrade = document.getElementById("grade-ecole_pro-semestre1")
// let inputDesc = document.getElementById("description-ecole_pro-semestre1")
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

// removeButton

let removeButton = document.getElementsByClassName("removeButton")
for (const button of removeButton) {
    button.addEventListener("click", (e) => {
        document.getElementById("table-ecole_pro-semestre1").deleteRow(1);    

    });
}

let removeButton1 = document.getElementsByClassName("removeButton")
for (const button of removeButton) {
    button.addEventListener("click", (e) => {
        document.getElementById("table-cours_inter-semestre1").deleteRow(1);    

    });
}

let removeButton2 = document.getElementsByClassName("removeButton")
for (const button of removeButton) {
    button.addEventListener("click", (e) => {
        document.getElementById("table-compétance_elargie-semestre1").deleteRow(1);    

    });
}

let removeButton3 = document.getElementsByClassName("removeButton")
for (const button of removeButton) {
    button.addEventListener("click", (e) => {
        document.getElementById("table-culture_général-semestre1").deleteRow(1);    

    });
}
let removeButton4 = document.getElementsByClassName("removeButton")
for (const button of removeButton) {
    button.addEventListener("click", (e) => {
        document.getElementById("table-TPI-semestre1").deleteRow(1);    

    });
}
