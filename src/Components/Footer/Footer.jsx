import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">

                    <div className="col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <a href="#" className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl font-bold text-white">HERO.IO</span>
                        </a>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
                            Crafting innovative digital experiences that truly make an impact.
                        </p>
                        <div className="mt-4 sm:mt-6 flex space-x-3 sm:space-x-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <span className="text-lg sm:text-xl">📘</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <span className="text-lg sm:text-xl">🐦</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <span className="text-lg sm:text-xl">📸</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm sm:text-md font-semibold text-white tracking-wider uppercase">Product</h3>
                        <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">All Apps</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">All Courses</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Pricing & Plans</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm sm:text-md font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                                Careers 
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-pink-500 text-white">Hiring</span>
                            </a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Press & Media</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm sm:text-md font-semibold text-white tracking-wider uppercase">Resources</h3>
                        <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Blog & Articles</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <h3 className="text-sm sm:text-md font-semibold text-white tracking-wider uppercase">Legal</h3>
                        <ul role="list" className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors">Security</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-gray-800 py-4 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-3 sm:gap-0">
                    <p className="order-2 sm:order-1 mt-2 sm:mt-0 text-center sm:text-left">&copy; 2025 HERO.IO. All rights reserved.</p>
                    <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-left">
                        <a href="#" className="hover:text-indigo-400 transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;