import React, { useState } from "react";
import PostViewModal from "./PostViewModal";

const ProfileFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      userAvatar: "https://ui-avatars.com/api/?name=Maheep+Gupta",
      username: "Maheep Gupta",
      userId: "2103820100026",
      content: "Final year project done! 🚀",
      image: "https://images.unsplash.com/photo-1623697899817-2e067e4a4036?q=80&w=1930&auto=format&fit=crop",
      likes: 88,
      comments: 10,
      timestamp: "3 hours ago",
    },
    {
      id: 2,
      userAvatar: "https://ui-avatars.com/api/?name=Maheep+Gupta",
      username: "Maheep Gupta",
      userId: "2103820100026",
      content: "When code finally works at 3 AM 😵‍💫",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1930&auto=format&fit=crop",
      likes: 121,
      comments: 25,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      userAvatar: "https://ui-avatars.com/api/?name=Maheep+Gupta",
      username: "Maheep Gupta",
      userId: "2103820100026",
      content: "Hackathon weekend memories 💻🔥",
      image: "https://images.unsplash.com/photo-1603575448363-4e3dc7e40f67?q=80&w=1930&auto=format&fit=crop",
      likes: 75,
      comments: 7,
      timestamp: "1 day ago",
    },
    {
      id: 4,
      userAvatar: "https://ui-avatars.com/api/?name=Maheep+Gupta",
      username: "Maheep Gupta",
      userId: "2103820100026",
      content: "College event was a blast! 🎉",
      image: "https://images.unsplash.com/photo-1564869736745-b9df3b4bd4d1?q=80&w=1930&auto=format&fit=crop",
      likes: 102,
      comments: 19,
      timestamp: "2 days ago",
    },
    {
      id: 5,
      userAvatar: "https://ui-avatars.com/api/?name=Maheep+Gupta",
      username: "Maheep Gupta",
      userId: "2103820100026",
      content: "UI design level: Pro 😎",
      image: "https://images.unsplash.com/photo-1603570429380-4ec9a5c5a90b?q=80&w=1930&auto=format&fit=crop",
      likes: 64,
      comments: 5,
      timestamp: "3 days ago",
    },
    {
      id: 6,
      userAvatar: "https://ui-avatars.com/api/?name=Maheep+Gupta",
      username: "Maheep Gupta",
      userId: "2103820100026",
      content: "Peaceful coding Sundays 🌿",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1930&auto=format&fit=crop",
      likes: 99,
      comments: 14,
      timestamp: "4 days ago",
    },
  ];
  

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <img
              src={post.image}
              className="w-full h-[300px] rounded-xl object-cover"
              alt="Post"
            />
          </div>
        ))}
      </div>

      {selectedPost && (
        <PostViewModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
};

export default ProfileFeed;
