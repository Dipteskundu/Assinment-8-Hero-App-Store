import React from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from '../Components/AppsCard/AppsCard';

const AppList = () => {
    const apps = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a]">Our All Applications</h1>
                <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600 font-semibold">({apps?.length || 0}) Apps Found</p>
                <input
                    type="text"
                    placeholder="search Apps"
                    className="w-56 md:w-72 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {apps.map(app => (
                    <AppsCard key={app.id} app={app} />
                ))}
            </div>
        </div>
    );
};

export default AppList;


