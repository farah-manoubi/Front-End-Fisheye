
    async function getPhotograph() {  
        const id = new URL(location.href).searchParams.get("id");
        console.log(id)

        const result = await fetch("data/photographers.json");
        console.log(result)
        const data = await result.json();
       
        const photograph = data.photographers.find(item => item.id == id);
        const medias = data.media.filter(item => item.photographerId == id);
        console.log(data)
        console.log(photograph)
        console.log(medias)

        return{
            photograph,
            medias
        }
    }

    async function displayPhotograph(photographers) {
        const photographSection = document.querySelector(".photograph-header"); 
        const photographerModel = photographerFactory(photographers.photograph);
        const photographProfil = photographerModel.getProfilPhotographer();
        console.log(photographProfil);
        photographSection.appendChild(photographProfil); 
    }

    async function initPhotograph() {
        const photographers = await getPhotograph();

        displayPhotograph(photographers);
    }
    
    initPhotograph();

    