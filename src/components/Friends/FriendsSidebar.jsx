import React, { useState } from 'react';
import friends from '../../utils/friends';
import Friend from './Friend';

const FriendsSidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFriends = friends.filter(friend =>
    friend.friendsName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeFriends = filteredFriends.filter(friend => friend.isActive);
  const recentFriends = filteredFriends.filter(friend => !friend.isActive);

  return (
    <div className=' p-4 rounded-xl border flex flex-col h-screen font-pop w-full shadow-sm'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-[16px] font-semibold'>Friends</h2>
      </div>

      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search friends'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full px-3 py-1.5 text-sm border rounded-lg outline-none bg-gray-100 focus:ring-1 focus:ring-blue-400 mb-3'
      />

      {/* Active Friends */}
      {activeFriends.length > 0 && (
        <div className='mb-3 max-h-[50%] overflow-y-auto hide-scrollbar'>
          <div className='text-xs text-gray-500 uppercase mb-1 pl-1'>Active Friends</div>
          <div className='space-y-2 max-h-1/2 overflow-y-auto hide-scrollbar'>
            {activeFriends.map((friend, idx) => (
              <Friend
                key={idx}
                name={friend.friendsName}
                status={friend.status}
                activityLevel={friend.activityLevel}
              />
            ))}
          </div>
        </div>
      )}

      {/* Recently Interacted */}
      {recentFriends.length > 0 && (
        <div className='overflow-y-auto mb-3 max-h-[50%] hide-scrollbar'>
          <div className='text-xs text-gray-500 uppercase mb-1 pl-1'>Recently Interacted</div>
          <div className='space-y-2  overflow-y-auto hide-scrollbar'>
            {recentFriends.map((friend, idx) => (
              <Friend
                key={idx}
                name={friend.friendsName}
                status={friend.status}
                activityLevel={friend.activityLevel}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendsSidebar;
