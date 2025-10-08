import React, { useEffect, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function formatDownloads(count) {
    if (typeof count !== 'number') return count;
    return count >= 1000000 ? `${(count / 1000000).toFixed(0)}M` : count.toLocaleString();
}

function InstalledAppRow({ app, onUninstall }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
                    {app.image ? (
                        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-[#e6e6e6]" />
                    )}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-[#08202a]">{app.title}</h3>
                    <div className="mt-1 flex items-center gap-4 text-sm">
                        <span className="inline-flex items-center gap-1 bg-green-50 px-2 py-1 rounded border border-transparent text-green-600 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 14a1 1 0 011-1h12a1 1 0 011 1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1zM7 8a1 1 0 012 0v3h2V8a1 1 0 112 0v3a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd" /></svg>
                            {formatDownloads(app.downloads)}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-orange-50 px-2 py-1 rounded border border-transparent text-[#b84f05] font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.84-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" /></svg>
                            {app.ratingAvg}
                        </span>
                        <span className="text-gray-500">{app.size} MB</span>
                    </div>
                </div>
            </div>
            <button onClick={() => onUninstall(app.id)} className="self-start md:self-auto px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md">Uninstall</button>
        </div>
    );
}

const Installation = () => {
    const allApps = useLoaderData();
    const [installedIds, setInstalledIds] = useState([]);
    const [sortOrder, setSortOrder] = useState('high-low');

    useEffect(() => {
        const ids = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledIds(ids);
    }, []);

    const installedApps = useMemo(() => {
        if (!Array.isArray(allApps)) return [];
        const idSet = new Set(installedIds);
        const appsOnly = allApps.filter(app => idSet.has(app.id));
        const sorted = [...appsOnly].sort((a, b) => {
            const aVal = Number(a.downloads) || 0;
            const bVal = Number(b.downloads) || 0;
            if (sortOrder === 'high-low') return aVal - bVal; // ascending
            return bVal - aVal; // descending
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
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a]">Your Installed Apps</h1>
                    <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
                </header>

                <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-600 font-semibold">{installedApps.length} Apps Found</p>
                    <div className="flex items-center gap-2">
                        <label htmlFor="sortOrder" className="text-sm text-gray-600">Sort by Downloads</label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="px-3 py-2 rounded-md text-sm bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <option value="high-low">High-Low</option>
                            <option value="low-high">Low-High</option>
                        </select>
                    </div>
                </section>

                <main className="space-y-4">
                    {installedApps.map(app => (
                        <InstalledAppRow key={app.id} app={app} onUninstall={handleUninstall} />
                    ))}

                    {installedApps.length === 0 && (
                        <div className="text-center text-gray-500 py-12">No installed apps yet.</div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Installation;
