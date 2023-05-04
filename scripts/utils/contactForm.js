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

