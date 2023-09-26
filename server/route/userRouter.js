const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

// register user
router.route("/register").post(registerUser)
// login user 
router.route("/login").post(loginUser);

module.exports = router;