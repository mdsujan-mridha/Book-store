import React, { Fragment } from 'react';

import book1 from "../images/book/book-10.jpg";
import book2 from "../images/book/book-11.jpg";
import book3 from "../images/book/book-13.jpg";
import book4 from "../images/book/boook-17.jpg";

import { Link } from 'react-router-dom';

const ExchangeBook = () => {

    const fakeData = [
        {
            id: "1",
            img: book1,
            name: "How to Win Friends & Influence People",
            price: 120
        },
        {
            id: "2",
            img: book2,
            name: "You can win",
            price: 240
        },
        {
            id: "3",
            img: book3,
            name: "The Miracle Morning",
            price: 130,
        },
        {
            id: "4",
            img: book4,
            name: "my childhood",
            price: 150
        },

    ]

    return (
        <Fragment>
            <div className="px-12 mt-9 pb-2">
                <div className='w-full flex justify-between items-center content-center'>
                    <p className='text-lg font-bold text-gray-500'>Buy Book</p>
                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                    {
                        fakeData &&
                        fakeData?.map((item) => (
                            <div key={item.id} className=' w-full h-80 lg:w-56 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 border-gray-200 border-solid hover:shadow-2xl'>
                                <img src={item?.img} alt={item?.name} className='w-52 h-52 rounded-xl pt-1' />
                                <div className='pb-3'>
                                    <h2 className='text-center font-bold text-lg pt-2'> {item.name} </h2>
                                    <p className='text-md font-semibold px-2 text-left text-orange-500'>Price: ${item?.price} </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default ExchangeBook;