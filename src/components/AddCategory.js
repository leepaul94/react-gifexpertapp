import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => { // Ponemos entre llaves la funcion pasada setCategories desestructurandolo de props porque sino tenemos que escribir props.setCatgories para utilizarlo
    
    const [inputValue, setInputValue] = useState(''); // Para no tener problemas cuando ingrese valores en el submit y que a su vez no me aparezca nada escrito

    const handleInputChange = ( e ) => { // e: "evento"
        //console.log(e.target.value);
        setInputValue( e.target.value ); //
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); // 

        if( inputValue.trim().length > 2 ) { //
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
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