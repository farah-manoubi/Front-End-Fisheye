const main = document.querySelector('#main');
const lgthContainer = document.querySelector("#myLightBox");
const openLgthBox = document.querySelectorAll(".openLgth");
const closeLgthBox = document.querySelector("#closeLgth");
console.log(closeLgthBox)


const onOpenLgth = () => {
    main.setAttribute('aria-hidden', 'true');
    lgthContainer.setAttribute('aria-hidden', 'false');
    closeLgthBox.focus();
    
  }
  
  const onCloseLgth = () => {
    main.setAttribute('aria-hidden', 'false');
    lgthContainer.setAttribute('aria-hidden', 'true');
    //openLgthBox.focus();
    
  }
  
  



function openLightbox(){
    document.getElementById("myLightBox").style.display = "block"; 
    onOpenLgth();
}

function closeLightbox(){
    document.getElementById("myLightBox").style.display = "none";
    onCloseLgth();
}



let indexOfSlide = 0;
const slides = document.getElementsByClassName("slideMedia");


function browseSlide(n){
    displaySlides(indexOfSlide += n);
}

function currentSlide(id){
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

lgthContainer.addEventListener("keydown", e =>{ 
    if(e.keyCode == '37'){
        browseSlide(-1);
    } 
    else if(e.keyCode == '39'){
        browseSlide(1);
    }
})


