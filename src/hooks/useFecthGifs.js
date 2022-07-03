import React from 'react'
import { useState,useEffect } from 'react'
import { getgif } from '../helpers/getgif'

export const useFecthGifs = (category) => {

    const [images, setImages] = useState([])
    const [loading,setLoading] = useState(true)

    const getImages= async()=> {
      const newImages = await getgif(category);
      setImages(newImages);
      setLoading(false);
    }
  
  
    useEffect(() => {
      getImages();
    }, [ ])
    
 return{
    images,
    loading
 }
}
