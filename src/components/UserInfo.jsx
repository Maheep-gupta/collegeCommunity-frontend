import React from 'react'
import userData from '../utils/userDetails'

function UserInfo() {
    return (
        <>
            <div className="about-user xl:mb-7 lg:mb-3 ">
                <div className='bg-white p-3 rounded-xl border-2'>
                    <div className='bg-bgPink rounded-lg p-4 '>
                        <div className="about-user mb-7 ">
                            <div className='flex gap-2 items-center'>
                                <div className='h-10 w-10 rounded-full'>
                                    <img className='rounded-full' src={userData.profileUrl} alt="" />
                                </div>
                                <div className='font-[500] font-mont lg:text-sm xl:text-md flex flex-col'>
                                    <span>{userData.name}</span>
                                    <small>{userData.username}</small>
                                </div>

                            </div>
                        </div>
                        <div className="userStats flex justify-between xl:gap-4 lg:gap-2">
                            <div className="followers">
                                <div className='font-[500] font-mont lg:text-sm xl:text-md flex flex-col items-center'>
                                    <span className='lg:text-sm'>{userData.followers}</span>
                                    <small>Followers</small>
                                </div>
                            </div>
                            <div className="Following">
                                <div className='font-[500] font-mont lg:text-sm xl:text-md flex flex-col items-center'>
                                    <span className='lg:text-sm'>{userData.following}</span>
                                    <small>Following</small>
                                </div>
                            </div>
                            <div className="post">
                                <div className='font-[500] font-mont text-md flex flex-col items-center'>
                                    <span className='lg:text-sm'>{userData.posts}</span>
                                    <small>Posts</small>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>




        </>

    )
}

export default UserInfo