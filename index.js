var express = require("express");
var path = require("path");

var port = process.env.PORT || 5000;
var clientPath = path.join(__dirname, "client");

var app = express();
app.use(express.static(clientPath));

app.listen(port, function() {
    console.log ("the server opened. the port: " + port);
});

