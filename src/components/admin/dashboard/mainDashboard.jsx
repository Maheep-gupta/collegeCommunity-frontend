// AdminDashboard.jsx
import { useState } from "react";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-3">
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
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                activeSection === value
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
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
const Overview = () => <div>📊 Overview Stats here</div>;
const UserManagement = () => <div>👥 Manage Students & Moderators</div>;
const FeedModeration = () => <div>📰 View/Delete Posts</div>;
const EventManagement = () => <div>🎯 Create & Edit Events</div>;
const RequestManagement = () => <div>📥 Handle Complaints & Requests</div>;
const QAModeration = () => <div>💬 Moderate Q&A Threads</div>;
const Announcements = () => <div>🔔 Send Global Announcements</div>;
const Reports = () => <div>📂 View Reports & Logs</div>;
const Settings = () => <div>⚙️ Platform Settings</div>;
