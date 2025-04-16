import React, { useState } from 'react';

import ProfileMenu from './ProfileMenu/ProfileMenu';
import userData from '../utils/userDetails';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function LoggedUserNav() {
  const [openProfilemenu, setOpenProfilemenu] = useState(false);
  
  const handleMenu = () => {
    setOpenProfilemenu(!openProfilemenu);
  };

  return (
    <>
      <div onClick={handleMenu} className='flex gap-2 items-center cursor-pointer'>
        <div className='h-10 w-10 rounded-full hover:border-2 hover:border-black'>
          <img className='rounded-full' src={userData.profileUrl} alt={userData.name} />
        </div>
      </div>

      <ProfileMenu isOpen={openProfilemenu} />
    </>
  );
}

export default LoggedUserNav;