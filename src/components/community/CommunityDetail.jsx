import { useParams } from "react-router-dom";

const communities = [
  { id: 1, name: "Web Development", description: "Discuss frontend & backend technologies.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
  { id: 2, name: "App Development", description: "Share knowledge on mobile app development.", image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=400" },
  { id: 3, name: "Football", description: "Talk about matches, players, and strategies.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
  { id: 4, name: "Cricket", description: "Discuss cricket leagues, teams, and tips.", image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=400" },
  { id: 5, name: "Java", description: "Discuss Java questions, teams, and tips.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
];

export default function CommunityDetail() {
  const { id } = useParams();
  const community = communities.find((c) => c.id === parseInt(id));

  if (!community) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">Community Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{community.name}</h1>
      <img src={community.image} alt={community.name} className="w-96 h-60 object-cover rounded-lg shadow-md" />
      <p className="text-gray-600 my-4 max-w-2xl text-center">{community.description}</p>
      <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Start Discussion
      </button>
    </div>
  );
}
