import React from 'react';
import MessageAi from "./MessageAi";
import { Outlet } from 'react-router-dom';
import { FaBookOpen, FaCompass, FaHistory, FaHome } from 'react-icons/fa';

function ChatWithAI() {

  return (
    <div className="flex bg-white h-screen text-black font-pop">
      {/* Sidebar */}
      <aside className="w-64 p-4 h-full text-black border-r border-gray-300 shadow-sm flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">ChatWithAI</h1>
          <nav className="space-y-4">
            <div className="flex items-center gap-2 p-2 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">
              <FaHome size={25} />
              <span className='text-lg'>Home</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">
              <FaCompass size={25} />
              <span className='text-lg'>Discover</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">

              <FaBookOpen size={25} />
              <span className='text-lg'>Library</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">

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