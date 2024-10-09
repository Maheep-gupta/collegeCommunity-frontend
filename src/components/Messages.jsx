import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { IoFilter } from 'react-icons/io5'
import avatar from './../assets/avatarforFriends.avif'
import Friend from './Friend'
import friends from '../utils/friends'
import { NavLink } from 'react-router-dom'

const Messages = () => {
    return (
        <>
            <div className='bg-white xl:p-3 lg:p-1 rounded-xl text-sm border-2 hide-scrollbar'>

                <div className='bg-white xl:p-3 lg:p-1 rounded-xl text-sm'>
                    <div className='flex justify-between pb-4'>

                        <div className='font-semibold font-pop text-[16px]'>Messages</div>
                        <FiEdit />
                    </div>
                    <div className='flex bg-bgPink mb-2 font-robo items-center rounded-lg xl:h-10 lg:h-8 gap-2 px-2'>
                        <span className='h-4 w-4 '>
                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill='#808080' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </span>
                        <span className='bg-inherit w-full'>
                            <input type="text" placeholder='Search' className='bg-inherit w-full outline-none' />
                        </span>
                        <IoFilter className='h-5 w-5 text-[#808080]' />
                    </div>
                    <div className="msg-nav flex justify-between border-b-2 items-center ">
                        <div className='flex justify-between lg:text-xs'>
                            <span className='capitalize font-semibold p-2 border-b-2 border-black cursor-pointer'>primary</span>
                            <span className='capitalize p-2 cursor-pointer'>General</span>
                        </div>
                        <div>
                            <span className='capitalize p-2 text-blue-600 cursor-pointer'>requests(4)</span>
                        </div>
                    </div>
                    <div className='py-4 '>
                        {friends.map((ele) => <Friend friendName={ele.friendsName} avatar={avatar} onlineStatus={true} />)}
                    </div>
                    <NavLink className="pl-3 font-pop text-gray-400 text-xs cursor-pointer" to="/friends">
                        View All
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Messages