   //Fonction asynchrone utilisant la méthode fecth() pour récupérer les informations du fichier JSON
   async function getPhotographers() {
        const result = await fetch("data/photographers.json");

        return await result.json();
    }
  
    //Fonction asynchrone permettant d'afficher les photographes et leurs caractéristiques
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
       
        Array.from(photographers.photographers).forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        }); 
    }
   
    //Fonction asynchrone permettant l'initialisation des fonctions
    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
