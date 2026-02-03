import { useEffect,useState } from "react";

// import { getGifs } from "../helpers/getGifs";
import { GifIten } from "./GifIten";
import { useFetchGifs } from "../hooks/useFetchGifs";






export const GifGrid = ( { category } ) => {

  const {  images, isLoading } = useFetchGifs( category );

  console.log( { isLoading });

  return (
    <>
        
        <h3>{ category}</h3>
        {
          isLoading && ( <j2>Is Loading</j2>)
        }
        
        <div className="card-grid">
          {
            images.map( (image) => (
              <GifIten key={image.id}  
              { ...image}
    
              
              />
            ))
          }
        </div>
    </>
  )
}
