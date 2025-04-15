import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { FaUserFriends, FaRegCommentDots } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';

const NotificationItem = ({ notification }) => {
    const notificationIcons = {
        "new like": AiFillHeart,
        "added group": FaUserFriends,
        "new comment": FaRegCommentDots,
        "added story": MdAddCircle
      };
      
      const iconColorMap = {
        "new like": "red-500",
        "added group": "green-500",
        "new comment": "indigo-600",
        "added story": "blue-500"
      };
    // Select icon and color based on notification type
    const Icon = notificationIcons[notification.type] || AiFillHeart;
    const iconColor = iconColorMap[notification.type] || "gray-500";
    return (
        <div className={`w-full p-3 bg-white border flex items-center hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-200 ease-in-out`}>
            <div className={`w-10 h-10 bg-${iconColor.split('-')[0]}-100 rounded-full flex items-center justify-center`}>
                <Icon className={`text-${iconColor} text-2xl`} />
            </div>
            <div className="pl-4 flex-1">
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-gray-800">
                        {notification.message}
                    </p>
                    {/* <AiOutlineClose className="text-gray-500 text-xs cursor-pointer hover:text-gray-700" /> */}
                </div>
                <p className="text-xs text-gray-500">{notification.timeAgo}</p>
            </div>
        </div>
    );
};
export default NotificationItem;