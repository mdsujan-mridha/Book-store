import React, { Fragment } from 'react';

import book1 from "../images/book/book-01.jpg";
import book2 from "../images/book/book-03.jpg";
import book3 from "../images/book/book-04.jpg";
import book4 from "../images/book/book-05.jpg";
import { Link } from 'react-router-dom';

const ExchangeBook = () => {

    const fakeData = [
        {
            id: "1",
            img: book1,
            name: "How to Win Friends & Influence People"
        },
        {
            id: "2",
            img: book2,
            name: "You can win"
        },
        {
            id: "3",
            img: book3,
            name: "The Miracle Morning"
        },
        {
            id: "4",
            img: book4,
            name: "my childhood"
        },

    ]

    return (
        <Fragment>
            <div className="px-12 mt-9 pb-2">
                <div className='flex justify-between items-center content-center'>
                    <p className='text-lg font-bold text-gray-500'>Exchange Book</p>
                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                    {
                        fakeData &&
                        fakeData?.map((item) => (
                            <div key={item.id} className=' w-full lg:w-56 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 border-gray-200 border-solid h-80 hover:shadow-2xl'>
                                <img src={item?.img} alt={item?.name} className='w-52 h-52 rounded-md' />
                                <h2 className='text-center pb-3 font-bold text-lg pt-2'> {item.name} </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default ExchangeBook;