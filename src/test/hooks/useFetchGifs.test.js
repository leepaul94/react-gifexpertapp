import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';



describe('Pruebas en useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' )); // renderHook() Crea un componente virtual y coloca el custom hooks. Se llama una funcion y dentro de dicha funcion ejecutar el custom hook.
        const { data, loading } = result.current;
        // const {data, loading} = useFetchGifs( 'One Punch' );
        // console.log(data, loading);

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );

    });
    
    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' )); // renderHook() Crea un componente virtual y coloca el custom hooks. Se llama una funcion y dentro de dicha funcion ejecutar el custom hook.
        await waitForNextUpdate();

        const { data, loading } = result.current;
        
        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    });
    


})
