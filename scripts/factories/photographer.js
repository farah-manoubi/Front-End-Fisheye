function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    const url = `photographer.html?id=${id}`;
   


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const lien = document.createElement( 'a' );
        const contain = document.createElement( 'div' );
        
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        lien.setAttribute("href", url);
        lien.setAttribute("aria-label", name);
    
        const h2 = document.createElement( 'h2' );
        const h3City = document.createElement( 'h3' );
        const h3Country = `, ${country}`;
        const h4 = document.createElement( 'h4' );
        const p = document.createElement('p');

        h2.textContent = name;
        h3City.textContent = city;
        h4.textContent = `${price}€/jour`;
        p.textContent = tagline;

        h3City.insertAdjacentHTML('beforeend', h3Country);
        article.appendChild(contain);
        contain.appendChild(img);
        contain.appendChild(h2);
        contain.appendChild(lien);
        article.appendChild(h3City);
        article.appendChild(p);
        article.appendChild(h4);
        
        
        return (article);
    }

    function getProfilPhotographer() {
        const divContain = document.createElement( 'div' );
        const divInfo = document.createElement( 'div' );
        const h1 = document.createElement( 'h1' );
        const h2City = document.createElement( 'h2' );
        const h2Country = `, ${country}`;
        const p = document.createElement( 'p' );
        const divPrice = document.createElement('div');
        const prix = document.createElement('p');
        const divImg = document.createElement('div');

        const buttonContact = document.querySelector( '.contactButton' );

        const divPhoto = document.createElement( 'div' );
        const imgPhotograph = document.createElement( 'img' );
        imgPhotograph.setAttribute("src", picture);
        imgPhotograph.setAttribute("alt", name);

        divInfo.setAttribute("class", "info");
        divPhoto.setAttribute("class", "picture");
        divContain.setAttribute("class", "container");
        divPrice.setAttribute("class", "encart");
        divImg.setAttribute("class", "containImg");

        h1.textContent = name;
        h2City.textContent = city;
        p.textContent = tagline;
        prix.textContent = `${price}€/jour`;

        divPrice.appendChild(prix);
        divContain.append(divInfo, divPhoto, divPrice);
        h2City.insertAdjacentHTML('beforeend', h2Country);
        divInfo.appendChild(h1);
        divInfo.appendChild(h2City);
        divInfo.appendChild(p);
        divPhoto.append(buttonContact, divImg);
        divImg.appendChild(imgPhotograph);
    
        return (divContain);
    }

    function modalNamePhotograph(){
        const namePhotograph = document.createElement('p');
        const closeModal = document.querySelector('#close');
        const divName = document.querySelector('.title');
        const title = document.querySelector('.namePhotographer');
        const formulaire = document.querySelector("#contactMe");
        const modalDiv = document.querySelector(".modal");
        const headerModal = document.querySelector(".header_modal");

        formulaire.setAttribute("action",`photographer.html?id=${id}`);
        namePhotograph.textContent = name;

        divName.appendChild(namePhotograph);
        title.append(divName, closeModal);
        headerModal.appendChild(title);
        modalDiv.append(headerModal, formulaire);

        return (modalDiv);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM, getProfilPhotographer, modalNamePhotograph}
}