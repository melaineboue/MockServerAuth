// Imports
var express = require('express');
var bodyParser = require('body-parser');

var SERVER_PORT = 8081;

// Server instance
var server = express()



// Lunch server
server.listen(SERVER_PORT, function(){
    console.log('Server listening on port ', SERVER_PORT);
});