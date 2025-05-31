import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function EventDetailsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden">
          <img
            src="/event-hero.jpg"
            alt="Event"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white space-y-4 px-4">
              <h1 className="text-4xl font-bold">Annual Tech Conference 2023</h1>
              <p className="text-lg max-w-2xl mx-auto">
                Join us for a day of inspiring talks, networking, and innovation.
              </p>
              <div className="bg-primary hover:bg-primary-dark">Register Now</div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: <FaCalendarAlt />, label: "Date", value: "March 15, 2023" },
              { icon: <FaClock />, label: "Time", value: "9:00 AM - 5:00 PM" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "Tech Convention Center, San Francisco" }
            ].map((item, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
                <div className="text-primary text-xl">{item.icon}</div>
                <div>
                  <p className="text-gray-500">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speakers */}
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Featured Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Alex Johnson", "Emily Davis", "Michael Lee"].map((name, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-6 flex flex-col items-center space-y-4">
                <div className="h-24 w-24 rounded-full overflow-hidden">
                  <img
                    src={`/speaker-${i + 1}.jpg`}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-gray-500">Topic: Innovation in Tech</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Event */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto space-y-6">
            <h2 className="text-2xl font-bold">About the Event</h2>
            <p>
              The Annual Tech Conference brings together industry leaders, innovators, and enthusiasts for a day of insightful talks and networking opportunities.
            </p>
            <p>
              Whether you're a developer, designer, entrepreneur, or student, this event is designed to inspire and connect you with the latest trends in technology.
            </p>
          </div>
        </section>

        {/* Agenda */}
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Event Agenda</h2>
          <ul className="space-y-4">
            {[
              { time: "9:00 AM", detail: "Opening Keynote by Alex Johnson" },
              { time: "10:30 AM", detail: "Panel Discussion: The Future of AI" },
              { time: "1:00 PM", detail: "Networking Lunch" },
              { time: "2:00 PM", detail: "Workshops and Breakout Sessions" },
              { time: "4:00 PM", detail: "Closing Remarks" }
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-4">
                <span className="text-primary font-bold">{item.time}</span>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
