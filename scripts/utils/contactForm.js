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




