import React from 'react'
import MessageAi from './MessageAi'

function SearchHere() {
  return (
    <div className='flex w-full flex-col h-full p-10 items-center justify-center'>
        <h2 className="text-3xl font-bold text-center mb-6">
          What do you want to know?
        </h2>
        
        <MessageAi/>
      
    </div>
  )
}

export default SearchHere
