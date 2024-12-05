import React from 'react';
import avatar from '../assets/avatar.jpg';
import { IoMdAdd } from 'react-icons/io';
import UserStory from './UserStory';
import friends from '../utils/friends';

function StorySection() {
    return (
        <div className=' overflow-auto border-2 rounded-xl bg-white'> {/* Added padding to the container */}
            <div className=' flex gap-2 xl:pt-5 lg:pt-2  pb-7 pl-4   justify-between rounded-lg overflow-x-auto hide-scrollbar whitespace-nowrap'>
                <div className='flex gap-5'>
                    <div className='your-story flex-shrink-0 w-24 h-24'>
                        <div className='border-2 p-1 rounded-full relative'>
                            <img className="w-full h-full rounded-full" src={avatar} alt="Your Avatar" />
                            <span className={`top-16 left-16 absolute h-6 w-6 rounded-full flex justify-center items-center bg-bgBlue text-white border-2 border-white`}>
                                <IoMdAdd className='h-full w-full' />
                            </span>
                        </div>
                        <div className='text-sm text-center'>Your Story</div>
                    </div>
                    
                    {/* User Stories */}
                    <div className='flex gap-5'>
                        {friends.map((ele, i) => (
                            <UserStory
                                imageUrl={ele.imageUrl || avatar}
                                key={i}
                                name={ele.friendsName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StorySection;