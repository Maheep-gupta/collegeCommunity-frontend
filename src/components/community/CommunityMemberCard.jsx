import React from 'react'

function CommunityMemberCard({ MemberName, avatar }) {
    return (
        <div className='flex gap-2 items-center justify-between min-w-96 border border-gray-200 shadow-lg hover:bg-gray-200 px-1 cursor-pointer rounded-lg py-2 pl-2 xl:py-2 lg:py-1'>
            <div className='flex gap-2 items-center  py-2 pl-2 xl:py-2 lg:py-1'>
                <div className='xl:h-12 lg:h-12 xl:w-12 lg:w-12 rounded-full flex items-center'>
                    <div class="relative border border-gray-400 rounded-full ">
                        <img class="w-10 h-10 aspect-square rounded-full" src={avatar} alt="" />
                    </div>
                </div>
                <div className='font-pop font-medium capitalize'>
                    {MemberName}
                </div>

            </div>
            <button className="text-sm border bg-bgBlue text-white rounded-md p-2 hover:bg-[#437cbe] hover:scale-105 transition duration-200 ease-in-out">
                Add to Friends
            </button>
        </div>
    )
}

export default CommunityMemberCard