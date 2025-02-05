import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import Navbar from "./Navbar";
import Messages from "./Messages";
import EventsLayoutSection from "./EventsLayoutSection";

const Layout = () => {
  const [pathVisited, setPathVisited] = useState(false);
  const currentPath = useLocation();

  useEffect(() => {
    if (currentPath.pathname === "/courses" && !pathVisited) {
      setPathVisited(true);
    } else if (currentPath.pathname !== "/courses" && pathVisited) {
      setPathVisited(false);
    }
  }, [currentPath.pathname, pathVisited]);

  return (
    <>
      <header className="p-5 flex items-center border-2 bg-white">
        <Navbar isCourses={pathVisited} />
      </header>
      
      <main
        className={`grid xl:p-5 lg:p-2 justify-between relative ${
          pathVisited
            ? "grid-cols-[minmax(0,1fr)_minmax(0,4fr)]" // First aside fixed width, rest taken by middle section
            : "grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)]" // Normal layout
        }`}
      >
        {/* Sidebar (First Section) */}
        <aside className="w-[18.7rem]">
          <div className="sticky xl:top-5 lg:top-2">
            <UserInfo />
            <Navigation />
          </div>
        </aside>

        {/* Middle Section */}
        <section>
          <Outlet />
        </section>

        {/* Right Sidebar (Hidden on /courses) */}
        {!pathVisited && (
          <aside className="relative">
            <div className="sticky xl:top-5 lg:top-2 overflow-scroll hide-scrollbar">
              <div className="scroll">
                <Messages />
                <EventsLayoutSection />
              </div>
            </div>
          </aside>
        )}
      </main>
    </>
  );
};

export default Layout;
