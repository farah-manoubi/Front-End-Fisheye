//Fonction qui permet de gérer l'affichage des médias avec leurs caractéristiques du fichier JSON 
function mediaFactory (data) {
    const { photographerId, title, image, video, likes, id, date } = data;

    const picture = `assets/media/images/${image}`;
    const recorder = `assets/media/videos/${video}`;

    const article = document.createElement('article');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const i = document.createElement('i');
    const divLikes = document.createElement('div');
    const index = document.createElement('div');
    const spanForLike = document.createElement('span');
    const buttonLike = document.createElement('button');
    
    //Fonction permettant de créer la structure pour afficher les vidéos avec leurs caractéristiques
    function getMediaVideo(){
        const tape = document.createElement('video');
        const source = document.createElement('source');
        tape.setAttribute("data-media-id", "media_"+id);
        
        h2.textContent = title;
        spanForLike.textContent = likes;

        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");
        index.setAttribute("class", "lgthBox");

        spanForLike.setAttribute("class", "numberLike_"+id);
        divLikes.setAttribute("class", "containerLike");
        div.setAttribute("class", "titleMedia");
        article.setAttribute("class","openLightbox");
       
        buttonLike.setAttribute("type", "button");
        buttonLike.setAttribute("class", "buttonLike");

        //Lorsque l'on clique sur le bouton j'aime il s'incrémente 1 fois
        buttonLike.addEventListener("click", () =>{
            document.querySelector(".numberLike_"+id).textContent = likes + 1;
        })

        tape.setAttribute("controls", "");
        tape.setAttribute("tabindex", "0");
        tape.setAttribute("class", "openLgth");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");

        //Lorsque l'on clique (avec la souris) sur une vidéo on appelle les fonctions permettants d'afficher la lightbox
        tape.addEventListener("click", () => {
            currentSlide(id);
            openLightbox();
        })

        //Lorsque l'on clique sur la touche entrée du clavier on appelle les fonctions permettants d'afficher la lightbox
        tape.addEventListener("keydown", e =>{
            if(e.key == "Enter"){
                currentSlide(id);
                openLightbox();
              } 
        })
        
        buttonLike.appendChild(i);
        divLikes.append(spanForLike, buttonLike);
        tape.appendChild(source);
        index.appendChild(tape);
        article.append(index, div);
        div.append(h2, divLikes);

        return(article);
    }

    //Fonction permettant de créer la structure pour afficher les images avec leurs caractéristiques    
    function getMediaImage() { 
        const img = document.createElement('img');
        img.setAttribute("data-media-id", "media_"+id);
        
        h2.textContent = title;
        spanForLike.textContent = likes;

        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");
        index.setAttribute("class", "lgthBox");
        spanForLike.setAttribute("class", "numberLike_"+id);
       
        divLikes.setAttribute("class", "containerLike");
        div.setAttribute("class", "titleMedia");
        article.setAttribute("class","openLightbox");
        
        buttonLike.setAttribute("type", "button");
        buttonLike.setAttribute("class", "buttonLike");

        //Lorsque l'on clique sur le bouton j'aime il s'incrémente 1 fois
        buttonLike.addEventListener("click", () =>{
            document.querySelector(".numberLike_"+id).textContent = likes + 1;
        })
        
        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.setAttribute("tabindex", "0");
        img.setAttribute("class", "openLgth");

        //Lorsque l'on clique (avec la souris) sur une image on appelle les fonctions permettants d'afficher la lightbox
        img.addEventListener("click", () => {
            currentSlide(id);
            openLightbox();
        })

        //Lorsque l'on clique sur la touche entrée du clavier on appelle les fonctions permettants d'afficher la lightbox
        img.addEventListener("keydown", e =>{
            if(e.key == "Enter"){
                currentSlide(id);
                openLightbox();
              } 
        })
        
        buttonLike.appendChild(i);
        divLikes.append(spanForLike, buttonLike);
        index.appendChild(img);
        article.append(index, div);
        div.append(h2, divLikes);
        
        return(article);
    }

    //Fonction permettant de structurer l'affichage des videos dans la lightbox avec leurs caractéristiques
    function getLightBoxVideo(){ 
        const mediaSlide = document.createElement('div');
        const videoLgth = document.createElement('video');
        const srcvideoLgth = document.createElement('source');
        const titleVideo = document.createElement('p');
       
        titleVideo.textContent = title;
        titleVideo.setAttribute("class", "caption");

        mediaSlide.setAttribute("class", "slideMedia");
        mediaSlide.setAttribute("data-media-id", id);

        videoLgth.setAttribute("controls", "");
        srcvideoLgth.setAttribute("src", recorder);
        srcvideoLgth.setAttribute("type", "video/mp4");

        videoLgth.appendChild(srcvideoLgth);
        mediaSlide.append(videoLgth, titleVideo);
        
        return(mediaSlide);
    }

    //Fonction permettant de structurer l'affichage des images dans la lightbox avec leurs caractéristiques
    function getLightBoxImage(){  
        const mediaSlide = document.createElement('div');
        const imageLgth = document.createElement('img');
        const titleImage = document.createElement('p');
    
        titleImage.textContent = title;
        titleImage.setAttribute("class", "caption");

        mediaSlide.setAttribute("class", "slideMedia");
        mediaSlide.setAttribute("data-media-id", id);

        imageLgth.setAttribute("src", picture);
        imageLgth.setAttribute("alt", title);

        mediaSlide.append(imageLgth, titleImage);

        return(mediaSlide);
    }

    return{ photographerId, title, image, video, likes, id, date, getMediaVideo, getMediaImage, getLightBoxVideo, getLightBoxImage};
}