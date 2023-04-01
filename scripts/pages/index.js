    async function getPhotographers() {
            fetch("data/photographers.json")
                .then(result => {
                    //console.log(result);
                    return result.json();
                })
                .then(data => {
                   //console.log(data.photographers);
                    return data;
                })
                .catch(e => {
                    console.log(e);
                });
    }
  


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        const photographe = await fetch("data/photographers.json");
        const displayPhotograph = await photographe.json();

        Array.from(displayPhotograph.photographers).forEach((photographer) => {
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
    
