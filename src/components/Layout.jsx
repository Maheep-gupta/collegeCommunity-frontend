import React from 'react';
import { Outlet } from 'react-router-dom';
import UserInfo from './UserInfo';
import Navigation from './Navigation';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
       <header className='p-5 flex items-center border-2 bg-white'>
                <Navbar />
            </header>
            <main className=' flex p-5'>
                <aside className='m-3'>
                    <UserInfo />
                    <Navigation/>
                </aside>
                <section>
                    <Outlet/>
                </section>
            </main>
        </>
    );
};

export default Layout;