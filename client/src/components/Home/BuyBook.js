import React, { Fragment, useEffect } from 'react';


import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSellBooks } from '../Action/sellBookAction';

const ExchangeBook = () => {

    const dispatch = useDispatch();

    const { sellBooks, loading, error } = useSelector((state) => state.sellBooks);



    useEffect(() => {

        dispatch(getAllSellBooks());

    }, [dispatch])

    console.log(sellBooks);

    return (
        <Fragment>
            <div className="px-12 mt-9 pb-2">
                <div className='w-full flex justify-between items-center content-center'>
                    <p className='text-lg font-bold text-gray-500'>Buy Book</p>
                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                    {
                        sellBooks &&
                        sellBooks?.map((item) => (
                            <div key={item.id} className=' w-full h-80 lg:w-56 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 border-gray-200 border-solid hover:shadow-2xl'>
                                <img src={item?.images[0].url} alt={item?.name} className='w-52 h-52 rounded-xl pt-1' />
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