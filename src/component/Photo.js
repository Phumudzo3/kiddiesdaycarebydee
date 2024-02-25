import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './x.css';
export const PhotoApp = () => {
  const images = [
    "/images/cccccccc.jpg",
    "/images/cccccccccccc.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
    "/images/p6.jpg",
    "/images/p7.jpg",
    "/images/cccccccccccccc.jpg"
  ]
  return (
    <Slide>
    <div className="each-slide-effect"  >
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
          
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
         
        </div>
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            
        </div>
        
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[3]})` }}>
       
        </div>
        
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[4]})` }}>
           
        </div>
        
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[5]})` }}>
          
        </div>
        
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[6]})` }}>
          
        </div>
        
    </div>
    <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[7]})` }}>
           
        </div>
        
    </div>
   
</Slide>
  )
}
