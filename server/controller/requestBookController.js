const catchAsyncError = require("../middleware/catchAsyncError");
const RequestBook = require("../models/bookRequestModel");
const ApiFeatures = require("../utils/ApiFeatures");


// create request 
exports.createRequest = catchAsyncError(async (req, res, next) => {

    const requestBook = await RequestBook.create(req.body);
    res.status(201).json({
        success: true,
        requestBook
    })
});
;
// get all request
exports.getAllRequestBook = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 10;
    const totalBooks = await RequestBook.countDocuments();
    const apiFeature = new ApiFeatures(RequestBook.find(), req.query)
        .search()
        .filter()

    let requestBooks = await apiFeature.query;
    let filteredBooks = requestBooks.length;
    apiFeature.pagination(resultPerPage);
    requestBooks = await apiFeature.query.clone();

    res.status(200).json({
        success: true,
        totalBooks,
        requestBooks,
        filteredBooks,
        resultPerPage
        
    })
})