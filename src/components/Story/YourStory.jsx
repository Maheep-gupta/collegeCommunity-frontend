import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import avatar from '../../assets/storyAvatar.jpg';

function YourStory() {
    return (
        <div className=' flex-shrink-0 w-32 h-52 rounded-xl overflow-hidden relative cursor-pointer bg-gray-100'>
            {/* Main story background */}
            <img
                src={avatar}
                alt="Your Avatar"
                className="w-full h-3/4 object-cover"
            />

            {/* '+' Button */}
            <div className="absolute  left-[45px] top-[135px] h-10 w-10 rounded-full bg-bgBlue flex items-center justify-center border-4 border-white">
                <IoMdAdd className="text-white text-xl" />
            </div>

            {/* Text */}
            <div className='absolute bottom-2 w-full text-center text-sm font-medium text-black'>
                Create Story
            </div>
        </div>
    );
}

export default YourStory;
