function mediaFactory (data) {
    const { photographerId, title, image, video, likes } = data;
   
    

    const picture = `assets/media/images/${image}`;
    const recorder = `assets/media/videos/${video}`;


    function getMediaVideo(){
        const article = document.createElement('article');
        const tape = document.createElement('video');
        const source = document.createElement('source');
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h2.textContent = title;
        p.textContent = likes;

        tape.setAttribute("controls", "");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");
    

        tape.appendChild(source);
        article.appendChild(tape);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p); 
       
        return(article);
   
    }

    
    function getMediaImage() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h2.textContent = title;
        p.textContent = likes;

        img.setAttribute("src", picture);
        img.setAttribute("alt", title);

        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);
        return(article);

    }

    

    return{ photographerId, title, image, video, likes, getMediaVideo, getMediaImage };

}