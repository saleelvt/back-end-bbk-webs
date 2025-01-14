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

const PORT = process.env.PORT;  


app.use('/api',blogRouter);
// app.use('/apiTwo',blogTwoRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.listen(PORT, () => {
   console.log("connected succesfully",PORT ,`http://localhost:${PORT}`)
});


