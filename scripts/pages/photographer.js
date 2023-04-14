
    async function getPhotograph() {  
        const id = new URL(location.href).searchParams.get("id");
        console.log(id)

        const result = await fetch(`photographer.html?id=${id}`);
        console.log(result)

        return await result.json();
    }

    getPhotograph();
