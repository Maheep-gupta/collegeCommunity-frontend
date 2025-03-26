import { Link } from "react-router-dom";
import { useState } from "react";
import CommunityCard from "./CommunityCard";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import SmallCommuntiyCard from "./SmallCommuntiyCard";
import communities from '../../utils/communities'

const filteredOptions = ["Development", "Design", "IT & Software", "Personal Development", "Academics"]

export default function Community() {
  const [filteredOptionsState, setFilteredOptionsState] = useState("all")
  return (
    <section className="p-5 pt-0">
      <div className='flex justify-between mb-3'>
        <span className='text-3xl font-mont font-semibold'>Trending Communities</span>
        <div className='flex gap-2 items-center'>
          <div title='Back' className='hover:cursor-pointer bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
            <MdNavigateBefore className='h-5 w-5' />
          </div><div title='Next' className='hover:cursor-pointer bg-bgPink rounded-lg border-2 h-10 w-10 flex justify-center items-center'>
            <MdNavigateNext className='h-5 w-5' />
          </div>
        </div>
      </div>
      <div className="flex justify-between overflow-scroll p-5 hide-scrollbar pb-4 gap-6 ">
        {communities.map((community) =>
        (
          <Link to={`/community/${community.id}`}>
            <CommunityCard key={community.id} {...community} /></Link>
        )
        )}
      </div>
      <div className='mb-2 mt-10'>
        <span className='text-3xl font-mont font-semibold '>Communites you may Like</span>
        <div className='flex justify-between mt-5 items-center'>

          <div className='flex gap-x-2 items-center  '>
            <span className={`border border-bgBlue capitalize  rounded-full px-3 py-1 text-center ${filteredOptionsState === 'all' ? 'bg-bgBlue text-white' : ''}`} onClick={() => setFilteredOptionsState('all')}>
              All
            </span>
            {
              filteredOptions.map((option, index) => {

                return (
                  <span key={index} className={`border border-bgBlue capitalize  rounded-full px-2 py-1 text-center ${filteredOptionsState === option ? 'bg-bgBlue text-white' : ''}`} onClick={() => setFilteredOptionsState(option)}>
                    {option}
                  </span>
                )
              })
            }

          </div>

          <div>
            <span className='text-xs font-mont font-semibold text-gray-500'>Sort by:</span>
            <select name="sorting" id="" className='capitalize outline-none t text-gray-500 font-semibold text-sm font-mont '>
              <option value="most-recent" className='capitalize'>most recent</option>
              <option value="most-recent" className='capitalize'>Members: high to low</option>
              <option value="most-recent" className='capitalize'>members: low to high</option>
            </select>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-4 w-full justify-evenly gap-5">
        {communities.map((data, index) => (
          <Link to={`/community/${data.id}`}>
            <SmallCommuntiyCard key={index} {...data} /></Link>
        ))}
      </div>
    </section>
  );
}
