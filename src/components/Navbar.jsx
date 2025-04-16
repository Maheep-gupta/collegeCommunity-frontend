import React, { useContext, useState } from 'react'
import LoggedUserNav from './LoggedUserNav'
import logo from './../assets/cc-logo.png'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import NotificationDrawer from './notification/NotificationDrawer'
import { GoBookmark } from 'react-icons/go'
import { motion } from "motion/react"
import { BiQrScan } from 'react-icons/bi'
import QrModal from '../components/QR/QrModal'
import userContext from '../context/UserContext'
function Navbar({ isCourses }) {
    const { isAdmin } = useContext(userContext)
    const path = window.location.pathname;
    console.log(path)
    const isEvents = path.includes('/events');
    const isFeed = path.includes('/feed');

    const [newNotification, setNewNotification] = useState(false)
    const [qrVisible, setQrVisible] = useState(false)
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
                    <div className='flex font-robo border items-center w-[50%] rounded-xl gap-2 px-2'>
                        <span className='h-4 w-4 '>
                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill='#808080' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </span>
                        <span className='bg-inherit w-full'>
                            <input type="text" placeholder='Search' className='bg-inherit w-full outline-none' />
                        </span>
                    </div>
                </div>
                <div className='flex gap-2 pr-10 items-center'>
                    {
                        isCourses ?
                            <motion.div className='flex gap-x-2 items-center '>
                                <span className='text-sm font-mont hover:bg-gray-200 p-2 pl-3 rounded-md font-semibold w-28 hover:cursor-pointer'>My learning</span>
                                <div title='Favorites' className='hover:cursor-pointer hover:bg-gray-200 bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
                                    <GoBookmark className='h-5 w-5' />
                                </div>
                            </motion.div> : null
                    }
                    {
                        isEvents && isAdmin ?
                            <div className='w-52 '>
                                <button
                                    className="middle flex gap-x-2 items-center none center mr-4 rounded-lg bg-bgBlue py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    {/* <IoAdd size={20} /> */}
                                    <span className='text-xs font-pop'>Create Event</span>
                                </button>
                            </div> : null
                    }
                    {
                        isFeed && isAdmin ?
                            <div className='w-52 '>
                                <button
                                    className="middle flex gap-x-2 items-center none center mr-4 rounded-lg bg-bgBlue py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    {/* <IoAdd size={20} /> */}
                                    <span className='font-pop'>View Dashboard</span>
                                </button>
                            </div> : null
                    }
                    <div title='Notifications' className='hover:cursor-pointer bg-bgPink hover:bg-gray-200 h-10 w-10 rounded-lg border-2 flex justify-center items-center' onClick={handleNotificationDrawer}>


                        {bellState ?
                            <VscBellDot className='h-5 w-5' /> : <VscBell className='h-5 w-5' />}

                    </div>
                    <div title='Notifications' className='hover:cursor-pointer bg-bgPink hover:bg-gray-200 h-10 w-10 rounded-lg border-2 flex justify-center items-center' onClick={() => setQrVisible(true)}>
                        <BiQrScan className='h-5 w-5' />
                    </div>
                    {
                        qrVisible ? <QrModal value={{
                            name: 'Jakob Botosh',
                            username: '@jakob123',
                            profileUrl: 'https://res.cloudinary.com/dedumcwij/image/upload/v1727785842/avatar_bgsfao.jpg',
                            followers: '285',
                            following: '200',
                            posts: '80'
                        }} onClose={() => setQrVisible(false)} /> : null
                    }

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