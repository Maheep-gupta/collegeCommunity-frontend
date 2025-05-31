// AdminDashboard.jsx
import { useState } from "react";
import Overview from "./teacherDashBoard/TeacherOverview";
import logo from '../../../assets/cc-logo.png'
import { LuLogOut } from "react-icons/lu";



export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex  left-0 bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 max-h-screen sticky top-0 bg-white shadow-md p-4">
        <div className='flex gap-x-1 justify-center items-center'>
          <img className='h-10 w-10' src={logo} alt=" cclogo" />
          <span className='font-mont font-semibold'>College Community</span>
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-5 px-3">Admin Panel</h2>
        <nav className="space-y-3 flex flex-col justify-between max-h-screen gap-44">
          <div className="h-fit ">
            {[
              ["Overview", "overview"],
              ["User Management", "users"],
              ["Feed Moderation", "feed"],
              ["Event Management", "events"],
              ["Requests & Complaints", "requests"],
              ["Q&A Moderation", "qa"],
              ["Announcements", "announcements"],
              ["Reports & Logs", "reports"],
              ["Settings", "settings"],
            ].map(([label, value]) => (
              <button
                key={value}
                onClick={() => setActiveSection(value)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === value
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="px-4 flex items-center gap-z-3 my-2 rounded-xl hover:shadow-xl hover:bg-gray-300 shadow-lg bg-gray-200">
            <LuLogOut />
            <button className="p-3">Logout</button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeSection === "overview" && <Overview />}
        {activeSection === "users" && <UserManagement />}
        {activeSection === "feed" && <FeedModeration />}
        {activeSection === "events" && <EventManagement />}
        {activeSection === "requests" && <RequestManagement />}
        {activeSection === "qa" && <QAModeration />}
        {activeSection === "announcements" && <Announcements />}
        {activeSection === "reports" && <Reports />}
        {activeSection === "settings" && <Settings />}
      </main>
    </div>
  );
}

// Placeholder Components (you can fill these out later)

const UserManagement = () => <div>👥 Manage Students & Moderators</div>;
const FeedModeration = () => <div>📰 View/Delete Posts</div>;
const EventManagement = () => <div>🎯 Create & Edit Events</div>;
const RequestManagement = () => <div>📥 Handle Complaints & Requests</div>;
const QAModeration = () => <div>💬 Moderate Q&A Threads</div>;
const Announcements = () => <div>🔔 Send Global Announcements</div>;
const Reports = () => <div>📂 View Reports & Logs</div>;
const Settings = () => <div>⚙️ Platform Settings</div>;
