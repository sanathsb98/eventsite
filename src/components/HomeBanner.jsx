import React from 'react';
import '../styles/HomeBanner.css';
import BannerImage from '../assets/banner.png'
import EventType from './EventType';
import About from './About';
import Gallery from './Gallery';
import ArtistProfile from './ArtistProfile';

const HomeBanner = () => {
  return (
    <>
    <div className='home-banner'>
    <div className='banner-overlay'>
      <img className='banner-image' alt='banner-image' />
      {/* <img className='banner-image' src={BannerImage} alt='banner-image' />  */}
    </div>
    <div className='event-profile'>
      <div className='profile-image'>image</div>
        <div className='profile-name'>Inde Ganga by SONY LIV</div>
        <div className='profile-date-location'>
          <div className='profile-icon-text'>
            <div><svg className='calender-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1.66602 10C1.66602 6.85734 1.66602 5.286 2.64233 4.30968C3.61864 3.33337 5.18999 3.33337 8.33268 3.33337H11.666C14.8087 3.33337 16.3801 3.33337 17.3564 4.30968C18.3327 5.286 18.3327 6.85734 18.3327 10V11.6667C18.3327 14.8094 18.3327 16.3808 17.3564 17.3571C16.3801 18.3334 14.8087 18.3334 11.666 18.3334H8.33268C5.18999 18.3334 3.61864 18.3334 2.64233 17.3571C1.66602 16.3808 1.66602 14.8094 1.66602 11.6667V10Z" stroke="white" stroke-width="1.5" />
              <path d="M5.83398 3.33337V2.08337" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M14.166 3.33337V2.08337" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M2.08398 7.5H17.9173" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <path d="M15.0007 14.1667C15.0007 14.6269 14.6276 15 14.1673 15C13.7071 15 13.334 14.6269 13.334 14.1667C13.334 13.7064 13.7071 13.3333 14.1673 13.3333C14.6276 13.3333 15.0007 13.7064 15.0007 14.1667Z" fill="white" />
              <path d="M15.0007 10.8333C15.0007 11.2936 14.6276 11.6667 14.1673 11.6667C13.7071 11.6667 13.334 11.2936 13.334 10.8333C13.334 10.3731 13.7071 10 14.1673 10C14.6276 10 15.0007 10.3731 15.0007 10.8333Z" fill="white" />
              <path d="M10.8327 14.1667C10.8327 14.6269 10.4596 15 9.99935 15C9.53911 15 9.16602 14.6269 9.16602 14.1667C9.16602 13.7064 9.53911 13.3333 9.99935 13.3333C10.4596 13.3333 10.8327 13.7064 10.8327 14.1667Z" fill="white" />
              <path d="M10.8327 10.8333C10.8327 11.2936 10.4596 11.6667 9.99935 11.6667C9.53911 11.6667 9.16602 11.2936 9.16602 10.8333C9.16602 10.3731 9.53911 10 9.99935 10C10.4596 10 10.8327 10.3731 10.8327 10.8333Z" fill="white" />
              <path d="M6.66667 14.1667C6.66667 14.6269 6.29357 15 5.83333 15C5.3731 15 5 14.6269 5 14.1667C5 13.7064 5.3731 13.3333 5.83333 13.3333C6.29357 13.3333 6.66667 13.7064 6.66667 14.1667Z" fill="white" />
              <path d="M6.66667 10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333C5 10.3731 5.3731 10 5.83333 10C6.29357 10 6.66667 10.3731 6.66667 10.8333Z" fill="white" />
            </svg>
            
            </div>
            <div className='profile-date'>Saturday, 11 Of November 2023</div>
          </div>

          <div className='profile-icon-text'>
            <div>
              <svg className='location-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.33398 8.4527C3.33398 4.70486 6.31875 1.66663 10.0007 1.66663C13.6825 1.66663 16.6673 4.70486 16.6673 8.4527C16.6673 12.1712 14.5395 16.5103 11.2198 18.062C10.4459 18.4237 9.55544 18.4237 8.78154 18.062C5.46175 16.5103 3.33398 12.1712 3.33398 8.4527Z" stroke="white" stroke-width="1.5" />
                <circle cx="10" cy="8.33337" r="2.5" stroke="white" stroke-width="1.5" />
              </svg>
            </div>
            <div className='profile-location'> Greenfield Stadium, Texas</div>
          </div>

        </div>
      </div>
    </div>
    
    <div>
      <EventType/>
    </div>

      <div className='about-gallery'>
        <div className='about-section'>
          <About />
        </div>
        <div className='gallery-section'>
          <Gallery />
        </div>
      </div>

      <div className='artist-and-teams'>
        <div className='artist-title-and-info'>
          <div className='artist-or-teams'>Artist/Teams</div>
          <div className='artist-info'>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_6363_2570)">
                <circle cx="8.00065" cy="7.99992" r="6.66667" stroke="#027A48" stroke-width="1.5" />
                <path d="M8 11.3333V7.33325" stroke="#027A48" stroke-width="1.5" stroke-linecap="round" />
                <circle cx="0.666667" cy="0.666667" r="0.666667" transform="matrix(1 0 0 -1 7.33398 6)" fill="#027A48" />
              </g>
              <defs>
                <clipPath id="clip0_6363_2570">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg></div>
          <div className='info-content'>As it is a fundraising event you can select any of your favorites from the list and buy tickets as a support to them.</div>
        </div>
       </div>

       <div  className='artist-profile-container'>
       <ArtistProfile/>
       <ArtistProfile/>
       <ArtistProfile/>
       <ArtistProfile/>
       <ArtistProfile/>
      
    
        
    
     

        </div>

      </div>
    </>
  )
}

export default HomeBanner