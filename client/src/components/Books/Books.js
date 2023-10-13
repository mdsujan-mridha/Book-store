import React from 'react';
import book1 from "../images/book/book-01.jpg";
import book2 from "../images/book/book-03.jpg";
import book3 from "../images/book/book-04.jpg";
import book4 from "../images/book/book-05.jpg";
import BookCard from './BookCard';

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
    {
        id: "5",
        img: book4,
        name: "my childhood"
    },
    {
        id: "6",
        img: book2,
        name: "You can win"
    },
    {
        id: "7",
        img: book3,
        name: "The Miracle Morning"
    },
    {
        id: "8",
        img: book1,
        name: "How to Win Friends & Influence People"
    },

]

const Books = () => {
    return (
        <div className=' px-12'>
            <h1 className='text-left text-xl font-bold pt-12'> Book Request </h1>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    fakeData &&
                    fakeData?.map((item) => (
                        <BookCard
                            key={item?.id}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;