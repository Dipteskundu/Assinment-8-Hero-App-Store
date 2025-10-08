import React from 'react';
import PlayIcon from '../../assets/google-play.png'
import Apps from '../../assets//apps.png'
import HeroImage from '../../assets/hero.png'
import State from '../State/State';

const Banner = () => {
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen mb-0">
            <div className="hero-content text-center">
                <div className="max-w-200">
                    <h1 className="text-5xl font-bold mt-10">We Build <br />
                        <span className='text-purple-500'>Productive</span> Apps</h1>
                    <p className="py-5">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <button className="btn btn-outline btn-success w-38 mr-5"> <span> <img className='w-8 h-8' src={PlayIcon} alt="" /></span>Google Play</button>
                    <button className="btn btn-outline btn-success w-38"><span><img className='w-6 h-6' src={Apps} alt="" /></span>App Store</button>
                    <img className='mt-10' src={HeroImage} alt="" />
                </div>

            </div>
        </div>
        <State></State>
        </div>
    );
};

export default Banner;