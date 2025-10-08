import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
    const app = useLoaderData();
    const [isInstalled, setIsInstalled] = useState(false);
    
    const { 
        id,
        image, 
        title, 
        companyName, 
        description, 
        size, 
        reviews, 
        ratingAvg, 
        downloads, 
        ratings 
    } = app;

    // Check localStorage on component mount
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (installedApps.includes(id)) {
            setIsInstalled(true);
        }
    }, [id]);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Format downloads to show in millions (M) if over 1,000,000
    const formattedDownloads = downloads >= 1000000 
        ? `${(downloads / 1000000).toFixed(0)}M` 
        : downloads.toLocaleString();

    // Format reviews to show in thousands (K) if over 1,000
    const formattedReviews = reviews >= 1000 
        ? `${(reviews / 1000).toFixed(0)}K` 
        : reviews.toLocaleString();

    const handleInstall = () => {
        // Save to localStorage
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (!installedApps.includes(id)) {
            installedApps.push(id);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
        }
        
        setIsInstalled(true);
        toast.success("App installed successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="w-full px-4 py-8">
            <ToastContainer />
            
            {/* App Information Section */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-8">
                {/* App Image */}
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="rounded-lg overflow-hidden bg-gray-200 h-64 flex items-center justify-center">
                        {image ? (
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full rounded-md bg-[#e6e6e6] flex items-center justify-center">
                                <span className="text-gray-400">Image placeholder</span>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* App Details */}
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <h1 className="text-3xl font-bold text-[#08202a]">{title}</h1>
                    <p className="text-gray-600 mt-1">{companyName}</p>
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Downloads */}
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <p className="text-sm text-gray-500 mt-1">Downloads</p>
                            <p className="text-2xl font-bold text-[#08202a]">{formattedDownloads}</p>
                        </div>
                        
                        {/* Average Rating */}
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <p className="text-sm text-gray-500 mt-1">Average Rating</p>
                            <p className="text-2xl font-bold text-[#08202a]">{ratingAvg}</p>
                        </div>
                        
                        {/* Total Reviews */}
                        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
                            <p className="text-2xl font-bold text-[#08202a]">{formattedReviews}</p>
                        </div>
                    </div>
                    
                    {/* Install Button */}
                    <div className="mt-6">
                        <button 
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`px-6 py-3 rounded-md text-white font-medium transition-all ${
                                isInstalled 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-green-500 hover:bg-green-600'
                            }`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* App Review Chart */}
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#08202a]">Ratings</h2>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={ratings}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis 
                                dataKey="name" 
                                type="category" 
                                tickFormatter={(value) => value.replace(/-$/, '')}
                            />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF9800" barSize={30} radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            {/* App Description */}
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-[#08202a]">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;