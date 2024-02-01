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

// get exchange book details 
exports.getExchangeBookDetails = catchAsyncError(async (req, res, next) => {
    const exchangeBook = await Book.findById(req.params.id);
    if (!exchangeBook) {
        return next(new AppError("No book found with that ID", 404))
    }
    res.status(200).json({
        success: true,
        exchangeBook
    })
});

// update book by admin 
exports.updateExchangeBook = catchAsyncError(async (req, res, next) => {
    const exchangeBook = await Book.findById(req.params.id);
    if (!exchangeBook) {
        return next(new AppError("No book found with that ID", 404))
    }
    exchangeBook = await exchangeBook.findByIdAndUpdate(req.body, {

        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success: true,
        exchangeBook
    })

})

// delete exchange Books
exports.deleteExchangeBook = catchAsyncError(async (req, res, next) => {
    const exchangeBook = await Book.findById(req.params.id);
    if (!exchangeBook) {
        return next(new AppError("No book found with that ID", 404))
    }
    await exchangeBook.remove();
    res.status(204).json({
        success: true,
        message: "Book deleted successfully"
    })
})

// get All exchange book by admin
exports.getAllExchangeBookByAdmin = catchAsyncError(async (req, res, next) => {
    const exchangeBooks = await Book.find();
    res.status(200).json({
        success: true,
        exchangeBooks
    })
})