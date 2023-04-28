    async function getPhotographers() {
        const result = await fetch("data/photographers.json");

        return await result.json();
    }
  


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
       
        Array.from(photographers.photographers).forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
        
        
    };
   

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
