import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
		<div className="bg-[#0b1620] text-gray-300 mt-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="flex flex-col items-center gap-4">
					<Link to="/" className="inline-flex items-center gap-3">
						<img src={logo} alt="React Apps Store" className="h-8 w-8 rounded-md" />
						<span className="text-xl font-bold text-white">React Apps Store</span>
					</Link>
					<p className="text-center text-sm text-gray-400">Discover, install and manage awesome apps built with React.</p>
					<div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
						<Link to="/" className="hover:text-white transition-colors">Home</Link>
						<Link to="/apps" className="hover:text-white transition-colors">Apps</Link>
						<Link to="/installation" className="hover:text-white transition-colors">Installation</Link>
                        </div>
                    </div>
                    </div>
			<div className="border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
					<p className="text-xs text-gray-500">© {new Date().getFullYear()} React Apps Store. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;