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

const user = require("./route/userRouter")
// user API 
app.use("/api/v1", user)

module.exports = app;