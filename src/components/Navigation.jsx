import React from 'react'
import { BsCameraVideo } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { RiHome3Line, RiPagesLine } from 'react-icons/ri'
import { TbMessageChatbot } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import DisplayCommunityCard from './DisplayCommunityCard'
import data from '../utils/communityData'

function Navigation() {
    return (
        <>
            <div className='bg-white p-3 rounded-xl  border-2 font-robo max-h-[80%] flex flex-col gap-2 mt-2'>
                <NavLink
                    to="/feed"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black hover:bg-gray-200') + ' flex xl:gap-3 lg:gap-1 xl:p-2 lg:p-1 rounded-lg items-center '}
                >
                    <span className='xl:h-6 xl:w-6 lg:h-4 lg:w-4'>

                        <RiHome3Line className='xl:h-6 xl:w-6 lg:h-4 lg:w-4' />
                    </span>
                    <span className='xl:text-md lg:text-sm'>Feed</span>
                </NavLink>
                <NavLink
                    to="/friends"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black hover:bg-gray-200') + ' flex xl:gap-3 lg:gap-1 xl:p-2 lg:p-1 rounded-lg items-center '}
                >
                    <FaUserGroup className='xl:h-6 xl:w-6 lg:h-4 lg:w-4' />
                    <span className='xl:text-md lg:text-sm'>Friends</span>
                </NavLink>
                <NavLink
                    to="/events"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black hover:bg-gray-200') + ' flex xl:gap-3 lg:gap-1 xl:p-2 lg:p-1 rounded-lg items-center '}
                >
                    <FaRegCalendarAlt className='xl:h-6 xl:w-6 lg:h-4 lg:w-4' />
                    <span className='xl:text-md lg:text-sm'>Event</span>
                </NavLink>
                <NavLink
                    to="/courses"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black hover:bg-gray-200') + ' flex xl:gap-3 lg:gap-1 xl:p-2 lg:p-1 rounded-lg items-center '}
                >
                    <BsCameraVideo className='xl:h-6 xl:w-6 lg:h-4 lg:w-4' />
                    <span className='xl:text-md lg:text-sm'>Courses</span>
                </NavLink>
                <NavLink
                    to="/community"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black hover:bg-gray-200') + ' flex xl:gap-3 lg:gap-1 xl:p-2 lg:p-1 rounded-lg items-center '}
                >
                    <RiPagesLine className='xl:h-6 xl:w-6 lg:h-4 lg:w-4' />
                    <span className='xl:text-md lg:text-sm'>Community</span>
                </NavLink>
                <NavLink
                    to="/cai"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black hover:bg-gray-200') + ' flex xl:gap-3 lg:gap-1 xl:p-2 lg:p-1 rounded-lg items-center '}
                >
                    <TbMessageChatbot className='xl:h-6 xl:w-6 lg:h-4 lg:w-4' />
                    <span className='xl:text-md lg:text-sm'>C-Ai</span>
                </NavLink>
                <hr />
                <div className='overflow-y-auto max-h-[50%] hide-scrollbar'>
                    <span className='font-light uppercase xl:text-md lg:text-xs'>Communties You may Like</span>
                    <div className='flex flex-col gap-1 mt-2'>
                        {data.map((ele) =>
                            <NavLink to={ele.url}>

                                <DisplayCommunityCard communityName={ele.communityName} avatar={ele.avatar} />
                            </NavLink>

                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navigation