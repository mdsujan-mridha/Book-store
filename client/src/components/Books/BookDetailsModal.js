import styled from '@emotion/styled';
import { Close } from '@mui/icons-material';
import { Button, Dialog, DialogContent,IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: 2,
        backgroundColor: "#007AD2"
    },
    '& .MuiDialogActions-root': {
        padding: 2,
        backgroundColor: "#007AD2"
    },
}));

const BookDetailsModal = ({ item }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                See Details
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <h1 sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='text-3xl text-center font-bold py-5 text-white bg-primary'>

                </h1>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>
                <DialogContent dividers className='px-12'>
                    <div className='px-12 flex justify-between items-center pt-3'>
                        <h2 className='text-xl font-bold text-white'>Book Name: {item?.name} </h2>
                        <p className='text-lg font-bold text-yellow-300'>Price: {item?.price} </p>
                    </div>
                    <p className='text-lg font-bold px-12 py-3 text-white'>Author: {item?.author} </p>
                    <p className='text-white font-bold opacity-80 px-12 py-2 text-lg'>Book Category: {item?.category} </p>
                    <Typography gutterBottom className='px-12 text-justify font-bold text-md py-5 text-white opacity-75'>
                        {item?.description}
                    </Typography>

                </DialogContent>

                <Button
                 onClick={handleClose}
                >
                    Add to cart
                </Button>

            </BootstrapDialog>
        </div>
    );
};

export default BookDetailsModal;