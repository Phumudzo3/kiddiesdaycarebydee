import React from 'react'
import './banner.css';
export const Banner = () => {
  return (
    <div className='banner' style={{ 
      backgroundImage: `url('../images/p2.jpg')` ,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div className='banner-ds' >
<span>Kiddies Planet day care </span>
<span>
Welcome to KIDDIES PLANET DAYCARE, where children shine bright! Our nurturing environment fosters growth and learning. With a play-based curriculum, we inspire curiosity and creativity, nurturing each child's development. Safety is paramount; our facility boasts state-of-the-art security, and our staff is trained in first aid. We prioritize open communication, fostering strong partnerships with families. Thank you for considering KIDDIES PLANET DAYCARE. Explore our programs on our website, and reach out to schedule a tour. We look forward to meeting you and your little one! </span>     
<div className='overlay'></div>
    </div>
    
    </div>
  )
}
