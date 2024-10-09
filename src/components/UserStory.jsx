import React from 'react'
import avatar from './../assets/storyAvatar.jpg'

function UserStory({ imageUrl,name }) {
    return (
        <div className='user-Story flex-shrink-0 h-24 w-24 capitalize'>


            <div className=' border-2 p-1 rounded-full border-bgBlue  '>
                <div className="relative">
                    <img className="w-full h-full rounded-full" src={avatar} alt="" />
                    {/* <span className={`top-11 left-11 absolute h-5 w-5 rounded-full flex justify-center items-center bg-bgBlue text-white border-2 border-white`}><IoMdAdd className='h-5 w-5' /> </span> */}
                </div>
            </div>
            <div className='text-sm text-center'>{name}</div>
        </div>
    )
}

export default UserStory