import React from 'react'
import { IoFilter } from 'react-icons/io5'
import avatar from '../assets/avatar.jpg'
import { BsEmojiSmile } from 'react-icons/bs'
import { CiHashtag, CiImageOn } from 'react-icons/ci'
import { CgLink } from 'react-icons/cg'
import { RiLiveLine } from 'react-icons/ri'
import { GoMention } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io'
function WhatOnYourMind() {
  return (
    <>
      <div className='bg-white xl:p-3 lg:p-2 xl:mt-5 lg:mt-2 rounded-xl border-2'>
        <div className='flex items-center border-b-2 gap-2 p-2'>

          <div className='h-10 w-10 rounded-full'>
            <img className='rounded-full' src={avatar} alt="" />
          </div>
          <div className='flex bg-bgPink font-robo items-center rounded-lg h-10 gap-2 px-2 w-[680px]'>
            <span className='bg-inherit w-full'>
              <input type="text" placeholder="What's On your Mind?" className='bg-inherit w-full outline-none' />
            </span>
            <span className='h-4 w-4 '>
              <BsEmojiSmile />
            </span>
            {/* <IoFilter className='h-5 w-5 text-[#808080]' /> */}
          </div>
          <div className='text-bgBlue flex justify-center items-center p-3 bg-bglightBlue w-32 rounded-lg text-center'>
            <span>Share Post</span>
          </div>
        </div>
        <div className='flex justify-between items-center'>

        <div className="options flex gap-4 p-3">
          <div className="image flex gap-2 items-center">
            <CiImageOn className='h-6 w-6 text-bgBlue' />
            <span className='capitalize lg:text-sm'>Image/video</span>
          </div>
          <div className="attachment flex gap-2 items-center">
            <CgLink className='h-6 w-6 text-orange-400' />
            <span className='capitalize lg:text-sm'>Attachment</span>
          </div>
          <div className="live flex gap-2 items-center">
            <RiLiveLine className='h- w-6 text-red-500' />
            <span className='capitalize lg:text-sm'>Live</span>
          </div>
          <div className="hashtag flex gap-2 items-center">
            <CiHashtag className='h-6 w-6 text-green-500' />
            <span className='capitalize lg:text-sm'>Hashtag</span>
          </div>
          <div className="mention flex gap-2 items-center">
            <GoMention className='h-5 w-5'/>
            <span className='capitalize lg:text-sm'>mention</span>
          </div>
          </div>
          <div className="public capitalize flex items-center gap-1">
            <span className='capitalize text-sm'>public</span> 
            <IoIosArrowDown className='xl:h-4 xl:w-4 lg:w-3 lg:h-3 font-medium'/>
          </div>
        </div>
      </div>

    </>
  )
}

export default WhatOnYourMind