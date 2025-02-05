import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UserInfo from './UserInfo';
import Navigation from './Navigation';
import Navbar from './Navbar';
import Messages from './Messages';
import EventsLayoutSection from './EventsLayoutSection';

const Layout = () => {
    const [pathVistied, setPathVistied] = useState(false)
    // console.log(pathVistied);
    // console.log(currentPath.pathname);
    const currentPath = useLocation()

    // issue: getting re redendered multiple times 

    useEffect(() => { currentPath.pathname === '/courses' ? setPathVistied(true) : setPathVistied(false) }, [currentPath]
    )
    return (
        <>
            <header className='p-5 flex items-center border-2 bg-white'>
                <Navbar isCourses={pathVistied} />
            </header>
            <main className=' grid xl:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] xl:p-5 justify-between relative lg:p-2'>
                <aside className=''>
                    <div className="sticky xl:top-5 lg:top-2">
                        <UserInfo />
                        <Navigation />
                    </div>
                </aside>
                <section>
                    <Outlet />
                </section>
                <aside className=' relative '>
                    <div className='sticky xl:top-5 lg:top-2 overflow-scroll hide-scrollbar'>
                        <div className="scroll">

                            <Messages />
                            <EventsLayoutSection />
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
};

export default Layout;