require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connection = require("./db/conn");
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.SECRET_KEY);

// mongoose model
const User = require("./models/userSchema");
const app = express();
app.use(express.json());    // data json ke form me deta h
app.use(cookieParser());
// mongoose  connection
connection();

// routes
app.use('/api',require("./Router/routers"));



app.listen(process.env.PORT || 5000,function(){
    console.log(`server is running on ${process.env.PORT}`);
})