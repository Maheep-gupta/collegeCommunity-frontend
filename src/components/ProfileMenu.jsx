import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileMenu = ({ isOpen }) => {
    if (isOpen) {
        document.addEventListener('click', () => {
            isOpen = false;
        })
    }
  return (
    <div className={`absolute right-2 z-20 w-52 top-[70px] py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
      {/* Profile Info (Optional) */}
      {/* <NavLink to="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
        <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={userData.profileUrl} alt={userData.name} />
        <div className="mx-1">
          <h1 className="text-sm font-semibold text-gray-700">{userData.name}</h1>
          <p className="text-sm text-gray-500">{userData.username}</p>
        </div>
      </NavLink> */}

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        view profile
      </NavLink>

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Settings
      </NavLink>

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Keyboard shortcuts
      </NavLink>

      <hr className="border-gray-200 dark:border-gray-700" />

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Company profile
      </NavLink>

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Team
      </NavLink>

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Invite colleagues
      </NavLink>

      <hr className="border-gray-200 dark:border-gray-700" />

      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration=200 transform hover:bg-gray=100">
        Help
      </NavLink>
      
      <NavLink to="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration=200 transform hover:bg-gray=100">
        Sign Out
      </NavLink>
    </div>
  );
};

export default ProfileMenu;