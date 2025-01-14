const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl)
    .then(() => {
        console.log("Successfully connected to mongodb")
    })
    .catch((error) => {
        console.log("Something happened while connecting to mdb")
    })

module.exports = mongoose;