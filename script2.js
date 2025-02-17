function validerForm(event){
    event.preventDefault();
    // recuperation des valeurs
    let nom= document.getElementById("Nom").value 
    let mail=document.getElementById("Email").value
    let message=document.getElementById("message").value
    // recuperation des divs vide pour le innerHTML
    let error_Nom =document.getElementById("nom_error")
    let error_Mail= document.getElementById("email_error")
    let error_Mess= document.getElementById("message_error")
    // Reinitialisation des messages d'erreur
    error_Nom.innerHTML = ""
    error_Mail.innerHTML = ""
    error_Mess.innerHTML = ""   

    let validation = true 
    // vérification du nom
    if (nom ===""){
        error_Nom.innerHTML= "Merci de renseigner votre nom"
        validation = false 
    }
    //verification de l'email 
    if (mail ==="" || !mail.includes("@")){
        error_Mail.innerHTML= "Merci de renseigner une adresse mail valide contenant un @"
        validation = false 
    }
    // verification du message 
    if (message === ""){
        error_Mess.innerHTML = "Le champs du message ne doit pas être vide"
        validation = false 
    }
    if (validation === true){
        alert("Votre message à bien été envoyé!")
        // réinitialisation des inputs après validation
        document.getElementById("Nom").value = "" 
        document.getElementById("Email").value = ""
        document.getElementById("message").value = ""    

        error_Nom.innerHTML = ""
        error_Mail.innerHTML = ""
        error_Mess.innerHTML = ""   
}
return validation
}
document.getElementById("envoyer").addEventListener("click", validerForm)



