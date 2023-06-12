const main = document.querySelector('#main');
const lgthContainer = document.querySelector("#myLightBox");

//Fonction permettant d'ouvrir la lightbox
function openLightbox(){
    document.getElementById("myLightBox").style.display = "block"; 
    main.setAttribute('aria-hidden', 'true');
    lgthContainer.setAttribute('aria-hidden', 'false');
    lgthContainer.focus();
}

//Fonction permettant de fermer la lightbox
function closeLightbox(){
    document.getElementById("myLightBox").style.display = "none";
    main.setAttribute('aria-hidden', 'false');
    lgthContainer.setAttribute('aria-hidden', 'true');
}

let indexOfSlide = 0;
const slides = document.getElementsByClassName("slideMedia");

//Fonction permettant de contrôler les médias suivants ou précédants lorsque l'on appuie sur les flèches gauche ou droite de la lightbox
function browseSlide(n){
    displaySlides(indexOfSlide += n);
}

//Fonction permettant de contrôler l'index du média
function currentSlide(id){
    const mediaIndex = Array.from(slides).findIndex(slide => {
        return slide.dataset.mediaId == id;
    })
    displaySlides(mediaIndex);
}

//Fonction permettant de gérer l'affichage des slides
function displaySlides(mediaIndex) {
    indexOfSlide = mediaIndex;

    if (mediaIndex > slides.length - 1) {
        indexOfSlide = 0;
    }
    if (mediaIndex < 0) {
        indexOfSlide = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if(slides[indexOfSlide]){
        slides[indexOfSlide].style.display = "block";
    }
}

//Evènement qui permet de faire défiler la lightbox selon les touches fléchées du clavier (gauche et droite)
lgthContainer.addEventListener("keydown", e =>{ 
    if(e.keyCode == '37'){
        browseSlide(-1);
    } 
    else if(e.keyCode == '39'){
        browseSlide(1);
    }
})