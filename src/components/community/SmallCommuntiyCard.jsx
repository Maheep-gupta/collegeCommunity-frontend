import React from 'react'

function SmallCommuntiyCard({ title, image, description, members }) {
    return (
        <div className="bg-white hover:scale-105 font-mont shadow-md relative rounded-2xl overflow-hidden mi-w-max p-3">
            <div
                className="h-32 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/*  date card */}
            <div class="absolute p-2 rounded-lg font-mont bg-white text-center right-6 top-24 shadow ">
                <div class="">
                    <span class="text-lg font-bold">{members}+</span>
                </div>
                <div class="text-black text-sm capitalize">
                    Memebers
                </div>
            </div>

            <div className="p-2 pt-3">

                <h3 className=" font-semibold text-sm text-gray-800 mb-1">{title}</h3>
                <div className="flex font-normal  gap-3  text-xs mb-2">
                    <span>{description}</span>
                </div>


            </div>
        </div>
    )
}

export default SmallCommuntiyCard