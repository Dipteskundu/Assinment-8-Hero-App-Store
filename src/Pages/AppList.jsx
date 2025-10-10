import React, { useState, useMemo, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '@/Components/AppsCard/AppsCard';
import Loading from '@/Components/Loading/Loading';

const AppList = () => {
    const allApps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    // Filter apps based on search term
    const filteredApps = useMemo(() => {
        if (!searchTerm.trim()) {
            return allApps;
        }
        return allApps.filter(app => 
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allApps, searchTerm]);

    // Handle search with loading state
    const handleSearch = (value) => {
        setIsSearching(true);
        setSearchTerm(value);
        
        // Simulate search delay for better UX
        setTimeout(() => {
            setIsSearching(false);
        }, 300);
    };

    return (
        <div className="w-full px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a]">Our All Applications</h1>
                <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <p className="text-sm text-gray-600 font-semibold">({filteredApps?.length || 0}) Apps Found</p>
                <div className="relative w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Search Apps"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full sm:w-56 md:w-72 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    {isSearching && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <Loading size="small" text="" />
                        </div>
                    )}
                </div>
            </div>

            {isSearching ? (
                <div className="flex justify-center py-12">
                    <Loading size="medium" text="Searching apps..." />
                </div>
            ) : filteredApps.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-500 text-lg mb-2">No App Found</div>
                    <p className="text-gray-400">Try adjusting your search terms</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6'>
                    {filteredApps.map(app => (
                        <AppsCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AppList;


