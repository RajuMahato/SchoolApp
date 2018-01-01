console.log("Hi This is the first line of my Node.js app for my school");

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static assets from the public directory
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.get('/getres', function(req, res) {
        console.log("Test get");
        res.send("Test data sent");
         // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = app;


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});

console.log('Hii');