import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({ defaultCategories = [] }) => { // el defaultCategories me sirve para las pruebas para poder mandar un arreglo de categorias y realizar las respectivas pruebas.

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     // setcategories([...categories, 'HunterXHunter']);
    //     setcategories( cats => [...cats, 'HunterXHunter']);
    // }

    // Comunicacion entre componente: setCategories lo estamos enviando como una prop a AddCategory, mandando la referencia de setCategories
    // el key es para que tenga un id unico
    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />


            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        /> 
                    ))
                }
            </ol>
        </>

    );
}