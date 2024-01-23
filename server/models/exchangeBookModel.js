const mongoose = require("mongoose");

const exchangeBookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Enter your book name'],
    },
    description: {

        type: String,
        required: [true, 'Enter your book description'],
    },
    author: {
        type: String,
        required: [true, 'Enter your book author'],
    },
    category: {
        type: String,
        required: [true, 'Enter your book category'],
    },
    edition: {
        type: String,
        required: [true, 'Enter your book edition'],
    }

})

module.exports = mongoose.model("exchangeBook",exchangeBookSchema);