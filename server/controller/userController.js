
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");


// create or register user 
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "sample is",
            url: "sample url;"
        }
    });

    sendToken(user, 201, res);

});
// login user 
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    // if user try to login without email and password
    if (!email || !password) {
        return next(new ErrorHandler("Plz Enter valid email and password", 400))
    }
    // find user on database using email and password 
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401))
    }
    // compare password ,DB saved password with user login given password
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendToken(user, 200, res)
});

// logout user
exports.logout = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });

})