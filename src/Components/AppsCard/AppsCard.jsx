import React from 'react';
import { Link } from 'react-router-dom';

const AppsCard = ({ app }) => {
    const { id, image, title, companyName, downloads, ratingAvg } = app;
    
    // Format downloads to show in millions (M) if over 1,000,000
    const formattedDownloads = downloads >= 1000000 
        ? `${(downloads / 1000000).toFixed(1)}M` 
        : downloads.toLocaleString();
    
    return (
        <Link to={`/app/${id}`} className="block h-full ">
            <div className="bg-white rounded-lg shadow-md border-4 border-transparent p-4 sm:p-6 md:p-5 lg:p-6 xl:p-7 hover:border-blue-500 transition-all duration-300 cursor-pointer h-full flex flex-col ">
                {/* Image area */}
                <div className="rounded-lg overflow-hidden bg-gray-200 h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 flex items-center justify-center flex-shrink-0">
                    {image ? (
                        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
                    ) : (
                        <div className="w-full h-full rounded-md bg-[#e6e6e6] flex items-center justify-center">
                            <span className="text-gray-400 text-sm">Image placeholder</span>
                        </div>
                    )}
                </div>

                {/* Content area */}
                <div className="flex-1 flex flex-col justify-between mt-3 sm:mt-4 md:mt-5">
                    <div>
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl xl:text-2xl font-semibold text-[#08202a] leading-tight line-clamp-2">
                            {title}
                        </h3>
                        
                        {/* Company name */}
                        <p className="text-gray-500 mt-1 text-sm sm:text-base md:text-lg line-clamp-1">{companyName}</p>
                    </div>

                    {/* Bottom row with download badge and rating */}
                    <div className="mt-3 sm:mt-4 md:mt-5 flex flex-row sm:flex-row sm:justify-end gap-2 sm:gap-5 md:gap-6">
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-green-50 border border-transparent rounded-md px-2 sm:px-3 md:px-3.5 py-1.5 sm:py-2 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 14a1 1 0 011-1h12a1 1 0 011 1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1zM7 8a1 1 0 012 0v3h2V8a1 1 0 112 0v3a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd" />
                                </svg>
                                <span className="text-green-600 font-semibold text-sm sm:text-base md:text-base">{formattedDownloads}</span>
                            </div>
                        </div>

                        <div className="flex items-center navbar-end ml-21 sm:ml-0">
                            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-orange-50 rounded-md px-2 sm:px-3 md:px-3.5 py-1.5 sm:py-2 shadow-sm border border-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.84-.196-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-[#b84f05] font-semibold text-sm sm:text-base md:text-base">{ratingAvg}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppsCard;