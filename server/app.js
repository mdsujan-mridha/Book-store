const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

// apply middleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// path with config file 
dotenv.config({ path: "./config/config.env" })


module.exports = app;