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
<<<<<<< HEAD
            <header className='xl:p-5 lg:p-2 flex items-center border-2 bg-white'>
                <Navbar />
            </header>
            <main className='grid xl:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] xl:p-5 justify-between relative lg:p-2'>
                <aside className='xl:m-3 lg:m-1'>
                    <div className="sticky top-5">

=======
       <header className='p-5 flex items-center border-2 bg-white'>
                <Navbar />
            </header>
            <main className=' flex p-5 justify-between'>
                <aside className='m-3'>
>>>>>>> parent of 5f8fd94 (feed section completed)
                    <UserInfo />
                    <Navigation/>
                </aside>
                <section>
                    <Outlet/>
                </section>
<<<<<<< HEAD
                <aside className='xl:m-3 lg:m-1 relative '>
                    <div className='sticky top-5 overflow-scroll hide-scrollbar h-screen'>
                        <div className="scroll">

                        <Messages />
                        <Events />
                        </div>
                    </div>
=======
                <aside className='m-3'>
                    <Messages />
                    <Events/>
>>>>>>> parent of 5f8fd94 (feed section completed)
                </aside>
            </main>
        </>
    );
};

export default Layout;