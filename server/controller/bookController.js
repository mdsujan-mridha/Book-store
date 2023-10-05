const catchAsyncError = require("../middleware/catchAsyncError");
const Book = require("../models/bookModel");

// create book
exports.createBook = catchAsyncError(async (req, res, next) => {

    const book = await Book.create(req.body);

    res.status(201).json({
        success: true,
        book,
    })

})