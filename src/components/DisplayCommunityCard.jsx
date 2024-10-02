import React from 'react'

const DisplayCommunityCard = ({communityName,avatar}) => {
    return (
        <>
            <div className='flex gap-2 items-center'>
                <div  className='h-6 w-6'>
                    <img className='h-6 w-g rounded-md' src={avatar} alt="community avatar" />
                </div>
                <div className='font-robo font-medium'>
                    {communityName}
                </div>
            </div>
        </>
  )
}

export default DisplayCommunityCard