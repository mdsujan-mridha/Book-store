import React, { Fragment, useEffect, useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import book1 from "../images/book/book-10.jpg";
import book2 from "../images/book/book-11.jpg";
import book3 from "../images/book/book-13.jpg";
import book4 from "../images/book/boook-17.jpg";

import book11 from "../images/book/book-01.jpg";
import book22 from "../images/book/book-03.jpg";
import book33 from "../images/book/book-04.jpg";
import book44 from "../images/book/book-05.jpg";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { clearErrors, postNewSellBook } from '../Action/sellBookAction';
import { toast } from 'react-toastify';
import { NEW_SELL_BOOK_RESET } from '../Constant/sellBookConstant';
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
        id: "5",
        img: book1,
        name: "How to Win Friends & Influence People",
        price: 120
    },
    {
        id: "6",
        img: book2,
        name: "You can win",
        price: 240
    },
    {
        id: "7",
        img: book3,
        name: "The Miracle Morning",
        price: 130,
    },
    {
        id: "8",
        img: book4,
        name: "my childhood",
        price: 150
    },

]
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Profile = () => {

    const dispatch = useDispatch();
    const { error, success, loading } = useSelector((state) => state.sellBook);

    const { user } = useSelector((state) => state.user);
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    // console.log(images);

    // set category 
    const categories = [
        "Romance",
        "History",
        "Philosophy",
        "Poetry",
        "Memoir",
        "Fantasy",
        "Science Fiction",
    ];

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (success) {
            toast.success(success);
            dispatch({ type: NEW_SELL_BOOK_RESET })
        }

    }, [dispatch, error, success])



    const createProductSubmit =  (e) => {
        e.preventDefault();

      
            const requestBody = {
                title: name,
                description: description,
                price: price,
                author: author,
                category: category,
                images: images, // To store Base64 encoded images
            };

            dispatch(postNewSellBook(requestBody));
        
    };




    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    }
    return (
        <Fragment>
            <div className='px-12 flex flex-col lg:flex-row gap-5 justify-between items-center pt-20'>
                <div> <AccountCircle className='text-primary' style={{ fontSize: 200 }} /> </div>
                <div className='w-96 h-14 rounded-xl bg-primary text-white text-xl font-bold text-center flex justify-center items-center'> {user?.name} </div>
                <div className='w-96 h-14 rounded-xl bg-primary text-white text-xl font-bold text-center flex justify-center items-center'> {user?.email} </div>
                <div
                    className='w-96 h-14 rounded-xl bg-primary text-white text-xl font-bold text-center flex justify-center items-center cursor-pointer'
                    onClick={handleClickOpen}
                > Sell Book </div>
            </div>
            {/* modal  */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"


            >

                <DialogTitle> {"Post your book for sell"} </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-title"></DialogContentText>

                    <form
                        className='flex justify-between items-center content-center flex-col w-full gap-5'
                        onSubmit={createProductSubmit}
                    >
                        <input type="text"
                            placeholder='Author'
                            className='w-full h-10 border-2 border-gray-300 rounded-xl px-5 outline-none'
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}


                        />

                        <input type="text"
                            placeholder='book name'
                            className='w-full h-10 border-2 border-gray-300 rounded-xl px-5 outline-none'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="number"
                            placeholder='price'
                            className='w-full h-10 border-2 border-gray-300 rounded-xl px-5 outline-none'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input type="text"
                            placeholder='description'
                            className='w-full h-10 border-2 border-gray-300 rounded-xl px-5 outline-none'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}

                        />
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-full h-10 border-2 border-gray-300 rounded-xl px-5 outline-none'
                        >
                            <option value="">Choose Category</option>
                            {categories.map((cate) => (
                                <option key={cate} value={cate}>
                                    {cate}
                                </option>
                            ))}
                        </select>
                        <input type="file"
                            name='images'
                            accept='image/*'
                            multiple
                            className='w-full h-10 border-2 border-gray-300 rounded-xl px-5 outline-none flex justify-center items-center'
                            onChange={createProductImagesChange}
                        />
                        <div>
                            {
                                imagesPreview.map((image) => (
                                    <div className='w-24 h-24 rounded-xl bg-gray-100 flex justify-center items-center mr-2'>
                                        <img src={image} alt='product preveiw' />
                                    </div>
                                ))
                            }
                        </div>
                        <input type="submit" value="Post" className='w-full h-10 bg-primary rounded-full text-white' />
                    </form>

                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className='w-28 h-10 bg-primary rounded-full text-white'>Cancel</button>

                </DialogActions>

            </Dialog>

            {/* my sell book */}
            <div style={{ maxWidth: '1624px', margin: "0 auto" }}>
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