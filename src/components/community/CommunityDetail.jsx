import { useParams } from "react-router-dom";

import communities from '../../utils/communities'
import { useState } from "react";
import CommunityAbout from "./CommunityAbout";
import CommunityMembers from "./CommunityMembers";
import CommunityPosts from "./CommunityPosts";

export default function CommunityDetail() {
  const { id } = useParams();
  const [communitypageOptions, setCommunitypageOptions] = useState('posts');


  const community = communities.find((c) => c.id === parseInt(id));

  if (!community) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">Community Not Found</h1>;
  }


  return (
    <div className="w-full p-5 pt-0 font-pop">
      <div className="w-full h-72 rounded-lg bg-cover bg-no-repeat" style={{ backgroundImage: `url(${community.image})` }}>
        {/* <img className="w-full h-64  " src={community.image} alt="community Image" /> */}
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <img src={community.image} alt="community logo" className="w-28 h-28 rounded-full border-4 border-white -mt-10 ml-5" />
          <div>
            <h1 className="text-2xl font-semibold pl-5 pt-5">{community.title}</h1>
            <small className="pl-5 text-gray-600 font-semibold text-lg">{community.members} Members</small>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="text-sm border h-12 w-40 bg-bgBlue text-white rounded-lg px-2 py-1 hover:bg-[#3873b6] hover:scale-105  transition duration-200 ease-in-out">
            Start Chatting
          </button>
        </div>
      </div>
      <div className="w-full mt-5 flex gap-x-3">
        <span className={`${communitypageOptions === 'posts' ? 'text-bgBlue border-b-[3px] rounded-t-md border-bgBlue' : 'rounded-md'} p-3 hover:bg-gray-200 cursor-pointer`} onClick={() => setCommunitypageOptions('posts')}>Posts</span>
        <span className={`${communitypageOptions === 'about' ? 'text-bgBlue border-b-[3px] rounded-t-md border-bgBlue' : 'rounded-md'} p-3 hover:bg-gray-200 cursor-pointer`} onClick={() => setCommunitypageOptions('about')}>About</span>
        <span className={`${communitypageOptions === 'members' ? 'text-bgBlue border-b-[3px] rounded-t-md border-bgBlue' : 'rounded-md'} p-3 hover:bg-gray-200  cursor-pointer`} onClick={() => setCommunitypageOptions('members')}>Members</span>

      </div>
      {
        communitypageOptions === 'posts' ? <CommunityPosts /> : communitypageOptions === 'members' ? <CommunityMembers /> : communitypageOptions === 'about' ? <CommunityAbout /> : null


      }
    </div>
  );
}
