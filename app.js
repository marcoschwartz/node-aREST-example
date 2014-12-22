// Module
var express = require('express');
var app = express();

// Define port
var port = 3000;

// Rest
var rest = require("arest")(app);

rest.addDevice('http','192.168.1.103');
rest.addDevice('serial','/dev/tty.usbmodem1a12121', 115200);

// Start server
app.listen(port);
console.log("Listening on port " + port);