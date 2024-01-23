const catchAsyncError = require("../middleware/catchAsyncError");
const Book = require("../models/bookModel");
const ApiFeatures = require("../utils/ApiFeatures");
const cloudinary = require("cloudinary");

// create book
exports.createBook = catchAsyncError(async (req, res, next) => {
    let images = [];
    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }
    const imageLink = [];
    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "books",
        });
        imageLink.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }
    req.body.images = imageLink;
    req.body.user = req.user.id;
   

    const book = await Book.create(req.body);

    res.status(201).json({
        success: true,
        book,
    })

});

// get all books 
exports.getAllBooks = catchAsyncError(async (req, res, next) => {

    const resultPerPage = 9;
    const totalBooks = await Book.countDocuments();
    const apiFeature = new ApiFeatures(Book.find(), req.query)
        .search()
        .filter()

    let sellBooks = await apiFeature.query;
    let filteredBooks = sellBooks.length;
    apiFeature.pagination(resultPerPage);
    sellBooks = await apiFeature.query.clone();

    res.status(200).json({
        success: true,
        totalBooks,
        filteredBooks,
        resultPerPage,
        sellBooks,
    })
}) 