  async function getNamePhotograph() {
    const id = new URL(location.href).searchParams.get("id");
    const result = await fetch("data/photographers.json");
    const data = await result.json();
    const photograph = data.photographers.find(item => item.id == id);
    

    return photograph;
}

async function displayName(photographer) {
    const photographNameSection = document.querySelector(".header_modal");
    const photographModel = photographerFactory(photographer);
    const user = photographModel.modalNamePhotograph();

    photographNameSection.appendChild(user); 
}

async function initialisation() {
    const photographer = await getNamePhotograph();
    displayName(photographer);
};

initialisation();



const openModalButton = document.querySelector('.contactButton');
const mainSection = document.querySelector('#main');
const modal = document.querySelector("#contact_modal");
const closeModalImg = document.querySelector("#close");
const formulaire = document.getElementById("contactMe");
const buttonSend = document.getElementById("btn");
let formValid = false;

/*const id = new URL(location.href).searchParams.get("id");
formulaire.action = "photographer.html?id=" + id;*/


const onOpenModal = () => {
  mainSection.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'false');
  closeModalImg.focus();
}

const onCloseModal = () => {
  mainSection.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-hidden', 'true');
  openModalButton.focus();
}

openModalButton.addEventListener("click", displayModal);
closeModalImg.addEventListener("click", closeModal);

function displayModal() {
    
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  onOpenModal();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  onCloseModal();
}




formulaire.addEventListener("submit", (event) =>{
    event.preventDefault();
    validFormulaire(event);

    if(formValid== true){
      formulaire.submit();
    }
   
});

function validFormulaire(event){
    let conditionValid = true;
    
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

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





