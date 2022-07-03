import React from 'react'
import { getgif } from '../helpers/getgif';
import { useState,useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFecthGifs } from '../hooks/useFecthGifs';

export const GifGrid = ({category}) => {

  const {images,loading} =useFecthGifs(category);

  return (
    <>  
            <h3>{category}</h3>
            {
              loading&&(<h2>Cargando....</h2>)
            }
            <div className='card-grid'>
              { 
                images.map((image) =>(
                      <GifItem key={image.id}
                               { ...image }
                      />
                  ))
              }
              
            </div>

          
            

    </>
  )
}

