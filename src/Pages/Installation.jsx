import React, { useEffect, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@/Components/Loading/Loading';

function formatDownloads(count) {
    if (typeof count !== 'number') return count;
    return count >= 1000000 ? `${(count / 1000000).toFixed(0)}M` : count.toLocaleString();
}

function InstalledAppRow({ app, onUninstall }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center flex-shrink-0">
                    {app.image ? (
                        <img 
                            src={app.image} 
                            alt={app.title} 
                            className="w-full h-full object-cover object-center" 
                        />
                    ) : (
                        <div className="w-full h-full bg-[#e6e6e6] flex items-center justify-center">
                            <span className="text-gray-400 text-xs">No Image</span>
                        </div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#08202a] mb-2 line-clamp-2">{app.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-transparent text-green-600 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 14a1 1 0 011-1h12a1 1 0 011 1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1zM7 8a1 1 0 012 0v3h2V8a1 1 0 112 0v3a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd" /></svg>
                            {formatDownloads(app.downloads)}
                        </span>
                        <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-transparent text-[#b84f05] font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.84-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" /></svg>
                            {app.ratingAvg}
                        </span>
                        <span className="text-gray-500 font-medium">{app.size} MB</span>
                    </div>
                </div>
            </div>
            <button 
                onClick={() => onUninstall(app.id)} 
                className="w-full sm:w-auto self-start lg:self-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Uninstall
            </button>
        </div>
    );
}

const Installation = () => {
    const allApps = useLoaderData();
    const [installedIds, setInstalledIds] = useState([]);
    const [sortOrder, setSortOrder] = useState('high-low');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledIds(ids);
        setIsLoading(false);
    }, []);

    const installedApps = useMemo(() => {
        if (!Array.isArray(allApps)) return [];
        const idSet = new Set(installedIds);
        const appsOnly = allApps.filter(app => idSet.has(app.id));
        const sorted = [...appsOnly].sort((a, b) => {
            const aVal = Number(a.size) || 0;
            const bVal = Number(b.size) || 0;
            if (sortOrder === 'high-low') return bVal - aVal; // High to Low (MB)
            return aVal - bVal; // Low to High (MB)
        });
        return sorted;
    }, [allApps, installedIds, sortOrder]);

    const handleUninstall = (id) => {
        const next = installedIds.filter(appId => appId !== id);
        setInstalledIds(next);
        localStorage.setItem('installedApps', JSON.stringify(next));
        toast.info('App uninstalled.', { position: 'top-right', autoClose: 2500 });
    };

    return (
        <div className="w-full px-4 py-8">
            <ToastContainer />

            <div className="w-full">
                <header className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a] mb-3">Your Installed Apps</h1>
                    <p className="text-gray-500 text-lg">Manage and organize your installed applications</p>
                </header>

                <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <p className="text-sm text-gray-600 font-semibold">{installedApps.length} Apps Installed</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <label htmlFor="sortOrder" className="text-sm text-gray-600 font-medium">Sort by Size:</label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="px-3 sm:px-4 py-2 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 w-full sm:w-auto"
                        >
                            <option value="high-low">High to Low</option>
                            <option value="low-high">Low to High</option>
                        </select>
                    </div>
                </section>

                <main className="space-y-4">
                    {isLoading ? (
                        <div className="flex justify-center py-12">
                            <Loading size="large" text="Loading installed apps..." />
                        </div>
                    ) : (
                        <>
                            {installedApps.map(app => (
                                <InstalledAppRow key={app.id} app={app} onUninstall={handleUninstall} />
                            ))}

                            {installedApps.length === 0 && (
                                <div className="text-center py-16">
                                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Apps Installed</h3>
                                    <p className="text-gray-500 mb-6">Install some apps from the Apps page to see them here.</p>
                                    <a 
                                        href="/apps" 
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        Browse Apps
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Installation;
