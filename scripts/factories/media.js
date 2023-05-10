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
    var n;


    function getMediaVideo(){
        const tape = document.createElement('video');
        const source = document.createElement('source');

        h2.textContent = title;
        p.textContent = likes;

        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");

        article.setAttribute("class","openLightbox");

        tape.setAttribute("controls", "");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");
        source.setAttribute("onclick", "openLightBox();");
    
        divLikes.append(p, i);
        tape.appendChild(source);
        article.append(tape, div);
        div.append(h2, divLikes);

        return(article);
    }

    
    function getMediaImage() { 
        const img = document.createElement('img');
        
        h2.textContent = title;
        p.textContent = likes;

        i.setAttribute("class", "fa-solid fa-heart");
        i.setAttribute("aria-label", "likes");

        article.setAttribute("class","openLightbox");

        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.setAttribute("onclick", "openLightBox();");

        divLikes.append(p, i);
        article.append(img, div);
        div.append(h2, divLikes);
        
        return(article);
    }

    function lightBoxx(){
        const imageBox = document.createElement('img');
        const videoBox = document.createElement('video');
        const sourcevideoBox = document.createElement('source');
        const divBox = document.querySelector('.containerBox');

        imageBox.setAttribute("src", picture);
        videoBox.setAttribute("controls", "");
        sourcevideoBox.setAttribute("src", recorder);
        sourcevideoBox.setAttribute("type", "video/mp4");
       
        

        videoBox.appendChild(sourcevideoBox);
        divBox.append(imageBox, videoBox);

        return (divBox);


    }

    return{ photographerId, title, image, video, likes, getMediaVideo, getMediaImage, lightBoxx };
}