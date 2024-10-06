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
            <div className='bg-white p-3 rounded-xl  border-2 font-robo flex flex-col gap-2 mt-5 '>
                <NavLink
                    to="/feed"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black') + ' flex gap-3 p-2 rounded-lg'}
                >
                    <span className='h-6 w-6'>

                        <RiHome3Line className='h-6 w-6' />
                    </span>
                    {/* <span className='h-6 w-6'><svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></span> */}
                    <span className='text-md'>Feed</span>
                </NavLink>
                <NavLink
                    to="/friends"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black') + ' flex gap-3 p-2 rounded-lg'}
                >
                    <FaUserGroup className='h-6 w-6' />
                    <span className='text-md'>Friends</span>
                </NavLink>
                <NavLink
                    to="/event"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black') + ' flex gap-3 p-2 rounded-lg'}
                >
                    <FaRegCalendarAlt className='h-6 w-6' />
                    {/* <span className='h-6 w-6'><svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></span> */}
                    <span className='text-md'>Event</span>
                </NavLink>
                <NavLink
                    to="/videos"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black') + ' flex gap-3 p-2 rounded-lg'}
                >
                    <BsCameraVideo className='h-6 w-6' />
                    {/* <span className='h-6 w-6'><svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></span> */}
                    <span className='text-md'>Watch Videos</span>
                </NavLink>
                <NavLink
                    to="/community"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black') + ' flex gap-3 p-2 rounded-lg'}
                >
                    <RiPagesLine className='h-6 w-6' />
                    {/* <span className='h-6 w-6'><svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></span> */}
                    <span className='text-md'>Community</span>
                </NavLink>
                <NavLink
                    to="/cai"
                    className={({ isActive }) => (isActive ? 'bg-bgBlue text-white' : 'text-black') + ' flex gap-3 p-2 rounded-lg'}
                >
                    <TbMessageChatbot className='h-6 w-6' />
                    {/* <span className='h-6 w-6'><svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg></span> */}
                    <span className='text-md'>C-Ai</span>
                </NavLink>
                <hr />
                <div>
                    <span className='font-light uppercase text-md'>Communties You may Like</span>
                    <div className='flex flex-col gap-3 mt-2'>
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