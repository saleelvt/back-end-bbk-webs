const express = require('express');
const db = require('./config/db');
const blogRouter = require('./routes/blogRoute');

const cors = require('cors');




require('dotenv').config();

const app = express();
app.use(cors({
  origin: '*', // Allow only your frontend              
}));


app.use(express.json());
app.use(express.urlencoded({extended : true}));




app.use('/api',blogRouter);
// app.use('/apiTwo',blogTwoRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 5000;  

app.listen(5000, '0.0.0.0', () => console.log("Server running on port 5000"));


