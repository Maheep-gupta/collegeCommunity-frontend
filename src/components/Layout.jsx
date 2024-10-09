import React from 'react';
import { Outlet } from 'react-router-dom';
import UserInfo from './UserInfo';
import Navigation from './Navigation';
import Navbar from './Navbar';
import Messages from './Messages';
import Events from './Events';

const Layout = () => {
    return (
        <>
            <header className='p-5 flex items-center border-2 bg-white'>
                <Navbar />
            </header>
            <main className=' main-grid p-5 justify-between relative'>
                <aside className='m-3'>
                    <div className="sticky top-5">

                    <UserInfo />
                    <Navigation />
                    </div>
                </aside>
                <section>
                    <Outlet />
                </section>
                <aside className='m-3 relative '>
                    <div className='sticky top-5 overflow-scroll hide-scrollbar h-screen'>
                        <div className="scroll">

                        <Messages />
                        <Events />
                        </div>
                    </div>
                </aside>
            </main>
        </>
    );
};

export default Layout;