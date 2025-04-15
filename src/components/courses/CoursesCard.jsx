import React from 'react'
import c1 from '../../assets/c1.webp'
import { FaPlayCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function CoursesCard({ courseName, courseImage, courseRatingCount, authorName, studentsEnrolled }) {
    return (
        <Link to={'/courses/1'} class="relative flex w-full hover:scale-105 text-left  flex-col rounded-xl bg-white border hover:shadow-2xl text-gray-700 shadow-lg">
            <div
                class="relative overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border rounded-b-none shadow-blue-gray-500/40 w-58">
                <img
                    className=""
                    src={c1}
                    alt="Java & Python Programming Mastery: Learn to Code Like a Pro" />
                <div className='absolute rounded-xl h-full w-full bg-black opacity-0 hover:opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <FaPlayCircle className='h-10 w-10 text-white ' />
                    </div>
                </div>
            </div>
            <div class="px-3 pt-2 pb-2">
                <div class="flex flex-col gap-y-1 justify-start mb-1">
                    <h5 class="block font-mont text-sm antialiased font-bold leading-snug text-blue-gray-900">
                        Java & Python Programming Mastery: Learn ...
                    </h5>
                    <span className='text-xs font-pop font-light'>Code with Harry</span>

                    <p
                        class="flex  items-center justify-start gap-x-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <span className='text-sm font-semibold text-yellow-700'>4.5</span>
                        <span className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class=" h-3 w-3 text-yellow-700">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class=" h-3 w-3 text-yellow-700">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class=" h-3 w-3 text-yellow-700">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class=" h-3 w-3 text-yellow-700">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class=" h-3 w-3 text-yellow-700">
                                <path fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span className='text-sm font-light'>(12)</span>
                    </p>
                    <span className='text-sm font-light'>Certificate guaranteed </span>
                </div>

            </div>
        </Link>
    )
}

export default CoursesCard