
    async function getPhotograph() {  
        const id = new URL(location.href).searchParams.get("id");
        console.log(id)

        const result = await fetch("data/photographers.json");
        console.log(result)
        const data = await result.json();
       
        const photograph = data.photographers.find(item => item.id == id);
        const medias = data.media.filter(item => item.photographerId == id);
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
        
        photographSection.appendChild(photographProfil); 
    }

    async function displayMedia(medias) {
        const mediaSection = document.querySelector(".photograph_media");

        const mediaSectionLgth = document.querySelector(".containerLgth");

        console.log(medias.medias.filter(item => item.video));

        Array.from(medias.medias.filter(item => item.video)).forEach((media) => {
            const mediaModelVideo = mediaFactory(media);
            const mediaDisplayVideo = mediaModelVideo.getMediaVideo();
            const mediaDisplayVideoLgth = mediaModelVideo.getLightBoxVideo();

           

            mediaSection.append(mediaDisplayVideo);
            mediaSectionLgth.append(mediaDisplayVideoLgth);
        });

        Array.from(medias.medias.filter(item => item.image)).forEach((media) => {
            const mediaModelImage = mediaFactory(media);
            const mediaDisplayImage = mediaModelImage.getMediaImage();
            const mediaDisplayImageLgth = mediaModelImage.getLightBoxImage();
            
            mediaSection.append(mediaDisplayImage);
            mediaSectionLgth.append(mediaDisplayImageLgth);
        }); 

       
    }

    async function displayNameModal(photographer) {
        const photographNameSection = document.querySelector("#contact_modal");
        const photographModel = photographerFactory(photographer.photograph);
        const user = photographModel.modalNamePhotograph();
    
        photographNameSection.appendChild(user); 
    }


    
    async function likeCount(likes){
        const displaySumLike = document.querySelector('.encart');
        const div = document.createElement('div');
        const sumOfLike = document.createElement('p');
        const i = document.createElement('i');
        i.setAttribute("class", "fa-solid fa-heart");
        
        sumOfLike.textContent = likes.medias.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);

        div.append(sumOfLike, i);
        displaySumLike.appendChild(div)
    }



    async function initPhotograph() {
        const photographers = await getPhotograph();
        const medias = await getPhotograph();
        const photographer = await getPhotograph();

        const likes = await getPhotograph();
        
        displayPhotograph(photographers);
        displayMedia(medias);
        displayNameModal(photographer);
        likeCount(likes);
       
    }
    
    initPhotograph();
