import React, { useEffect, useState } from 'react'

const localCache = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        isLoading: true,
        hasError: false,
        error: null,
        data: null
    });


    useEffect(()=>{

        getFetch();

    }, [url]);


    const setLoadingState = () => {
        setState({
            isLoading: true,
            hasError: false,
            error: null,
            data: null
        });
    }


    const getFetch = async () => {

        if(localCache[url]){
            console.log("Usamos caché")
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });

            return;
        }

        setLoadingState();
        const response = await fetch(url);

        if(!response.ok){

            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error:{
                    code: response.status,
                    message: response.statusText
                }
            })

            return;
        }

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        //Añadir a la cache
        localCache[url] = data;

    };


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
