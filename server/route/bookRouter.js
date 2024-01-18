const express = require("express");
const { createBook, getAllBooks } = require("../controller/bookController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/book/sell/").post(isAuthenticatedUser,createBook);

// get all book 
router.route("/books").get(getAllBooks);
 





module.exports = router;