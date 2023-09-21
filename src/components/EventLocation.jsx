import React from 'react';
import '../styles/EventLocation.css'

const EventLocation = () => {
  return (
    <div className='event-location'>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M3.33398 8.4527C3.33398 4.70486 6.31875 1.66663 10.0007 1.66663C13.6825 1.66663 16.6673 4.70486 16.6673 8.4527C16.6673 12.1712 14.5395 16.5103 11.2198 18.062C10.4459 18.4237 9.55544 18.4237 8.78154 18.062C5.46175 16.5103 3.33398 12.1712 3.33398 8.4527Z" stroke="#667085" stroke-width="1.5"/>
<circle cx="10" cy="8.33337" r="2.5" stroke="#667085" stroke-width="1.5"/>
</svg></div>
<div className='location-text'>Texas, Austin</div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.6673 6L8.00065 10L3.33398 6" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
    </div>
  )
}

export default EventLocation