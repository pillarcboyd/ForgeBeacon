var port = '8080';
var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname));

app.get('/', function(req, res){
      res.sendFile(__dirname + '/index.htm');
});
app.listen(port);
console.log('Serving up %s on http://localhost:%s', __dirname, port);
console.log('Press ctrl + c to cancel.');
