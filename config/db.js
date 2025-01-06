const mongoose = require('mongoose');
require('dotenv').config();

// const mongoUrl =     process.env.MONGO_URL

mongoose.connect('mongodb+srv://cyberceeddb:cyberceeddbpass1212@cluster0.azh8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connected to mongodb")
    })
    .catch((error) => {
        console.log("Something happened while connecting to mdb")
    })

module.exports = mongoose;