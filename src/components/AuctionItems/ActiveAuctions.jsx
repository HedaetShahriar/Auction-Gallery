import React from 'react';
import Item from './Item.jsx';
import { useEffect,useState } from 'react';

import { FaRegHeart,FaHeart } from "react-icons/fa";
import FavoriteItem from './FavoriteItem.jsx';

const ActiveAuctions = ({addFavorite,removeFavorite}) => {
    
    const [favoriteId, setFavoriteId] = useState([]);
    const [totalBId, setTotalBid] = useState(0);
    const [favorites, setFavorites] = useState([]);

    const handleFavorite = (item) => {
        setTotalBid(totalBId + item.currentBidPrice);
        setFavorites([...favorites, item]);
        addFavorite(item.title);
        setFavoriteId([...favoriteId, item.id]);
    }
    const handleClose = (id) => {
        const newFavorites = favorites.filter(item => item.id !== id);      
        setFavorites(newFavorites);
        const item = favorites.find(item => item.id === id);
        if(item){
            setTotalBid(totalBId - item.currentBidPrice);
        }
        removeFavorite(item.title);
        const newFavoriteId = favoriteId.filter(item => item !== id);
        setFavoriteId(newFavoriteId);
    }

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./bidItems.json')
            .then(response => response.json())
            .then(data => {
                setItems(data);
            });
    }, []);
    
    return (
        <div className='container mx-auto py-12 md:py-14 lg:py-20 px-2.5'>
            <h1 className='text-[#0E2954] font-medium text-center md:text-left text-3xl'>Active Auctions</h1>
            <p className='text-xl text-center md:text-left mt-3 md:mt-5 mb-6 md:mb-8'>Discover and bid on extraordinary Items</p>

            <div className='flex flex-col md:flex-row gap-6 md:items-start'>
                <div className='bg-white rounded-3xl md:w-[calc(70%-24px)] overflow-x-scroll md:overflow-hidden p-2 md:p-3 lg:p-5'>
                    <table className="table w-full">
                        <thead className='text-center'>
                            <tr>
                                <th className='text-left'>Items</th>
                                <th>Current Bid</th>
                                <th>Time left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item) => <Item handleFavorite={handleFavorite} isFavorite={favoriteId.includes(item.id)} key={item.id} item={item}></Item>)
                                
                            }
                        </tbody>
                    </table>
                </div>
                {/* favorite items */}
                <div className='bg-white rounded-3xl md:w-[30%] p-4 lg:p-5'>
                    <div className='flex justify-center items-center gap-3 border-b-[1px] border-[#a2a2a2] pb-3'>
                        <FaRegHeart className='md:hidden lg:block' size={22}/> 
                        <h1 className='font-medium text-2xl'>Favorite Items</h1>
                    </div>
                    {favorites.length > 0 ? favorites.map((item) => <FavoriteItem  key={item.id} item={item} handleClose={handleClose}></FavoriteItem>)
                     : 
                    <div className='text-center mt-5 border-b-[1px] border-[#a2a2a2] pb-5'>
                        <h2 className='font-medium text-2xl mb-5'>No favorites yet</h2>
                        <p>Click the heart icon on any item to add it to your favorites</p>
                    </div>}
                    <div className='flex justify-between items-center mt-3'>
                        <p>Total bids Amount</p>
                        <p>${totalBId}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActiveAuctions;