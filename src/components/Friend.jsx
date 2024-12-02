import React from 'react'
const Friend = ({ avatar, friendName,onlineStatus }) => {
  return (
    <div className='flex gap-2 items-center hover:bg-bgPink rounded-lg py-2 pl-2 xl:py-2 lg:py-1'>
      <div className='xl:h-9 lg:h-7 xl:w-9 lg:w-7 rounded-full flex items-center'>
        <div class="relative">
          <img class="w-8 h-8 rounded-full" src={avatar} alt=""/>
            <span class={`xl:top-6 lg:top-3 top-6 left-6 absolute w-2 h-2  rounded-full ${onlineStatus?"bg-green-400":"bg-red-400"}`}></span>
        </div>
        {/* <img className='h-full w-full rounded-full' src={avatar} alt="user avatar" /> */}
      </div>
      <div className='font-pop font-medium capitalize text-sm'>
        {friendName}
      </div>
    </div>
  )
}

export default Friend