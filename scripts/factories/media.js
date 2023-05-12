function mediaFactory (data) {
    const { photographerId, title, image, video, likes } = data;

    const picture = `assets/media/images/${image}`;
    const recorder = `assets/media/videos/${video}`;

    const article = document.createElement('article');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const i = document.createElement('i');
    const divLikes = document.createElement('div');
    const index = document.createElement('div');
   
    for(var n=1; n < slides.length; n++){
        
        n = n+1;
    }
   


    function getMediaVideo(){
        const tape = document.createElement('video');
        const source = document.createElement('source');

        h2.textContent = title;
        p.textContent = likes;

        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");

        index.setAttribute("class", "lgthBox");

        article.setAttribute("class","openLightbox");

       

        tape.setAttribute("controls", "");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");
        tape.setAttribute("onclick", `openLightbox();currentSlide(${n})`);
        
    
        divLikes.append(p, i);
        tape.appendChild(source);
        index.appendChild(tape);
        article.append(index, div);
        div.append(h2, divLikes);

        return(article);
    }

    
    function getMediaImage() { 
        const img = document.createElement('img');
        
        h2.textContent = title;
        p.textContent = likes;

        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");

        index.setAttribute("class", "lgthBox");

        article.setAttribute("class","openLightbox");


        
        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.setAttribute("onclick",  `openLightbox();currentSlide(${n})`);
        

        divLikes.append(p, i);
        index.appendChild(img);
        article.append(index, div);
        div.append(h2, divLikes);
        
        return(article);
    }

    function getLightBoxVideo(){ 
        const mediaSlide = document.createElement('div');
        const videoLgth = document.createElement('video');
        const srcvideoLgth = document.createElement('source');
        const titleVideo = document.createElement('p');

        titleVideo.textContent = title;
        titleVideo.setAttribute("class", "caption");
        mediaSlide.setAttribute("class", "slideMedia");

        videoLgth.setAttribute("controls", "");
        srcvideoLgth.setAttribute("src", recorder);
        srcvideoLgth.setAttribute("type", "video/mp4");

        videoLgth.appendChild(srcvideoLgth);
        mediaSlide.append(videoLgth, titleVideo);
        
        return(mediaSlide);
    }

    function getLightBoxImage(){  
        const mediaSlide = document.createElement('div');
        const imageLgth = document.createElement('img');
        const titleImage = document.createElement('p');

        titleImage.textContent = title;
        titleImage.setAttribute("class", "caption");
        mediaSlide.setAttribute("class", "slideMedia");

        imageLgth.setAttribute("src", picture);
        imageLgth.setAttribute("alt", title);

        mediaSlide.append(imageLgth, titleImage);

        return(mediaSlide);
    }

    return{ photographerId, title, image, video, likes, getMediaVideo, getMediaImage, getLightBoxVideo, getLightBoxImage};
}