import {  useEffect, useState } from "react";
import { getGifs } from "../src/helpers/getGifs";

export const useFetchGifs = ( category ) => { // Hook personalizado es una funcion que retorna algo

    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState( true );
    
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages);
        setIsloading( false );
    };
    
    useEffect( () => { // Si dejamos el segundo argumento vacio el de las dependencias solo se dispara la primera vez que se crea el componente
        getImages()
    }, []);


    return {
        images: images,
        isLoading: isLoading
    }
}
