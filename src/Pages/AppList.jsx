import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '../Components/AppsCard/AppsCard';

const AppList = () => {
    const allApps = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter apps based on search term
    const filteredApps = useMemo(() => {
        if (!searchTerm.trim()) {
            return allApps;
        }
        return allApps.filter(app => 
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allApps, searchTerm]);

    return (
        <div className="w-full px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a]">Our All Applications</h1>
                <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600 font-semibold">({filteredApps?.length || 0}) Apps Found</p>
                <input
                    type="text"
                    placeholder="Search Apps"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-56 md:w-72 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>

            {filteredApps.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-500 text-lg mb-2">No App Found</div>
                    <p className="text-gray-400">Try adjusting your search terms</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filteredApps.map(app => (
                        <AppsCard key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AppList;


