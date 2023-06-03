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
        buttonLike.addEventListener("click", () =>{
            document.querySelector(".numberLike_"+id).textContent = likes + 1;
            
            
         
        })

       
       

        tape.setAttribute("controls", "");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");
        tape.addEventListener("click", () => {
            currentSlide(id);
            openLightbox();
        })
        
    
        buttonLike.appendChild(i);
        divLikes.append(spanForLike, buttonLike);
        tape.appendChild(source);
        index.appendChild(tape);
        article.append(index, div);
        div.append(h2, divLikes);

        return(article);
    }

    
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
        buttonLike.addEventListener("click", () =>{
            document.querySelector(".numberLike_"+id).textContent = likes + 1;
            
           
        
        })
        

        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.addEventListener("click", () => {
            currentSlide(id);
            openLightbox();
        })
        

        buttonLike.appendChild(i);
        divLikes.append(spanForLike, buttonLike);
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
        mediaSlide.setAttribute("data-media-id", id);

        

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
        mediaSlide.setAttribute("data-media-id", id);

       


        imageLgth.setAttribute("src", picture);
        imageLgth.setAttribute("alt", title);

        mediaSlide.append(imageLgth, titleImage);

        return(mediaSlide);
    }

    return{ photographerId, title, image, video, likes, id, date, getMediaVideo, getMediaImage, getLightBoxVideo, getLightBoxImage};
}