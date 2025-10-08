import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Loading from '../Components/Loading/Loading';
import { Outlet, useLocation } from 'react-router';

const MainLayout = () => {
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsNavigating(true);
        const timer = setTimeout(() => {
            setIsNavigating(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1'>
                {isNavigating ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <Loading size="large" text="Loading page..." />
                    </div>
                ) : (
                    <Outlet/>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;