import React from 'react'
import avatar from '../assets/avatar.jpg'
function LoggedUserNav() {
  return (
    <div className='flex gap-2 items-center'>
      <div className='h-10 w-10 rounded-full'>
        <img className='rounded-full' src={avatar} alt="" />
      </div>
      <div className='font-[500] font-mont text-md flex items-center'>
        <span>Jakob Botosh</span>
        <span className='h-4 w-4 inline pl-2'><svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></span>

      </div>
      
    </div>
  )
}

export default LoggedUserNav