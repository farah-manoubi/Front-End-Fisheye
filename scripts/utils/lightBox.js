function openLightbox(){
    document.getElementById("myLightBox").style.display = "block";
}

function closeLightbox(){
    document.getElementById("myLightBox").style.display = "none";
}

var indexOfSlide = 1;
var slides = document.getElementsByClassName("slideMedia");

displaySlides(indexOfSlide);

function browseSlide(n){
    displaySlides(indexOfSlide += n);
}

function currentSlide(n){
    displaySlides(indexOfSlide = n);
}

function displaySlides(n) {
    var i;
    
    if (n > slides.length) {
        indexOfSlide = 1;
    }
    if (n < 1) {
        indexOfSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    slides[indexOfSlide-1].style.display = "block";
    console.log(slides);
        
}
