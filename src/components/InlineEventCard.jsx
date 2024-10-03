import React from 'react'
import { RiCalendarEventLine } from 'react-icons/ri'

const InlineEventCard = ({ eventName, location, imageUrl }) => {
    return (
        <div className='flex gap-2 hover:bg-bgPink rounded-lg pl-2 py-2 items-center'>
            <div className='h-6 w-6  rounded-md'>
                {/* <RiCalendarEventLine className='h-5 w-5' /> */}
                <img className='h-6 w-6 rounded-md' src={imageUrl} alt="user avatar" />
            </div>
            <div className='font-pop font-medium capitalize '>
                <span className='block '>

                    {eventName}
                </span>
                <small className='font-light capitalize'>{location != "" ? location : null}</small>
            </div>

        </div>
    )
}

export default InlineEventCard