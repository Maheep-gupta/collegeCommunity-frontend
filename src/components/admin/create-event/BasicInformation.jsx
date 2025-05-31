import React from 'react'
import { FaMapMarkerAlt, FaGlobe, FaUsers, FaPlus } from 'react-icons/fa'

function Basicinformation() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold mb-4">Basic Information</h2>
                <p className="text-sm  mb-6">
                    Start with the fundamental details of your event
                </p>
            </div>

            <div className="space-y-4">
                {/* Event Title */}
                <div className='gap-y-2 flex flex-col p-2'>
                    <label htmlFor="event-title" className="text-base">
                        Event Title <span className="text-red-500">*</span>
                    </label>
                    <input class="flex h-10 w-full rounded-md border border-gray-300 outline-bgBlue px-3 py-2 text-sm" id="event-title" placeholder="Give your event a clear, descriptive name"/>
                </div>

                {/* Event Type */}
                <div className='gap-y-2 flex flex-col p-2'>
                    <label className="text-base">
                        Event Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1.5">
                        <div className="flex items-center space-x-2">
                            <input type="radio" id="in-person" name="eventType" value="in-person" />
                            <label htmlFor="in-person" className="flex items-center gap-1.5">
                                <FaMapMarkerAlt className="h-4 w-4 text-violet-500"  /> In-person
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="radio" id="virtual" name="eventType" value="virtual" />
                            <label htmlFor="virtual" className="flex items-center gap-1.5">
                                <FaGlobe className="h-4 w-4 text-violet-500"  /> Virtual
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="radio" id="hybrid" name="eventType" value="hybrid" />
                            <label htmlFor="hybrid" className="flex items-center gap-1.5">
                                <FaUsers className="h-4 w-4 text-violet-500"  /> Hybrid
                            </label>
                        </div>
                    </div>
                </div>

                {/* Category and Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='gap-y-2 flex flex-col p-2'>
                        <label htmlFor="event-category" className="text-base">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select id="event-category" className="mt-1.5 border border-gray-200 rounded-md px-3 py-2 outline-none text-sm">
                            <option>Select category</option>
                            <option value="technology">Technology</option>
                            <option value="business">Business</option>
                            <option value="education">Education</option>
                            <option value="arts">Arts & Entertainment</option>
                            <option value="health">Health & Wellness</option>
                            <option value="community">Community & Culture</option>
                        </select>
                    </div>

                    {/* <div className='gap-y-2 flex flex-col p-2'>
                        <label htmlFor="event-tags" className="text-base">Tags</label>
                        <input id="event-tags" placeholder="Add tags separated by commas" className="mt-1.5" />
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="bg-gray-200 px-1 rounded">conference</span>
                            <span className="badge">tech</span>
                            <span className="badge flex items-center gap-1"><FaPlus /> Add</span>
                        </div>
                    </div> */}
                </div>

                {/* Start Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='gap-y-2 flex flex-col p-2'>
                        <label className="text-base">Start Date & Time <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-2 gap-2 mt-1.5">
                            <input type="date" className='border outline-bgBlue text-sm border-gray-200 px-2 py-1 rounded-lg' />
                            <select className='border text-sm outline-bgBlue border-gray-200 px-2 py-1 rounded-lg'>
                                <option>Time</option>
                                <option value="9:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                            </select>
                        </div>
                    </div>

                    {/* End Date and Time */}
                    <div className='gap-y-2 flex flex-col p-2'>
                        <label className="text-base">End Date & Time <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-2 gap-2 mt-1.5">
                            <input type="date" className='border text-sm outline-bgBlue border-gray-200 px-2 py-1 rounded-lg'/>
                            <select className='border text-sm outline-bgBlue border-gray-200 px-2 py-1 rounded-lg'>
                                <option>Time</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">1:00 PM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                                <option value="17:00">5:00 PM</option>
                                <option value="18:00">6:00 PM</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Location (if not virtual) */}
                <div className='gap-y-2 flex flex-col p-2'>
                    <label htmlFor="event-location" className="text-base">
                        Location <span className="text-red-500">*</span>
                    </label>
                    <input id="event-location" placeholder="Venue name" className="flex-1 mt-1.5 border border-gray-200 text-sm p-2 outline-bgBlue rounded-md" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <input placeholder="Address line 1" className='border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm' />
                        <input placeholder="Address line 2 (optional)" className='border  outline-bgBlueborder-gray-200 p-2 rounded-md' />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <input placeholder="City" className='border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm'/>
                        <input placeholder="State/Province" className='border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm' />
                        <input placeholder="Postal code" className='border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm' />
                        <select className='border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm'>
                            <option>Country</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                        </select>
                    </div>
                </div>

                {/* Virtual Platform */}
                <div className='gap-y-2 flex flex-col p-2'>
                    <label htmlFor="event-platform" className="text-base">
                        Virtual Platform <span className="text-red-500">*</span>
                    </label>
                    <select id="event-platform" className="mt-1.5 border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm ">
                        <option>Select platform</option>
                        <option value="zoom">Zoom</option>
                        <option value="teams">Microsoft Teams</option>
                        <option value="meet">Google Meet</option>
                        <option value="webex">Cisco Webex</option>
                        <option value="custom">Custom URL</option>
                    </select>
                    <input placeholder="Meeting link or ID" className="mt-2 border outline-bgBlue border-gray-200 p-2 rounded-md  text-sm " />
                </div>
            </div>
        </div>
    )
}

export default Basicinformation
