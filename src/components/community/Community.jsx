import { Link } from "react-router-dom";
import { useState } from "react";

const communities = [
  { id: 1, name: "Web Development", description: "Discuss frontend & backend technologies.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
  { id: 2, name: "App Development", description: "Share knowledge on mobile app development.", image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=400" },
  { id: 3, name: "Football", description: "Talk about matches, players, and strategies.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
  { id: 4, name: "Cricket", description: "Discuss cricket leagues, teams, and tips.", image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=400" },
  { id: 5, name: "Java", description: "Discuss Java questions, teams, and tips.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Join a Community</h1>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {communities.map((community) => (
          <div key={community.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={community.image} alt={community.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{community.name}</h2>
            <p className="text-gray-600 my-2">{community.description}</p>
            <Link to={`/community/${community.id}`}>
              <button className="w-full mt-2 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                Join
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
