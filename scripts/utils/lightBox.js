function openLightbox(){
    document.getElementById("myLightBox").style.display = "block";
}

function closeLightbox(){
    document.getElementById("myLightBox").style.display = "none";
}

let indexOfSlide = 0;
const slides = document.getElementsByClassName("slideMedia");


function browseSlide(n){
    displaySlides(indexOfSlide += n);
}

function currentSlide(id){
    let mediaId
    const mediaIndex = Array.from(slides).findIndex(slide => {
        return slide.dataset.mediaId == id;
    })
    console.log(mediaIndex);
    displaySlides(mediaIndex);
}

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