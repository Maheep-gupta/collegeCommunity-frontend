import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Feed from "./components/Feed";
import Friends from './components/Friends'
import Courses from "./components/courses/courses";

function App() {
  return (


    <Routes>
      <Route path="/" element={<Navigate to="/feed" />} />
      <Route path="/" element={<Layout />}>
        <Route path="feed" element={<Feed />} />
        <Route path="friends" element={<Friends />} />
        {/* You can add more routes here */}
      </Route>
        <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;