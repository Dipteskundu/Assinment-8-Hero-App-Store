import React from 'react';
import PlayIcon from '../../assets/google-play.png'
import Apps from '../../assets//apps.png'
import HeroImage from '../../assets/hero.png'
import State from '../State/State';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen mb-0 w-full">
                <div className="hero-content text-center w-full px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl">
                        <h1 className="text-5xl font-bold mt-10">We Build <br />
                            <span className='text-purple-500'>Productive</span> Apps</h1>
                        <p className="py-4 sm:py-5 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                            Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8">
                            <a
                                href="https://play.google.com/store/games?device=windows"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-success w-full sm:w-auto px-6 py-3 text-sm sm:text-base flex items-center justify-center gap-2"
                            >
                                <img className='w-6 h-6 sm:w-8 sm:h-8' src={PlayIcon} alt="Google Play" />
                                <span>Google Play</span>
                            </a>
                            <a
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-success w-full sm:w-auto px-6 py-3 text-sm sm:text-base flex items-center justify-center gap-2"
                            >
                                <img className='w-5 h-5 sm:w-6 sm:h-6' src={Apps} alt="App Store" />
                                <span>App Store</span>
                            </a>
                        </div>
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <img
                                className='w-full max-w-4xl mx-auto h-auto'
                                src={HeroImage}
                                alt="Hero Apps Preview"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <State></State>
        </div>
    );
};

export default Banner;