    //Fonction asynchrone utilisant la méthode fecth() pour récupérer les informations du fichier JSON grâce à l'ID du photographe
    async function getPhotograph() {  
        const id = new URL(location.href).searchParams.get("id");
        const result = await fetch("data/photographers.json");
        const data = await result.json();
        const photograph = data.photographers.find(item => item.id == id);
        const medias = data.media.filter(item => item.photographerId == id);
        
        return{
            photograph,
            medias
        }  
    }

    //Fonction asynchrone permettant d'afficher le photographe correspondant avec ses caractéristiques (via l'id sélectionné)
    async function displayPhotograph(photographers) {
        const photographSection = document.querySelector(".photograph-header"); 
        const photographerModel = photographerFactory(photographers.photograph);
        const photographProfil = photographerModel.getProfilPhotographer();
        
        photographSection.appendChild(photographProfil); 
    }

    //Fonction asynchrone permettant d'afficher les médias (images/vidéos) du photographe sélectionné avec leurs caractéristiques
    async function displayMedia(medias) {
        const mediaSection = document.querySelector(".photograph_media");
        const mediaSectionLgth = document.querySelector(".containerLgth");

        Array.from(medias.medias).forEach((media) => {
            const mediaModel = mediaFactory(media);
            let mediaDisplay ;
            let mediaDisplayLgth;

            if(media.image){
                mediaDisplay = mediaModel.getMediaImage();
                mediaDisplayLgth = mediaModel.getLightBoxImage();
            }
            else{
                mediaDisplay = mediaModel.getMediaVideo();
                mediaDisplayLgth = mediaModel.getLightBoxVideo();
            }

            mediaSection.append(mediaDisplay);
            mediaSectionLgth.append(mediaDisplayLgth);
        });
    }

    //Fonction asynchrone permettant d'afficher le nom du photographe dans la modale de contact
    async function displayNameModal(photographer) {
        const photographNameSection = document.querySelector("#contact_modal");
        const photographModel = photographerFactory(photographer.photograph);
        const user = photographModel.modalNamePhotograph();
    
        photographNameSection.appendChild(user); 
    }

    //Fonction asynchrone permettant d'afficher le total des likes dans l'encart
    async function likeCount(likes){
        const displaySumLike = document.querySelector('.encart');
        const div = document.createElement('div');
        const sumOfLike = document.createElement('p');
        const i = document.createElement('i');

        sumOfLike.setAttribute("class", "totalLikes");
        i.setAttribute("class", "fa-solid fa-heart");

        var total = likes.medias.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);
        sumOfLike.textContent = total;

        div.append(sumOfLike, i);
        displaySumLike.appendChild(div)
    }

    //Fonction asynchrone permettant d'effectuer le trie des médias selon la popularité, les dates, ou encore l'ordre alphabétique
    async function trieMedia(trier){
        const options = document.querySelectorAll(".options");
        
        Array.from(options).forEach(option =>{
            option.addEventListener("click", () =>{
                const mediaContain = document.querySelector(".photograph_media");
                mediaContain.innerHTML = ""; 

                if(option.dataset.value == "popularité"){
                    trier.medias.sort((a, b) => b.likes - a.likes);
                    displayMedia(trier); 
                }
                if(option.dataset.value == "date"){  
                    trier.medias.sort((a,b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
                    displayMedia(trier);
                }
                if(option.dataset.value == "titre"){
                    trier.medias.sort((a,b)=> a.title.localeCompare(b.title));
                    displayMedia(trier);
                }     
            })
        })
    }
       
    //Fonction asynchrone permettant l'initialisation des fonctions
    async function initPhotograph() {
        const photographers = await getPhotograph();
        const medias = await getPhotograph();
        const photographer = await getPhotograph();
        const likes = await getPhotograph();
        const trier = await getPhotograph();
        window.sessionStorage.setItem('liked', JSON.stringify([]));
        
        displayPhotograph(photographers);
        displayMedia(medias);
        displayNameModal(photographer);
        likeCount(likes);
        trieMedia(trier); 
    }
    
    initPhotograph();
