const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.use(require("./Routes/router.js"))

const PORT = process.env.PORT

// -----------< DATABASE Connection >------------
const DB = process.env.DATABASE;
// mongoose.set("strickQuery", true);
try {
    const connection = mongoose.connect(DB)
    if (connection) {
        console.log("Databse Connection Success");
    }
    else {
        console.log("Database Connection Error");
    }
} catch (error) {
    console.log(`Connectio Error ${error}`);
}

app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
})