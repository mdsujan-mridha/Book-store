import React from 'react';
import BookDetailsModal from './BookDetailsModal';
import bookImage from "../images/book/book-01.jpg";

const BookCard = ({ item }) => {
    return (
        <div key={item._id} className=' w-full lg:w-96 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 h-auto hover:shadow-2xl pb-5'>
            <img src={item?.images ? item?.images[0].url : bookImage} alt={item?.name} className='pt-5 w-80 h-80 rounded-md' />
            <h2 className='text-center pb-3 font-bold text-lg pt-2'> {item.name} </h2>
            <BookDetailsModal item={item} />
        </div>
    );
};

export default BookCard;