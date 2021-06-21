import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            title: 'Cualquier Cosa',
            url: 'https://localhost/cualquier/cosa.jpg'
        }];


        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false); // para saber si existe el parrafo de "cargando" lo cual no deberia por eso esperamos que sea igual a false. Agregamos este expect porque con tan solo el snapshot no es suficiente dado que se puede actulizar el snapshot sin saber realmente si dicho parrafo esta o no.
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ); // estamos evaluando que el largo de mi objeto (la cantidad de atributos) sea la misma a mi variable gifs
        // ahora tenemos una prueba mucho mas precisa con los ultimos dos expects.
    })
    

})
