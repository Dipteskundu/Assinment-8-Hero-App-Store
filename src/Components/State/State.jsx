import React from 'react';

const State = () => {
    return (
        <div className="bg-purple-400 from-purple-500 to-purple-700 bg-gradient-to-r py-20 px-4 sm:px-6 lg:px-8 -mt-4">
            {/* Headline */}
            <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12 tracking-wide">
                Trusted By Millions, Built For You
            </h2>

            {/* Stats Container */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center space-y-12 md:space-y-0">

                {/* Stat 1: Total Downloads */}
                <div className="text-center text-white">
                    <p className="text-sm uppercase opacity-80 tracking-wider mb-2">Total Downloads</p>
                    <p className="text-5xl sm:text-5xl font-extrabold mb-1">29.6M</p>
                    <p className="text-base text-green-300">21% More Than Last Month</p>
                </div>

                {/* Stat 2: Total Reviews */}
                <div className="text-center text-white">
                    <p className="text-sm uppercase opacity-80 tracking-wider mb-2">Total Reviews</p>
                    <p className="text-5xl sm:text-5xl font-extrabold mb-1">906K</p>
                    <p className="text-base text-green-300">46% More Than Last Month</p>
                </div>

                {/* Stat 3: Active Apps */}
                <div className="text-center text-white">
                    <p className="text-sm uppercase opacity-80 tracking-wider mb-2">Active Apps</p>
                    <p className="text-5xl sm:text-5xl font-extrabold mb-1">132+</p>
                    <p className="text-base text-green-300">31 More Will Launch</p>
                </div>

            </div>
        </div>
    );
};

export default State;