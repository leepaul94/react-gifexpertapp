import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { // Me permite ejecutar cierto codigo de manera condicional

        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                })
                
            } )

    }, [ category ]); // una lista de dependencia el cual react va a ejecutar nuevamente el useEffect solo si dicha lista sufre algun cambio, es por eso que decimos que el useEffect se ejecuta de manera condicional.

    return state; // { data: [], loading: state}
    


}