import React from 'react';
import avatar from '../../assets/avatarforFriends.avif';

const Friend = ({ name, status, activityLevel }) => {
  const getStatusColor = (level) => {
    switch (level) {
      case 'online': return 'bg-green-500';
      case 'idle': return 'bg-yellow-400';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-md transition-all'>
      <div className='relative'>
        <img
          src={avatar}
          alt='avatar'
          className='h-9 w-9 rounded-full object-cover'
        />
        <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white ${getStatusColor(activityLevel)}`}></span>
      </div>
      <div>
        <div className='text-sm font-medium truncate'>{name}</div>
        <div className='text-xs text-gray-500 truncate'>{status}</div>
      </div>
    </div>
  );
};

export default Friend;
