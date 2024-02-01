

const express = require("express");
const { createRequest, getAllRequestBook, getRequestBookDetails, updateRequestBook, deleteRequestBook, getAllBookRequestAdmin } = require("../controller/requestBookController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
// post new request
router.route("/request/book/").post(createRequest);
// get all request 
router.route("/request/books/").get(getAllRequestBook);
// get product details 
router.route("request/book/:id").get(getRequestBookDetails);
// update or delete a book by admin
router.route("/request/book/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateRequestBook)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteRequestBook);

// get all books admin 
router.route("/admin/request/books").get(isAuthenticatedUser, authorizeRoles("admin"), getAllBookRequestAdmin);



module.exports = router;