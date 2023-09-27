import React from 'react';
import '../styles/AdBanner.css';
import AdPic from '../assets/artist-1.png'

const AdBanner = () => {
  return (
    <div className='ad-banner'>
      {/* Ad Banner  */}
      <img className='ad-image' src={AdPic} alt='ad-banner'/>
    </div>
  )
}

export default AdBanner