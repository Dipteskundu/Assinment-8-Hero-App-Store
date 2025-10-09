import React from 'react';
import image from '../../assets/github.png'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar mt-2 bg-base-100 px-2 md:px-4 xl:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content z-10 mt-3 w-60 p-2 shadow-lg rounded-xl border border-gray-200 bg-white/95 backdrop-blur">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 1.293a1 1 0 00-1.414 0l-8 8A1 1 0 002 11h1v6a1 1 0 001 1h4a1 1 0 001-1v-3h2v3a1 1 0 001 1h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-8-8z" /></svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/apps"
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM11 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" /></svg>
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v10a2 2 0 01-2 2H6l-3 3V4zm4 3a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                            Installation
                        </NavLink>
                    </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg md:text-xl xl:text-2xl ml-0 sm:ml-6"><span><img className='w-8 h-8 md:w-9 md:h-9 xl:w-10 xl:h-10' src={logo} alt="" /></span> <span className='text-purple-500'>HERO-Apps</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 xl:gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `pb-1 ${isActive ? 'border-b-2 border-green-500 text-green-600' : 'border-b-2 border-transparent'}`}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/apps"
                            className={({ isActive }) => `pb-1 ${isActive ? 'border-b-2 border-green-500 text-green-600' : 'border-b-2 border-transparent'}`}
                        >Apps</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) => `pb-1 ${isActive ? 'border-b-2 border-green-500 text-green-600' : 'border-b-2 border-transparent'}`}
                        >Installation</NavLink>
                    </li>
                </ul>
            </div>


            <div className="flex items-center  navbar-end gap-2 md:gap-3 xl:gap-4">
                <a href="https://github.com/Dipteskundu" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
             hover:from-purple-600 hover:via-pink-600 hover:to-red-600
              text-white font-bold py-2 md:py-2.5 xl:py-3 px-4 md:px-5 xl:px-6 rounded-lg shadow-lg 
              transform transition duration-500 ease-in-out hover:scale-105 flex items-center">
                    <span className="mr-1 font-bold"><span><img className='w-5 h-5 md:w-6 md:h-6' src={image} alt="" /></span></span> <span>Contribute</span>
                </a>
                <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700
               hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                </button>
            </div>
        </div>
    );
};

export default Navbar;