

const express = require("express");
const { createRequest, getAllRequestBook } = require("../controller/requestBookController");

const router = express.Router();
// post new request
router.route("/request/book/").post(createRequest);
// get all request 
router.route("/request/books/").get(getAllRequestBook);




module.exports = router;