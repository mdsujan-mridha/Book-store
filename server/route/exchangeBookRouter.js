
const express = require("express");
const {
    createExchangeBook,
    getAllExchangeBook } = require("../controller/exchangeBookController");

const router = express.Router();

// create request exchange book 
router.route("/exchangebook").post(createExchangeBook);
// get all request  books 
router.route("/exchangebooks").get(getAllExchangeBook);

module.exports = router;