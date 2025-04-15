import React from "react";
import { FaTimes, FaHeart, FaRegComment } from "react-icons/fa";

const PostViewModal = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-5xl h-[90%] flex rounded-lg overflow-hidden shadow-xl">
        {/* Left side: Post Image */}
        <div className="flex-1 bg-black flex items-center justify-center">
          <img
            src={post.image}
            alt="Post"
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Right side: Post Details */}
        <div className="w-[400px] flex flex-col relative p-4">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          >
            <FaTimes />
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={post.userAvatar}
              className="w-10 h-10 rounded-full"
              alt="User Avatar"
            />
            <div>
              <h2 className="font-semibold">{post.username}</h2>
              <p className="text-xs text-gray-500">@{post.userId}</p>
            </div>
          </div>

          {/* Caption */}
          <p className="text-sm mb-4">{post.content}</p>

          {/* Likes & Comments */}
          <div className="flex gap-6 items-center text-gray-700 text-sm mb-4">
            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
              <FaHeart /> <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
              <FaRegComment /> <span>{post.comments}</span>
            </div>
          </div>

          {/* Timestamp */}
          <p className="text-xs text-gray-400">{post.timestamp}</p>

          {/* Comment Box (if needed) */}
          <div className="mt-auto border-t pt-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full border rounded-md px-3 py-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostViewModal;
