import React from 'react';

const DisplayCommunityCard = ({ communityName, avatar }) => {
    return (
        <div className="flex items-center gap-x-3 hover:bg-gray-200 p-2 rounded-lg transition duration-200 cursor-pointer">
            <div className="h-8 w-8 rounded-md overflow-hidden">
                <img
                    src={avatar}
                    alt={`${communityName} avatar`}
                    className="h-full w-full object-cover rounded-md"
                />
            </div>
            <span className="font-robo text-sm font-medium text-gray-800">
                {communityName}
            </span>
        </div>
    );
};

export default DisplayCommunityCard;
