import React from 'react'
import userData from '../utils/userDetails'

function UserInfo() {
    return (
        <>
            <div className='bg-white p-3 rounded-xl w-fit border-2 '>
                <div className='bg-bgPink rounded-lg p-4 '>
                    <div className="about-user mb-7 ">
                        <div className='flex gap-2 items-center'>
                            <div className='h-10 w-10 rounded-full'>
                                <img className='rounded-full' src={userData.profileUrl} alt="" />
                            </div>
                            <div className='font-[500] font-mont text-md flex flex-col'>
                                <span>{userData.name}</span>
                                <small>{userData.username}</small>
                            </div>

                        </div>
                    </div>
                    <div className="userStats flex justify-between gap-4">
                        <div className="followers">
                            <div className='font-[500] font-mont text-md flex flex-col items-center'>
                                <span>{userData.followers}</span>
                                <small>Followers</small>
                            </div>
                        </div>
                        <div className="Following">
                            <div className='font-[500] font-mont text-md flex flex-col items-center'>
                                <span>{ userData.following}</span>
                                <small>Following</small>
                            </div>
                        </div>
                        <div className="post">
                            <div className='font-[500] font-mont text-md flex flex-col items-center'>
                                <span>{userData.posts}</span>
                                <small>Posts</small>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </>

    )
}

export default UserInfo