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
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}