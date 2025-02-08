import React from 'react';

function SmallEventCard({ date, month, day, time, title, location, attendees, image }) {
  return (
    <div className="bg-white hover:scale-105 font-mont shadow-md relative rounded-2xl overflow-hidden mi-w-max p-3">
      <div
        className="h-32 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

          {/*  date card */}
      <div class="absolute p-2 rounded-lg font-mont bg-white text-center right-6 top-28 ">
        <div class="text-black text-sm">
          {month}
        </div>
        <div class="">
          <span class="text-lg font-bold">{date}</span>
        </div>
      </div>

      <div className="p-2">
      
        <div className="flex text-green-500 font-normal  gap-3  text-xs mb-2">
          {/* <span>{date}</span> */}
          <span>{day}</span>
          <span>{time}</span>
        </div>
        <h3 className=" font-semibold text-sm text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-xs mb-4">Location - {location}</p>

        <div className="flex -space-x-2 ">
          {attendees.map((attendee, index) => (
            <img
              key={index}
              src={attendee}
              alt="Attendee"
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
          <img
            src={`https://ui-avatars.com/api/?background=808080&color=fff&name=%2B2&rounded=true`}
            alt="Attendee"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default SmallEventCard


