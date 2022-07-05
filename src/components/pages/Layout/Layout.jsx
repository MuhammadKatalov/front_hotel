import React from 'react';
import Header from '../../Header';
import Chat from '../../Chat';
import Footer from '../../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <Chat />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;