import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

function RestartCourseCard({ courseName,courseImage,lectureName,lectureTime,lectureProgress }) {
    return (
        <button className='h-44 min-w-max border text-left flex p-3 rounded-2xl'>
            <div className=' h-full w-32 relative rounded-xl '>
                <img src="https://mp4-c.udemycdn.com/2024-03-31_12-37-49-a0e22492698011fbfb44f435d93d2315/2/thumb-1.jpg?Expires=1738971179&Signature=Ipk3ljfBfJn1fThGiqpe49pkz5wAzCNPnRHPF7xSRxCRKP-KOynKWH7jqeHzN86YEHE3hdLxAS7oHZy6rYPyPnPEtQ1pE1pyjBQrtfS5-EzdRPuTfDXqsU~vj1fmVYohu8VUZgs83M41YNt1epEZ7dUqZ9B~Ps2iJ~heHdTyfS-FaBt0HyC23tp6vVrJedmFWoYeuSmhe8FDv09VXX3xwvLRTU55seqV-80iRow7ZzZB61XoNA58A73F9C5zmAl0ESs3ulX04hAQA8dGNLUnniROAuPiJBJkZcmzOcp1vJf9m34pf-qcY4B7vjetTBoR89K8xx0sBCQOGXkHsJbiKw__&Key-Pair-Id=K3MG148K9RIRF4" alt="" className='h-full rounded-xl object-cover' />
                <div className='absolute rounded-xl  h-full w-full bg-black opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
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