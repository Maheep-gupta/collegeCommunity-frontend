import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import thumbnail from '../../assets/thumbnail.jpg'  

function RestartCourseCard({ courseName,courseImage,lectureName,lectureTime,lectureProgress }) {
    return (
        <button className="h-44 min-w-max border bg-clip-border bg-white text-left flex p-3 rounded-2xl hover:scale-105">
            <div className=' h-full w-32 relative rounded-xl '>
                <img src={thumbnail} alt="" className='h-full rounded-xl object-cover' />
                <div className='absolute rounded-xl  h-full w-full bg-black opacity-50 hover:opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <FaPlayCircle className='h-10 w-10 text-white ' />
                    </div>
                </div>

            </div>
            <div className='flex flex-col justify-between px-4 h-full'>
                <div className='flex flex-col'>
                    <span className='font-bold text-xs text-gray-400 font-mont
                '>
                        Java Spring Framework 6 with Spring ....
                    </span>
                    <span className='font-mont  mt-4 text-black font-bold'>
                        25. Class And Object Theory
                    </span>
                </div>

                <div>
                    <div className='flex items-center'>
                        <span className='font-mont text-sm font-semibold'>Lecture :</span>
                        <span className='px-2'>5m left</span>
                    </div>
                    <div className='bg-gray-400 rounded-lg h-2 mt-1'>
                        <div className='bg-bgBlue h-2 rounded-lg w-[50%]'></div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default RestartCourseCard