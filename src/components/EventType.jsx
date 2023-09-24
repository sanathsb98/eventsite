import React from 'react';
import '../styles/EventType.css';

const EventType = () => {
    return (
        <div className='event-type'>
            <div>Event Type:</div>

            <div style={{backgroundColor:'#444CE7'}} className='event-tags'>
                <div className='event-circle'></div>
                <div className='tag-type'>Music</div>
            </div>

            <div style={{backgroundColor:'#039855'}} className='event-tags'>
                <div className='event-circle'></div>
                <div className='tag-type'>Fundraising Event</div>
            </div>

            <div style={{backgroundColor:'#7A5AF8'}} className='event-tags'>
                <div className='event-circle'></div>
                <div className='tag-type'>Multiple Artists</div>
            </div>

            <div style={{backgroundColor:'#7A5AF8'}} className='event-tags'>
                <div className='event-circle'></div>
                <div className='tag-type'>Multiple Artists</div>
            </div>

              <div style={{backgroundColor:'#7A5AF8'}} className='event-tags'>
                <div className='event-circle'></div>
                <div className='tag-type'>Multiple Artists</div>
            </div>
            
        </div>
    )
}

export default EventType