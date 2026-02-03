import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

  
  const [categories, setCategories] = useState([ 'One Punch']);
//   console.log(categories);

  const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory)) return;

        setCategories([ newCategory,...categories]);
        // setCategories( cat =>  [...cat, 'Valorant' ] );
      
  }
  
  return (

    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
        // setCategories= { setCategories}
            onNewCategory = { event => onAddCategory(event)}
         />
        {/* Listadoq de Gif */}
        
        
        {
                categories.map ( (category) => (
                <GifGrid key = {category} category = { category} />
            )) 
        }
       
           
       
        {/* Git Item */}
    </>
    
  )
}
