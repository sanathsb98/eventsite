import React, { useState } from 'react';
import '../styles/Navbar.css';
import EventLogo from '../assets/event-logo.png';
import SearchBar from './SearchBar';
import EventLocation from './EventLocation';

const Navbar = () => {

  const [navbarExpanded, setNavbarExpanded] = useState(false)

  //toggle navbar on click:

  const toggleNavbar = () => {
    setNavbarExpanded(!navbarExpanded)
  }


  return (
    <div className={`navbar`}>
      <div className={`mobile-view-navbar ${navbarExpanded ? 'expanded':''}`}>
        <div onClick={()=>{toggleNavbar()}} className='mobile-navbar-close'>
          <div>{navbarExpanded ? 'X':''}</div>
        </div>
      </div>

      <div className='navitems-container'>

        <div className='logo-search-box'>
          <div className='event-logo'><img src={EventLogo} alt='event-logo' /></div>
          <div className='search-bar'>
         <div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_6356_1830)">
                    <circle cx="9.58268" cy="9.58329" r="7.91667" stroke="#667085" stroke-width="1.5" />
                    <path d="M15.416 15.4166L18.3327 18.3333" stroke="#667085" stroke-width="1.5" stroke-linecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_6356_1830">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg></div>
      <input className='search-input-field' type='text' placeholder='Search events, sports, plays etc..'/>
          </div>
        </div>

        <div className='empty-space'></div>
        <div className='list-your-event'>List your event</div>
        <div className='offers'>Offers</div>
        <div className='help-center '>
          <div>Help Center</div>
          <div className='arrow-down'>    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.6673 6L8.00065 10L3.33398 6"  stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg></div>
        </div>
        <div className='comp'><EventLocation /></div>
        <div className='login-button'><div>Login</div></div>
        <div onClick={()=>{toggleNavbar()}} className='navbar-more-btn'>More</div>

      </div>

    </div>
  )
}

export default Navbar