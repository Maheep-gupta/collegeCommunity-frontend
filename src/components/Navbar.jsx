import React, { useState } from 'react'
import LoggedUserNav from './LoggedUserNav'
import logo from './../assets/cc-logo.png'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import NotificationDrawer from './notification/NotificationDrawer'
import { GoBookmark } from 'react-icons/go'
import { motion } from "motion/react"
function Navbar({ isCourses }) {
    const path = window.location.pathname;

    const [newNotification, setNewNotification] = useState(false)
    const [bellState, setBellState] = useState(false)

    const handleNotificationDrawer = () => {
        setNewNotification(!newNotification)

    }
    return (
        <>
            <nav className='flex  w-full '>
                <div className='flex w-full gap-48'
                >
                    <div className='flex gap-x-1 justify-center items-center'>
                        <img className='h-10 w-10' src={logo} alt=" cclogo" />
                        <span className='font-mont font-semibold'>College Community</span>
                    </div>
                    <div className='flex bg-bgPink font-robo border items-center w-[50%] rounded-xl gap-2 px-2'>
                        <span className='h-4 w-4 '>
                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill='#808080' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </span>
                        <span className='bg-inherit w-full'>
                            <input type="text" placeholder='Search' className='bg-inherit w-full outline-none' />
                        </span>
                    </div>
                </div>
                <div className='flex gap-2 pr-10 items-center '>
                    {
                        isCourses ?
                            <motion.div  className='flex gap-x-2 items-center '>
                                <span className='text-sm font-mont hover:bg-gray-200 p-2 pl-3 rounded-md font-semibold w-28 hover:cursor-pointer'>My learning</span>
                                <div title='Favorites' className='hover:cursor-pointer hover:bg-gray-200 bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
                                    <GoBookmark className='h-5 w-5' />
                                </div>
                            </motion.div> : null
                    }
                    <div title='Notifications' className='hover:cursor-pointer bg-bgPink hover:bg-gray-200 h-10 w-10 rounded-lg border-2 flex justify-center items-center' onClick={handleNotificationDrawer}>


                        {bellState ?
                            <VscBellDot className='h-5 w-5' /> : <VscBell className='h-5 w-5' />}

                    </div>


                </div>
                <div className=''>
                    <LoggedUserNav />
                </div>
            </nav>
            <NotificationDrawer isOpen={newNotification} />
        </>
    )
}

export default Navbar