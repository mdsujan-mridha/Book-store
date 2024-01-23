import React, { Fragment, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAllExchangeBooks } from '../Action/exchangeBookAction';
import BookCard from '../Books/BookCard';
import { toast } from 'react-toastify';
import { clearErrors } from '../Action/sellBookAction';
import Loader from '../Layout/Loader';


const ExchangeBook = () => {

    const dispatch = useDispatch();

    const { exchangeBooks, loading, error } = useSelector(state => state.exchangeBooks);


    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }

        dispatch(getAllExchangeBooks());

    }, [dispatch, error])

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>
                            <div className="px-12 mt-9 pb-2">
                                <div className='flex justify-between items-center content-center'>
                                    <p className='text-lg font-bold text-gray-500'>Exchange Book</p>
                                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                                    {
                                        exchangeBooks &&
                                        exchangeBooks?.map((item) => (
                                            <BookCard
                                                key={item._id}
                                                item={item}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default ExchangeBook;