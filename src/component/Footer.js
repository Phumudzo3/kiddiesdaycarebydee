import React from 'react';
import "./footer.css";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';



export const Footer = () => {
  return (
    <div className='footer'>
<div className='business-info'>
< span><LocalPhoneIcon style={{color:" darkblue"}}/> 076 997 9410 / 072 419 3202</span>
<span> <MailIcon style={{color:" darkblue"}}/>raveledelight@gmail.com</span>
<span><BusinessIcon style={{color:" darkblue"}}/>Stand no 77 ,Tshilindi,Tshimbupfe</span>
      </div>
      
      <div className='logo'>
        <span> KIDDIES PLANET DAYCARE</span>
        <span>Copyright © 2024 All rights reserved</span>
        <span className='dev-name'>Developed by Tshivhula Phumudzo(P3.dev)</span>
      </div>
      <div className='social-link'>
      
      <img className='logo-icon' src='\images\logo.jpg' width={140} height={130} alt='x' />
      </div>
        
      </div>

    
  )
}
