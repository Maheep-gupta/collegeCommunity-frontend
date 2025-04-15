import React, { useState } from 'react';
import avatar from '../../assets/storyAvatar.jpg';

function UserStory({ imageUrl, name }) {
  const [showStory, setShowStory] = useState(false);

  return (
    <>
      {/* Story Card */}
      <div
        onClick={() => setShowStory(true)}
        className="user-Story flex-shrink-0 w-32 h-52 rounded-xl overflow-hidden relative cursor-pointer group"
      >
        <img
          src={imageUrl}
          alt="story"
          className="w-full h-full object-cover transition duration-200 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition duration-200"></div>
        <div className="absolute top-2 left-2 h-10 w-10 rounded-full border-4 border-white">
          <img
            src={avatar}
            alt="user"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold truncate">
          {name}
        </div>
      </div>

      {/* Modal for Story View */}
      {showStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative w-[400px] h-[600px] bg-black rounded-lg overflow-hidden shadow-lg">
            <img
              src={imageUrl}
              alt="full-story"
              className="w-full h-full object-cover"
            />

            {/* Close button */}
            <button
              onClick={() => setShowStory(false)}
              className="absolute top-3 right-3 bg-white rounded-full p-1 hover:bg-gray-200 transition"
            >
              ❌
            </button>

            {/* Bottom Info */}
            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black via-transparent text-white">
              <div className="flex items-center gap-2">
                <img src={avatar} alt="" className="h-10 w-10 rounded-full border-2 border-white" />
                <div>
                  <div className="font-semibold">{name}</div>
                  <div className="text-sm text-gray-300">Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserStory;
