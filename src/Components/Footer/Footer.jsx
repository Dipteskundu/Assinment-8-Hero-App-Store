import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-gray-900 text-white border-t border-gray-800">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

                    <div class="col-span-2 lg:col-span-1">
                        <a href="#" class="flex items-center space-x-2">
                            <span class="text-2xl font-bold text-white">HERO.IO</span>
                        </a>
                        <p class="mt-4 text-sm text-gray-400">
                            Crafting innovative digital experiences that truly make an impact.
                        </p>
                        <div class="mt-6 flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
                                <span class="sr-only">Facebook</span>
                                <i class="fab fa-facebook-f text-xl"></i> <span class="text-xl">📘</span>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
                                <span class="sr-only">Twitter</span>
                                <span class="text-xl">🐦</span>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors">
                                <span class="sr-only">Instagram</span>
                                <span class="text-xl">📸</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-md font-semibold text-white tracking-wider uppercase">Product</h3>
                        <ul role="list" class="mt-4 space-y-3">
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">All Apps</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">All Courses</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Pricing & Plans</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-md font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul role="list" class="mt-4 space-y-3">
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Careers <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-500 text-white">Hiring</span></a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Press & Media</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-md font-semibold text-white tracking-wider uppercase">Resources</h3>
                        <ul role="list" class="mt-4 space-y-3">
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Blog & Articles</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Customer Stories</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    <div class="col-span-2 md:col-span-4 lg:col-span-1">
                        <h3 class="text-md font-semibold text-white tracking-wider uppercase">Legal</h3>
                        <ul role="list" class="mt-4 space-y-3">
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" class="text-base text-gray-400 hover:text-indigo-400 transition-colors">Security</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div class="border-t border-gray-800 py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p class="order-2 md:order-1 mt-4 md:mt-0">&copy; 2025 HERO.IO. All rights reserved.</p>
                    <div class="order-1 md:order-2 space-x-4">
                        <a href="#" class="hover:text-indigo-400 transition-colors">Sitemap</a>
                        <a href="#" class="hover:text-indigo-400 transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;