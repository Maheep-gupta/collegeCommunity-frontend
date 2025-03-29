import React from 'react'

function CommunityCard({ title, image, description, members }) {
    return (
        <div className="bg-white hover:scale-105 font-mont shadow-md relative rounded-2xl overflow-hidden min-w-72 p-3">
            <div
                className="h-48 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/*  date card */}
            <div class="absolute p-2 rounded-lg font-mont bg-white text-center right-6 top-40 shadow-xl ">
                <div class="">
                    <span class="text-3xl font-bold">{members}+</span>
                </div>
                <div title="Representatives" class="text-black text-sm capitalize">
                    members
                </div>
            </div>

            <div className="p-4 pt-5">

                <h3 className="text- font-semibold text-gray-800 mb-1">{title}</h3>
                <div className="flex font-normal  gap-3  text-sm mb-2">
                    <span>{description}</span>

                </div>
            </div>
        </div>
    )
}

export default CommunityCard