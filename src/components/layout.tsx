import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './nav';

const Layout = () => {
    return (
        <>
            <Nav />
            <div className="container p-8">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
