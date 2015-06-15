var port = '8080';
var servedFiles = __dirname + '/public';
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(servedFiles));

app.listen(port);
console.log('Serving up %s on http://localhost:%s', servedFiles, port);
console.log('Press ctrl + c to cancel.');
