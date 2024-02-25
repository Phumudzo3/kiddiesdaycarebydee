import React from 'react'
import './contact.css';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BusinessIcon from '@mui/icons-material/Business';
import MapRedirect from './Mapredirect';
export const Contact = () => {

  return (
    <div className='contact-box'>
      <div className='contact-info'>
      <div className='bus-cont-box'>
      < span><LocalPhoneIcon style={{color:" darkblue"}}/> 076 997 9410 / 072 419 3202</span>
<span> <MailIcon style={{color:" darkblue"}}/>raveledelight@gmail.com</span>

      </div>
      <div className='direction-box'>
<MapRedirect/>
<span><BusinessIcon style={{color:" darkblue"}}/>Stand no 77 ,Tshilindi,Tshimbupfe</span>
      </div>
      </div>
   

<div className='bus-hours'>
  <div className='c1'>
  <span>Mon:</span><span>6:00 AM – 5:00 PM</span>
  </div>
  <div className='c1'>
  <span>Tues:</span><span>6:00 AM – 5:00 PM</span>
    </div>
    <div className='c1'>
    <span>Wed:</span><span>6:00 AM – 5:00 PM</span>
    </div>
    <div className='c1'>
    <span>Thur:</span><span>6:00 AM – 5:00 PM</span>
    </div>
    <div className='c1'>
    <span>Fri:</span><span>6:00 AM – 4:00 PM</span>
    </div>
    <div className='c1'>
    <span>During School holiday:</span><span>We are open</span>
    </div>
  
</div>


    </div>
  )
}
