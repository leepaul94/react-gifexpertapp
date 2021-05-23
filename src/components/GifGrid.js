import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    
    const { data:images, loading } = useFetchGifs( category ); // cada vez que 

    // useEffect( () => {
    //     getGifs( category ) // Hace la peticion para las imagenes y luego las coloca con el .then en la varible images.
    //         .then( setImages ); // cuando se cumpla la promesa del getGifs retornando la coleccion de imagenes, las introducimos en images con setImages.
    // }, [ category ])
    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }
            
            <div className="card-grid">

                        {
                            images.map( img => ( // Con los parentesis estoy haciendo un return implicito. el img puedo deesetructurarlo. Pero como creamos el componenet GifGridItem lo dejamos como img.
                                <GifGridItem 
                                    key={ img.id }
                                    { ...img }
                                /> // <li key={ id }> { title } </li> es lo que estaba antes. 
                            ))
                        }

            </div>
        </>
    )
}
