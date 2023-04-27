
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

    
    async function displayMedia(medias) {
        const mediaSection = document.querySelector(".photograph_media");
        //console.log(medias.medias);
       
        Array.from(medias).forEach((media) => {
            
            const mediaModel = mediaFactory(media);
            const mediaDisplay = mediaModel.getMedia();
            console.log(mediaDisplay);
            mediaSection.appendChild(mediaDisplay);
        });
        
        
    }
    

    async function initPhotograph() {
        const photographers = await getPhotograph();
        

        displayPhotograph(photographers);
      
    }
    
    initPhotograph();



    async function initPhotographMedia() {
        const medias = await getPhotograph();
        

        displayMedia(medias);
      
    }
    
    initPhotographMedia();

    