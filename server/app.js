const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error")
// apply middleware 
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    'Content-Type': 'Authorization',
    "Content-type": "application/json",
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(cookieParser())

// path with config file 
dotenv.config({ path: "./config/config.env" })

const user = require("./route/userRouter")
const book = require("./route/bookRouter")
const bookRequest = require("./route/requestBookRouter");
const exchangeBook = require("./route/exchangeBookRouter");
// user API 
app.use("/api/v1", user);
// sell book router 
app.use("/api/v1", book);

//create book request
app.use("/api/v1", bookRequest);
// exchnage book 
app.use("/api/v1", exchangeBook);



// custom error middleware 
app.use(errorMiddleware);

module.exports = app;