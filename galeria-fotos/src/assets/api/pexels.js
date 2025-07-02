const API_KEY ="bRECmYCt2hIc9aLE8awjf1XrYlPxv1bB0gVstwEs6uhVOEAswaXBfws9"
export async function fetchImages(searchTerm="mountains") {
    try{
        let res= await fetch(
            `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=24`,
            {
                headers:{
                    Authorization: API_KEY
                }
            }
        );
        const data = await res.json();
        return data.photos;
    } catch (error){
        console.error("error al obtener imagenes de pexels:", error);
        return[];
    }
    
    
}