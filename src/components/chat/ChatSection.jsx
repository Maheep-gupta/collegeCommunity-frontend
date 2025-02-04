import React from 'react'
import ChattingScreen from './ChattingScreen'
import { IoArrowBack } from 'react-icons/io5'
import Friend from '../Friend'
import friends from '../../utils/friends'
import avatar from '../../assets/avatarforFriends.avif'

const ChatSection = () => {
    return (
        <main className=' '>
            <div class="flex h-screen antialiased text-gray-800">
                <div class="flex flex-row h-full w-full overflow-x-hidden overflow-hidden">
                    <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                        <div class="flex flex-row items-center justify- h-12 w-full">
                            <div
                                class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
                            onClick={() => window.history.back()}
                            >
                                <IoArrowBack size={22} className='h-8' />
                            </div>
                            <div class="ml-4 font-bold text-2xl ">Messages</div>
                        </div>


                        {/* <UserCard /> */}



                        <div class="flex flex-col mt-8">
                            <div class="flex flex-row items-center justify-between text-xs">
                                <span class="font-bold">Your Conversations</span>
                                <span
                                    class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                                >4</span
                                >
                            </div>


                            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-4/5 overflow-y-auto">

                                <div className='py-4'>
                                    {friends.map((ele) => <Friend friendName={ele.friendsName} avatar={avatar} onlineStatus={true} />)}
                                </div>
                            </div>



                        </div>
                    </div>
                    <ChattingScreen />
                </div>
            </div>
        </main>
    )
}

export default ChatSection
