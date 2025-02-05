import React, { useState } from 'react';

import ProfileMenu from './ProfileMenu';
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
        <div className='h-10 w-10 rounded-full'>
          <img className='rounded-full' src={userData.profileUrl} alt={userData.name} />
        </div>
        {/* <div className='flex items-center '>
          <span className='h-4 w-4 inline pl-2 '>
            {openProfilemenu ?
              <IoIosArrowUp />:
              <IoIosArrowDown /> 
              }
          </span>
        </div> */}
      </div>

      <ProfileMenu isOpen={openProfilemenu} />
    </>
  );
}

export default LoggedUserNav;