import React from 'react';
import MessageAi from "./MessageAi";
import { Link, Outlet } from 'react-router-dom';
import { FaBookOpen, FaCompass, FaHistory, FaHome } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

function ChatWithAI() {

  return (
    <div className="flex bg-white h-screen text-black font-pop">
      {/* Sidebar */}
      <aside className="w-64 p-4 h-full text-black border-r border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex flex-row items-center mb-5 justify- h-12 w-full ">
            <Link to='/'
              class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"

            >
              <IoArrowBack size={22} className='h-8' />
            </Link>
            <div class="ml-4 font-bold text-2xl ">ChatWithAI</div>
          </div>
          <nav className="space-y-5">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 h-12 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">
              <FaHome size={25} />
              <span className='text-lg'>Home</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 h-12 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">
              <FaCompass size={25} />
              <span className='text-lg'>Discover</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 h-12 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">

              <FaBookOpen size={25} />
              <span className='text-lg'>Library</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-200 h-12 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">

              <FaHistory size={25} />
              <span className='text-lg'>History</span>
            </div>

          </nav>
        </div>

      </aside>

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}



export default ChatWithAI