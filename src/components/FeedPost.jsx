import React from 'react'
import avatar from './../assets/storyAvatar.jpg'
import post1 from '../assets/post1.png'
import { FaRegComment } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import { GoBookmark } from 'react-icons/go'
function FeedPost() {
    return (
        <div className='bg-white p-5 xl:mt-5 lg:mt-2 rounded-xl border-2'>
            <div className="userInfo font-pop">
                <div className='flex gap-2 items-center'>
                    <div className='h-10 w-10 rounded-full'>
                        <img className='rounded-full' src={avatar} alt="" />
                    </div>
                    <div className='font-[500] font-pop text-md flex flex-col'>
                        <span className='capitalize'>Izuku midoriya</span>
                        <span className='flex text-sm gap-[2px] font-light'>
                            <small className='capitalize'>23 aug</small>
                            <small className='capitalize'>@</small>
                            <small className='capitalize'>4:12 PM</small>
                        </span>
                    </div>

                </div>
            </div>
            <div className="postArea xl:py-5 lg:py-2  rounded-xl">
                <img className='rounded-xl' src={post1} alt="post" />
            </div>
            <div className="post-footer p-3 flex justify-between items-center border-t-2">
                <div className="reactions flex justify-between w-1/2">
                    <span className='flex gap-1 items-center'><svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                        <span>30</span>
                        <span>Like</span>
                    </span>
                    <span className='flex gap-1 items-center'>
                        <FaRegComment className='h-4 w-4'/> 
                        <span>10</span>
                        <span>Comment</span>
                    </span>
                    <span className='flex gap-1 items-center'>
                        <RiShareForwardLine className='h-4 w-4'/> 
                        <span>2</span>
                        <span>Share</span>
                    </span>
                </div>
                <div className="bookMark">
                    <GoBookmark  className='h-5 w-5'/> 
                </div>
            </div>
        </div>
    )
}

export default FeedPost