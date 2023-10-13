import React from 'react';
import BookDetailsModal from './BookDetailsModal';

const BookCard = ({ item }) => {
    return (
        <div key={item.id} className=' w-full lg:w-56 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 h-auto hover:shadow-2xl pb-2'>
            <img src={item?.img} alt={item?.name} className='w-52 h-52 rounded-md' />
            <h2 className='text-center pb-3 font-bold text-lg pt-2'> {item.name} </h2>
            <BookDetailsModal item={item}/> 
        </div>
    );
};

export default BookCard;