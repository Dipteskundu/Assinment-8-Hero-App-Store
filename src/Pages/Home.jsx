import React from 'react';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import AppsCard from '../Components/AppsCard/AppsCard';

const Home = () => {
    const apps = useLoaderData();
    
    return (
        <div className="container mx-auto px-4 py-8">
            <Banner />
            
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6 text-[#08202a]">Popular Apps</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {apps.slice(0, 8).map(app => (
                        <AppsCard key={app.id} app={app} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;