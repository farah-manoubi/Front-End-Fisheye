
    async function getPhotograph() {  
        const id = new URL(location.href).searchParams.get("id");
        console.log(id)
        const result = await fetch(`photographer.html?id=${id}`);

        return await result.json();
    }

    async function getPhotographProfil() {
        
        const photograph = await getPhotograph();
        console.log(photograph);
        
    }

    getPhotographProfil();
