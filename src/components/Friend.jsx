import React from 'react'
const Friend = ({ avatar, friendName,onlineStatus }) => {
  return (
    <div className='flex gap-2 items-center hover:bg-bgPink rounded-lg pl-2 py-2'>
      <div className='h-9 w-9 rounded-full'>
        <div class="relative">
          <img class="w-10 h-10 rounded-full" src={avatar} alt=""/>
            <span class={`top-8 left-6 absolute w-2 h-2  rounded-full ${onlineStatus?'bg-green-400':'bg-red-400'}`}></span>
        </div>
        {/* <img className='h-full w-full rounded-full' src={avatar} alt="user avatar" /> */}
      </div>
      <div className='font-pop font-medium capitalize'>
        {friendName}
      </div>
    </div>
  )
}

export default Friend