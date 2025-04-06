import React, { useState } from 'react';
import Announcemnts from './Announcemnts';
import Notes from './Notes';
import QnA from './QnA';
import { nav } from 'motion/react-client';
import Overview from './CourseOverview';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const videoList = [
    { id: 'grEKMHGYyns', title: 'Java Introduction' },
    { id: 'GoXwIVyNvX0', title: 'Installing Java & IDE' },
    { id: 'Hl-zzrqQoSE', title: 'First Java Program' },
    { id: 'gM8vL4uYXv81', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv82', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv83', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv84', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv85', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv86', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv87', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv88', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv89', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv80', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv809', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv808', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv807', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv806', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv805', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv804', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv803', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv802', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv801', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv8011', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv8012', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv80123', title: 'Variables & Data Types' },
    { id: 'gM8vL4uYXv8012222', title: 'Variables & Data Types' },
];

const CourseDetails = () => {
    const [currentVideoId, setCurrentVideoId] = useState(videoList[0].id);
    const [completedVideos, setCompletedVideos] = useState({});
    const [navOptions, setNavOptions] = useState('overview')

    const toggleCompleted = (videoId) => {
        setCompletedVideos((prev) => ({
            ...prev,
            [videoId]: !prev[videoId],
        }));
    };

    return (
        <div className="flex h-screen w-full justify-between gap-x-4">
            <div className="flex flex-col  pl-4">
                {/* Title */}
                <div className='pb-5 flex items-center gap-x-3'>
                    <Link to='/courses' className='bg-bgBlue text-white hover:text-black
                     hover:bg-gray-200 p-2 rounded-full'>
                    <IoMdArrowRoundBack size={25} /></Link>
                    <h1 className="text-xl font-semibold font-mont">

                        Java Spring Framework 6 with Spring Boot 3
                    </h1>
                </div>
                {/* video */}
                <div className="w-full h-full max-h-[60%]  relative aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${currentVideoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg w-full h-full"
                    ></iframe>
                </div>
                {/* Course Details*/}
                <div className='cursor-pointer'>
                    <div className='flex items-center gap-x-5 border-b border-gray-300 mt-3'>
                        <span className={`p-3 font-mont font-semibold ${navOptions === 'overview' ? 'bg-gray-200 border-b-2 rounded-t-md  border-black' : null}`} onClick={() => setNavOptions('overview')} >Overview</span>
                        <span className={`p-3 font-mont font-semibold ${navOptions === 'q&a' ? 'bg-gray-200 border-b-2 rounded-t-md  border-black' : null}`} onClick={() => setNavOptions('q&a')}  >Q&A</span>
                        <span className={`p-3 font-mont font-semibold ${navOptions === 'notes' ? 'bg-gray-200 border-b-2 rounded-t-md  border-black' : null}`} onClick={() => setNavOptions('notes')} >Notes</span>
                        <span className={`p-3 font-mont font-semibold ${navOptions === 'annoucement' ? 'bg-gray-200 border-b-2 rounded-t-md  border-black' : null}`} onClick={() => setNavOptions('annoucement')} >Announcements</span>
                    </div>
                    <div className="h-full w-full">
                        {
                            navOptions === 'annoucement' ? <Announcemnts /> :
                                navOptions === 'notes' ? <Notes /> :
                                    navOptions === 'q&a' ? <QnA /> : navOptions === 'overview' ? <Overview /> : null}
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <div className="w-full bg-white border-r p-4 pt-0 shadow overflow-y-scroll h-full border-l border-gray-300">
                <h2 className="text-xl font-semibold mb-4 font-mont">Course Content</h2>
                <ul className="space-y-3">
                    {videoList.map((video, idx) => (
                        <li
                            key={video.id}
                            className={`flex items-center justify-between p-4 border shadow rounded cursor-pointer ${video.id === currentVideoId ? 'bg-gray-200' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => setCurrentVideoId(video.id)}
                        >
                            <div className="flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className='size-4'
                                    checked={completedVideos[video.id] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        toggleCompleted(video.id);
                                    }}
                                />
                                <span className="font-mont font-medium">{`${idx + 1}. ${video.title}`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default CourseDetails;
