const openModalButton = document.querySelector('.contactButton');
const mainSection = document.querySelector('#main');
const modal = document.querySelector("#contact_modal");
const closeModalImg = document.querySelector("#close");
const formulaire = document.getElementById("contactMe");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let formValid = false;

//Création d'une constante appelée lors de l'ouverture de la modale de contact
const onOpenModal = () => {
  mainSection.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'false');
  closeModalImg.focus();
}

//Création d'une constante appelée lors de la fermeture de la modale de contact
const onCloseModal = () => {
  mainSection.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-hidden', 'true');
  openModalButton.focus();
}

//Evènements lors d'un clique (ouverture/fermeture de la modal de contact)
openModalButton.addEventListener("click", displayModal);
closeModalImg.addEventListener("click", closeModal);

//Fonction qui permet d'afficher la modal de contact
function displayModal() {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  onOpenModal();
}

//Fonction permettant de fermer la modal de contact
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  onCloseModal();
}

//Fermeture de la modale lorsque l'on appuie sur la touche Entrée
closeModalImg.addEventListener("keydown", e =>{ 
  if(e.which === 13){
    closeModal();
  } 
})

//Soumission du formulaire lorsque l'on appuie sur le bouton d'envoie
formulaire.addEventListener("submit", (event) =>{
    event.preventDefault();
    validFormulaire(event);

    if(formValid== true){
      console.log(formValid)
      closeModal();
      console.log("Prénom: " +firstName.value);
      console.log("Nom: " +lastName.value);
      console.log("Adresse mail: " +email.value);
      console.log("Message: " +message.value);
      event.target.reset();
      formValid = false;
    } 
});

//Fonction permettant de vérifier si le formulaire est valide ou non
function validFormulaire(event){
    let conditionValid = true;
    var caractere = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,10}(?:\.[a-z]{10})?)$/i;

  // Vérifie si le prénom est vide ou s'il est inférieur à 2 caractères
  if(firstName.value == '' || firstName.value.length < 2){
    firstName.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    firstName.parentElement.setAttribute("data-error-visible", "");
  }
  
  // Vérifie si le nom est vide ou s'il est inférieur à 2 caractères
  if(lastName.value == '' || lastName.value.length < 2){
    lastName.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    lastName.parentElement.setAttribute("data-error-visible", "");
  }

  // Vérifie si l'adresse mail est vide ou si sa structure est respectée
  if(caractere.test(email.value) == '' || !caractere.test(email.value)){
    email.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    email.parentElement.setAttribute("data-error-visible", "");
  }

  // Vérifie si la zone de texte est vide
  if(message.value == ''){
    message.parentElement.setAttribute("data-error-visible", "true");
    conditionValid = false;
  }else{
    message.parentElement.setAttribute("data-error-visible", "");
  }

  // Le formulaire n'est pas envoyé s'il y a une erreur
  if(conditionValid == false){
    event.preventDefault();
  }else{
    formValid = true;
  }
}