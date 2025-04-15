import React from 'react';

import NotificationItem from './NotificationItem';
import notificationData from '../../utils/notification';




const Notifications = ({ isOpen }) => {
  return (
    <div className={`absolute top-[82px] border right-3 max-w-[350px] w-full z-50 p-4 bg-white shadow-lg rounded-xl overflow-y-auto 
        transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
      <div className="space-y-2">
        {notificationData.map((notif) => (
          <NotificationItem key={notif.id} notification={notif} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
