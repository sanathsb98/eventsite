import React from 'react';
import '../styles/Gallery.css';
import Image1 from '../assets/gallery-img-1.png';
import Image2 from '../assets/gallery-img-2.png'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='gallery-header-box'>
            <div className='gallery-heading'>Gallery (4)</div>
            <div className='gallery-view-all'>View all</div>
        </div>
        <div className='gallery-contents'>
            <div className='gallery-image-1'>
                <div className='image-container'>
                <img className='gallery-img' src={Image1} alt='gallery-image'/>
                </div>
            </div>
            <div className='gallery-image-1'>
            <div className='image-container'>
                <img className='gallery-img' src={Image2} alt='gallery-image'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Gallery