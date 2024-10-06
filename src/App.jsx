import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import Friends from './components/FriendsSection'
import EventSection from "./components/EventSection"
import WatchVideosSection from "./components/WatchVideosSection";
import CommunitySection from "./components/CommunitySection";
import ChatGPTSection from "./components/ChatGPTSection";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Feed />} />
        <Route path="friends" element={<Friends />} />
        <Route path="event" element={<EventSection />} />
        <Route path="videos" element={<WatchVideosSection />} />
        <Route path="community" element={<CommunitySection />} />
        <Route path="cai" element={<ChatGPTSection />} />
        {/* You can add more routes here */}
      </Route>
    </Routes>
  );
}

export default App;