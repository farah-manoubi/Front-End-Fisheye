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


    function getMediaVideo(){
        const tape = document.createElement('video');
        const source = document.createElement('source');

        h2.textContent = title;
        p.textContent = likes;
        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");

        tape.setAttribute("controls", "");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");
    
        divLikes.appendChild(p);
        divLikes.appendChild(i);
        tape.appendChild(source);
        article.appendChild(tape);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(divLikes);
        
       
       
        return(article);
   
    }

    
    function getMediaImage() { 
        const img = document.createElement('img');
        
        h2.textContent = title;
        p.textContent = likes;
        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");

        img.setAttribute("src", picture);
        img.setAttribute("alt", title);


        divLikes.appendChild(p);
        divLikes.appendChild(i);
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(divLikes);
        
        return(article);

    }

    

    return{ photographerId, title, image, video, likes, getMediaVideo, getMediaImage };

}