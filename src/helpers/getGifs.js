


export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=DnqvBN1vBla426KKGgeA6zliXcxCaDKU`; // Meto category porque sino no lo estaria usando y a su vez para que me aparezcan gifs del input introducido. El encondeURI es para que me saque los espacios y me introduzca porcentajes.
    const resp = await fetch( url );
    const { data } = await resp.json(); // estamos evaluando si la respuesta (resp.ok) se hizo correctamente, es decir, tendriamos la data sino tenemos un error. Se evalua esos casos. ".json()" es un info en formato json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // el ? esta para preguntar que si vienen las images las utilice
        }
    })
    
    return gifs;
}