import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '@/assets/Error-App-Not-Found.png';

const ErrorAppNotFound = () => {
    return (
        <section className="w-full px-4 py-16">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <div className="w-full max-w-md mb-8">
                    <img
                        src={errorImage}
                        alt="App not found"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#08202a] mb-3">App Not Found</h1>
                <p className="text-gray-500 mb-8 max-w-2xl">
                    The application you are looking for doesn't exist or the id is incorrect.
                </p>
                <Link
                    to="/apps"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors duration-200"
                >
                    Go Back
                </Link>
            </div>
        </section>
    );
};

export default ErrorAppNotFound;


