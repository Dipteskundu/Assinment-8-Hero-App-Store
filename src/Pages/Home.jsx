import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import AppsCard from '../Components/AppsCard/AppsCard';
import Loading from '../Components/Loading/Loading';

const Home = () => {
    const apps = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        if (apps && apps.length > 0) {
            setIsLoading(false);
        }
    }, [apps]);
    
    return (
        <div className="w-full">
            <Banner />
            
            <div className="mt-8 px-4">
                <h2 className="text-2xl font-bold mb-6 text-[#08202a]">Popular Apps</h2>
                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <Loading size="large" text="Loading popular apps..." />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6'>
                        {apps.slice(0, 8).map(app => (
                            <AppsCard key={app.id} app={app} />
                        ))}
                    </div>
                )}

                <div className="flex justify-center my-10">
                    <Link 
                        to="/apps"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                        All apps
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;