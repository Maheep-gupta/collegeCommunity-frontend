import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import Courses from "./components/courses/courses";
import EventsSection from "./components/Events/EventsSection";
import ChatSection from "./components/chat/ChatSection";
import ChatWithAI from "./components/C-AI/ChatWithAI";
import Community from "./components/community/Community";

function App() {
  return (


    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Feed />} />
        <Route path="events" element={<EventsSection />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        {/* You can add more routes here */}
      </Route>


      <Route path="/friends" element={<ChatSection />} />
      <Route path="/cai" element={<ChatWithAI />} />

    </Routes>
  );
}

export default App;