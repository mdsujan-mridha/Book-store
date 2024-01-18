const app = require("./app");
const database = require("./config/dbConnection");
const cloudinary = require("cloudinary");

const port = process.env.PORT;


// database connection 
database();



// home api 
app.use("/", async (req, res) => {

    res.send("Your server is working!")

})

// cloudinary config 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`)
})