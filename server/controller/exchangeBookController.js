const catchAsyncError = require("../middleware/catchAsyncError");

const Book = require("../models/exchangeBookModel");
const ApiFeatures = require("../utils/ApiFeatures");

exports.createExchangeBook = catchAsyncError(async (req, res, next) => {
    const book = await Book.create(req.body);

    // is success then send message 
    res.status(201).json({
        success: true,
        book
    })
});


exports.getAllExchangeBook = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 10;
    const totalBooks = await Book.countDocuments();
    const apiFeature = new ApiFeatures(Book.find(), req.query)
        .search()
        .filter()

    let exchangeBooks = await apiFeature.query;
    let filteredBooks = exchangeBooks.length;
    apiFeature.pagination(resultPerPage);
    exchangeBooks = await apiFeature.query.clone();


    // then send a success message 
    res.status(200).json({
        success: true,
        totalBooks,
        exchangeBooks,
        filteredBooks,
        resultPerPage,
    })
});
