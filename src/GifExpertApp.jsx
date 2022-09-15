import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // Archivos de Barril


export const GifExpertApp = () => {

    const [ categories , setCategories ] = useState( ['One Puch'] );

    const onAddCategory = ( newCategory ) =>{

            for ( const category of categories ) {
                if( category.toLowerCase() === newCategory.toLowerCase() ) return;
            }
            setCategories([ newCategory, ...categories ]);
        }

    return (
        <>
            <h1>GifExpertApp</h1>
        
            <AddCategory
                onNewCategory={ onAddCategory } />

            {
                categories.map( category => ( 
                    < GifGrid
                        key={ category }
                        category={ category } /> 
                ))
            }



        </>
    )
};