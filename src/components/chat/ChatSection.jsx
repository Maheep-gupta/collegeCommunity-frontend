import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, Outlet, useParams } from 'react-router-dom';
import friends from '../../utils/friends';
import avatar from '../../assets/avatarforFriends.avif';
import ChatFriend from './ChatFriends';
import { FaFacebookMessenger } from 'react-icons/fa';

const ChatSection = () => {
    const { id } = useParams();

    return (
        <main className='font-pop'>
            <div className="flex h-screen antialiased text-gray-800">
                <div className="flex flex-row h-full w-full overflow-x-hidden overflow-hidden">

                    {/* Left Sidebar */}
                    <div className="flex flex-col py-8 w-64 bg-white flex-shrink-0 border-r shadow-2xl">
                        <div className="flex flex-row items-center px-5 h-12 w-full">
                            <Link
                                to="/"
                                className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
                            >
                                <IoArrowBack size={22} className="h-8" />
                            </Link>
                            <div className="ml-4 font-bold text-2xl">Messages</div>
                        </div>

                        <div className="flex-1 flex-col mt-8 p-2">
                            <div className="flex flex-row items-center px-2 justify-between text-xs">
                                <span className="font-bold">Your Conversations</span>
                                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                                    {friends.length}
                                </span>
                            </div>

                            <div className="flex flex-col space-y-1 mt-4 h-4/5 overflow-y-auto hide-scrollbar">
                                <div className="py-4">
                                    {friends.map((ele, i) => (
                                        <Link
                                            key={i}
                                            to={`/friends/chat/${i}`}
                                            className="py-1 border-b hover:bg-gray-200 hover:shadow-xl flex justify-between rounded-xl items-center pr-2"
                                        >
                                            <ChatFriend
                                                friendName={ele.friendsName}
                                                avatar={avatar}
                                                onlineStatus={true}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="flex-1 bg-gray-100">
                        {id ? (
                            <Outlet />
                        ) : (
                            <div className="flex flex-col justify-center items-center gap-y-2 h-full text-xl">
                                <span><FaFacebookMessenger size={50} /></span>
                                    <span className='text-2xl font-bold '>Your Messages</span>
                                    <p className='text-sm text-gray-400'>
                                    Send private photos and messages to a friend or group.
                                    </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ChatSection;
