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
    if (currentPath.pathname.startsWith("/courses") && !pathVisited) {
      setPathVisited(true);
    } else if (!currentPath.pathname.startsWith("/courses") && pathVisited) {
      setPathVisited(false);
    }
  }, [currentPath.pathname, pathVisited]);

  console.log(pathVisited);

  const isCommunityPage =
    currentPath.pathname.startsWith("/community");

  return (
    <>
      <header className="p-5 flex items-center border-2 bg-white">
        <Navbar isCourses={pathVisited} />
      </header>

      <main
        className={`grid xl:p-5 lg:p-2 justify-between relative ${
          isCommunityPage || pathVisited
            ? "grid-cols-[minmax(0,1fr)_minmax(0,4fr)]"
            : "grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)]"
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
        {!pathVisited && !isCommunityPage && (
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
