import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import errorImage from '@/assets/Error-404.png';

const DefaultErrorPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <section className="w-full px-4 py-16 flex-1">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <div className="w-full max-w-md mb-8">
                        <img
                            src={errorImage}
                            alt="Page not found"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a] mb-3">Page Not Found</h1>
                    <p className="text-gray-500 mb-8 max-w-2xl">
                        The page you’re looking for doesn’t exist or was moved. You can go back to the
                        Home page to continue browsing apps and installations.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                        Go Home
                    </Link>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default DefaultErrorPage;