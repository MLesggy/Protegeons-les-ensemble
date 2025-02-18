//  Script de la page d'acceuil du projet Protegeons les animau


// Changer le fond des boutons sélectionné 
// D'abord les boutons avec les valeurs des dons 
const buttonClique = document.querySelectorAll(".cadreDon .btnDon")
buttonClique.forEach(button =>{
        button.addEventListener('click', ()=>{
        buttonClique.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected")
        don()
    })
})
// Ensuite les boutons avec les temporalités
const tempsClique = document.querySelectorAll(".cadreTemps .btnTemps")
tempsClique.forEach(button =>{
    button.addEventListener("click" , ()=>{
    tempsClique.forEach(btn => btn.classList.remove('selected'));
    button.classList.add("selected")
    don()
})
})

function don(){
    let validerDon= document.getElementById("validerDon")
    // recuperation des boutons séléctionnés
    let donSelected = document.querySelector(".cadreDon .btnDon.selected")
    let tempsChoisis= document.querySelector(".cadreTemps .btnTemps.selected")
    // condition pour afficher le bouton rouge 
    if (donSelected && tempsChoisis){
        let valeurDon = donSelected.querySelector(".don").textContent // Dois prendre juste le <span> avec le prix sinon ça fout tout le texte du bouton! 
        let valeurTemps= tempsChoisis.textContent
        document.getElementById("leDon").innerHTML = "♡ Faire un don de " + valeurDon + "/" + valeurTemps
        validerDon.addEventListener("click", ()=>{
            alert("♡ Les animaux vous disent merci pour votre don! ♡ ");
        })
    }
}

// Script pour la partie Quizz 

