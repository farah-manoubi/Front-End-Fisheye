const openMenuBtn = document.querySelector('.btnMenu');
const closeMenuBtn = document.querySelector('#closeMenu');

openMenuBtn.addEventListener("click", displayMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function displayMenu(){
   document.getElementById("listeSort").style.display = "block";
   document.getElementById("listeSort").setAttribute('aria-hidden', 'false');
   openMenuBtn.style.display ="none";
   openMenuBtn.setAttribute('aria-hidden', 'true');
}

function closeMenu(){
    document.getElementById("listeSort").style.display = "none";
    document.getElementById("listeSort").setAttribute('aria-hidden', 'true');
    openMenuBtn.style.display ="block";
    openMenuBtn.setAttribute('aria-hidden', 'false');
}