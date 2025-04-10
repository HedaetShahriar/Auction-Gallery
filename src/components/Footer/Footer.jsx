import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white px-2.5'>
            <div className='container mx-auto flex-col py-12 md:py-14 lg:py-20 text-center'>
                <div>
                    <h1 className='font-medium text-3xl text-[#003EA4]'>Auction<span className='font-bold text-[#FFD337]'>House</span></h1>
                </div>
                <div className='flex font-medium justify-center gap-2 lg:gap-4 text-xl mt-2 md:mt-3'>
                    <p>Bid.</p>
                    <p>Win.</p>
                    <p>Own.</p>
                </div>
                <ul className='flex flex-col md:flex-row justify-center gap-2 md:gap-4 lg:gap-8 text-xl my-4 md:my-6'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Auction</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">How it works</a></li>
                </ul>
                <p className='mt-2'>@2025 HedaetShahriar. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;