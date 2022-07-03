import { useState } from "react";



export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState()

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  }

  const onSubmit= (event) =>{
    event.preventDefault();
    if(inputValue.trim().length<=1) return;

    /* setCategories(categories => [...categories,inputValue]) */
    onNewCategory(inputValue.trim());
    setinputValue('');

  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>

        <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue || ''}
        onChange={onInputChange}
         />


    </form>
  )
}
