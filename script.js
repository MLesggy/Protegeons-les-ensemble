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

let validerDon= document.getElementById("validerDon")
validerDon.addEventListener("click", ()=>{
    alert("♡ Les animaux vous disent merci pour votre don! ♡ ");
})

function don(){
    // recuperation des boutons séléctionnés
    let donSelected = document.querySelector(".cadreDon .btnDon.selected")
    let tempsChoisis= document.querySelector(".cadreTemps .btnTemps.selected")
    // condition pour afficher le bouton rouge 
    if (donSelected && tempsChoisis){
        let valeurDon = donSelected.querySelector(".don").textContent // Dois prendre juste le <span> avec le prix sinon ça fout tout le texte du bouton! 
        let valeurTemps= tempsChoisis.textContent
        document.getElementById("leDon").innerHTML = "♡ Faire un don de " + valeurDon + "/" + valeurTemps
        
    }
}

// Script pour la partie carroussel d'image 
// on recuère les miniatures
let miniature = document.querySelectorAll(".imgBox .swipe")
// Pour chaque miniature je veux que dès que je clique elles obtienne l'attribut de l'image principale
miniature.forEach(mini => {
    mini.addEventListener("click",()=>{
    let nouvelleImg = mini.getAttribute("src")
    document.getElementById("imagePrincipale").setAttribute("src", nouvelleImg);
// recuperer aussi les legendes des images ppur mettre le bon texte dessus à chaque changement
    let nouveauNom= mini.getAttribute("data-name") // nouveau nom de l'image 
    let nouvelleLegende = mini.getAttribute("data-caption"); // nouvelle phrase inspirante 
// mise a jour dans le html avec concatenation
    document.querySelector(".texte-sur-image").innerHTML = nouveauNom + "<br>" + nouvelleLegende
})
})

// Script pour la partie Quizz 
// /!\ Merite d'etre remanier car pas du tout opti. /!\

// recuperation des boutons correct/incorrect de la question 1 
let mauvaise_reponse1 = document.getElementById("opt1")
mauvaise_reponse1.addEventListener("click", ()=>{
    let correction = document.getElementById("opt1")
    mauvaise_reponse1.classList.remove("btnQuizz")
    mauvaise_reponse1.classList.add("btnQuizzFalse")
    correction.innerHTML= "❌ Faux! Chez Quattre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels."
})
let bonne_reponse1 = document.getElementById("opt2")
bonne_reponse1.addEventListener("click", ()=>{
    bonne_reponse1.classList.remove("btnQuizz")
    bonne_reponse1.classList.add("btnQuizzCorrect")

})
// Recuperation des boutons correct/incorrect de la question 2
let mauvaise_reponse2= document.getElementById("opt3")
mauvaise_reponse2.addEventListener("click", ()=>{
    let correction= document.getElementById("opt3")
    mauvaise_reponse2.classList.remove("btnQuizz")
    mauvaise_reponse2.classList.add("btnQuizzFalse")
    correction.innerHTML = "❌ Faux! Nous acceuillons tout les animaux, quel que soit leur état de santé. Chaque vie compte! "
})
let bonne_reponse2= document.getElementById("opt4")
bonne_reponse2.addEventListener("click", ()=>{
    bonne_reponse2.classList.remove("btnQuizz")
    bonne_reponse2.classList.add("btnQuizzCorrect")

})
//recuperation des boutons correct/incorrect de la question 3
let mauvaise_reponse3 = document.getElementById("opt5")
mauvaise_reponse3.addEventListener("click", ()=>{
    let correction = document.getElementById("opt5")
    mauvaise_reponse3.classList.remove("btnQuizz")
    mauvaise_reponse3.classList.add("btnQuizzFalse")
    correction.innerHTML = "❌ Faux! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux. "
})
let bonne_reponse3= document.getElementById("opt6")
bonne_reponse3.addEventListener("click", ()=>{
    bonne_reponse3.classList.remove("btnQuizz")
    bonne_reponse3.classList.add("btnQuizzCorrect")

})






