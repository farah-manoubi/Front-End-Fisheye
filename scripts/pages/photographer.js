
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

    async function displayPhotograph(photographers) {
        const photographSection = document.querySelector(".photograph-header"); 
        const photographerModel = photographerFactory(photographers.photograph);
        const photographProfil = photographerModel.getProfilPhotographer();
        
        photographSection.appendChild(photographProfil); 
    }

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
        const idLikes = likes.medias.map(item => item.id);
        const boutton = document.querySelectorAll(".buttonLike");
        console.log(boutton)
        
        var total = likes.medias.map(item => item.likes).reduce((prev, curr) => prev + curr, 0);
        

        sumOfLike.textContent = total;
        Array.from(boutton).forEach(btn =>{
             btn.addEventListener("click", (e)=>{
                sumOfLike.textContent = total++;
                console.log(total++)
            })
        })


        div.append(sumOfLike, i);
        displaySumLike.appendChild(div)
    }

    async function trieMedia(trier){
        const select = document.querySelector("select");
        const options = document.querySelectorAll(".options");
        const mediaSelected =document.getElementsByClassName("openLightbox");
        
        select.addEventListener("change", function(){
            const mediaContain = document.querySelector(".photograph_media");
            mediaContain.innerHTML = ""; 
            Array.from(options).forEach(option => {
                
                if(this.selectedIndex == 1 && option.dataset.value == "popularité"){
                        trier.medias.sort((a, b) => b.likes - a.likes);
                        displayMedia(trier); 
                }
                if(this.selectedIndex == 2 && option.dataset.value == "date"){  
                    trier.medias.sort((a,b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
                    displayMedia(trier);
                }
                if(this.selectedIndex == 3 && option.dataset.value == "titre"){
                    trier.medias.sort((a,b)=> a.title.localeCompare(b.title));
                    displayMedia(trier);
                }     
            })    
        })
    }
       
    async function initPhotograph() {
        const photographers = await getPhotograph();
        const medias = await getPhotograph();
        const photographer = await getPhotograph();

        const likes = await getPhotograph();
        const trier = await getPhotograph();
        
        displayPhotograph(photographers);
        displayMedia(medias);
        displayNameModal(photographer);
        likeCount(likes);
        trieMedia(trier);
       
    }
    
    initPhotograph();
