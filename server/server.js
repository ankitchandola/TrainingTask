// import express (after npm install express)
const express = require('express');
const mongoose = require("mongoose");

// create new express app and save it as "app"
const app = express();
app.use(express.jsom())

mongoose.connect(
    "mongodb+srv://Newuser:mongodbpassword@traininig.dsr21.mongodb.net/trainingDatabase?retryWrites=true&w=majority ",{
    useNewUrlParser: true,
})

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});