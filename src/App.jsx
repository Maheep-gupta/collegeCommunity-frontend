import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import Courses from "./components/courses/courses";
import EventsSection from "./components/Events/EventsSection";
import ChatSection from "./components/chat/ChatSection";
import ChatWithAI from "./components/C-AI/ChatWithAI";
import Community from "./components/community/Community";
import CommunityDetail from "./components/community/CommunityDetail";
import SearchResults from "./components/C-AI/SearchResults";
import SearchHere from "./components/C-AI/SearchHere";
import ChattingScreen from "./components/chat/ChattingScreen";

function App() {
  const currentPath = useLocation();
  console.log(currentPath.pathname);
  return (


    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Feed />} />
        <Route path="events" element={<EventsSection />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<CommunityDetail />} />
        {/* You can add more routes here */}
      </Route>


      <Route path="/friends" element={<ChatSection />} >
        <Route path="/friends/chat/:id" element={<ChattingScreen/>} />
      </Route>
      <Route path="/" element={<ChatWithAI />} >
        <Route path="cai" element={<SearchHere />} />
        <Route path="/search/:id" element={<SearchResults />} />
      </Route>


    </Routes>
  );
}

export default App;

// { id: 1, name: "Web Development", description: "Discuss frontend & backend technologies.", image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400" },
// { id: 2, name: "App Development", description: "Share knowledge on mobile app development.", image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=400" },