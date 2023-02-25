// Importing the Express framework
var express = require('express');

// Creating an Express application instance
var app = express();

// Setting up a route to handle GET requests to the root URL
app.get('/', function (req, res) {
  res.send('hello world');
});

// Setting up the server to listen on port 80
app.listen(process.env.PORT || 80);

// Exporting the app for testing or reuse in other modules
module.exports = app;
