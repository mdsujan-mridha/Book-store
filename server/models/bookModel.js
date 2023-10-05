

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product name required"]
    },
    description: {
        type: String,
        required: [true, "Enter your product description"]
    },
    Stock: {
        type: Number,
        required: true,
        default: 1,
    },
    category: {
        type: String,
        required: true,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true.
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    reviews: {
        type: String,
        required: true,
    },
});


module.exports = mongoose.model("books", bookSchema);