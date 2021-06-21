import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCatgory />', () => {
    
    const setCategories = jest.fn(); // jest nos ofrece una funcion para realizar pruebas. jest.fn() es un funcion, pero se puede saber como fue llamada, si fue llamada, cuantas veces, etc

    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>); // aca tmb lo pongo porque asi puedo dps en los test hacer .find

    beforeEach( () => {
        jest.clearAllMocks(); // jest.clearAllMocks() es para que toda simulacion de algo se limpie. El beforeEach es para que se haga algo antes de cada testeo por ejemplo que se reinicie o se limpie algo.
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });


    test('debe de mostrarse correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo'; // lo que le mando a la caja de texto

        input.simulate('change', {
            target : {
                value: value
            }
        }); // el evento va a tener internamente algo llamado target que es un objeto. Dentro del objeto va a tener la propiedad value.


    })
    
    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // le mando al evento la funcion de preventDefault que en vez de espresarlo como () => {}, la manera corta es (){}. Es un simple metodo que estamos mandando dentro del objeto

        expect( setCategories ).not.toHaveBeenCalled(); // no se tiene que haber llamado la funcion setCategories
        expect( setCategories ).not.toHaveBeenCalledTimes(1); // que la funcion setCategories se haya llamado 1 vez
        expect( setCategories ).not.toHaveBeenCalledWith( expect.any(Function) ); // que lo que se llame sea alguna funcion
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        // 1. simular el inputChange
        // 2. simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. el valor del input debe de estar ''
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe( '' );
    })

    
    

})
