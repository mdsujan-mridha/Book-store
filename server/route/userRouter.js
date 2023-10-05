const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    getUserDetails
} = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// register user
router.route("/register").post(registerUser)
// login user 
router.route("/login").post(loginUser);
// logout user 
router.route("/logout").get(logout);
// get logged user 
router.route("/me").get(isAuthenticatedUser, getUserDetails);

module.exports = router;