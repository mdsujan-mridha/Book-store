const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

    name: {
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

module.exports = mongoose.model("requestBook", requestSchema);