import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faBookOpen, faHistory } from "@fortawesome/free-solid-svg-icons";
import MessageAi from "./MessageAi";
import { Outlet } from 'react-router-dom';

function ChatWithAI() {

  return (
    <div className="flex bg-white h-screen text-black font-pop">
      {/* Sidebar */}
      <aside className="w-64 p-4 h-full text-black border-r border-gray-300 shadow-sm flex flex-col justify-between">
        <div> 
          <h1 className="text-2xl font-bold mb-6">ChatWithAI</h1>
        <nav className="space-y-4">
          <NavItem icon={faHome} label="Home" />
          <NavItem icon={faCompass} label="Discover" />
          <NavItem icon={faBookOpen} label="Library" />
          <NavItem icon={faHistory} label="History" />
        </nav>
        </div>
        
      </aside>

      <main className="w-full">
      <Outlet/>
      </main>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 p-2 hover:shadow-lg hover:rounded-md hover:scale-105 text-black cursor-pointer">
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </div>
  );
}


export default ChatWithAI