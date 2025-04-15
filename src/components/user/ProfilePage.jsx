import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Jobs from './Jobs';
import ProfileFeed from './ProfileFeed';

const tabs = ["Feed", "Education", "Skills", "Job Openings"];

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("Feed");

    return (
        <div className=" mx-10 p-4 font-pop">
            {/* Profile Header */}
            <div className="text-center">
                <img
                    src="https://i.pravatar.cc/100"
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto"
                />
                <h1 className="text-2xl font-semibold mt-2">Emma Johnson</h1>
                <p className="text-gray-600">Software engineer. Passionate about technology and coding.</p>
                <p className="text-sm text-gray-500">San Francisco, CA</p>

                <div className="flex justify-center space-x-4 mt-3">
                    <button className="px-4 py-1  rounded-lg bg-bgBlue text-white hover:text-black hover:bg-gray-200">Follow</button>
                    <button className="px-4 py-1  rounded-lg bg-bgBlue text-white hover:text-black hover:bg-gray-200">Message</button>
                </div>

                <div className="flex justify-center gap-6 mt-4 text-sm">
                    <div>
                        <span className="font-semibold">125</span><br />Posts
                    </div>
                    <div>
                        <span className="font-semibold">5,200</span><br />Followers
                    </div>
                    <div>
                        <span className="font-semibold">480</span><br />Following
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b flex justify-around text-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 text-lg  ${activeTab === tab ? "border-b-2 border-black  font-semibold" : "text-gray-500"}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "Feed" && <ProfileFeed />}
                {activeTab === "Education" && <Education />}
                {activeTab === "Skills" && <Skills />}
                {activeTab === "Job Openings" && <Jobs />}
            </div>
        </div>
    );
};

// Dummy Components








export default ProfilePage;
