import React from 'react';

function EventCard({date, month, day, time, title, location, attendees, image }) {
  return (
    <div className="bg-white shadow-md relative rounded-lg overflow-hidden w-80 mx-4 my-4">
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* card */}
      <div class="absolute block rounded-t overflow-hidden bg-white text-center w-16 right-1 top-28">
        <div class="text-black py-0.5 from-neutral-600 text-sm">
          {month}
        </div>
        <div class="pt-0.5 border-l border-r">
          <span class="text-xl font-bold">{date}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between text-gray-500 text-sm mb-2">
          {/* <span>{date}</span> */}
          <span>{day}</span>
          <span>{time}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">Location - {location}</p>
        <div className="flex -space-x-2">
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


