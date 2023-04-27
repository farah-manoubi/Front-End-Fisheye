function mediaFactory (data) {
    const { id, photographerId, title, image, video, likes } = data;

    const picture = `assets/media/${photographerId}/${image}`;
    const recorder = `assets/media/${photographerId}/${video}`;
    
    function getMedia() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const tape = document.createElement('video');
        const source = document.createElement('source');
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        const teste = document.createElement('div');

        h2.textContent = title;
        p.textContent = likes;

        img.setAttribute("src", picture);
        img.setAttribute("alt", title);

        tape.setAttribute("controls","");
        source.setAttribute("src", recorder);
        source.setAttribute("type", "video/mp4");




        //console.log(teste);
        tape.appendChild(source);
       article.appendChild(img);
       article.appendChild(tape);
        //article.appendChild(teste);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);

        return(article);

    }
    return{ id, photographerId, title, image, video, likes, getMedia };

}