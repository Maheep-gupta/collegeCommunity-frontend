import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserInfo from "./UserInfo";
import Navigation from "./Navigation";
import Navbar from "./Navbar";
import FriendsSidebar from "./Friends/FriendsSidebar";

const Layout = () => {
  const [pathVisited, setPathVisited] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setPathVisited(pathname.startsWith("/courses"));
  }, [pathname]);

  const isCommunityPage = pathname.startsWith("/community");
  const isProfilePage = pathname.startsWith("/profile/");

  const shouldHideRightSidebar = pathVisited || isCommunityPage || isProfilePage;

  return (
    <>
      <header className="p-5 flex items-center border-2 bg-white">
        <Navbar isCourses={pathVisited} />
      </header>

      <main
        className={`grid xl:p-5 lg:p-2 justify-between relative ${
          shouldHideRightSidebar
            ? "grid-cols-[minmax(0,1fr)_minmax(0,4fr)]"
            : "grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)]"
        }`}
      >
        {/* Left Sidebar */}
        <aside className="w-[18.7rem]">
          <div className="sticky xl:top-5 h-screen lg:top-2">
            <UserInfo />
            <Navigation />
          </div>
        </aside>

        {/* Main Content */}
        <section>
          <Outlet />
        </section>

        {/* Right Sidebar */}
        {!shouldHideRightSidebar && (
          <aside className="relative pb-5">
            <div className="sticky xl:top-5 lg:top-2 overflow-scroll hide-scrollbar h-screen">
              <div className="scroll">
                <FriendsSidebar />
                {/* <EventsLayoutSection /> */}
              </div>
            </div>
          </aside>
        )}
      </main>
    </>
  );
};

export default Layout;
