import React from 'react';
import '../styles/AdBanner.css';
import AdPic from '../assets/ad-banner.png'

const AdBanner = () => {
  return (
    <div className='ad-banner'>
      <img className='ad-image' src={AdPic} alt='ad-banner'/>
    </div>
  )
}

export default AdBanner