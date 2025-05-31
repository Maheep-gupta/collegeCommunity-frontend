import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Courses from "./components/courses/courses";
import EventsSection from "./components/Events/EventsSection";
import ChatSection from "./components/chat/ChatSection";
import ChatWithAI from "./components/C-AI/ChatWithAI";
import Community from "./components/community/Community";
import CommunityDetail from "./components/community/CommunityDetail";
import SearchResults from "./components/C-AI/SearchResults";
import SearchHere from "./components/C-AI/SearchHere";
import CourseDetails from "./components/courses/CourseDetails";
import ProfilePage from "./components/user/ProfilePage";
import Feed from "./components/Feed/Feed";
import ChattingScreen from "./components/chat/ChattingScreen";
import LoginPage from "./auth/Login";
import SignupPage from "./auth/SignUp";
import AdminDashboard from "./components/admin/dashboard/mainDashboard";
import NotAuthorized from "./components/NotAuthorised";
import EventPage from "./components/Events/EventDetails";
import CreateEventPage from "./components/admin/create-event/create-event";

import userContext from "./context/UserContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { user, isAdmin } = useContext(userContext);

  return (
    <Routes>
      {/* Redirect root to feed */}
      <Route path="/" element={<Navigate to="/feed" />} />

      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Routes that require user login */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={!!user} redirectPath="/login">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="feed" element={<Feed />} />
        <Route path="events" element={<EventsSection />} />
        <Route path="events/:id" element={<EventPage />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="community" element={<Community />} />
        <Route path="community/:id" element={<CommunityDetail />} />
        <Route path="profile/:username" element={<ProfilePage />} />
      </Route>

      <Route
        path="/friends"
        element={
          <ProtectedRoute isAllowed={!!user} redirectPath="/login">
            <ChatSection />
          </ProtectedRoute>
        }
      >
        <Route path="chat/:id" element={<ChattingScreen />} />
      </Route>

      <Route path="/" element={<ChatWithAI />}>
        <Route path="cai" element={<SearchHere />} />
        <Route path="search" element={<SearchResults />} />
      </Route>

      {/* Admin-only routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute isAllowed={isAdmin} redirectPath="/not-aut">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/create-event"
        element={
          <ProtectedRoute isAllowed={isAdmin} redirectPath="/not-aut">
            <CreateEventPage />
          </ProtectedRoute>
        }
      />

      {/* Not authorized page */}
      <Route path="/not-aut" element={<NotAuthorized />} />
    </Routes>
  );
}

export default App;
