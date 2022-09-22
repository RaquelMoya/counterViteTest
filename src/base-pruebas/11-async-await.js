

export const getImagen = async() => {

    try {

        const apiKey = 'ANIxlRJO4iBqdI7Wp1pASPK7pycOQyNl';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No existe';
    }
    
}

 getImagen();



