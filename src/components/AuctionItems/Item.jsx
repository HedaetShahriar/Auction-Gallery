import React, {useState } from 'react';
import { FaRegHeart,FaHeart } from "react-icons/fa";


const Items = ({item,handleFavorite}) => {
    // console.log(closeBtnStatus)
    // console.log(handleFavorite)
    const [isFavorite, setFavorite] = useState(false);
    const handleClick = () => {
        setFavorite(true);
        handleFavorite(item);
    }
    const {title,currentBidPrice, timeLeft,image} = item;
    return (
        <>
            <tbody >
                <tr className='border-b-[0.5px] border-[#ebeaea] py-2 md:py-4'>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={image}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-medium">{title}</div>
                            </div>
                        </div>
                    </td>
                    <td className='text-center'>
                        ${currentBidPrice}
                    </td>
                    <td className='text-center'>
                        {timeLeft}
                    </td>
                    <td className='text-center'>
                        <button onClick={handleClick} className={`text-2xl  ${isFavorite?'text-red-500 cursor-not-allowed':'text-gray-500 cursor-pointer'}`} disabled={isFavorite}>
                            {isFavorite?<FaHeart />:<FaRegHeart />}</button>
                    </td>
                </tr>

            </tbody>
        </>
            
            
            
    );
};

export default Items;