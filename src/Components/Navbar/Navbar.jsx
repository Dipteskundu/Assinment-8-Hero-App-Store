import React from 'react';
import image from '../../assets/github.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar mt-2 bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Apps</a></li>
                    <li><a>Installation</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><span><img className='w-8 h-8' src={logo} alt="" /></span> <span className='text-purple-500'>HERO-Apps</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Apps</a></li>
                    <li><a>Installation</a></li>
                </ul>
            </div>


            <div className="flex items-center  navbar-end">
                <div href="#" className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
             hover:from-purple-600 hover:via-pink-600 hover:to-red-600
              text-white font-bold py-2 px-4 rounded-lg shadow-lg 
              transform transition duration-500 ease-in-out hover:scale-105 flex">
                    <span className="mr-1 font-bold"><span><img src={image} alt="" /></span></span> Contribute
                </div>
                <button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700
               hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                </button>
            </div>
        </div>
    );
};

export default Navbar;