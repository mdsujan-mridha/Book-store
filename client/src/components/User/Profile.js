import React, { Fragment } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import book1 from "../images/book/book-10.jpg";
import book2 from "../images/book/book-11.jpg";
import book3 from "../images/book/book-13.jpg";
import book4 from "../images/book/boook-17.jpg";

import book11 from "../images/book/book-01.jpg";
import book22 from "../images/book/book-03.jpg";
import book33 from "../images/book/book-04.jpg";
import book44 from "../images/book/book-05.jpg";
const ExChangeBookData = [
    {
        id: "1",
        img: book11,
        name: "How to Win Friends & Influence People"
    },
    {
        id: "2",
        img: book22,
        name: "You can win"
    },
    {
        id: "3",
        img: book33,
        name: "The Miracle Morning"
    },
    {
        id: "4",
        img: book44,
        name: "my childhood"
    },

]
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
const Profile = () => {

    const { user } = useSelector((state) => state.user);


    return (
        <Fragment>
                    
                 <div className='px-12  flex justify-between items-center pt-20'>
                <div> <AccountCircle className='text-primary' style={{ fontSize: 200 }} /> </div>
                <div className='w-96 h-14 rounded-xl bg-primary text-white text-xl font-bold text-center flex justify-center items-center'> {user?.name} </div>
                <div className='w-96 h-14 rounded-xl bg-primary text-white text-xl font-bold text-center flex justify-center items-center'> {user?.email} </div>
            </div>
            {/* my sell book */}
            <div style={{ maxWidth:'1624px',margin:"0 auto" }}>   
            <Fragment>
                <div className="px-12 mt-9 pb-2">
                    <div className='w-full flex justify-between items-center content-center'>
                        <p className='text-lg font-bold text-gray-500'>My Sell Book</p>

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
            {/* request book  */}
            <Fragment>
                <div className="px-12 mt-9 pb-2">
                    <div className='flex justify-between items-center content-center'>
                        <p className='text-lg font-bold text-gray-500'>My Requested Book</p>
                        
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-9 justify-center items-center content-center gap-5 lg:gap-0'>
                        {
                            ExChangeBookData &&
                            ExChangeBookData?.map((item) => (
                                <div key={item.id} className=' w-full lg:w-56 flex flex-col justify-center  items-center content-center gap-3 shadow-md rounded-md border-2 border-gray-200 border-solid h-80 hover:shadow-2xl'>
                                    <img src={item?.img} alt={item?.name} className='w-52 h-52 rounded-md' />
                                    <h2 className='text-center pb-3 font-bold text-lg pt-2'> {item.name} </h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
            </div>

        </Fragment>
    );
};

export default Profile;