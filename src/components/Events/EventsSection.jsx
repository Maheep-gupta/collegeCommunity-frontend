import React, { useState } from 'react';
import EventCard from './EventCard';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

function EventsSection() {
  const cardData = [
    {
      date: '24',
      month: 'AUG',
      day: 'THU',
      time: '1:45 AM',
      title: 'Planning Masterclass',
      location: '28 Royal St, Vienna, New Jersey',
      attendees: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'

      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'
    },
    {
      date: '27',
      month: 'AUG',
      day: 'WED',
      time: '12:15 PM',
      title: 'Monumental Event Planning',
      location: '62 East St, Geneva, Delaware',
      attendees: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'
    },
    {
      date: '28',
      month: 'AUG',
      day: 'WED',
      time: '12:15 PM',
      title: 'Monumental Event Planning',
      location: '62 East St, Geneva, Delaware',
      attendees: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'
    },
    {
      date: '31',
      month: 'AUG',
      day: 'THU',
      time: '12:15 PM',
      title: 'Monumental Event Planning',
      location: '62 East St, Geneva, Delaware',
      attendees: [
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'
    }
  ];

  const filteredOptions = ["music & arts", "coding", "sports"]
  const [filteredOptionsState, setFilteredOptionsState] = useState("all")

  return (
    <section className=' p-5 pt-0 '>
      <div className='flex justify-between mb-3'>
        <span className='text-2xl font-mont font-semibold'>Trending Events</span>
        <div className='flex gap-2 items-center'>
          <div title='Back' className='hover:cursor-pointer bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
            <MdNavigateBefore className='h-5 w-5' />
          </div><div title='Next' className='hover:cursor-pointer bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
            <MdNavigateNext className='h-5 w-5' />
          </div>
        </div>
      </div>
      <div className="flex justify-between overflow-scroll hide-scrollbar pb-4 gap-6 ">
        {cardData.map((data, index) => (
          <EventCard key={index} {...data} />
        ))}
      </div>

      <div className='mb-2 mt-5'>
        <span className='text-2xl font-mont font-semibold '>Popular Events</span>
        <div className='flex justify-between mt-3 items-center'>

          <div className='flex gap-x-2 items-center  '>
            <span className={`border border-bgBlue capitalize  rounded-full px-3 py-1 text-center ${filteredOptionsState === 'all' ? 'bg-bgBlue text-white' : ''}`} onClick={() => setFilteredOptionsState('all')}>
              All
            </span>
            {
              filteredOptions.map((option, index) => {

                return (
                  <span key={index} className={`border border-bgBlue capitalize  rounded-full px-2 py-1 text-center ${filteredOptionsState === option ? 'bg-bgBlue text-white' : ''}`} onClick={() => setFilteredOptionsState(option)}>
                    {option}
                  </span>
                )
              })
            }

          </div>

          <div>
            <span className='text-xs font-mont font-semibold text-gray-500'>Sort by:</span>
            <select name="sorting" id="" className='capitalize outline-none t text-gray-500 font-semibold text-sm font-mont '>
              <option value="most-recent" className='capitalize'>most recent</option>
              <option value="most-recent" className='capitalize'>price: high to low</option>
              <option value="most-recent" className='capitalize'>price: low to high</option>
            </select>
          </div>
        </div>
        {/* <div className='flex gap-2 items-center'>
          <div title='Favorites' className='hover:cursor-pointer bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
            <MdNavigateBefore className='h-5 w-5' />
          </div><div title='Favorites' className='hover:cursor-pointer bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
            <MdNavigateNext className='h-5 w-5' />
          </div>
        </div> */}
      </div>
      <div className="flex justify-between flex-wrap pb-4 gap-6 ">
        {cardData.map((data, index) => (
          <EventCard key={index} {...data} />
        ))}
      </div>
    </section >
  );
}

export default EventsSection;
