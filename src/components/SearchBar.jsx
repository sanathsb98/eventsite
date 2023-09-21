import React from 'react';
import '../styles/SearchBar.css'

const SearchBar = () => {
    return (
        <div className='search-bar'>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_6356_1830)">
                    <circle cx="9.58268" cy="9.58329" r="7.91667" stroke="#667085" stroke-width="1.5" />
                    <path d="M15.416 15.4166L18.3327 18.3333" stroke="#667085" stroke-width="1.5" stroke-linecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_6356_1830">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <input className='search-input-field' type='text' placeholder='Search events, sports, plays etc..'/>

        </div>
    )
}

export default SearchBar