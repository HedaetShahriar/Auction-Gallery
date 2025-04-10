import React from 'react';
import bannerImage from '../../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero px-2.5"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                }}
            >
                <div className='container mx-auto text-white py-12 md:py-14 lg:py-20 text-center md:text-left'>
                    <h1 className='md:w-3/4 lg:w-3/5 text-3xl md:text-4xl lg:text-5xl font-semibold'>Bid on Unique Items from Around the World</h1>
                    <p className='md:w-3/4 lg:w-3/5 text-base md:text-xl lg:text-2xl font-light mt-2 md:mt-3 lg:mt-5 mb-4 md:mb-6 lg:mb-8'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                    <button className='bg-white text-black rounded-4xl font-medium text-xl py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8'>Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;