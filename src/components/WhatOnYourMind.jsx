import React from 'react'
import avatar from '../assets/avatar.jpg'
import { CiImageOn } from 'react-icons/ci'
import { BsEmojiSmile } from 'react-icons/bs'
import { RiLiveLine } from 'react-icons/ri'

function WhatOnYourMind() {
  return (
    <div className="bg-white rounded-xl shadow-sm border px-4 py-3 w-full">
      {/* Top Row */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt="User Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="bg-gray-100 rounded-full border w-full px-4 py-2 outline-none text-sm hover:bg-gray-200 cursor-pointer transition"
        />
      </div>

      <hr />

      {/* Action Buttons */}
      <div className="flex justify-between pt-3">
        <div className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg cursor-pointer">
          <RiLiveLine className="text-red-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Live Video</span>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg cursor-pointer">
          <CiImageOn className="text-green-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Photo/Video</span>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg cursor-pointer">
          <BsEmojiSmile className="text-yellow-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Feeling/Activity</span>
        </div>
      </div>
    </div>
  )
}

export default WhatOnYourMind
