import React from 'react'
import './header.css';
import EmailIcon from '@mui/icons-material/Email';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CustomModal from './Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const Header = () => {
  const [isWhatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);

  const closeWhatsappModal = () => {
    setWhatsappModalOpen(false);
  };
  const openWhatsappModal = () => {
    setWhatsappModalOpen(true);
  };
  const closeEmailModal = () => {
    setEmailModalOpen(false);
  };
  const openEmailModal = () => {
    setEmailModalOpen(true);
  };
  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };
  return (
    <div className='header'>
<div className='logo-box'>

<Link to = "/home"><img className='logo' src='\images\logo.jpg' width={140} height={130} alt='x' /></Link>
</div>
<div className='navbar'>
   <Link style={{ textDecoration: 'none' }} to="/home" ><span>Home</span></Link> 
   <Link style={{ textDecoration: 'none' }} to="/gallery"> <span>Galleries</span></Link>
   <Link style={{ textDecoration: 'none' }}  to="/service">
    <span>Service</span></Link>
   
  
   
</div>
<div className='contact-links'>
<span  onClick={openWhatsappModal} style={{color:"darkblue"}}><WhatsAppIcon className='iconx'  style={{fontSize:'40px'}}/></span>
<span onClick={openContactModal} style={{color:"darkblue"}}><LocalPhoneIcon className='iconx' style={{fontSize:'40px'}}/></span>
<span onClick={openEmailModal}  style={{color:"darkblue"}}><EmailIcon className='iconx' style={{fontSize:'40px'}}/></span>
<CustomModal isOpen={isWhatsappModalOpen} onClose={closeWhatsappModal}>
<div className='items_items'>
    
    <span style={{marginTop:'200px'}}>Lets Chat</span>
    <span style={{marginTop:'200px'}} ><a href=" https://api.whatsapp.com/message/4ORC7WDNPSU4N1?autoload=1&app_absent=0" target='blank' ><WhatsAppIcon style={{color:"darkblue",fontSize:'70px'}}/></a>
    
</span>

 </div>
      </CustomModal>
      <CustomModal isOpen={isContactModalOpen} onClose={closeContactModal}>

      <div className='items_items contat-item'>
   
 
   <div className='contacts-emailphone'>
   <span><LocalPhoneIcon style={{color:"darkblue",fontSize:'50px',position:'relative',top:'8px'}}/> </span>
   <span> 076 9979 410 / 072 419 3202</span>

   </div>
  
</div>
   
    
      </CustomModal>
      <CustomModal isOpen={isEmailModalOpen} onClose={closeEmailModal}>

      <div className='items_items contat-item'>
   
 
   <div className='contacts-emailphone'>
  
<span> <EmailIcon style={{color:"darkblue",fontSize:'50px',position:'relative',top:'8px'}}/></span><span>raveledelight@gmail.com</span> 

   </div>
  
</div>
   
    
      </CustomModal>


</div>

    </div>
  )
}
