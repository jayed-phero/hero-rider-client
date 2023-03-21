import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';

const DashboardLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <div className='md:flex relative min-h-screen'>
                <Sidebar />
                <div className='flex-1 md:ml-64'>
                    <div className='bg-indigo-300 py-7 w-full'></div>
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;