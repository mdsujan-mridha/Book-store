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
        name: "How to Win Friends & Influence People",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "2",
        img: book2,
        name: "You can win",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "3",
        img: book3,
        name: "The Miracle Morning",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "4",
        img: book4,
        name: "my childhood",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "5",
        img: book4,
        name: "my childhood",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "6",
        img: book2,
        name: "You can win",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "7",
        img: book3,
        name: "The Miracle Morning",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 200,
        category: 'Science',
        author: 'David Warner'
    },
    {
        id: "8",
        img: book1,
        name: "How to Win Friends & Influence People",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 250,
        category: 'Sports',
        author: 'Maxwell'
    },

]

const ExChangeBooks = () => {
    return (
        <div>
            <div className=' px-12'>
                <h1 className='text-left text-xl font-bold pt-12'> Exchange Book </h1>
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
        </div>
    );
};

export default ExChangeBooks;