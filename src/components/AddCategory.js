import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => { // Ponemos entre llaves la funcion pasada setCategories desestructurandolo de props porque sino tenemos que escribir props.setCatgories para utilizarlo
    
    const [inputValue, setInputValue] = useState(''); // Para no tener problemas cuando ingrese valores en el submit y que a su vez no me aparezca nada escrito

    const handleInputChange = ( e ) => { // e: "evento"
        //console.log(e.target.value);
        setInputValue( e.target.value ); //e.target.value es donde se guarda lo que ingresa el usuario que lo termina guardando en inputValue
    }

    const handleSubmit = ( e ) => { // con esta funcion al apretar enter se me dispara la accion que quiero que se realice
        e.preventDefault(); // Como por defecto el formulario del <form></form> es que se haga el posteo del formulario y a su vez un refresh completo de la pagina. Como no quiero que eso suceda, uso e.preventDefault() del evento.

        if( inputValue.trim().length > 2 ) { // Aca se esta viendo si el string sin espacios es mayor a 2 asi no modifica nada si ingresamos nada y tocamos enter.
            setCategories( cats => [ inputValue, ...cats ] ); // se esta recibiendo un arreglo que es cats que viene de la componente GifExpertApp
            setInputValue(''); // para que no se haga un doble posteo.
        }

        //console.log('Submit hecho');
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}