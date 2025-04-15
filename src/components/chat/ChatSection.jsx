import React from 'react'
import { IoArrowBack } from 'react-icons/io5'

import friends from '../../utils/friends'
import avatar from '../../assets/avatarforFriends.avif'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import ChatFriend from './ChatFriends'


const ChatSection = () => {
    return (
        <main className=' '>
            <div class="flex h-screen antialiased text-gray-800">
                <div class="flex flex-row h-full w-full overflow-x-hidden overflow-hidden">
                    <div class="flex flex-col py-8  w-64 bg-white flex-shrink-0 border-r shadow-2xl">

                        <div class="flex flex-row items-center px-5 justify- h-12 w-full ">
                            <Link to='/'
                                class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
                                
                            >
                                <IoArrowBack size={22} className='h-8' />
                            </Link>
                            <div class="ml-4 font-bold text-2xl ">Messages</div>
                        </div>
                        <div class="flex-1 flex-col mt-8 p-2">
                            <div class="flex flex-row items-center px-2 justify-between text-xs">
                                <span class="font-bold">Your Conversations</span>
                                <span
                                    class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                                >4</span
                                >
                            </div>


                            <div class="flex flex-col space-y-1 mt-4   h-4/5 overflow-y-auto">

                                <div className='py-4'>
                                    {friends.map((ele,i) =>
                                        <Link to={`/friends/chat/${i}`} className='py-1 border-b hover:bg-gray-200 hover:shadow-xl flex justify-between rounded-xl items-center pr-2'>
                                            <ChatFriend friendName={ele.friendsName} avatar={avatar} onlineStatus={true} />
                                        </Link>
                                    )}

                                </div>
                            </div>



                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default ChatSection
