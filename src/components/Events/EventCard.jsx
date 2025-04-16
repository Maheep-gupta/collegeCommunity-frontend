import React from 'react';

function EventCard({ date, month, day, time, title, location, attendees, image }) {
  return (
    <div className="bg-white hover:scale-105 font-mont shadow-md relative rounded-2xl overflow-hidden min-w-72 p-3">
      <div
        className="h-48 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/*  date card */}
      <div className="absolute p-3 rounded-lg font-mont bg-white text-center right-8 top-40 ">
        <div className="text-black text-lg">
          {month}
        </div>
        <div className="">
          <span className="text-3xl font-bold">{date}</span>
        </div>
      </div>

      <div className="p-4">
      
        <div className="flex text-green-500 font-normal  gap-3  text-sm mb-2">
          {/* <span>{date}</span> */}
          <span>{day}</span>
          <span>{time}</span>
        </div>
        <h3 className="text- font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">Location - {location}</p>

        <div className="flex -space-x-2 ">
          {attendees.map((attendee, index) => (
            <img
              key={index}
              src={attendee}
              alt="Attendee"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          <img
            src={`https://ui-avatars.com/api/?background=808080&color=fff&name=%2B2&rounded=true`}
            alt="Attendee"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard


