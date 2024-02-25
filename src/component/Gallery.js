import React from 'react'
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
export const Gallery = () => {
    const images = [
        {
          original: process.env.PUBLIC_URL + "/images/ccccccccc.jpg",
      
        },
        {
            original: process.env.PUBLIC_URL + "/images/cccccccccccc.jpg",
         
        },
        {
          original: process.env.PUBLIC_URL + "/images/p3.jpg",
       
        },
        {
            original: process.env.PUBLIC_URL + "/images/p4.jpg",
           
          },
          {
            original: process.env.PUBLIC_URL + "/images/p5.jpg",
           
          },
          {
            original: process.env.PUBLIC_URL + "/images/p6.jpg",
           
          },
          {
            original: process.env.PUBLIC_URL + "/images/p7.jpg",
           
          },

      ];
  return (
    <div className='gallery' style={{height:'100vh',backgroundColor:'peru'}}>
 <ImageGallery items={images} />

    </div>
   
  )
}
