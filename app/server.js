// Import express - this is the server framework we're using
var express = require('express');

// Create a new server
var app = express();

// Create an endpoint on our server that returns some JSON data
app.get('/user', function(req, res) {
    res.status(200).json({
        name: 'Mariusz'
    });
});

// Export the application from this file
module.exports = app;
