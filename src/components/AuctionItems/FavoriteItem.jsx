import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const FavoriteItem = ({item,handleClose}) => {
    
    const {id,title,bidsCount,currentBidPrice,image} = item;
    return (
        <div className='my-3'>
            <div className="flex gap-3 border-b-[1px] border-[#a2a2a2] pb-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src={image}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <h2 className="font-medium">{title}</h2>
                    <div className='flex md:flex-col lg:flex-row gap-5 md:gap-1 lg:gap-5'>
                        <p className='text-sm md:mt-1 lg:mt-0'>${currentBidPrice} </p>
                        <p className='text-sm'>Bids: {bidsCount}</p>
                    </div>
                </div>
                <div className='ml-auto'>
                    <button onClick={()=>handleClose(id)}><IoCloseSharp /></button>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItem;