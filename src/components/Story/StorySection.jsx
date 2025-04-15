import React from 'react';
import avatar from '../../assets/avatar.jpg';
import UserStory from './UserStory';
import friends from '../../utils/friends';
import YourStory from './YourStory';

function StorySection() {
    return (
        <div className=' overflow-auto border-2 rounded-xl bg-white pr-4'> {/* Added padding to the container */}
            <div className=' flex gap-2 xl:pt-5 lg:pt-2  pb-7 pl-4   justify-between rounded-lg overflow-x-auto hide-scrollbar whitespace-nowrap'>
                <div className='flex gap-5'>
                    <YourStory/>
                    
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