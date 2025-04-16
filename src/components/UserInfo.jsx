import React from 'react'
import userData from '../utils/userDetails'
import { Link } from 'react-router-dom'

function UserInfo() {
    return (
        <>
            <Link to={'/profile/@mido'} className="about-user  xl:mb-0 lg:mb-0 ">
                <div className='hover:bg-gray-100 hover:border-gray-200 p-3 rounded-xl border-2'>
                    <div className='rounded-lg p-4 '>
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

            </Link>




        </>

    )
}

export default UserInfo