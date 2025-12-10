const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;




connectDB().then(() => {
  console.log('Connected to MongoDB');
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});



app.get('/', (req, res) => {
  res.send('Hello, World!');
});


module.exports = app;
