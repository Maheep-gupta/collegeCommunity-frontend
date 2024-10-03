import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'
import InlineEventCard from './InlineEventCard'
import events from '../utils/event'

const Events = () => {
    return (
        <>
            <div className='bg-white p-3 w-[255px] rounded-xl text-sm  mt-5'>
                <div className='flex justify-between pb-4 border-b-2'>
                    <div className='font-semibold font-pop text-[16px]'>Events</div>
                    <CiMenuKebab />
                </div>
                <div>
                    {events.map((ele,i) =>
                        <InlineEventCard eventName={ele.eventName } key={i} location={ele.location} imageUrl={ele.eventImageUrl}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Events