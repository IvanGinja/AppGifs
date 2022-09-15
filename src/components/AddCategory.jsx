import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }
    const onSubmit = ( event ) => {

        event.preventDefault()
        
        const inputValueClear = inputValue.trim();

        if( inputValueClear.length < 1 ) return;

        onNewCategory( inputValueClear )

        setInputValue('');

    };

    return (
        <form onSubmit={  onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
       
    );
};