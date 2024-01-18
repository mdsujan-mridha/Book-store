import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRequestBooks } from '../Action/requestBookAction';
import { clearErrors } from '../Action/sellBookAction';
import { toast } from 'react-toastify';
import BookCard from '../Books/BookCard';
import Loader from '../Layout/Loader';

const RequestBook = () => {

    const dispatch = useDispatch();

    const { requestBooks, loading, error } = useSelector((state) => state.requestBooks);
    const books = requestBooks.slice(0, 4);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllRequestBooks());

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
                                <div className='w-full flex justify-between items-center content-center'>
                                    <p className='text-lg font-bold text-gray-500'>Request Book </p>
                                    <Link className='text-lg font-bold text-gray-500'> View all </Link>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                                    {
                                        books &&
                                        books?.map((item) => (
                                            <BookCard
                                                key={item?._id}
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

export default RequestBook;